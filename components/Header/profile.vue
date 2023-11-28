<script lang="ts" setup>
const props = defineProps({
  gambar: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div>
    <div class="mx-auto max-w-screen-full bg-white shadow-xl text-gray-900 mt-9 ml-4 mr-4">
      <div class="h-96 overflow-hidden">
        <!-- Larger cover image -->
        <img class="h-full w-full object-cover object-center" :src="gambar.coverImage" alt="Mountain" />
      </div>
      <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" :src="gambar.profileImage" alt="Woman looking front" />
      </div>
      <div class="text-center mt-2">
        <h2 class="font-semibold">{{ gambar.name }}</h2>
        <p class="text-gray-500">{{ gambar.description }}</p>
      </div>
      <!-- Rest of your code remains unchanged -->
    </div>
  </div>
</template>
