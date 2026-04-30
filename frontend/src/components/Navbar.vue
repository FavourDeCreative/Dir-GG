<template>
  <nav class="navbar">
    <!-- Mobile Menu Button -->
    <div class="menu-btn" @click="toggleSidebar">
      <i :class="isOpen ? 'bx bx-x' : 'bx bx-menu'"></i>
    </div>

    <!-- Desktop View -->
    <div class="nav-top desktop-nav">
      <ul class="social-icons">
        <a href="https://www.instagram.com/gbengagomes/" class="social-link"><i class="bx bxl-instagram"></i></a>
        <a href="https://www.facebook.com/gbengagomes/" class="social-link"><i class="bx bxl-facebook"></i></a>
        <a href="" class="social-link"><i class="bx bxl-youtube"></i></a>
        <a href="https://www.tiktok.com/@dir.gg" class="social-link"><i class="bx bxl-tiktok"></i></a>
        <a href="https://ng.linkedin.com/in/gomes-gbenga-baab70b7" class="social-link"><i class="bx bxl-linkedin"></i></a>
      </ul>

      <!-- Centered Logo -->
      <div class="logo-wrapper">
        <a href="#" class="logo">
          <span class="logo-main">DIR GG</span>
          <span class="logo-sub">cinematography</span>
        </a>
      </div>

      <ul class="nav-links">
        <li class="link"><a href="/" class="nav">Home</a></li>
        <li class="link"><a href="#about" class="nav">About</a></li>
        <li class="link"><a href="#portfolio" class="nav">Portfolio</a></li>
        <li class="link"><a href="#contact" class="nav">Contact</a></li>
      </ul>
    </div>

    <!-- Mobile Sidebar Overlay -->
    <div 
      class="sidebar-overlay" 
      :class="{ active: isOpen }" 
      @click="closeSidebar"
    ></div>

    <!-- Mobile Sidebar -->
    <div class="mobile-sidebar" :class="{ active: isOpen }">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <span class="sidebar-logo-main">DIR GG</span>
          <span class="sidebar-logo-sub">cinematography</span>
        </div>
      </div>

      <ul class="sidebar-nav-links">
        <li class="sidebar-link"><a href="/" @click="closeSidebar">Home</a></li>
        <li class="sidebar-link"><a href="#about" @click="closeSidebar">About</a></li>
        <li class="sidebar-link"><a href="#portfolio" @click="closeSidebar">Portfolio</a></li>
        <li class="sidebar-link"><a href="#contact" @click="closeSidebar">Contact</a></li>
      </ul>

      <div class="sidebar-social">
        <a href="https://www.instagram.com/gbengagomes/" class="sidebar-social-link"><i class="bx bxl-instagram"></i></a>
        <a href="https://www.facebook.com/gbengagomes/" class="sidebar-social-link"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="sidebar-social-link"><i class="bx bxl-youtube"></i></a>
        <a href="https://www.tiktok.com/@dir.gg" class="sidebar-social-link"><i class="bx bxl-tiktok"></i></a>
        <a href="https://ng.linkedin.com/in/gomes-gbenga-baab70b7" class="sidebar-social-link"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import gsap from "gsap";

const isOpen = ref(false);

// Explicit control instead of toggle confusion
const toggleSidebar = () => {
  isOpen.value ? closeSidebar() : openSidebar();
};

const openSidebar = () => {
  if (isOpen.value) return; // prevent double trigger

  isOpen.value = true;
  document.body.style.overflow = "hidden";

  gsap.to(".mobile-sidebar", {
    x: 0,
    duration: 0.5,
    ease: "power3.out"
  });

  gsap.to(".sidebar-overlay", {
    opacity: 1,
    visibility: "visible",
    duration: 0.3,
    ease: "power2.out"
  });

  gsap.fromTo(
    ".sidebar-link",
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, stagger: 0.1, duration: 0.4, delay: 0.2 }
  );

  gsap.fromTo(
    ".sidebar-social-link",
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, delay: 0.4 }
  );
};

const closeSidebar = () => {
  if (!isOpen.value) return; // prevent double trigger

  gsap.to(".mobile-sidebar", {
    x: "-100%",
    duration: 0.4,
    ease: "power3.in",
    onComplete: () => {
      isOpen.value = false;
      document.body.style.overflow = "";
    }
  });

  gsap.to(".sidebar-overlay", {
    opacity: 0,
    visibility: "hidden",
    duration: 0.3,
    ease: "power2.in"
  });
};

const handleResize = () => {
  if (window.innerWidth > 768 && isOpen.value) {
    closeSidebar();
  }
};

onMounted(() => {
  const tl = gsap.timeline();

  tl.from(".social-icons", {
    opacity: 0,
    x: -30,
    duration: 0.8,
    ease: "power2.out",
  }).from(
    ".nav-links",
    {
      opacity: 0,
      x: 30,
      duration: 0.8,
      ease: "power2.out",
    },
    "<"
  );

  tl.from(".logo-wrapper", {
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: "back.out(0.7)",
    delay: 0.3,
  });

  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>