<template>
  <div class="container mx-auto ">
    <div class="card w-138 glass mx-auto mt-6 xs:72 sm:72 md:72 lg:128">
      <!-- <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure> -->
      <div class="card-body">
        <textarea placeholder="Bio" class="textarea textarea-bordered textarea-md w-full textarea-primary" ></textarea>
        <div class="flex space-x-2 ml-2 justify text-xl">
          <i class="ri-image-add-line"></i>
          <i class="ri-emoji-sticker-line"></i>
        </div>

        <div class="card-actions justify-end">
          <button class="btn btn-sm btn-primary">Post </button>
        </div>
      </div>  
    </div>
    <div class="card w-138 glass mx-auto mt-6">
      <div class="card-body">
        <div class="shadow-sm">
          <div class="avatar">
            <div class="w-14 rounded-full">
              <img
                src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <div class="flex space-x-3">
            <h1 class="font-semibold active:font-extralight" src="/">
              Bajigur
            </h1>
            <h1 class="text-sm">18 Jam Yang Lalu</h1>
          </div>

          <h2 class="card-title border-t">Life hack</h2>
          <p>How to park your car at your garage?</p>
          28
          <div class="card-actions justify-end"></div>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="car!"
          />
        </figure>
      </div>
      <div class="border-t border-b">
        <div class="ml-4 flex justify-between text-xl">
          <i
            class="ri-chat-3-line transition-all ease-in-out delay-200 hover:-translate-y-1 hover:scale-110"
          ></i>
          <i
            class="ri-heart-add-line transition-all ease-in-out delay-200 hover:-translate-y-1 hover:scale-110"
          ></i>
          <i
            class="ri-share-line transition-all ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 mr-4"
          ></i>
        </div>
      </div>
      <div class="bg-white p-5">
        <div class="chat chat-start">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="chat-bubble">
            It was said that you would, destroy the Sith, not join them.
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="chat-bubble">
            It was you who would bring balance to the Force
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div class="chat-bubble">Not leave it in Darkness</div>
        </div>
      </div>
    </div>
  </div>
</template>
