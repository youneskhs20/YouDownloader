<template>
  <div v-if="downloadResult">
    <div class="w-30rem mx-auto">
      <img 
        class="w-full border-round-xl" 
        :src="downloadResult.img"
      >
    </div>

    <div class="w-30rem mt-2 mx-auto text-center">
      <div class="text-xl">
        {{ downloadResult.title }}
      </div>

      <div class="text-lg mt-3 text-primary">
        <span class="font-bold">
          Duration:
        </span> 

        <span>
          {{ time }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue';

const downloadResult = inject('downloadResult');

const time = computed(() => {
  const duration = downloadResult.value.duration;
  const time = new Date(duration * 1000).toISOString().slice(11, 19);
  return time;
})
</script> 