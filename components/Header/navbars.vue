<template>
  <div
    class="navbar shadow-md xs:flex sm:flex md:flex lg:flex xl:flex"
  >
    <div class="navbar-start flex">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>

        <ul
          tabindex="0"
          class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 w-full sm:w-full md:w-52 lg:w-52 xl:w-52 xs:mt-0 xs:p-0 sm:mt-0 sm:p-0"
        >
          <i
            class="ri-home-5-line py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/home">Home</NuxtLink></i
          >
          <i
            class="ri-compass-3-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">Explore</NuxtLink></i
          >
          <i
            class="ri-chat-upload-line py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/post">Post</NuxtLink></i
          >
          <i
            class="ri-video-add-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">Reels</NuxtLink></i
          >
        </ul>
      </div>
      <a
        class="btn btn-ghost xs:text-sm sm:text-sm md:text-sm lg :text-g xl:text-lg"
        >StudentBooks</a
      >
    </div>

    <div class="navbar-center">
       

      <div class="xs:inline-flex sm:inline-flex md:hidden lg:hidden xl:hidden dropdown dropdown-bottom dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
              class=""
            />
          </div>
        </label>

        <ul
          tabindex="0"
          class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 w-52"
        >
        <NuxtLink to="/login" class="xs:inline-flex sm:inline-flex md:hidden lg:hidden xl:hidden btn btn-ghost xs:text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg mr-4">Login</NuxtLink>
          <i class="ri-user-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/user/me">User</NuxtLink></i
          >
          <i
            class="ri-history-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">History</NuxtLink></i
          >
          <i
            class="ri-settings-4-line py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">Settings</NuxtLink></i
          >
        </ul>
      </div>
      <vs-select filter placeholder="Filter" @change="selects">
        <vs-option
          :label="item.nama_user"
          :value="item.email"
          v-for="(item, index) in profile"
        >
          {{ item.nama_user }}
        </vs-option>
      </vs-select>

      <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text`-lg">Friend List!</h3>
          <ul class="menu rounded-box">
            <div class="flex-col">
              <div class="  ">
                <h1 class="text-lg font-bold">Woody Kekal</h1>

                <img
                  class="w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <h1 class="text-lg font-bold">Woody Tua</h1>
                <img
                  class="w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
          </ul>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>

    <div class="flex-none gap-2 navbar-end xs:hidden sm:hidden md:inline-flex lg:inline-flex xl:inline-flex">
      <NuxtLink to="/login" class="btn btn-ghost xs:text-sm sm:text-sm md:text-sm lg:text-lg xl:text-lg mr-4">Login</NuxtLink>

      <div class="dropdown dropdown-bottom dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
              class=""
            />
          </div>
        </label>

        <ul
          tabindex="0"
          class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 w-52"
        >
          <i class="ri-user-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/user/me">User</NuxtLink></i
          >
          <i
            class="ri-history-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">History</NuxtLink></i
          >
          <i
            class="ri-settings-4-line py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">Settings</NuxtLink></i
          >
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import { supabase } from "~/config/supabase";
const profile = ref({});
const router = useRouter();

async function init() {
  const { data, error } = await supabase.from("Profiles").select();

  profile.value = data;

  console.log(profile.value);
}

init();

function selects(v) {
  router.push({ path: "/post/" + v });
  console.log(v);
}
</script>

<style scoped>
@media (max-width: 768px) {
  .menu {
    width: 100% !important;
  }
}
</style>
