<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Correctly imported
import Modal from './Modal.vue'; // Correctly imported

const router = useRouter(); // Correctly initialized
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const showConfirm = ref(false);
const isModalOpen = ref(false);
const errorMessage = ref('');

const handleResetPassword = () => {
  errorMessage.value = '';

  if (!password.value || !confirmPassword.value) {
    errorMessage.value = 'กรุณากรอกรหัสผ่านและยืนยันรหัสผ่าน';
    return;
  }
  
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'รหัสผ่านไม่ตรงกัน';
    return;
  }

  // If validation passes, open the modal
  console.log('Password reset logic would be here');
  isModalOpen.value = true;
};

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const toggleShowConfirm = () => {
  showConfirm.value = !showConfirm.value;
};

const closeModal = () => {
  isModalOpen.value = false;
};

// This function is correctly set up to handle the "ตกลง" button click
const handleModalConfirm = () => {
  closeModal(); // Close the modal
  router.push('/'); 
};
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
    <div class="flex flex-col md:flex-row max-w-4xl w-full h-auto md:h-[700px] bg-white rounded-xl shadow-md overflow-hidden">
      
      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-top">
        <img src="../assets/Logo_AmazthaiGo.png" alt="AmazthaiGo Logo" class="w-70 h-auto" /><br>
        <h1 class="text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">ตั้งรหัสผ่านใหม่</h1>
        <p class="text-gray-600 mb-8 text-center md:text-left">กรุณากรอกรหัสผ่านใหม่ของคุณ</p>

        <form @submit.prevent="handleResetPassword">
          <div v-if="errorMessage" class="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {{ errorMessage }}
          </div>
          
          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-semibold mb-2 text-left">รหัสผ่าน</label>
            <div class="relative">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                id="password" 
                v-model="password" 
                @input="errorMessage = ''" 
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="กรอกรหัสผ่าน" />
              <span @click="toggleShowPassword" class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.72 5.56 5.592 3 10 3s8.28 2.56 9.542 7c-1.262 4.44-5.134 7-9.542 7s-8.28-2.56-9.542-7zM10 15a5 5 0 100-10 5 5 0 000 10z" clip-rule="evenodd" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.72 5.56 5.592 3 10 3s8.28 2.56 9.542 7c-1.262 4.44-5.134 7-9.542 7s-8.28-2.56-9.542-7zM10 15a5 5 0 100-10 5 5 0 000 10z" clip-rule="evenodd" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M.458 10h19.084" />
                </svg>
              </span>
            </div>
          </div>

          <div class="mb-4">
            <label for="confirm-password" class="block text-gray-700 text-sm font-semibold mb-2 text-left">ยืนยันรหัสผ่าน</label>
            <div class="relative">
              <input 
                :type="showConfirm ? 'text' : 'password'" 
                id="confirm-password" 
                v-model="confirmPassword" 
                @input="errorMessage = ''" 
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="กรอกยืนยันรหัสผ่าน" />
              <span @click="toggleShowConfirm" class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <svg v-if="showConfirm" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.72 5.56 5.592 3 10 3s8.28 2.56 9.542 7c-1.262 4.44-5.134 7-9.542 7s-8.28-2.56-9.542-7zM10 15a5 5 0 100-10 5 5 0 000 10z" clip-rule="evenodd" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.72 5.56 5.592 3 10 3s8.28 2.56 9.542 7c-1.262 4.44-5.134 7-9.542 7s-8.28-2.56-9.542-7zM10 15a5 5 0 100-10 5 5 0 000 10z" clip-rule="evenodd" />
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M.458 10h19.084" />
                </svg>
              </span>
            </div>
          </div>

          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">ยืนยัน</button>
        </form>
      </div>

      <div class="w-full md:w-1/2 hidden md:block relative">
        <img src="../assets/phuket-scaled.jpeg" alt="Beautiful beach" class="w-full h-full object-cover" />
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"></div>
      </div>
    </div>
  </div>

  <Modal 
    :isOpen="isModalOpen" 
    title="เปลี่ยนรหัสผ่านสำเร็จ" 
    message="รหัสผ่านของคุณถูกเปลี่ยนเรียบร้อยแล้ว"
    @close="closeModal" 
    @confirm="handleModalConfirm"
  />
</template>