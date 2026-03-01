<template>
  <section class="relative py-20 overflow-hidden" id="contact">
    <!-- Toast Notification -->
    <div 
      class="fixed bottom-8 right-8 z-50 transition-all duration-300 transform"
      :class="toast.show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'"
    >
      <div 
        class="flex items-center px-6 py-4 rounded-xl shadow-2xl border backdrop-blur-md"
        :class="toast.type === 'success' ? 'bg-primary-500/20 border-primary-500/50 text-white' : 'bg-red-500/20 border-red-500/50 text-white'"
      >
        <span class="font-semibold">{{ toast.message }}</span>
      </div>
    </div>

    <div class="px-4 sm:px-6 lg:px-8 max-w-4xl lg:px-8 mx-auto relative z-10">
      <div class="text-center m-16"
      data-aos="fade-up">
        <h2 class="text-white font-bold text-4xl md:text-5xl mb-4">
            Get In <span class="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-secondary-400">
                Touch
            </span>
        </h2>
        <p class="text-primary-200 text-lg">
            Let's work together on your next project
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div data-aos="fade-right">
            <h3 class="text-2xl font-bold text-white mb-6">
                Connect With Me
            </h3>
            <div class="space-y-6">
                <!-- Email -->
                <a 
                href="mailto:bardiaji10@gmail.com"
                target="_blank"
                rel="noopener noreferrer" 
                class="flex items-center gap-4 group cursor-pointer">
                    <div class="w-12 h-12 bg-primary-500/10 border border-primary-400/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary-500/20 group-hover:border-primary-400/40 group-hover:scale-105">
                        <EnvelopeIcon class="w-6 h-6 text-primary-400 transition-transform duration-300 group-hover:-translate-y-1" />
                    </div>
                    <div>
                        <p class="text-white font-semibold transition-colors duration-300 group-hover:text-primary-400">Email</p>
                        <p class="text-primary-200 font-medium">Discuss something? Or just Say Hi!</p>
                    </div>
                </a>

                <!-- Availability -->
                <div class="flex items-center gap-4 group cursor-default">
                    <div class="w-12 h-12 bg-green-500/10 border border-green-400/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-green-500/20 group-hover:border-green-400/40 group-hover:scale-105">
                        <span class="relative flex h-4 w-4 transition-transform duration-300 group-hover:scale-110">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                        </span>
                    </div>
                    <div>
                        <p class="text-white font-semibold transition-colors duration-300 group-hover:text-green-400">Availability</p>
                        <p class="text-green-400 font-medium">Open for Opportunities</p>
                    </div>
                </div>

                <!-- Response Time -->
                 <div class="flex items-center gap-4 group cursor-default">
                    <div class="w-12 h-12 bg-secondary-500/10 border border-secondary-400/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-secondary-500/20 group-hover:border-secondary-400/40 group-hover:scale-105">
                        <ChatBubbleLeftRightIcon class="w-6 h-6 text-secondary-400 transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <div>
                        <p class="text-white font-semibold transition-colors duration-300 group-hover:text-secondary-400">Let's Connect</p>
                        <p class="text-primary-200 font-medium">Response within 24 hours</p>
                    </div>
                </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8">
                <h4 class="text-lg font-bold text-white mb-4">
                    Social Links
                </h4>
                <div class="flex gap-4">
                    <a href="https://www.linkedin.com/in/naman-bardia/" 
                    target="_blank"
                    class="p-3 bg-primary-500/20 border border-primary-400/30 rounded-xl text-primary-400 hover:bg-primary-500/30 transition-all">
                        <img :src="LinkedinIcon" class="w-5 h-5" />
                    </a>

                    <a href="https://github.com/Namanbardia" 
                    target="_blank"
                    class="p-3 bg-secondary-500/20 border border-secondary-400/30 rounded-xl text-secondary-400 hover:bg-secondary-500/30 transition-all">
                        <img :src="GithubIcon" class="w-5 h-5" />
                    </a>

                    <a href="https://www.instagram.com/namanbardia.10?igsh=MXF0OGh5dDRnMzAxdA==" 
                    target="_blank"
                    class="p-3 bg-primary-500/20 border border-primary-400/30 rounded-xl text-primary-400 hover:bg-primary-500/30 transition-all">
                        <img :src="InstagramIcon" class="w-5 h-5" />
                    </a>
                    <!-- <a href="https://wa.me/918306868368?text=Hello%20Naman" 
                    target="_blank"
                    class="p-3 bg-primary-500/20 border border-primary-400/30 rounded-xl text-primary-400 hover:bg-primary-500/30 transition-all">
                        <img :src="WhatsappIcon" class="w-5 h-5" />
                    </a> -->
                </div>
            </div>
        </div>


        <!-- Contact Form -->
        <div data-aos="fade-left">
            <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label class="text-white text-sm font-medium mb-2 block">
                            Name
                        </label>
                        <input 
                        name="name"
                        required
                        type="text" 
                        class="w-full px-4 py-3 bg-gray-800/50 border border-primary-500/30 rounded-xl text-white placeholder-primary-300 focus:border-primary-400 focus:outline-none transition-all">
                    </div>

                    <div>
                        <label class="text-white text-sm font-medium mb-2 block">
                            Email
                        </label>
                        <input 
                        name="email"
                        required
                        type="email" 
                        class="w-full px-4 py-3 bg-gray-800/50 border border-primary-500/30 rounded-xl text-white placeholder-primary-300 focus:border-primary-400 focus:outline-none transition-all">
                    </div>

                </div>
                    <div>
                        <label class="text-white text-sm font-medium mb-2 block">
                            Subject
                        </label>
                        <input 
                        name="subject"
                        type="text" 
                        class="w-full px-4 py-3 bg-gray-800/50 border border-primary-500/30 rounded-xl text-white placeholder-primary-300 focus:border-primary-400 focus:outline-none transition-all">
                    </div>

                    <div class="sm:col-span-2">
                        <label class="text-white text-sm font-medium mb-2 block">
                            Message
                        </label>
                        <textarea 
                        name="message"
                        rows=4 
                        class="w-full px-4 py-3 bg-gray-800/50 border border-primary-500/30 rounded-xl text-white placeholder-primary-300 focus:border-primary-400 focus:outline-none transition-all">
                        </textarea>
                    </div>

                    <button type="submit" class="w-full bg-linear-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg hover:shadow-primary-500/25 font-semibold py-3 rounded-xl transition-all duration-300 cursor-pointer">
                        Send Message
                    </button>

            </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import LinkedinIcon from '@/assets/SVGs/Linkedin.svg'
import GithubIcon from '@/assets/SVGs/Github.svg'
// import WhatsappIcon from '@/assets/SVGs/Whatsapp.svg'
// import LeetcodeIcon from '@/assets/SVGs/Leetcode.svg'
import InstagramIcon from '@/assets/SVGs/Instagram.svg'
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid';

const toast = ref({
  show: false,
  message: '',
  type: ''
})

const showToast = (message, type) => {
  toast.value = { show: true, message, type }
  setTimeout(() => {
    toast.value.show = false
  }, 3000)
}

const handleSubmit = async (e) => {
  const formData = new FormData(e.target)

  const data = Object.fromEntries(formData.entries())

  const response = await fetch("https://formspree.io/f/mreayvbz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    showToast("Message sent successfully", "success")
    e.target.reset()
  } else {
    showToast("Something went wrong", "error")
  }
}

</script>

<style>

</style>