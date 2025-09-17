<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const showPassword = ref(false);
const showConfirm = ref(false);
const isModalOpen = ref(false);

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert('รหัสผ่านไม่ตรงกัน');
    return;
  }
  
  // โค้ดสำหรับส่งข้อมูลลงทะเบียนไปยัง API จะอยู่ตรงนี้
  console.log('Registering with:', {
    firstName: firstName.value,
    lastName: lastName.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
  });

  // เปิด Modal เมื่อการลงทะเบียนสำเร็จ
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
</script>

<template>
  <div class="min-h-screen flex items-start justify-center">
    <div class="flex max-w-4xl w-full bg-white rounded-xl shadow-md overflow-hidden">
      
      <div class="w-1/2 hidden md:block relative">
        <img src="../assets/phuket-scaled.jpeg" alt="Beautiful beach" class="w-full h-full object-cover" />
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"></div>
      </div>
    
      <div class="w-3/4 p-12 flex flex-col justify-center">
        <img src="../assets/Logo_AmazthaiGo.png" alt="AmazthaiGo Logo" class="w-100 h-auto" /><br>
        <h1 class="text-3xl font-bold text-gray-800 mb-2 text-left">ลงทะเบียน</h1>
        <p class="text-gray-600 mb-8 text-left">ลงทะเบียนเพื่อเข้าถึงบัญชีของคุณ</p>

        <form @submit.prevent="handleRegister">
          <div class="flex space-x-4">
            <div class="mb-4 w-1/2">
              <label for="firstName" class="block text-gray-700 text-sm font-semibold mb-2 text-left">ชื่อจริง</label>
              <input type="text" id="firstName" v-model="firstName" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกชื่อจริง" />
            </div>
            <div class="mb-4 w-1/2">
              <label for="lastName" class="block text-gray-700 text-sm font-semibold mb-2 text-left">นามสกุล</label>
              <input type="text" id="lastName" v-model="lastName" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกนามสกุล" />
            </div>
          </div>

          <div class="flex space-x-4">
            <div class="mb-4 flex-grow">
             <label for="phone" class="block text-gray-700 text-sm font-semibold mb-2 text-left">เบอร์โทร</label>
             <input type="tel" id="phone" v-model="phone" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกเบอร์โทร" />
            </div>
            <div class="mb-4 flex-grow">
              <label for="email" class="block text-gray-700 text-sm font-semibold mb-2 text-left">อีเมล</label>
              <input type="email" id="email" v-model="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกอีเมล" />
            </div>
          </div>
        
          <div class="mb-4">
            <label for="password" class="block text-gray-700 text-sm font-semibold mb-2 text-left">รหัสผ่าน</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกรหัสผ่าน" />
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
            <label for="confirmPassword" class="block text-gray-700 text-sm font-semibold mb-2 text-left">ยืนยันรหัสผ่าน</label>
            <div class="relative">
              <input :type="showConfirm ? 'text' : 'password'" id="confirmPassword" v-model="confirmPassword" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกยืนยันรหัสผ่าน" />
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

          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">สร้างบัญชี</button>
        </form>

        <p class="mt-4 text-center text-sm text-gray-700">
          มีบัญชีอยู่แล้ว? 
          <router-link to="/login" class="text-green-600 hover:underline hover:text-green-800 font-semibold active:text-green-800 focus:text-green-700 focus-visible:text-green-700">เข้าสู่ระบบ</router-link>
        </p>
      </div>
    </div>
  </div>
  <Modal 
    :isOpen="isModalOpen" 
    title="ลงทะเบียนสำเร็จ" 
    message="บัญชีของคุณถูกสร้างเรียบร้อยแล้ว"
    @close="closeModal" 
  />
</template>