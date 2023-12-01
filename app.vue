<template>
  <VitePwaManifest/>
  <div>
    <NuxtLayout />
    <NuxtPage />


  </div>
</template>

<script setup>
import { supabase } from "./config/supabase";

async function init() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if(!user) navigateTo('/login') else(); 
}

init();
</script>