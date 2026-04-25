<template>
  <section class="contact" id="contact">
    <div class="contact-container">
      <div class="contact-header">
        <div class="contact-badge">
          <i class='bx bx-message-alt-detail'></i>
          <span>GET IN TOUCH</span>
        </div>
        <h2 class="contact-title">
          <span class="title-line">Let's Create</span>
          <span class="title-line accent">Something Amazing</span>
        </h2>
        <div class="contact-divider"></div>
        <p class="contact-subtitle">
          Have a project in mind? Let's collaborate and bring your vision to life
        </p>
      </div>

      <div class="contact-wrapper">
        <!-- Left Side: Image + Contact Info -->
        <div class="contact-left">
          <!-- Profile Image -->
          <div class="contact-image-wrapper">
            <div class="image-border top-left"></div>
            <div class="image-border top-right"></div>
            <div class="image-border bottom-left"></div>
            <div class="image-border bottom-right"></div>
            <div class="contact-image">
              <img src="../assets/contact.jpg" alt="Cinematographer Profile" />
            </div>
          </div>

          <!-- Contact Info Cards -->
          <div class="contact-info">
            <div class="info-card">
              <div class="info-icon">
                <i class='bx bx-map'></i>
              </div>
              <div class="info-content">
                <h3>Visit Me</h3>
                <p>12 Idowu street, Karaole Estate,<br />College road, Ogba</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class='bx bx-envelope'></i>
              </div>
              <div class="info-content">
                <h3 class="it">Email Me</h3>
                <a href="mailto:Gbengagomes@gmail.com">Gbengagomes@gmail.com</a>
              </div>
            </div>

            <div class="info-card">
              <div class="info-icon">
                <i class='bx bx-phone-call'></i>
              </div>
              <div class="info-content">
                <h3 class="it">Call Me</h3>
                <a href="tel:+2348063325268">+234 806 332 5268</a>
              </div>
            </div>

            <div class="social-connect">
              <h3>Connect With Me</h3>
              <div class="social-links">
                <a href="https://www.instagram.com/gbengagomes/" class="social-icon" aria-label="Instagram" target="_blank">
                  <i class='bx bxl-instagram'></i>
                </a>
                <a href="https://www.tiktok.com/@dir.gg" class="social-icon" aria-label="TikTok" target="_blank">
                  <i class='bx bxl-tiktok'></i>
                </a>
                <a href="https://ng.linkedin.com/in/gomes-gbenga-baab70b7" class="social-icon" aria-label="LinkedIn" target="_blank">
                  <i class='bx bxl-linkedin'></i>
                </a>
                <a href="https://www.facebook.com/gbengagomes/" class="social-icon" aria-label="Facebook" target="_blank">
                  <i class='bx bxl-facebook'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.name" 
                placeholder="Your Name"
                required
              />
              <i class='bx bx-user'></i>
            </div>
            
            <div class="form-group">
              <input 
                type="email" 
                v-model="formData.email" 
                placeholder="Your Email"
                required
              />
              <i class='bx bx-envelope'></i>
            </div>
            
            <div class="form-group">
              <input 
                type="text" 
                v-model="formData.subject" 
                placeholder="Subject"
                required
              />
              <i class='bx bx-topic'></i>
            </div>
            
            <div class="form-group">
              <textarea 
                v-model="formData.message" 
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <i class='bx bx-message-alt-detail'></i>
            </div>
            
            <button type="submit" class="submit-btn">
              <span>Send Message</span>
              <i class='bx bx-send'></i>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Success Toast Message -->
    <div class="toast-message" :class="{ show: showToast }">
      <i class='bx bx-check-circle'></i>
      <span>Message sent successfully! I'll get back to you soon.</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const showToast = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
  
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 75%',
    }
  });

  tl.from('.contact-badge', {
    opacity: 0,
    y: 30,
    duration: 0.6
  })
  .from('.contact-title .title-line', {
    opacity: 0,
    y: 60,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power4.out'
  }, "-=0.3")

  /* IMAGE + BORDER */
  .from('.contact-image', {
    scale: 0.85,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  }, "-=0.3")

  .to('.image-border', {
    scale: 1,
    opacity: 1,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out(1.7)'
  }, "-=0.6")

  /* CARDS */
  .from('.info-card', {
    y: 40,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    ease: 'power3.out'
  }, "-=0.4")

  /* FORM */
  .from('.form-group', {
    y: 40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power3.out'
  }, "-=0.5")

  .from('.submit-btn', {
    scale: 0.9,
    opacity: 0,
    duration: 0.5,
    ease: 'back.out(1.7)'
  }, "-=0.3");
});

  // Add inside onMounted AFTER timeline

gsap.to(".contact-image img", {
  y: 30,
  ease: "none",
  scrollTrigger: {
    trigger: ".contact",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
  
//   tl.from('.contact-badge', {
//     opacity: 0,
//     y: 20,
//     duration: 0.6,
//     ease: 'power2.out'
//   })
//   .from('.contact-title .title-line', {
//     opacity: 0,
//     y: 40,
//     stagger: 0.2,
//     duration: 0.8,
//     ease: 'power3.out'
//   }, '-=0.3')
//   .from('.contact-divider', {
//     width: 0,
//     duration: 0.6,
//     ease: 'power2.out'
//   }, '-=0.4')
//   .from('.contact-subtitle', {
//     opacity: 0,
//     y: 20,
//     duration: 0.6,
//     ease: 'power2.out'
//   }, '-=0.3')
//   .from('.image-border', {
//     opacity: 0,
//     scale: 0,
//     duration: 0.5,
//     stagger: 0.1,
//     ease: 'back.out(0.6)'
//   }, '-=0.2')
//   .from('.contact-image', {
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.8,
//     ease: 'power3.out'
//   }, '-=0.4')
//   .from('.info-card', {
//     opacity: 0,
//     x: -30,
//     stagger: 0.15,
//     duration: 0.6,
//     ease: 'power2.out'
//   }, '-=0.2')
//   .from('.social-connect', {
//     opacity: 0,
//     y: 20,
//     duration: 0.6,
//     ease: 'power2.out'
//   }, '-=0.1')
//   .from('.form-group', {
//     opacity: 0,
//     x: 30,
//     stagger: 0.1,
//     duration: 0.6,
//     ease: 'power2.out'
//   }, '-=0.5')
//   .from('.submit-btn', {
//     opacity: 0,
//     scale: 0.9,
//     duration: 0.5,
//     ease: 'back.out(0.6)'
//   }, '-=0.2')
// })
</script>

<style scoped>

</style>