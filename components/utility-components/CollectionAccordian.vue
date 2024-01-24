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
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="hs-accordion-active:hidden block w-4 h-4"
          >
            <path
              d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="hs-accordion-active:block hidden w-4 h-4"
          >
            <path
              d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z"
            />
          </svg>
          Collection #1
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
                  Add API
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
          <div class="w-full h-full flex flex-col gap-3">
            <APICard v-for="api in apiList" :key="api.name" :api="api" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const apiList = [
  { method: "GET", name: "Get Users" },
  { method: "POST", name: "Create User" },
  { method: "PUT", name: "Update User" },
  { method: "PATCH", name: "Patch User" },
  { method: "DELETE", name: "Delete User" },
  { method: "HEAD", name: "Head Request" },
  { method: "OPTIONS", name: "Options Request" },
];
</script>

<style scoped></style>
