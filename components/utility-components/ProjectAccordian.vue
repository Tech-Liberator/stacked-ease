<template>
  <div class="hs-accordion-group">
    <div
      class="hs-accordion bg-white -mt-px dark:bg-gray-800"
      id="hs-bordered-heading-one"
    >
      <button
        class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center w-full font-semibold text-start text-gray-800 py-2 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
        aria-controls="hs-basic-bordered-collapse-one"
      >
        <div class="inline-flex items-center gap-x-3">
          <svg
            class="hs-accordion-active:hidden block w-4 h-4"
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          <svg
            class="hs-accordion-active:block hidden w-4 h-4"
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
            <path d="M5 12h14" />
          </svg>
          Project #1
        </div>
        <div
          class="hs-tooltip inline-block [--trigger:hover] sm:[--placement:right]"
        >
          <div
            class="hs-tooltip-toggle max-w-xs flex items-center gap-x-3 text-gray-600 dark:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <div
              class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity inline-block absolute invisible z-40 max-w-xs w-full bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-gray-800 dark:border-gray-700"
              role="tooltip"
            >
              <div class="w-full flex flex-col rounded-lg shadow-sm">
                <button
                  type="button"
                  class="py-3 px-4 inline-flex items-center gap-x-2 rounded-t-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="-mt-px py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Duplicate
                </button>
                <button
                  type="button"
                  class="-mt-px py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Add Collection
                </button>
                <button
                  type="button"
                  class="-mt-px py-3 px-4 inline-flex items-center gap-x-2 rounded-b-md text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </button>
      <div
        id="hs-basic-bordered-collapse-one"
        class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-bordered-heading-one"
      >
        <div class="pl-4">
          <CollectionAccordian />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
