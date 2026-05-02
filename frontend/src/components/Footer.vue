<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Top Section -->
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="footer-logo-main">DIR GG</span>
            <span class="footer-logo-sub">cinematography</span>
          </div>
          <p class="footer-description">
            Visual storytelling through the lens — creating cinematic
            experiences that transcend ordinary perception.
          </p>
          <div class="footer-social">
            <a
              href="https://www.instagram.com/gbengagomes/"
              class="social-link"
              target="_blank"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#" class="social-link" target="_blank">
              <i class="bx bxl-youtube"></i>
            </a>
            <a
              href="https://www.tiktok.com/@dir.gg"
              class="social-link"
              target="_blank"
            >
              <i class="bx bxl-tiktok"></i>
            </a>
            <a
              href="https://ng.linkedin.com/in/gomes-gbenga-baab70b7"
              class="social-link"
              target="_blank"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.facebook.com/gbengagomes/"
              class="social-link"
              target="_blank"
            >
              <i class="bx bxl-facebook"></i>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="links-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div class="links-column">
            <h3>Work</h3>
            <ul>
              <li><a href="#portfolio">Movies & Series</a></li>
              <li><a href="#portfolio">Music Videos</a></li>
              <li><a href="#portfolio">Commercials</a></li>
              <li><a href="#portfolio">Short Films</a></li>
            </ul>
          </div>

          <div class="links-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <i class="bx bx-map"></i>
                <span
                  >12 Idowu street, Karaole Estate,<br />College road,
                  Ogba</span
                >
              </li>
              <li>
                <i class="bx bx-envelope"></i>
                <a href="mailto:Gbengagomes@gmail.com">Gbengagomes@gmail.com</a>
              </li>
              <li>
                <i class="bx bx-phone-call"></i>
                <a href="tel:+2348063325268">+234 806 332 5268</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="footer-divider"></div>

      <!-- Bottom Section -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>
            &copy; {{ currentYear }} DIR GG Cinematography. All rights reserved.
          </p>
        </div>
        <div class="footer-credit">
          <p>
            Designed with <i class="bx bx-heart"></i> for cinematic excellence
            by
            <a href="https://www.tiktok.com/@favour_de_creative" target="_blank"
              >Code With Favour</a
            >
          </p>
        </div>
        <button class="back-to-top" @click="scrollToTop">
          <i class="bx bx-up-arrow-alt"></i>
          <span>Back to Top</span>
        </button>
      </div>
    </div>

    <!-- Film Grain Effect -->
    <div class="film-grain"></div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const currentYear = ref(new Date().getFullYear());

const scrollToTop = () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    ease: "power3.inOut",
  });
};

onMounted(() => {
  // GSAP Animation for footer
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".footer-brand", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power3.out",
  })
    .from(
      ".links-column",
      {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )
    .from(
      ".footer-divider",
      {
        width: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.2",
    )
    .from(
      ".copyright, .footer-credit, .back-to-top",
      {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3",
    );
});
</script>

<style scoped></style>
