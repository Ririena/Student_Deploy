<template>
    <div class="relative flex min-h-screen">
      <!-- SIDE BAR -->
      <div
        v-show="showSidebar"
        class="bg-fuchsia-600 text-purple-100 w-64 space-y-6 px-2 pt-4 xs:hidden sm:hidden md:inline"
      >
        <a href="" class="flex items-center space-x-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
          <span class="text-2xl font-extrabold text-white">StudentBooks</span>
        </a>
        <nav>
          <NuxtLink
            to="/asdasd"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-fuchsia-800 rounded"
          >
            <i class="ri-home-5-line"> </i>
            <span class="text-white text-lg">DashBoard</span>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-fuchsia-800 rounded"
          >
            <i class="ri-user-fill"></i>
            <span class="text-white text-lg">Profiles</span>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-fuchsia-800 rounded"
          >
            <i class="ri-compass-fill"></i>
            <span class="text-white text-lg">Explore</span>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-fuchsia-800 rounded"
          >
            <i class="ri-clapperboard-fill"></i>
            <span class="text-white text-lg">Hello</span>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-fuchsia-800 rounded"
          >
            <i class="ri-chat-new-fill"> </i>
            <span class="text-white text-lg">Post</span>
          </NuxtLink>
          <NuxtLink
            to="/"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-fuchsia-800 rounded"
          >
            <i class="ri-settings-2-line"></i>
            <span class="text-white text-lg"> Settings </span>
          </NuxtLink>
        </nav>
      </div>
      <!-- MAIN CONTENT -->
      <div class="flex-1">
        <!-- Header -->
        <div class="bg-white shadow px-2 py-4 navbar bg-base-100">
            <button>
                <i @click="toggleSidebar" class="ri-menu-2-line focus text-2xl  xs:hidden sm:hidden md:hidden lg:inline xl:inline"></i>
              </button>
              <a class="btn btn-ghost text-xl">STUDENT FILE</a>
        </div>
        <!-- CONTENT-->
        <div class="p-8 text-purple-400 font-extrabold">KONTEN
          
        </div>
      </div>
    </div>
    <div class="btm-nav bg-fuchsia-300 md:hidden lg:hidden xl:hidden">
    <button>
      <i class="ri-home-3-fill"></i>
    </button>
    <button class="">
      <i class="ri-search-line"></i>
    </button>
    <button>
      <i class="ri-chat-upload-line"></i>
    </button>
    <button>
      <i class="ri-movie-line"></i>
    </button>
    <button>
  <div class="avatar">
      <div class="w-12 rounded-full ring ring-fuchsia-600 ring-offset-green-100 ring-offset-2">
          <img src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
      </div>
  </div>
    </button>
  </div>
  </template>
  
  
  
  
  <script>
  import { ref } from "vue";
  export default {
    setup() {
      const showSidebar = ref(true);
  
      const toggleSidebar = () => {
        showSidebar.value = !showSidebar.value;
      };
  
      return {
        showSidebar,
        toggleSidebar,
      };
    },
  };
  </script>
  
  <style></style>
  