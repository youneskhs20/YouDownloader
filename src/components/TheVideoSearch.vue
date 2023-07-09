<template>
  <div>
    <VideoSearchUrlForm 
      v-model="loading" 
      @on-url="handleVideoDownload" 
    />
  </div>
</template>

<script setup>
import axios from "axios";
import VideoSearchUrlForm from "./VideoSearchUrlForm.vue";
import { inject, ref } from "vue";

const downloadResult = inject('downloadResult');
const loading = ref(false);

function handleVideoDownload(url) {
  const serverUrl = `http://localhost:2006/download?url=${encodeURIComponent(
    url
  )}`;

  downloadResult.value = null;

  axios
    .get(serverUrl)
    .then((res) => {
      loading.value = false;
      downloadResult.value = res.data
    })
    .catch((err) => console.log(err));
}
</script>
