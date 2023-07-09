<template>
  <div class="result mt-4 p-4 bg-white border-round-2xl">
    <DownloadResultVideoDetails />
    <DownloadLinks />
  </div>
</template>

<script setup>
import DownloadLinks from "./DownloadLinks.vue";
import DownloadResultVideoDetails from "./DownloadResultVideoDetails.vue";
</script>

<style scoped>
.result {
  animation: scale-up 500ms;
}

@keyframes scale-up {
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1);
  }
}
</style>
