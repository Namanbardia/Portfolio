<template>
    <div class="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900">
        <Navbar />
        <Hero />
        <About />
        <ExperienceSkills />
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import ExperienceSkills from './components/ExperienceSkills.vue';
import { ref, onMounted, nextTick } from 'vue';

export default {
  components: {
    Navbar,
    Hero,
    About,
    ExperienceSkills
  },
  setup() {
    const loading = ref(true);
    
    onMounted(async () => {
      await nextTick();
      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: 'ease-in-out',
      });
      loading.value = false;

      setTimeout(() => {
        loading.value = false;
      }, 800);
    });
    
    return { loading };
  }
}
</script>
