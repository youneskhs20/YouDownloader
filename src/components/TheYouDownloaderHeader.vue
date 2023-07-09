<template>
  <nav class="w-full h-10rem p-5 flex justify-content-between">
    <div>
      <img 
        src="../assets/logo.png" 
        alt="logo" 
        class="w-20rem" 
      >
    </div>

    <a href="https://github.com/youneskhs20/YouDownloader">
      <Button 
        icon="bi bi-github" 
        severity="secondary" 
        label="GitHub" 
      />
    </a>
  </nav>
</template>

<script setup>
import Button from "primevue/button";
</script>
