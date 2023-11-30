i
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
          <dialog id="my_modal_4" class="modal">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Beri Postingan Ini Komen</h3>
              <textarea
                placeholder="....."
                class="textarea textarea-bordered textarea-md w-full textarea-primary"
                v-model="PostKomen"
              ></textarea>
              <div class="modal-action">
                <form method="dialog">
                  <!-- if there is a button in form, it will close the modal -->
                  <button class="btn" @click="submitKomentar">Gas Kirim</button>
                </form>
              </div>
            </div>
          </dialog>
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
            <img v-bind:src="
                'https://tyowyyypegepdwmdaqxc.supabase.co/storage/v1/object/public/gambar/public/' +
                item.Profiles.avatar
              " />
          </div>
        </div>
        <div class="flex space-x-3">
          <h1 class="font-semibold active:font-extralight" src="/">
            {{ item.Profiles.email }}
          </h1>
          <h1 class="text-sm">18 Jam Yang Lalu</h1>
        </div>

        <h2 class="card-title border-t">{{ item.title }}</h2>
        <p>{{ item.konten }}</p>

        <div class="card-actions justify-end"></div>
      </div>
      <figure>
        <img :src="item.gambar_konten" alt="Post Konten Not Found" />
      </figure>
    </div>

    <div class="border-t border-b">
      <div class="ml-4 flex justify-between text-xl">
        <!-- Dalam template Anda -->
        <i
          class="btn ri-chat-3-line transition-all ease-in-out delay-200 hover:-translate-y-1 hover:scale-110"
          @click="($event) => buatKomen(item)"
          onclick="my_modal_4.showModal()"
        ></i>

        <i
          class="ri-heart-add-line transition-all ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 btn"
        ></i>
        <i
          class="ri-share-line transition-all ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 mr-4 btn"
        ></i>
      </div>
    </div>
    <div class="bg-white p-5">
      <div class="chat chat-start" v-for="(d, s) in item.Comments">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Photo Profile"
              v-bind:src="
                'https://tyowyyypegepdwmdaqxc.supabase.co/storage/v1/object/public/gambar/public/' +
                d.Profiles.avatar
              "
            />
          </div>
        </div>
        <div class="chat-bubble">
          <h1>
            {{ d.konten }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VsNotification } from "vuesax-alpha";
import { supabase } from "~/config/supabase";
import { v4 as uuidv4 } from "uuid";
const profile = ref({});
const loggedIn = ref({});

const profileCurrent = ref({});
const userCurrent = ref({});

const route = useRoute();
const userPost = ref({});
const tanggalPost = ref({});
const PostData = ref([]);

const PostKonten = ref("");
const PostTitle = ref("");
const PostGambar = ref(null);
const PostKomen = ref("");
const dialogId = ref(null);
const dialogContent = ref("");

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
    email: userCurrent.value.email,
    UserId: profile.value.id
  });

  VsNotification({
    title: "Post Berhasil",
    text: "Berhasil ditambahkan ke Konten yang anda buat",
  });

  init();
}

async function buatKomen(post) {
  console.log(post.id);
  dialogId.value = post.id;
}
init();

async function submitKomentar() {
  const res = await supabase.from("Comments").insert({
    konten: PostKomen.value,
    PostId: dialogId.value,
    email: loggedIn.value,
    UserId: profile.value.id,
  });
  init();
}

async function init() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  loggedIn.value = user ? user : {};

  if (user) {
    const qProfile = await supabase
      .from("Profiles")
      .select()
      .eq("email", user.email);

    if (qProfile.data) {
      profile.value = qProfile.data[0]
        ? qProfile.data[0]
        : {
            email: user.email,
          };
    }
  }

  if (route.params.email) {
    userCurrent.value = { email: route.params.email };

    const qProfile = await supabase
      .from("Profiles")
      .select()
      .eq("email", user.email);

    if (qProfile.data) {
      profileCurrent.value = qProfile.data[0]
        ? qProfile.data[0]
        : {
            email: route.params.email,
          };
    }
  } else {
    userCurrent.value = loggedIn.value;
    profileCurrent.value = profile.value;
  }

  const { data, error } = await supabase
    .from("Posts")
    .select("*, Profiles(*), Comments(*, Profiles(*))")
    .eq("email", userCurrent.value.email);

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
