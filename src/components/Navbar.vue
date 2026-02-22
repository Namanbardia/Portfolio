<template>
    <header class="fixed top-3 left-3 right-3 flex justify-between items-center rounded-full p-6 bg-[#111827]/30 backdrop-blur-md z-50">
        <div class="text-3xl font-bold ml-8 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent
        cursor-pointer hover:scale-105 transition-all duration-300"
        @click="scrollToSection('#hero')">
            Dev <span class="font-black">Portfolio</span>
        </div>
        <div class="md:hidden z-30">
            <button type="button" class="block focus:outline-none p-2 rounded-lg bg-blue-800/50 hover:bg-blue-700/50 transition-all duration-300" @click="isMenuOpen = !isMenuOpen">
                <div class="relative w-6 h-6">
                    <span :class="[
                        `absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
                        isMenuOpen ? 'rotate-45 top-3' : 'top-1'                        
                    ]"></span>

                    <span :class="[
                        `absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
                        isMenuOpen ? 'opacity-0' : 'top-3 opacity-100'                        
                    ]"></span>

                    <span :class="[
                        `absolute left-0 w-6 h-0.5 bg-blue-200 transition-all duration-300`,
                        isMenuOpen ? '-rotate-45 top-3' : 'top-5'                        
                    ]"></span>
                </div>
            </button>
        </div>

        <!-- Tagline & Progressbar -->
        <div class="flex-col items-center hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <!-- Tagline -->
            <p class="text-blue-200/70 font-black text-lg md:text-xl">
                Curious Mind. Creative Solutions.
            </p>

            <!-- Progressbar -->
            <div class="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500/20 rounded-full overflow-hidden">
                <div class="h-full bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-300"
                :style="{ width: scrollProgress + '%' }">

                </div>
            </div>
        </div>

        <!-- Navigation Buttons -->
        <nav :class="[
            `fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#111827 md:relative md:bg-transparent md:flex md:justify-between md:flex-row`,
            isMenuOpen ? 'block' : 'hidden'
        ]">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name" class="group-relative" @click.prevent="scrollToSection(item.href)">
                    <a :href="item.href" class="relative block text-blue-100 hover:text-blue-400 transition-all duration-300 text-xl md:text-base font-medium group" @click="scrollToSection(item.href)">
                        {{ item.name }}
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
            </ul>
            <div class="mt-8 md:mt-0 md:ml-8">
                <a 
                href="https://wa.me/918306868368?text=Hello%20Naman"
                target="_blank"
                class="px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full 
                hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105
                cursor-pointer">
                    Let's Talk
                </a>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const Menu = ref([
    {name: 'About Me', href: '#about'},
    {name: 'Skills', href: '#skills'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'}
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if(section){
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Progressbar animation
const scrollProgress = ref(0)

const handleScroll = () => {
  const scrollTop = window.scrollY

  const documentHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  scrollProgress.value = (scrollTop / documentHeight) * 100
}

onMounted(() => {
  window.addEventListener('scroll', () => {

    const scrollTop = window.scrollY

    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    scrollProgress.value = (scrollTop / documentHeight) * 100
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>

</style>