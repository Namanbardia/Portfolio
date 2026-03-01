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
                Contact Information
            </h3>
            <!-- Email -->
            <div class="space-y-6">
                <div class="flex items-center gap-4">
                    <EnvelopeIcon class="w-6 h-6 text-primary-400" />
                    <div>
                        <p class="text-white font-semibold">Email</p>
                        <p class="text-primary-200 font-semibold">bardiaji10@gmail.com</p>
                    </div>
                </div>

                <!-- Phone -->
                <div class="flex items-center gap-4">
                    <PhoneIcon class="w-6 h-6 text-primary-400" />
                    <div>
                        <p class="text-white font-semibold">Phone</p>
                        <p class="text-primary-200 font-semibold">+91 830 6868 368</p>
                    </div>
                </div>

                <!-- Location -->
                 <div class="flex items-center gap-4">
                    <MapPinIcon class="w-6 h-6 text-primary-400" />
                    <div>
                        <p class="text-white font-semibold">Location</p>
                        <p class="text-primary-200 font-semibold">Rohini, New Delhi, India</p>
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
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleLeftRightIcon, UserGroupIcon, ShareIcon } from '@heroicons/vue/24/solid';

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