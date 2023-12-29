<template>
  <NuxtLayout>
    <div class="w-full min-h-screen flex flex-col">
      <top-bar />
      <div class="w-full flex-grow h-full flex">
        <category-bar />
        <div class="flex-grow w-full h-full overflow-hidden">
          <NuxtPage />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup lang="ts"></script>
