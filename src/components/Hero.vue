<template>
    <section class="relative w-full overflow-hidden min-h-screen flex items-center" id="hero">
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
                <div class="flex flex-col md:mt-0 mt-20 justify-center">
                    
                    <div 
                    class="text-white lg:text-left"
                    data-aos="fade-right"
                    >
                        <h1 class="text-white text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
                            Hi, I'm
                            <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-secondary-400">
                                Naman
                            </span>
                        </h1>
                        <p class="text-primary-200 font-medium text-lg md:text-xl mt-4"
                        data-aos="fade-right"
                        data-aos-delay="400">
                        Software Engineer.
                        </p>
                    </div>

                    <p class="text-gray-300 pt-6 text-center lg:text-left max-w-xl mx-auto text-lg leading-relaxed"
                    data-aos="fade-right"
                    data-aos-delay="200">
                        I'm a software engineer with a passion for building innovative and user-friendly applications.
                    </p>

                    <div class="flex items-center gap-4 pt-8 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0"
                    data-aos="fade-up"
                    data-aos-delay="300">
                        <a 
                        href="#contact"
                        class="px-8 md:px-10 py-4 rounded-xl relative group
                        w-full sm:w-max flex justify-center overflow-hidden 
                        bg-linear-to-r from-primary-600 to-secondary-600
                        hover:from-primary-500 hover:to-secondary-500 
                        transition-all duration-300 cursor-pointer"
                        @click.prevent="scrollToSection">
                        <span class="relative flex items-center justify-center text-white font-semibold text-lg">
                            Contact Me
                            <ArrowRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                        </a>
                        <a 
                        href="/Naman_CV.pdf"
                        download="Naman Bardia CV.pdf"
                        class="border-2 border-primary-400 px-8 md:px-10 py-4 rounded-xl relative group
                        w-full sm:w-max flex justify-center hover:bg-primary-400/10 
                        transition-all duration-300 cursor-pointer"
>
                        <div class="flex items-center justify-center relative">
                            <ArrowDownTrayIcon class="w-5 h-5 text-primary-400 group-hover:translate-y-1 transition-transform" />
                            <span class="pl-3 text-primary-400 font-semibold text-lg">
                                Download CV
                            </span>
                        </div>
                        </a>
                    </div>
                </div>    
                <!-- Image -->
                <div class="lg:h-full flex justify-center lg:justify-end ">
                    <div class="relative w-full max-w-md lg:max-w-lg">
                        <div class="relative z-10 bg-linear-to-r 
                        from-primary-600 to-secondary-600 shadow-2-xl
                        rounded-[50%_40%_30%_60%/60%_30%_70%_30%]
                        p-4 backdrop-blur-sm border border-primary-500/30
                        -translate-y-6"
                        data-aos="zoom-in" data-aos-delay="500">
                            <div class="rounded-xl overflow-hidden">
                                <img src="@/assets/hero.png" 
                                alt="Naman - Software Engineer"
                                loading="lazy"
                                class="w-full h-full object-contain
                                -translate-y-20">
                            </div>
                        </div>
                        <div class="absolute -top-2 -right-4 w-10 h-10 bg-primary-400 rounded-full blur-sm opacity-6
                        animate-pulse">
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/solid';

const scrollToSection = () => {
  const section = document.querySelector('#contact')
  section?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>

</style>