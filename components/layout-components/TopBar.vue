<template>
  <div
    class="h-16 w-full flex justify-between space-x-5 bg-white border-b-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="w-auto flex items-center justify-center">
      <NuxtLink to="/" class="text-blue-500 text-xl flex gap-2 items-center uppercase font-semibold px-3">
        <img class="w-10 h-10" src="../../images/Logo.png" alt="" />
        Stacked Ease
      </NuxtLink>
    </div>
    <div class="flex space-x-5">
      <input
        type="text"
        class="my-3 py-3 px-4 block w-72 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
        placeholder="Search APIs..."
      />

      <div
        class="flex items-center gap-x-2 sm:border-s sm:border-gray-200 dark:sm:border-gray-700 sm:my-3 sm:px-6"
      >
        <button
          type="button"
          class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          data-hs-theme-click-value="dark"
        >
          <svg
            class="flex-shrink-0 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </button>
        <button
          type="button"
          class="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
          data-hs-theme-click-value="light"
        >
          <svg
            class="flex-shrink-0 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 8a2 2 0 1 0 4 4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface HSThemeChangeEvent extends Event {
  detail: string;
}

interface HSThemeClickableElement extends HTMLElement {
  getAttribute(name: "data-hs-theme-click-value"): string | null;
}

interface HSThemeSwitchableElement extends HTMLInputElement {
  checked: boolean;
}

const HSThemeAppearance = {
  init() {
    const defaultTheme = "default";
    let theme = localStorage.getItem("hs_theme") || defaultTheme;

    if (document.querySelector("html")!.classList.contains("dark")) return;
    this.setAppearance(theme);
  },
  _resetStylesOnLoad() {
    const $resetStyles = document.createElement("style");
    $resetStyles.innerText = `*{transition: unset !important;}`;
    $resetStyles.setAttribute("data-hs-appearance-onload-styles", "");
    document.head.appendChild($resetStyles);
    return $resetStyles;
  },
  setAppearance(theme: string, saveInStore = true, dispatchEvent = true) {
    const $resetStylesEl = this._resetStylesOnLoad();

    if (saveInStore) {
      localStorage.setItem("hs_theme", theme);
    }

    if (theme === "auto") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "default";
    }

    document.querySelector("html")!.classList.remove("dark");
    document.querySelector("html")!.classList.remove("default");
    document.querySelector("html")!.classList.remove("auto");

    document.querySelector("html")!.classList.add(this.getOriginalAppearance());

    setTimeout(() => {
      $resetStylesEl.remove();
    });

    if (dispatchEvent) {
      window.dispatchEvent(
        new CustomEvent<HSThemeChangeEvent>("on-hs-appearance-change", {
          detail: theme,
        })
      );
    }
  },
  getAppearance() {
    let theme = this.getOriginalAppearance();
    if (theme === "auto") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "default";
    }
    return theme;
  },
  getOriginalAppearance() {
    const defaultTheme = "default";
    return localStorage.getItem("hs_theme") || defaultTheme;
  },
};

onMounted(() => {
  HSThemeAppearance.init();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (HSThemeAppearance.getOriginalAppearance() === "auto") {
        HSThemeAppearance.setAppearance("auto", false);
      }
    });

  window.addEventListener("load", () => {
    const $clickableThemes = document.querySelectorAll<HSThemeClickableElement>(
      "[data-hs-theme-click-value]"
    );
    const $switchableThemes =
      document.querySelectorAll<HSThemeSwitchableElement>(
        "[data-hs-theme-switch]"
      );

    $clickableThemes.forEach(($item) => {
      $item.addEventListener("click", () =>
        HSThemeAppearance.setAppearance(
          $item.getAttribute("data-hs-theme-click-value")!,
          true,
          $item
        )
      );
    });

    $switchableThemes.forEach(($item) => {
      $item.addEventListener("change", (e) => {
        HSThemeAppearance.setAppearance(e.target.checked ? "dark" : "default");
      });

      $item.checked = HSThemeAppearance.getAppearance() === "dark";
    });

    window.addEventListener("on-hs-appearance-change", (e) => {
      $switchableThemes.forEach(($item) => {
        $item.checked = e.detail === "dark";
      });
    });
  });
});
</script>

<style scoped></style>
