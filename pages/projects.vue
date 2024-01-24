<template>
  <div class="w-full h-screen flex -mt-16 pt-16 -mb-10 pb-10">
    <div
      class="w-1/5 overflow-y-auto h-full border-r-2 border-gray-200 dark:border-gray-700 px-2 pb-2 pt-1 flex flex-col gap-3"
    >
      <button
        type="button"
        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <project-accordian />
    </div>
    <div class="w-4/5 overflow-y-auto h-full">
      <OpenAPITabs />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
