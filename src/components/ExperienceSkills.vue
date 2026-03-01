<template>
    <section class="relative py-20 overflow-hidden" id="skills">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16"
            data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-secondary-400">
                        Skills
                    </span>& Experience
                </h2>
                <p class="text-primary-200 text-lg max-w-2xl mx-auto">
                    My Technical Expertise and professional experience
                </p>
            </div>
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div data-aos="fade-right">
                    <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3 ">
                        <ChartBarIcon class="w-6 h-6 text-primary-400" />
                        Technical Skills 
                    </h3>
                    <div class="space-y-6">
                        <div
                        v-for="skill in skills"
                        :key="skill.id"
                        class="group">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-primary-200 font-semibold flex items-center gap-2">
                                    <component
                                    :is="skill.icon"
                                    :class="skill.iconColor"
                                    class="w-5 h-5">
                                    </component>
                                    {{ skill.title }}
                                </span>
                                <span 
                                :class="skill.percentageColor">
                                    {{ skill.percentage }} %
                                </span>                               

                            </div>
                            
                            <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-1000 group-hover: scale-105"
                                :style="{ width: skill.percentage + '%' }"
                                :class="skill.gradient">

                                </div>

                            </div>
                        </div>

                        <div class="mt-12">
                            <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Square3Stack3DIcon class="w-6 h-6 text-secondary-400" />
                                Tech Stack
                            </h4>
                            <div class="flex flex-wrap gap-3">
                                <span
                                v-for="tech in techStack"
                                :key="tech"
                                class="px-4 py-2 bg-linear-to-r from-primary-500/20 border border-primary-400/30 rounded-full text-primary-200 text-sm font-medium hover:scale-105 transition-transform duration-300">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left">
                    <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <BriefcaseIcon class="w-8 h-8 text-secondary-400" />
                        Internship Experience
                    </h3>
                    <div class="space-y-8">
                        <div
                        v-for="experience in experiences"
                        :key="experience.id"
                        class="relative pl-8 border-l-2 group"
                        :class="experience.borderColor">
                            <div class="absolute -left-2 top-0 w-4 h-4 rounded-full group-hover:scale-150 transition-transform duration-300"
                            :class="experience.dotColor"></div>
                            
                            <div class="bg-linear-to-r from-gray-800/50 to-primary-900/30 rounded-2xl p-6 border
                            backdrop-blur-sm group-hover:border-primary-400/40 transition-all duration-300"
                            :class="experience.borderClass">
                                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                    <h4 class="text-lg font-bold text-white">{{ experience.position }}</h4>
                                    <span 
                                    :class="experience.dateColor"
                                    class="mt-1 sm:mt-0">
                                        {{ experience.duration }}
                                    </span>
                                </div>
                                <p 
                                :class="experience.companyColor"
                                class="font-medium mb-3">
                                    {{ experience.company }}
                                </p>

                                <p
                                class="text-primary-100 text-sm leading-relaxed">
                                    {{ experience.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CodeBracketIcon, CodeBracketSquareIcon, CubeTransparentIcon, ServerIcon, BriefcaseIcon, ChartBarIcon, Square3Stack3DIcon } from "@heroicons/vue/24/solid";


const skills = [
    {
        id: 1,
        title: 'Frontend Development',
        icon: CodeBracketIcon,
        iconColor: 'text-primary-400',
        percentage: 70,
        percentageColor: 'text-primary-400 text-sm',
        gradient: 'bg-linear-to-r from-primary-500 to-secondary-500'
    },
    {
        id: 2,
        title: 'Core CS Fundamentals',
        icon: ServerIcon,
        iconColor: 'text-secondary-400',
        percentage: 75,
        percentageColor: 'text-secondary-400 text-sm',
        gradient: 'bg-linear-to-r from-secondary-500 to-primary-500'
    },
    {
        id: 3,
        title: 'Programming Languages',
        icon: CubeTransparentIcon,
        iconColor: 'text-primary-400',
        percentage: 80,
        percentageColor: 'text-primary-400 text-sm',
        gradient: 'bg-linear-to-r from-primary-500 to-secondary-500'
    },
    {
        id: 4,
        title: 'Libraries & Frameworks',
        icon: CodeBracketSquareIcon,
        iconColor: 'text-secondary-400',
        percentage: 75,
        percentageColor: 'text-secondary-400 text-sm',
        gradient: 'bg-linear-to-r from-secondary-500 to-primary-500'
    }
];

const experiences = [
    {
        id: 1,
        position: 'Epic Engineer',
        company: 'Qyupe Software Private Limited',
        duration: 'Jan 2026 - Present',
        description: 'As an Epic Engineer, I work on EPMLs to make the internal features for the company which are light weight, highly customizable, reusable and easy to implement. ',
        borderColor: 'border-primary-500/30',
        dotColor: 'bg-primary-500',
        borderClass: 'border-primary-500/20',
        dateColor: 'text-primary-400 text-sm font-semibold',
        companyColor: 'text-secondary-400',        
    },
    {
        id: 2,
        position: 'Feature Engineer',
        company: 'ConviSaaS Inc.',
        duration: 'Nov. 2025 - Present',
        description: 'As an Feature Engineer, I work on Vue.js and other technologies like confluence, jira, figma to make the internal features for the company end to end. ',
        borderColor: 'border-secondary-500/30',
        dotColor: 'bg-secondary-500',
        borderClass: 'border-secondary-500/20',
        dateColor: 'text-secondary-400 text-sm font-semibold',
        companyColor: 'text-primary-400',        
    },
    {
        id: 3,
        position: 'Product Engineer',
        company: 'ConviSaaS Inc.',
        duration: 'Oct. 2025 - Nov. 2025',
        description: 'As an Product Engineer, I worked on Vue.js and other technologies like confluence, jira, figma to design and develop the web pages and solve bugs in the existing code.',
        borderColor: 'border-primary-500/30',
        dotColor: 'bg-primary-500',
        borderClass: 'border-primary-500/20',
        dateColor: 'text-primary-400 text-sm font-semibold',
        companyColor: 'text-secondary-400',        
    }
];

const techStack = [
    "Vue.js", "Javascript", "Python", "C/C++", "Tailwind CSS", "SQL", "Git", "Bitbucket", "Jira", "Confluence", "VS Code"
]

</script>
