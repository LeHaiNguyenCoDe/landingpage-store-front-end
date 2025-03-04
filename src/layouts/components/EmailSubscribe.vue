<template>
  <div class="flex w-full max-w-sm bg-gray-50 overflow-hidden border border-gray-200">
    <input
      v-model="email"
      type="email"
      placeholder="Enter your email"
      class="flex-1 px-4 py-2 bg-gray-50 text-gray-600 focus:outline-none f-text-14-18"
      @keyup.enter="handleSubmit"
    />
    <button
      class="bg-[#E7A17A] p-3 flex items-center justify-centerhover:bg-[#d98b68] transition"
      @click="handleSubmit"
    >
      <i class="i-custom-send text-2xl text-white"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const email = ref<string>("");

const handleSubmit = () => {
  if (!email.value || !email.value.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }
  console.log("Email submitted:", email.value);
  email.value = "";
};
</script>

<style lang="scss" scoped></style>
