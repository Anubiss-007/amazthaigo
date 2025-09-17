<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const popularDestinations = ref([
  { id: 1, title: 'Phi Phi Islands', description: 'ทัวร์ชมความงามรอบเกาะพีพี', image: 'https://shorturl.asia/F3e8p' },
  { id: 2, title: 'Railay Beach', description: 'ปีนผา ชมวิวทะเลที่หาดไร่เลย์', image: 'https://shorturl.asia/F3e8p' },
  { id: 3, title: 'Koh Lanta', description: 'สัมผัสความสงบและธรรมชาติที่เกาะลันตา', image: 'https://shorturl.asia/F3e8p' },
  { id: 4, title: 'Emerald Pool', description: 'เล่นน้ำใสๆ ที่สระมรกต', image: 'https://shorturl.asia/F3e8p' },
  { id: 5, title: 'Four Islands Tour', description: 'ทัวร์ 4 เกาะยอดนิยมในกระบี่', image: 'https://shorturl.asia/F3e8p' },
  { id: 6, title: 'Tiger Cave Temple', description: 'สักการะสิ่งศักดิ์สิทธิ์และชมวิวเมืองกระบี่', image: 'https://shorturl.asia/F3e8p' },
]);

const blogPosts = ref([
  { id: 1, title: 'วิธีวางแผนทริปกระบี่ 3 วัน 2 คืน', description: 'คู่มือสำหรับนักท่องเที่ยวที่อยากใช้เวลาในกระบี่อย่างคุ้มค่า', image: 'https://shorturl.asia/F3e8p' },
  { id: 2, title: '5 ที่พักสุดหรูในกระบี่ ที่คุณต้องไป', description: 'รวมลิสต์ที่พักวิวสวย บรรยากาศดี เหมาะกับการพักผ่อน', image: 'https://shorturl.asia/F3e8p' },
  { id: 3, title: 'อาหารใต้รสจัดจ้าน ที่ไม่ควรพลาดเมื่อไปกระบี่', description: 'แนะนำเมนูเด็ดและร้านอาหารท้องถิ่นที่อร่อยจนต้องบอกต่อ', image: 'https://shorturl.asia/F3e8p' },
]);
</script>

<template>
  <div class="bg-gray-50 font-sans leading-normal tracking-normal">
    <header class="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <nav class="container mx-auto flex items-center justify-between p-4">
        <img src="../assets/Logo_AmazthaiGo.png" alt="AmazthaiGo Logo" class="h-8">
        <div class="flex items-center space-x-4">
          <router-link to="/login" class="bg-transparent text-gray-800 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors hidden md:block">เข้าสู่ระบบ</router-link>
          <router-link to="/register" class="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">ลงทะเบียน</router-link>
        </div>
      </nav>
    </header>

    <section class="relative bg-cover bg-center h-[500px] md:h-[600px] flex items-center justify-center" 
            style="background-image: url('https://shorturl.asia/HNZJO');">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="relative text-white text-center p-4 pt-16">
        <h1 class="text-5xl md:text-6xl font-bold">กระบี่</h1>
        <h2 class="text-3xl md:text-4xl font-light mb-8">Krabi</h2>
        
        <div class="bg-white p-2 shadow-lg flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <input type="text" placeholder="ที่ไหนดี" class="px-4 py-2 rounded-full w-full md:w-48 text-gray-800 focus:outline-none">
          <input type="date" class="px-4 py-2 rounded-full w-full md:w-48 text-gray-800 focus:outline-none">
          <button class="bg-green-600 text-white py-2 px-6 rounded-full w-full md:w-auto hover:bg-green-700 transition-colors">ค้นหา</button>
        </div>
      </div>
    </section>

    <section class="container mx-auto p-8 md:p-12">
      <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">สถานที่ท่องเที่ยวสุดนิยม</h3>
      <p class="text-gray-600 mb-8 text-center">คัดสรรค์มาให้คุณโดยเฉพาะ</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="dest in popularDestinations" :key="dest.id" class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img :src="dest.image" :alt="dest.title" class="w-full h-48 object-cover">
          <div class="p-4">
            <h4 class="font-bold text-lg mb-1">{{ dest.title }}</h4>
            <p class="text-gray-600 text-sm">{{ dest.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-green-100 p-8 md:p-10">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div class="w-full md:w-1/2 flex justify-center">
          <img src="../assets/As1.png" alt="Illustration" class="w-full max-w-sm">
        </div>
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">ค้นหาสถานที่เที่ยวใหม่ไปด้วยกัน</h3>
          <p class="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button class="bg-orange-400 text-white py-3 px-8 rounded-full font-semibold hover:bg-green-700 transition-colors">ค้นหาสถานที่</button>
        </div>
      </div>
    </section>

    <section class="container mx-auto p-8 md:p-2">
      <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">Blog</h3>
      <p class="text-gray-600 mb-8 text-center">บทความและเรื่องราวน่าสนใจ</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="post in blogPosts" :key="post.id" class="bg-white rounded-xl shadow-lg overflow-hidden">
          <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
          <div class="p-4">
            <h4 class="font-bold text-lg mb-1">{{ post.title }}</h4>
            <p class="text-gray-600 text-sm">{{ post.description }}</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-8">
        <button class="bg-transparent border border-gray-400 text-gray-700 py-2 px-8 rounded-full hover:bg-gray-100 transition-colors">ดูเพิ่มเติม</button>
      </div>
    </section>

    <footer class="bg-gray-800 text-gray-400 p-8 md:p-12">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="flex flex-col md:flex-row items-center md:space-x-4 mb-4 md:mb-0">
          <img src="../assets/Logo_AmazthaiGo.png" alt="AmazthaiGo Logo" class="h-8 mb-2 md:mb-0">
          <p class="text-sm text-center md:text-left">&copy; 2025 AmazthaiGO. All rights reserved.</p>
        </div>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">
            <Icon icon="mdi:facebook" class="h-6 w-6"></Icon>
          </a>
          <a href="#" class="hover:text-white transition-colors">
            <Icon icon="mdi:instagram" class="h-6 w-6"></Icon>
          </a>
          <a href="#" class="hover:text-white transition-colors">
            <Icon icon="mdi:tiktok" class="h-6 w-6"></Icon>
          </a>
        </div>
      </div>
    </footer>

  </div>
</template>



<style>
/* Style for social media icons */
.fill-current {
  fill: currentColor;
}
</style>