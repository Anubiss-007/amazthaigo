<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

const router = useRouter();
const code = ref(''); // เปลี่ยนชื่อจาก password เป็น code เพื่อความชัดเจน
const showCode = ref(false); // เปลี่ยนชื่อจาก showPassword เป็น showCode เพื่อความชัดเจน

const handleVerify = () => {
  // Logic สำหรับตรวจสอบโค้ดกับ API จะอยู่ตรงนี้
  console.log('Verifying code:', code.value);

  // เมื่อตรวจสอบสำเร็จแล้ว จะพาไปหน้าถัดไป
  router.push('/setpassword'); 
};

const toggleShowCode = () => {
  showCode.value = !showCode.value;
};

// ฟังก์ชันสำหรับจัดการการส่งโค้ดอีกครั้ง
const handleResendCode = () => {
  // Logic สำหรับส่งรหัสยืนยันไปยังอีเมลอีกครั้ง
  console.log('Resending verification code...');
  alert('รหัสยืนยันถูกส่งใหม่อีกครั้งแล้ว');
  // อาจต้องการปิดใช้งานปุ่มส่งซ้ำเป็นช่วงเวลาสั้นๆ
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-8">
    <div class="flex flex-col md:flex-row max-w-4xl w-full h-auto md:h-[700px] bg-white rounded-xl shadow-md overflow-hidden">  
      
      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-top">
        <img src="../assets/Logo_AmazthaiGo.png" alt="AmazthaiGo Logo" class="w-70 h-auto" /><br>
        <div class="flex items-center space-x-1 mb-8">
          <router-link to="/login" class="text-green-600 hover:underline hover:text-green-800 text-xs flex items-center space-x-1">
            <Icon icon="mdi:arrow-left" class="w-4 h-4" />
            <span>กลับไปหน้าเข้าสู่ระบบ</span>
          </router-link>
        </div>
        
        <h1 class="text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">ยืนยันรหัส Code?</h1>
        <p class="text-gray-600 text-base mb-8 text-center md:text-left">รหัสยืนยันได้ถูกส่งไปยังอีเมลของคุณแล้ว</p>

        <form @submit.prevent="handleVerify">
          <div class="mb-4">
            <label for="code" class="block text-gray-700 text-sm font-semibold mb-2 text-center md:text-left">รหัสCode</label>
            <div class="relative">
              <input :type="showCode ? 'text' : 'password'" id="code" v-model="code" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกcode" />
              <span @click="toggleShowCode" class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <svg v-if="showCode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
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
            <div class="text-center md:text-left text-xs mt-4">
             <p class="text-gray-700">ไม่ได้รับรหัส?
              <button @click="handleResendCode" type="button" class="text-green-600 hover:underline font-semibold">ส่งอีกครั้ง</button>
             </p>
            </div>
          </div>

          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300 mt-4">ยืนยัน</button>
        </form>
      </div>
      
      <div class="hidden md:block w-full md:w-1/2 relative">
        <img src="/src/assets/phuket-scaled.jpeg" alt="Beautiful beach" class="w-full h-full object-cover" />
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"></div>
      </div>

    </div>
  </div>
</template>