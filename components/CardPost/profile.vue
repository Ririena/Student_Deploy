<template>
  <v-app>
    <div>
      <div
        class="mx-auto max-w-screen-full bg-white shadow-xl text-gray-900 mt-9 ml-4 mr-4"
      >
        <div class="h-96 overflow-hidden">
          <!-- Larger cover image -->
          <button class="btn absolute mt-92" onclick="my_modal_2.showModal()">
            Edit Cover
          </button>
          <dialog id="my_modal_2" class="modal">
            <div class="modal-box">
              <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
              <h3 class="font-bold text-lg mb-4">Input Image</h3>
              <input type="file" class="file-input w-full max-w-xs" @change="setCover" />
              <div class="modal-action">
                <form method="dialog" class="">
                  <button class="btn" @click="saveCover">Accept</button>                  
                  <!-- if there is a button in form, it will close the modal -->
                </form>
              </div>
            </div>
          </dialog>
          <img
            class="h-full w-full object-cover object-center"
            :src="coverUrl"
            alt="Cover Belum di Set"
          />
        </div>
        <div
          class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
        >
          <img
            class="object-cover object-center h-32"
            :src="avatarUrl"
            alt="Photo Profile Belum Di Set"
          />
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold">
            {{ profile.nama_user ? profile.nama_user : "Belum Di Edit" }}
          </h2>
          <p class="text-gray-500">{{ profile.email }}</p>
        </div>
        <div
          class="flex flex-wrap justify-center sm:justify-start sm:space-x-6 font-serif shadow-md p-3 xs:gap-6"
        >
          <button class="btn" onclick="my_modal_1.showModal()">Edit</button>
          <dialog id="my_modal_1" class="modal my-2">
            <div class="modal-box">
              <form method="dialog">
                <button
                  class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>
              <div class="text-lg font-bold mb-6">Edit Profiles</div>
              <h3 class="font-bold text-lg mb-2">Photo Profiles</h3>
              <input
                type="file"
                class="file-input w-full max-w-xs mb-2"
                @change="setGambar"
                capture
              />
              <h3 class="font-bold text-lg mb-2 mt-4">Nama User</h3>
              <input
                type="text"
                v-model="ProfileNama"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <h3 class="font-bold text-lg mb-2 mt-4">Pilih User</h3>
              <div class="dropdown ">
                <div class="form-control w-full max-w-xs">
                  <select
                    class="select select-bordered select-lg select-info"
                    v-model="ProfileJenis"
                  >
                    <option value="Kepala Sekolah">Kepala Sekolah</option>
                    <option value="Guru/Staff">Guru/Staff</option>
                    <option value="Siswa">Siswa</option>
                  </select>
                </div>
                <h3 class="font-bold text-lg mb-2 mt-4 sm:text-xl md:text-2xl lg:text-3xl">Edit Cover</h3>
                <input
                type="file"
                class="file-input w-full max-w-xs mb-2"
                @change="setCover"
                capture
              />
              </div>
              <p class="py-4">
                Press ESC key or click the button below to close
              </p>
              <div class="modal-action items-s">
                <form method="dialog">
                  <button class="btn" @click="saveProfile">Confirm</button>
                  <!-- if there is a button in form, it will close the modal -->
                </form>
              </div>
            </div>
          </dialog>
          <h1 class="my-2 flex-initial">Timeline</h1>
          <h1 class="my-2">About</h1>
          <vs-button @click="tambahCounter" color="danger" icon class="mb-4">
            Likes{{ counter }}
            <i class="bx bx-heart" />
          </vs-button>
          <h1 class="my-2">Lainnya</h1>
        </div>
        <div class="p-4 mx-8 mt-2">
          <button
            class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
          >
            Follow
          </button>
        </div>
        <div
          class="grid gap-2 font-serif shadow-md p-3 xs:gap-6 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          <img
            src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class=""
          />

          <img
            src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class=""
          />
          <img
            src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class=""
          />
          <img
            src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class=""
          />
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

<script setup lang="ts">
import { supabase } from "~/config/supabase";
import { v4 as uuidv4 } from "uuid";
const route = useRoute();
const loggedIn = ref({});
const profile = ref({});
const coverUrl = computed(() => {
  const { data } = supabase.storage.from("cover").getPublicUrl("public/" + profile.value.cover);
  return data.publicUrl
})
const avatarUrl = computed(() => {
  const { data } = supabase.storage
    .from("gambar")
    .getPublicUrl("public/" + profile.value.avatar);
  return data.publicUrl;
});

const ProfileGambar = ref(null);
const ProfileCover = ref(null);
const ProfileNama = ref("");
const ProfileJenis = ref("");

async function init() {
  if (route.params.email === "me") {
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

      console.log(profile, loggedIn, "qProfile");
    }
  }
}

function setGambar($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    ProfileGambar.value = target.files[0];
  }
}

function setCover($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    ProfileCover.value = target.files[0]
  }
}

async function saveCover() {
  var filenamess;

if (ProfileCover.value) {
  const coverFile = ProfileCover.value;
  console.log(coverFile, "coverFile");
  filenamess = `${uuidv4()}-${coverFile.name}`;
  const { data, error } = await supabase.storage.from("cover").upload("public/" + filenamess, coverFile, {
    cacheControl: "3600",
    upsert: false,
  })
}   if (profile.value.id) {
    const { error } = await supabase
      .from("Profiles")
      .update({
        cover: filenamess
      })
      .eq("email", profile.value.email);
  } else {
    const { error } = await supabase.from("Profiles").insert({
      cover: filenamess,
    });
  }

window.location.reload(true);
  init()
}

async function saveProfile() {
  var filename;
  var filenames;

  if (ProfileCover.value) {
    const coverFile = ProfileCover.value;
    console.log(coverFile, "coverFile");
    filenames = `${uuidv4()}-${coverFile.name}`;
    const { data, error } = await supabase.storage.from("cover").upload("public/" + filenames, coverFile, {
      cacheControl: "3600",
      upsert: false,
    })
  }
  if (ProfileGambar.value) {
    const avatarFile = ProfileGambar.value;
    console.log(avatarFile, "avatarFile");
    filename = `${uuidv4()}-${avatarFile.name}`;
    const { data, error } = await supabase.storage

      .from("gambar")
      .upload("public/" + filename, avatarFile, {
        cacheControl: "3600",
        upsert: false,
      });
  }

  if (profile.value.id) {
    const { error } = await supabase
      .from("Profiles")
      .update({
        cover: filenames,
        avatar: filename,
        nama_user: ProfileNama.value,
        jenis_user: ProfileJenis.value,
        email: profile.value.email,
      })
      .eq("email", profile.value.email);
  } else {
    const { error } = await supabase.from("Profiles").insert({
      cover: filenames,
      avatar: filename,
      nama_user: ProfileNama.value,
      jenis_user: ProfileJenis.value,
      email: profile.value.email,
    });
  }


window.location.reload(true);
  init()
}

init();
</script>
