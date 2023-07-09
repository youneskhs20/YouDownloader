<template>  
  <div
    v-if="downloadResult"
    class="bg-white flex flex-column"
  >
    <TabView>
      <TabPanel header="Video">
        <DownloadLinksTable :formats="videoFiles" />
      </TabPanel>

      <TabPanel header="Audio">
        <DownloadLinksTable :formats="audioFiles" />
      </TabPanel>

      <TabPanel header="No Sound Video">
        <DownloadLinksTable :formats="videoWithoutAudioFiles" />
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import DownloadLinksTable from './DownloadLinksTable.vue'

const downloadResult = inject('downloadResult');
const { formats } = downloadResult.value;

const videoFiles = computed(() => {
  return formats.filter((i) => i.hasAudio && i.hasVideo)
})

const audioFiles = computed(() => {
  return formats.filter((i) => !i.hasVideo && i.hasAudio)
})

const videoWithoutAudioFiles = computed(() => {
  return formats.filter((i) => i.hasVideo && !i.hasAudio)
})
</script>