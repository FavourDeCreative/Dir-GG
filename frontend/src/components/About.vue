<template>
  <section class="about" id="about">
    <div class="about-container">
      <!-- Left Side: Image with Border Lines -->
      <div class="about-image-wrapper">
        <!-- Border Lines -->
        <div class="image-border top-left"></div>
        <div class="image-border top-right"></div>
        <div class="image-border bottom-left"></div>
        <div class="image-border bottom-right"></div>
        
        <div class="about-image">
          <img src="../assets/about.jpg" alt="Cinematographer" />
        </div>
      </div>

      <!-- Right Side: Content -->
      <div class="about-content">
        <div class="about-badge">
          <i class="bx bx-camera"></i>
          <span>ABOUT ME</span>
        </div>

        <h2 class="about-title">
          <span class="title-line">Visual Storyteller</span>
          <span class="title-line accent">Behind the Lens</span>
        </h2>

        <div class="about-divider"></div>

        <p class="about-text">
          With over a decade of experience in cinematography, I've dedicated my
          life to capturing moments that transcend ordinary perception. My
          passion lies in transforming light into emotion and movement into
          poetry.
        </p>

        <p class="about-text">
          Every frame tells a story, and I strive to create visual narratives
          that resonate deeply with audiences. From independent films to major
          productions, my approach combines technical precision with artistic
          vision.
        </p>

        <div class="about-stats">
          <div class="stat">
            <div class="stat-number">
              <span class="counter" data-count="10">0</span>
              <span>+</span>
            </div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat">
            <div class="stat-number">
              <span class="counter" data-count="50">0</span>
              <span>+</span>
            </div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat">
            <div class="stat-number">
              <span class="counter" data-count="15">0</span>
              <span>+</span>
            </div>
            <div class="stat-label">Awards Won</div>
          </div>
        </div>

        <div class="about-skills">
          <div class="skill-tag">Cinematography</div>
          <div class="skill-tag">Color Grading</div>
          <div class="skill-tag">Direction</div>
          <div class="skill-tag">Editing</div>
          <div class="skill-tag">Visual Effects</div>
          <div class="skill-tag">Storyboarding</div>
        </div>

        <a href="#contact" class="about-btn">
          <span>Let's Work Together</span>
          <i class="bx bx-right-arrow-alt"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // GSAP Timeline for About section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Animate border lines first
  tl.from(".image-border.top-left", {
    width: 0,
    height: 0,
    duration: 0.6,
    ease: "power2.out",
  })
    .from(
      ".image-border.top-right",
      {
        width: 0,
        height: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      ".image-border.bottom-left",
      {
        width: 0,
        height: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      ".image-border.bottom-right",
      {
        width: 0,
        height: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );

  // Animate image
  tl.from(
    ".about-image",
    {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.3"
  );

  // Animate content
  tl.from(
    ".about-badge",
    {
      opacity: 0,
      x: -30,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.2"
  );

  tl.from(
    ".about-title .title-line",
    {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    },
    "-=0.4"
  );

  tl.from(
    ".about-divider",
    {
      width: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.3"
  );

  tl.from(
    ".about-text",
    {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    },
    "-=0.4"
  );

  tl.from(
    ".stat",
    {
      opacity: 0,
      y: 30,
      duration: 0.5,
      stagger: 0.15,
      ease: "back.out(0.6)",
    },
    "-=0.3"
  );

  tl.from(
    ".skill-tag",
    {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      stagger: 0.08,
      ease: "power2.out",
    },
    "-=0.2"
  );

  tl.from(
    ".about-btn",
    {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.1"
  );

  // Counter animation
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute("data-count"));
      const current = parseInt(counter.innerText);
      const increment = target / 50;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    // Trigger counter when element comes into view
    ScrollTrigger.create({
      trigger: counter,
      start: "top 80%",
      onEnter: () => updateCount(),
      once: true,
    });
  });
});
</script>
