<template>
    <section class="relative w-full overflow-hidden min-h-screen flex items-center" id="hero">
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
            <div class="flex flex-col items-center justify-center text-center pt-24 pb-12">
                <!-- Main Heading -->
                <div class="text-white" data-aos="zoom-in" data-aos-delay="200">
                    <h1 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                        Hi, I'm
                        <span class="block text-transparent bg-clip-text bg-linear-to-r from-primary-400 via-secondary-300 to-primary-500 mt-2">
                            Naman
                        </span>
                    </h1>
                </div>

                <!-- Subheading -->
                <div class="mt-8 mb-10 max-w-2xl mx-auto space-y-4">
                    <h2 class="text-2xl md:text-3xl font-semibold text-primary-200" data-aos="fade-up" data-aos-delay="300">
                        Software Engineer
                    </h2>
                    <p class="text-gray-400 text-lg md:text-xl leading-relaxed font-light" data-aos="fade-up" data-aos-delay="400">
                        I craft innovative, user-friendly applications with a focus on clean code and exceptional digital experiences.
                    </p>
                </div>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto" data-aos="fade-up" data-aos-delay="500">
                    <a 
                    href="#contact"
                    class="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center
                    bg-linear-to-r from-primary-600 to-secondary-600 text-white font-semibold text-lg
                    hover:shadow-[0_0_30px_rgba(var(--color-primary-500),0.5)] hover:scale-105
                    transition-all duration-300 cursor-pointer"
                    @click.prevent="scrollToSection">
                        Contact Me
                        <ArrowRightIcon class="w-5 h-5 ml-2" />
                    </a>
                    
                    <a 
                    href="/Naman_CV.pdf"
                    download="Naman Bardia CV.pdf"
                    class="w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center
                    border-2 border-primary-400/50 text-primary-300 font-semibold text-lg
                    hover:bg-primary-500/10 hover:border-primary-400 hover:text-primary-200
                    transition-all duration-300 cursor-pointer relative overflow-hidden group">
                        <span class="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-primary-500/10 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]"></span>
                        Download CV
                        <ArrowDownTrayIcon class="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                    </a>
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