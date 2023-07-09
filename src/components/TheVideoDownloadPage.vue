<template>
  <div>
    <TheYouDownloaderHeader />

    <TheHomeMainContent />

    <div class="w-60rem mx-auto mt-5">
      <TheVideoSearch />
        
      <TheDownloadResult v-if="downloadResult" />
    </div>
  </div>
</template>

<script setup>
import TheVideoSearch from "./TheVideoSearch.vue";
import TheYouDownloaderHeader from "./TheYouDownloaderHeader.vue";
import TheHomeMainContent from "./TheHomeMainContent.vue";
import TheDownloadResult from "./TheDownloadResult.Vue";
import { provide, ref } from "vue";

let downloadResult = ref(null);
provide("downloadResult", downloadResult);
</script>