<template>
  <div
    class="hero-section bg-gradient-to-r from-blue-500 to-purple-500 text-white"
  >
    <div class="container mx-auto p-8 text-center">
        <i class="ri-git-repository-fill text-8xl"></i>
      <h1 class="text-4xl font-bold mb-4">Selamat Datang di StudentBooks</h1>
      <p class="text-lg mb-8">
        Temukan pustaka pengetahuanmu untuk menerjang masa depan
      </p>
      <vs-button to="/signup" color="warning" size="lg" class="mx-auto">
        <NuxtLink to="/signup"> Telusuri Pustaka </NuxtLink>
      </vs-button>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  /* Sesuaikan tinggi hero section dengan kebutuhan */
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
