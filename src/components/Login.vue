<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const handleLogin = () => {
  console.log('Logging in with:', email.value, password.value)
  // สามารถเพิ่ม logic สำหรับการเชื่อมต่อกับ API ได้ที่นี่
}

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <div class="min-h-screen flex items-start justify-center p-4 md:p-8">
    <div class="flex flex-col md:flex-row max-w-4xl w-full h-auto md:h-[700px] bg-white rounded-xl shadow-md overflow-hidden">
      
      <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-top">
        <img src="../assets/Logo_AmazthaiGo.png" alt="AmazthaiGo Logo" class="w-70 h-auto"/><br>
        <h1 class="text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">เข้าสู่ระบบ</h1>
        <p class="text-gray-600 mb-8 text-center md:text-left">เข้าสู่ระบบเพื่อเข้าถึงบัญชีของคุณ</p>

        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-semibold mb-2 text-left">อีเมล</label>
            <input type="email" id="email" v-model="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="กรอกอีเมล" />
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

          <div class="flex justify-between items-center mb-6">
            <label class="flex items-center text-sm text-gray-600">
              <input type="checkbox" v-model="rememberMe" class="mr-2 rounded border-gray-300 accent-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              จดจำ
            </label>
            <router-link to="/forgot" class="text-sm text-green-600 hover:underline hover:text-green-800">ลืมรหัสผ่าน</router-link>
          </div>

          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300">เข้าสู่ระบบ</button>
        </form>

        <p class="mt-4 text-center text-sm text-gray-700">
          ยังไม่มีบัญชีใช่ไหม? 
          <router-link to="/register" class="text-green-600 hover:underline hover:text-green-800 font-semibold active:text-green-800 focus:text-green-700 focus-visible:text-green-700">ลงทะเบียน</router-link>
        </p>
      </div>

      <div class="hidden md:block w-full md:w-1/2 relative">
        <img src="../assets/phuket-scaled.jpeg" alt="Beautiful beach" class="w-full h-full object-cover" />
        <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"></div>
      </div>
    </div>
  </div>
</template>


