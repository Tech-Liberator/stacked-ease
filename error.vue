<template>
  <NuxtLayout>
    <div class="w-full min-h-screen flex flex-col">
      <top-bar />
      <div class="w-full flex-grow h-full flex">
        <category-bar />
        <div
          class="flex-grow w-full h-full overflow-hidden flex justify-center items-center"
        >
          <div
            class="max-w-[80rem] flex flex-col mx-auto w-full h-full justify-center items-center"
          >
            <div class="flex flex-col justify-center items-center gap-4 py-10 px-4 sm:px-6 lg:px-8">
              <h1
                class="text-5xl font-bold text-gray-800 sm:text-9xl dark:text-white"
              >
                {{ error.statusCode }}
              </h1>
              <h1
                class="text-2xl font-bold text-gray-800 sm:text-9xl dark:text-white"
              >
                {{ error.message }}
              </h1>
              <p class="mt-3 text-gray-600 dark:text-gray-400">
                Oops, something went wrong.
              </p>
              <div
                class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
              >
                <NuxtLink
                  class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  to="/"
                >
                  <svg
                    class="flex-shrink-0 w-4 h-4"
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to examples
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup>
const error = useError();
</script>
