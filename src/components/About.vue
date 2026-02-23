<template>
    <section class="relative overflow-hidden py-20 min-h-screen flex items-center" id="about">
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10"> 
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
                <div class="lg:h-full flex justify-center 
                lg:justify-start order-2 lg:order-1">
                    <div class="relative w-full max-w-md">
                        <div 
                        data-aos="zoom-in"
                        class="relative bg-linear-to-br from-gray-800/60 to-blue-900/40 rounded-3xl p-6
                        backdrop-blur-sm border border-blue-500/30 shadow-2xl">
                            <div class="grid grid-cols-2 gap-4">
                                <div
                                v-for="(image, index) in aboutImage"
                                :key="image.id"
                                :data-aos="image.animation"
                                :data-aos-delay="image.delay"
                                class="relative group"
                                >
                                    <div class="rounded-2xl p-2 border shadow-lg"
                                    :class="image.gradient">
                                        <img :src="image.src" 
                                        :alt="image.alt"
                                        class="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300">
                                    </div>
                                    <div class="absolute -top-2 -right-2 text-white text-xs px-2 py-1 rounded-full font-semibold"
                                    :class="image.badgeColor">
                                        {{ image.badge }}
                                    </div>
                                </div>
                            </div>
                            <div >

                            </div>
                        </div>

                    </div>
                </div>
                
                <div class="flex flex-col justify-center
                order-1 lg:order-2">

                <div class="text-center lg:text-left"
                data-aos="fade-left">
                    <h2 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                        About <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                            Me
                        </span>
                    </h2>
                    <p class="text-blue-400 font-medium text-lg md:text-xl mt-4"
                    data-aos="fade-left"
                    data-aos-delay="100">
                        Software Developer
                    </p>
                    <p class="text-gray-300 pt-6 text-center lg:text-left text-lg leading-relaxed"
                        data-aos="fade-left"
                        data-aos-delay="200">
                        I’m a passionate Software Developer who enjoys building modern, responsive, and user-friendly web applications. 
                        I focus on creating clean interfaces and smooth user experiences while continuously improving my problem-solving skills. 
                        I’m always exploring new technologies and working on practical projects to turn ideas into functional digital solutions.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8"
                data-aos="fade-up"
                data-aos-delay="300">
                    <div 
                    v-for="skill in skills"
                    :key="skill.id"
                    class="flex flex-col">
                        <div class="flex items-center gap-3 mb-3">
                            <component 
                            :is="skill.icon" 
                            class="w-6 h-6" 
                            :class="skill.iconColor"></component>
                            <h3 class="text-white font-bold text-lg">
                                {{ skill.title }}
                            </h3>     
                        </div>
                        <p class="text-blue-100 text-sm">
                            {{ skill.description }}
                        </p>                       
                    </div>
                </div>
                <!-- <div class="flex gap-4 pt-8 flex-col sm:flex-row"
                data-aos="fade-up"
                data-aos-delay="400">
                    <button
                    v-for="button in ctaButtons"
                    :key="button.id"
                    class="px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center cursor-pointer"
                    :class="button.classes">
                        <component 
                        :is="button.icon" 
                        class="w-4 h-4" 
                        :class="button.iconclass"></component>
                        {{ button.text }}
                    </button>
                </div> -->
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
import { CodeBracketIcon, CodeBracketSquareIcon, Cog6ToothIcon, CommandLineIcon, ServerIcon, ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

import about1 from '@/assets/about1.png';
import about2 from '@/assets/about2.png';
import about3 from '@/assets/about3.png';
import about4 from '@/assets/about4.png';

const aboutImage = [
    {
        id: 1,
        src: about1,
        alt: 'Naman - Professional Photo',
        gradient: 'bg-linear-to-r from-blue-600 to-cyan-600 border-blue-400/40',
        badge: 'Professional',
        badgeColor: 'bg-blue-500',
        animation: 'fade-right',
        delay: 200,
    },
    {
        id: 2,
        src: about2,
        alt: 'Naman - Working Environment',
        gradient: 'bg-linear-to-r from-blue-600 to-cyan-600 border-blue-400/40',
        badge: 'Creative',
        badgeColor: 'bg-cyan-500',
        animation: 'fade-left',
        delay: 300,
    },
    {
        id: 3,
        src: about3,
        alt: 'Naman - Developer Photo',
        gradient: 'bg-linear-to-r from-blue-600 to-cyan-600 border-blue-400/40',
        badge: 'Developer',
        badgeColor: 'bg-blue-600',
        animation: 'fade-right',
        delay: 400,
    },
    {
        id: 4,
        src: about4,
        alt: 'Naman - Gamer Photo',
        gradient: 'bg-linear-to-r from-blue-600 to-cyan-600 border-blue-400/40',
        badge: 'Gamer',
        badgeColor: 'bg-cyan-600',
        animation: 'fade-left',
        delay: 500,
    }
];

const skills = [
    {
        id: 1,
        icon: CodeBracketIcon,
        iconColor: 'text-blue-400',
        title: 'Frontend',
        description: 'Vue Js, Javascript, Tailwind CSS, HTML, CSS',
    },
    {
        id: 2,
        icon: CodeBracketSquareIcon,
        iconColor: 'text-cyan-400',
        title: 'Libraries',
        description: 'NumPy, Pandas, Matplotlib, Scikit-Learn, Streamlit',
    },
    {
        id: 3,
        icon: Cog6ToothIcon,
        iconColor: 'text-cyan-400',
        title: 'Technical Skills',
        description: 'DSA, OOPs, DBMS, OS, SQL',
    },
    {
        id: 4,
        icon: CommandLineIcon,
        iconColor: 'text-blue-400',
        title: 'Tools',
        description: 'Git, Bitbucket, VSCode, Jira',
    }
    // {
    //     id: 4,
    //     icon: CommandLineIcon,
    //     iconColor: 'text-blue-400',
    //     title: 'Libraries',
    //     description: 'Scikit-Learn, Numpy, Pandas, Matplotlib',
    // }
];

const ctaButtons = [
    {
        id: 1,
        text: 'View Porfolio',
        icon: ArrowRightIcon,
        iconclass: 'ml-2 group-hover:translate-x-1 transition-transform',
        classes: 'bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500'
    },
    {
        id: 1,
        text: 'Contact Me',
        icon: ChatBubbleLeftRightIcon,
        iconclass: 'mr-2',
        classes: 'border border-blue-400 text-blue-400 hover:bg-blue-400/10'
    }
]

</script>

<style>

</style>