<template>
  <section class="relative py-20 overflow-hidden" id="projects">
    <div class="px-4 sm:px-6 md:px-12 lg:px-8 max-w-7xl mx-auto relative z-10 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16"
        data-aos="fade-up">
            <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                My <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-secondary-400">
                    Projects
                </span>
            </h2>
            <p class="text-primary-200 font-black max-w-2xl mx-auto text-lg">
                A Collection of My Work.
            </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(project, index) in projects" 
            :key="project.id" 
            class="group relative bg-linear-to-br from-gray-800/50 to-gray-900/30 rounded-3xl overflow-hidden border
            backdrop-blur-sm hover:border-primary-400/40 transition-all duration-500 
            hover:transform
            hover:-translate-y-2"
            :class="project.borderColor"
            data-aos="fade-up"
            :data-aos-delay="(index + 1) * 100">
                <!-- Project Image -->
                <div class="relative overflow-hidden">
                    <img 
                    :src="project.image" 
                    :alt="project.title" 
                    class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500">
                    
                    <div class="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>

                    <div class="absolute top-4 right-4">
                        <span 
                        class="px-3 py-1 rounded-full text-white text-xs font-semibold"
                        :class="project.badgeColor">
                            {{ project.category }}
                        </span>
                    </div>
                </div>

                <!-- Project Content -->
                <div class="p-6">
                    <h3 class="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {{ project.title }}
                    </h3>
                    <p class="text-primary-100 mb-4 leading-relaxed text-sm">
                        {{ project.description }}
                    </p>

                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span 
                        v-for="tech in project.technologies" 
                        :key="tech.name" 
                        class="px-2 py-1 rounded border text-xs"
                        :class="tech.class">
                            {{ tech.name }}
                        </span>
                    </div>

                    <!-- Links -->
                    <div class="flex gap-3">
                        <a v-for="link in project.links" 
                        :key="link.name" 
                        :href="link.url" 
                        class="flex items-center gap-2 transition-colors duration-300 text-sm font-medium"
                        :class="link.class">
                            <component :is="link.icon" class="w-4 h-4"></component>
                            {{ link.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div> 
        
        <!-- CTA Section -->
        <div class="text-center mt-16"
        data-aos="fade-up">
            <div class="inline-flex flex-col sm:flex-row gap-4 items-center">

                <!-- View All Projects -->
                <a 
                href="https://github.com/Namanbardia?tab=repositories"
                target="_blank"
                class="px-16 py-5 rounded-xl 
                bg-gradient-to-r from-primary-500 to-secondary-500 
                text-white font-semibold 
                hover:shadow-lg hover:shadow-primary-500/25 
                hover:scale-105 
                flex items-center justify-center gap-2
                transition-all duration-300 cursor-pointer">

                    <span>View All Projects</span>
                    <ArrowRightIcon class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

            
                <!-- Discuss Project -->
                <a 
                href="#contact"
                @click.prevent="scrollToSection('#contact')"
                class="px-16 py-5 rounded-xl 
                border-2 border-primary-400 
                text-primary-400 font-semibold 
                hover:bg-primary-400/10 
                flex items-center justify-center gap-2
                transition-all duration-300 cursor-pointer">

                    <ChatBubbleLeftRightIcon class="w-5 h-5" />
                    <span>Discuss Project</span>
                </a>
            
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { CodeBracketIcon, EyeIcon, ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';
import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.png';

const projects = ref([
    {
        id: 1,
        title: 'Portfolio',
        description: 'Built an Portfolio website using Vue.js and Tailwind CSS.',
        image: project1,
        category: 'Web Development',
        borderColor: 'border-primary-500/20',
        badgeColor: 'bg-primary-500',
        technologies: [
            {
                name: 'Vue.js', 
                class: 'bg-primary-500/20 border-primary-400/30 text-primary-200'
            },
            {
                name: 'Tailwind CSS', 
                class: 'bg-secondary-500/20 border-secondary-400/30 text-secondary-200'
            },
            {
                name: 'JavaScript', 
                class: 'bg-primary-500/20 border-primary-400/30 text-primary-200'
            }
        ],
        links: [
            {
                name: 'Live Demo',
                url: 'https://naman-portfolio-xi.vercel.app/',
                icon: EyeIcon,
                class: 'text-primary-400 hover:text-primary-300'
            },
            {
                name: 'Code',
                url: 'https://github.com/Namanbardia/Portfolio',
                icon: CodeBracketIcon,
                class: 'text-secondary-400 hover:text-secondary-300'
            }
        ]
    },
    {
        id: 2,
        title: 'Banking Management System',
        description: 'Made an Banking Management System using Python, OOPs and Streamlit.',
        image: project2,
        category: 'OOPS',
        borderColor: 'border-primary-500/20',
        badgeColor: 'bg-primary-500',
        technologies: [
            {
                name: 'Python', 
                class: 'bg-secondary-500/20 border-secondary-400/30 text-secondary-200'
            },
            {
                name: 'Streamlit', 
                class: 'bg-primary-500/20 border-primary-400/30 text-primary-200'
            },
            {
                name: 'OOPs', 
                class: 'bg-secondary-500/20 border-secondary-400/30 text-secondary-200'
            }
        ],
        links: [
            {
                name: 'Live Demo',
                url: 'https://namanbardia-banking-system.streamlit.app/',
                icon: EyeIcon,
                class: 'text-primary-400 hover:text-primary-300'
            },
            {
                name: 'Code',
                url: 'https://github.com/Namanbardia/Banking-System',
                icon: CodeBracketIcon,
                class: 'text-secondary-400 hover:text-secondary-300'
            }
        ]
    }
]);

const scrollToSection = () => {
  const section = document.querySelector('#contact')
  section?.scrollIntoView({ behavior: 'smooth' })
}
</script>
