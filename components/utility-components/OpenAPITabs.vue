<template>
  <nav
    class="relative z-0 flex overflow-hidden dark:border-gray-700"
    aria-label="Tabs"
    role="tablist"
  >
    <button
      type="button"
      class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-40 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400 active"
      id="bar-with-underline-item-1"
      data-hs-tab="#bar-with-underline-1"
      aria-controls="bar-with-underline-1"
      role="tab"
    >
      Tab 1
    </button>
    <button
      type="button"
      class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-40 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
      id="bar-with-underline-item-2"
      data-hs-tab="#bar-with-underline-2"
      aria-controls="bar-with-underline-2"
      role="tab"
    >
      Tab 2
    </button>
    <button
      type="button"
      class="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-40 flex-1 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
      id="bar-with-underline-item-3"
      data-hs-tab="#bar-with-underline-3"
      aria-controls="bar-with-underline-3"
      role="tab"
    >
      Tab 3
    </button>
    <div
      class="w-full flex-grow hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 bg-white first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-400"
    ></div>
  </nav>

  <div class="mt-3">
    <div
      id="bar-with-underline-1"
      role="tabpanel"
      aria-labelledby="bar-with-underline-item-1"
    >
      <p class="text-gray-500 dark:text-gray-400">
        This is the
        <em class="font-semibold text-gray-800 dark:text-gray-200">first</em>
        item's tab body.
      </p>
    </div>
    <div
      id="bar-with-underline-2"
      class="hidden"
      role="tabpanel"
      aria-labelledby="bar-with-underline-item-2"
    >
      <p class="text-gray-500 dark:text-gray-400">
        This is the
        <em class="font-semibold text-gray-800 dark:text-gray-200">second</em>
        item's tab body.
      </p>
    </div>
    <div
      id="bar-with-underline-3"
      class="hidden"
      role="tabpanel"
      aria-labelledby="bar-with-underline-item-3"
    >
      <p class="text-gray-500 dark:text-gray-400">
        This is the
        <em class="font-semibold text-gray-800 dark:text-gray-200">third</em>
        item's tab body.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
