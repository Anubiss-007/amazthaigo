<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white rounded-lg shadow-xl p-6 md:p-8 max-w-sm w-full">
      <div class="flex justify-between items-center border-b pb-3 mb-4">
        <h3 class="text-xl font-semibold text-gray-900">{{ title }}</h3>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 focus:outline-none">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div class="text-gray-700">
        <p>{{ message }}</p>
      </div>

      <div class="mt-6 flex justify-end">
        <button @click="$emit('close')" class="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
          ตกลง
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'สำเร็จ'
  },
  message: {
    type: String,
    default: 'การดำเนินการเสร็จสมบูรณ์'
  }
});

const emit = defineEmits(['close']);
</script>