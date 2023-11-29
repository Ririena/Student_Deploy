<template>
  <div
    class="navbar shadow-md xs:inline-flex sm:inline-flex md:inline-flex lg:inline-flex xl:inline-flex"
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
            ><NuxtLink class="flex-1 px-2" to="/">Home</NuxtLink></i
          >
          <i
            class="ri-compass-3-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">Explore</NuxtLink></i
          >
          <i
            class="ri-chat-upload-line py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">Post</NuxtLink></i
          >
          <i
            class="ri-video-add-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/">Reels</NuxtLink></i
          >
          <i
            class="ri-group-line py-1 hover:bg-slate-300 text-xl font-semibold"
            onclick="my_modal_2.showModal()"
            ><NuxtLink class="flex-1 px-2">Friends</NuxtLink></i
          >
          <dialog id="my_modal_2" class="modal">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Friend List!</h3>
              <ul class="menu rounded-box">
                <div class="flex-col">

                  <div class="  ">
                    <h1 class="text-lg font-bold">Agus</h1>

                    <img class="w-10 rounded-full" src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                 <h1 class="text-lg font-bold">Asep</h1>
            <img class="w-10 rounded-full" src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

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
        </ul>
      </div>
      <a class="btn btn-ghost text-xl">StudentBooks</a>
    </div>

    <div class="navbar-center md:hidden rounded-lg">
      <input type="text" placeholder="Type here" class="input max-w-xs" />
    </div>

    <div class="flex-none gap-2 navbar-end">
      <div class="dropdown dropdown-bottom dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="xs:hidden sm:hidden md:inline-flex lg:inline-flex xl:inline-flex"
            />
          </div>
        </label>

        <ul
          tabindex="0"
          class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 w-52"
        >
          <i class="ri-user-fill py-1 hover:bg-slate-300 text-xl font-semibold"
            ><NuxtLink class="flex-1 px-2" to="/user">User</NuxtLink></i
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
      <label class="swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="wireframe" />

        <!-- sun icon -->
        <svg
          class="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
          />
        </svg>

        <!-- moon icon -->
        <svg
          class="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
          />
        </svg>
      </label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (max-width: 768px) {
  .menu {
    width: 100% !important;
  }

  .navbar-center {
    display: none;
  }
}
</style>
