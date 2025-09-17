<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

const router = useRouter();
const email = ref('');

const handleForgot = () => {
  // Logic สำหรับส่งอีเมลรีเซ็ตรหัสผ่านไปยัง API จะอยู่ตรงนี้
  console.log('Forgot password request for:', email.value);

  // หลังจากที่เรียก API สำเร็จแล้ว จึงจะนำทางไปยังหน้าถัดไป
  // ในตอนนี้เราจะนำทางไปโดยตรงก่อน
  router.push('/verifycode');
};
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
    <div class="flex flex-col md:flex-row max-w-4xl w-full h-auto md:h-[700px] bg-white rounded-xl shadow-md overflow-hidden">

      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-top">
        <img src="../assets/Logo_AmazthaiGo.png" alt="AmazthaiGo Logo" class="w-70 h-auto"/><br>
        <div class="flex items-center space-x-1 mb-8">
          <router-link to="/login" class="text-green-600 hover:underline hover:text-green-800 text-xs flex items-center space-x-1">
            <Icon icon="mdi:arrow-left" class="w-4 h-4" />
            <span>กลับไปหน้าเข้าสู่ระบบ</span>
          </router-link>
        </div>
        
        <h1 class="text-3xl font-bold text-gray-800 mb-2 text-left">ลืมรหัสผ่านใช่ไหม?</h1>
        <p class="text-gray-600 mb-8 text-left">กรอกอีเมลของคุณด้านล่างเพื่อกู้คืนรหัสผ่านของคุณ</p>

        <form @submit.prevent="handleForgot">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-semibold mb-2 text-left">อีเมล</label>
            <input type="email" id="email" v-model="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกอีเมล" />
          </div>
          
          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">ตกลง</button>
        </form>
      </div>

      <div class="hidden md:block w-full md:w-1/2 relative">
        <img src="/src/assets/phuket-scaled.jpeg" alt="Beautiful beach" class="w-full h-full object-cover" />
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"></div>
      </div>
    </div>
  </div>
</template>