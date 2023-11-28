<script lang="ts" setup>
const props = defineProps({
  gambar: {
    type: Object,
    default:{},
  }
})
</script>
<template>
<v-app>
<div>

  <div class="mx-auto max-w-screen-full bg-white shadow-xl text-gray-900 mt-9 ml-4 mr-4">
    <div class="h-96 overflow-hidden">
      <!-- Larger cover image -->
      <img
        class="h-full w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Mountain"
      />
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
      <img
        class="object-cover object-center h-32"
        src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Woman looking front"
      />
    </div>
    <div class="text-center mt-2">
      <h2 class="font-semibold">Bajiguri</h2>
      <p class="text-gray-500">Si Tukang Turu</p>
    </div>
    <div class="flex flex-wrap justify-center sm:justify-start sm:space-x-6 font-serif shadow-md p-3 xs:gap-6">
      <h1 class="my-2">Edit</h1>
      <h1 class="my-2">Timeline</h1>
      <h1 class="my-2">About</h1>
      <h1 class="my-2">Likes<span>(4)</span>
      </h1>
      <h1 class="my-2">Lainnya</h1>
    </div>
    <div class="p-4 mx-8 mt-2">
      <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div>
    <div class="grid  gap-2 font-serif shadow-md p-3 xs:gap-6 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      <img :src="props.gambar.image">
      
      <!-- Add more options as needed -->
    </div>
    
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
      <!-- ... -->
    </ul>
    <!-- Comments section below the card -->
    <div class="comments mt-4">
      <!-- Add more comments as needed -->
    </div>
  </div>

</div>
</v-app>
</template>

