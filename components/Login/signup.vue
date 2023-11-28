<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- <img class="mx-auto h-10 w-auto" src="" alt="Logo Books" /> -->
      <h2
        class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Sign up to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <vs-input v-model="email" style="width: 100%" label="email">
          <template #icon>
            <i class="bx bx-user" />
          </template>
        </vs-input>

        <vs-input
          type="password"
          v-model="password"
          style="width: 100%"
          label="Password"
        >
          <template #icon>
            <i class="bx bx-key" />
          </template>
        </vs-input>

        <vs-input
          type="password"
          v-model="password2"
          style="width: 100%"
          label="Retype Password"
        >
          <template #icon>
            <i class="bx bx-key" />
          </template>
        </vs-input>

        <div>
          <vs-button @click="submit" class="w-full">Sign in</vs-button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <a
          href="#"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { VsNotification } from "vuesax-alpha";
import { supabase } from "~/config/supabase";
const email = ref("");
const password = ref("");
const password2 = ref("");

async function submit($event) {
  $event.preventDefault();
  if (password.value !== password2.value) {
    VsNotification({
      color: "danger",
      title: "Gagal",
      text: "Password tidak sama",
      position: "bottom-center",
    });
    return false;
  }

  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  VsNotification({
    color: "success",
    title: "Berhasil",
    text: "Akun telah dibuat, silahkan login",
    position: "bottom-center",
  });

  await navigateTo("/login");
}
</script>
