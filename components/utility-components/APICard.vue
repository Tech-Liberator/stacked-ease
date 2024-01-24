<template>
  <button
    type="button"
    class="flex gap-3 text-sm bg-white hover:bg-gray-100 border border-gray-200 shadow-sm rounded-xl p-2 dark:bg-slate-900 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
  >
    <span
      :class="{
        'text-green-500': api.method === 'GET',
        'text-blue-500': api.method === 'POST',
        'text-yellow-500': api.method === 'PUT',
        'text-orange-500': api.method === 'PATCH',
        'text-red-500': api.method === 'DELETE',
        'text-purple-500': api.method === 'HEAD',
        'text-indigo-500': api.method === 'OPTIONS',
      }"
      class="font-semibold"
    >
      {{ api.method }}
    </span>
    {{ api.name }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps(["api"]);
</script>

<style scoped></style>
