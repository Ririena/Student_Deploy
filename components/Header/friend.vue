<template>
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
                 <h1 class="text-lg font-bold mb-16">Asep</h1>
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
</template>