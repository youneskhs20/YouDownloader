<template>
  <div
    class="FormContainer w-full bg-white px-4 pt-5 border-round-2xl relative"
    :class="{ 'py-5': !modelValue }"
  >
    <div class="block p-input-icon-right h-6rem">
      <Button
        style="margin: 1.125rem"
        size="large"
        class="absolute top-0 right-0"
        @click="emitUrl(url)"
      >
        Download
      </Button>

      <InputText
        v-model="url"
        type="text"
        placeholder="Paste link here!"
        class="w-full h-full pl-5 border-none text-xl border-round-xl bg-indigo-50"
        @click="$event.target.select()"
        @paste="emitUrl($event.clipboardData.getData('text'))"
        @keyup.enter="emitUrl(url)"
      />
    </div>

    <div
      v-show="error"
      :key="errorKey"
      class="error mt-3 text-center text-2xl text-red-600"
    >
      <i class="bi bi-info-circle mr-2" />{{ error }}
    </div>

    <div
      v-show="modelValue"
      class="text-center py-4"
    >
      <span class="loader" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const emit = defineEmits(["onUrl", "update:modelValue"]);
defineProps({
  modelValue: Boolean,
});

const url = ref('');
const error = ref();
const errorKey = ref(0);

function emitUrl(value) {
  let regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:music\.)?(?:youtube\.com\/watch\?v=([a-zA-Z0-9_]+)|youtu\.be\/([a-zA-Z\d_]+))(?:&.*)?$/;
  error.value = null;

  if (value == "") {
    error.value = "Please fill the input";
  } else if (!regex.test(value)) {
    error.value = "Please enter valid url";
  } else {
    emit("update:modelValue", true);
    emit("onUrl", value);
  }

  errorKey.value += 1;
}
</script>

<style scoped>
.FormContainer button {
  box-shadow: rgba(54, 140, 214, 0.534) 4px 6px 10px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: 100ms;
}
.FormContainer button:focus {
  transform: translate(1px, 1px);
  box-shadow: none;
}
input[type="text"] {
  padding-right: 12rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: var(--primary-color);
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

.error {
  animation: scale-up 500ms;
}

@keyframes scale-up {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

@keyframes animloader {
  0% {
    box-shadow: -38px -12px, -14px 0, 14px 0, 38px 0;
  }
  33% {
    box-shadow: -38px 0px, -14px -12px, 14px 0, 38px 0;
  }
  66% {
    box-shadow: -38px 0px, -14px 0, 14px -12px, 38px 0;
  }
  100% {
    box-shadow: -38px 0, -14px 0, 14px 0, 38px -12px;
  }
}
</style>
