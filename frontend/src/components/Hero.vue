<template>
  <section class="hero" id="hero">
    <!-- Background Image 
    <div class="image-wrapper">
      <div 
        class="hero-image" 
        :style="{ backgroundImage: `url(${imageUrl})` }"
      ></div>
      <div class="video-overlay"></div>
    </div>-->

    <!-- Content -->
    <div class="hero-content">
      <div class="badge">
        <i class='bx bx-camera-movie'></i>
        <!-- <span>CINEMATOGRAPHER</span> -->
      </div>
      
      <h1 class="hero-title">
        <span class="line line-1">Capturing</span>
        <span class="line line-2">Light & Emotion</span>
      </h1>
      
      <div class="hero-divider"></div>
      
      <p class="hero-subtitle">
        Visual storytelling through the lens — creating cinematic experiences 
        that transcend ordinary perception.
      </p>
      
      <div class="hero-buttons">
        <a href="#portifolio" class="btn btn-primary">
          <i class='bx bx-play-circle'></i>
          Watch Showreel
        </a>
        <a href="#contact" class="btn btn-secondary">
          Let's  Work
          <i class='bx bx-right-arrow-alt'></i>
        </a>
      </div>
      
      <div class="scroll-indicator">
        <span>Scroll</span>
        <i class='bx bx-chevron-down'></i>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '../assets/hero.JPG'

gsap.registerPlugin(ScrollTrigger)

const imageUrl = heroImage

onMounted(() => {
  // GSAP Timeline for hero content
  const tl = gsap.timeline()
  
  // Badge animation
  tl.from('.badge', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out'
  })
  
  // Title lines with stagger
  tl.from('.hero-title .line', {
    opacity: 0,
    y: 60,
    rotationX: -15,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  }, '-=0.3')
  
  // Divider animation
  tl.from('.hero-divider', {
    width: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.5')
  
  // Subtitle
  tl.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.4')
  
  // Buttons
  tl.from('.hero-buttons', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: 'back.out(0.6)'
  }, '-=0.3')
  
  // Scroll indicator
  tl.from('.scroll-indicator', {
    opacity: 0,
    y: -20,
    duration: 0.5
  }, '-=0.2')
  
  // Slow zoom effect on background image
  // gsap.to('.hero-image', {
  //   scale: 1.1,
  //   duration: 20,
  //   repeat: -1,
  //   yoyo: true,
  //   ease: 'none',
  //   delay: 1
  // })
})
</script>

<style scoped>

</style>