<template>
  <div class="container mx-auto">
    <div class="card w-138 glass mx-auto mt-6 xs:72 sm:72 md:72 lg:128">
      <!-- <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure> -->
      <div class="card-body">
        <textarea
          placeholder="Judul Post"
          class="textarea textarea-bordered textarea-md w-full textarea-primary"
          v-model="PostTitle"
        ></textarea>
        <textarea
          placeholder="Konten"
          class="textarea textarea-bordered textarea-md w-full textarea-primary"
          v-model="PostKonten"
        ></textarea>
        <div class="flex space-x-2 ml-2 justify text-xl">
          <i class="ri-image-add-line btn" onclick="my_modal_1.showModal()">
            <dialog id="my_modal_1" class="modal">
              <div class="modal-box">
                <h3 class="text-bold text-xl">Add Image</h3>
                <input
                  type="file"
                  class="file-input file-input-bordered w-full max-w-xs"
                  @change="addGambar"
                />
                <div class="modal-action">
                  <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Add</button>
                  </form>
                </div>
              </div>
            </dialog>
          </i>
          <i class="ri-emoji-sticker-line btn"></i>
        </div>
        <div class="card-actions justify-end"></div>
        <vs-button
          class="btn btn-sm btn-primary"
          @click="submit('bottom-center')"
          >Post</vs-button
        >
      </div>
    </div>
  </div>
  <div v-for="(item, index) in PostData" class="card w-138 glass mx-auto mt-6">
    <div class="card-body">
      <div class="shadow-sm">
        <div class="avatar">
          <div class="w-14 rounded-full">
            <img src="" />
          </div>
        </div>
        <div class="flex space-x-3">
          <h1 class="font-semibold active:font-extralight" src="/">
            {{ loggedIn.email }}
          </h1>
          <h1 class="text-sm">18 Jam Yang Lalu</h1>
        </div>

        <h2 class="card-title border-t">{{ item.title }}</h2>
        <p>{{ item.konten }}</p>
        
        <div class="card-actions justify-end"></div>

        <button @click="($event) => buatKomen(item)">asdad</button>
      </div>
      <figure>
        <img :src="item.gambar_konten" alt="car!" />
      </figure>
    </div>

    <div class="border-t border-b">
      
      <div class="ml-4 flex justify-between text-xl">
        <i
          class="btn ri-chat-3-line transition-all ease-in-out delay-200 hover:-translate-y-1 hover:scale-110" onclick="my_modal_2.showModal()"
        >
        <dialog id="my_modal_2" class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </i>
 
      <template>
              <vs-button @click="active = !active">Komen</vs-button>
      <vs-dialog v-model="active">
        <template #header>
        <h4 class="not-margin">Welcome to <b>Vuesax</b></h4>
      </template>
      </vs-dialog>
    </template>
        
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
</template>

<script setup>
import { VsNotification } from "vuesax-alpha";
import { supabase } from "~/config/supabase";
import { v4 as uuidv4 } from "uuid";

const route = useRoute();
const userPost = ref({});
const tanggalPost = ref({});
const PostData = ref([]);

const loggedIn = ref({});
const PostKonten = ref("");
const PostTitle = ref("");
const PostGambar = ref(null);

function addGambar($event) {
  const target = $event.target;
  if (target && target.files) {
    PostGambar.value = target.files[0];
    console.log(PostGambar);
  }
}

async function submit() {
  var filenamess = `${uuidv4()}-${PostGambar.value.name}`;
  const { data, error } = await supabase.storage
    .from("cover")
    .upload("public/" + filenamess, PostGambar.value, {
      cacheControl: "3600",
      upsert: false,
    });

  const res = await supabase.from("Posts").insert({
    konten: PostKonten.value,
    title: PostTitle.value,
    gambar_konten: filenamess,
    email: loggedIn.value.email,
  });

  VsNotification({
    title: "Post Berhasil",
    text: "Berhasil ditambahkan ke Konten yang anda buat",
  });

  init();
}

async function buatKomen(post) {
  console.log(post.id);
}

async function init() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  loggedIn.value = user ? user : {};

  const { data, error } = await supabase
    .from("Posts")
    .select()
    .eq("email", loggedIn.value.email);
  PostData.value = data.map((d) => ({
    ...d,
    gambar_konten: supabase.storage
      .from("cover")
      .getPublicUrl("public/" + d.gambar_konten).data.publicUrl,
  }));
  console.log(PostData.value);
}

init();
</script>
