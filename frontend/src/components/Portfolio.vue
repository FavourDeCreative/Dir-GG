<template>
  <section class="portfolio" id="portfolio">
    <div class="portfolio-container">
      <div class="portfolio-header">
        <div class="portfolio-badge">
          <i class='bx bx-show'></i>
          <span>MY WORK</span>
        </div>
        <h2 class="portfolio-title">
          <span class="title-line">Featured</span>
          <span class="title-line accent">Cinematography</span>
        </h2>
        <div class="portfolio-divider"></div>
        <p class="portfolio-subtitle">
          A curated collection of my finest work across movies, series, and music videos
        </p>
      </div>

      <!-- Movies & Series Section -->
      <div class="portfolio-category-section">
        <div class="category-header">
          <div class="category-icon">
            <i class='bx bx-camera-movie'></i>
          </div>
          <h3 class="category-title">Movies & Series</h3>
          <div class="category-line"></div>
        </div>

        <!-- Movies Slider -->
        <div class="slider-container">
          <button class="slider-nav prev-btn movies-prev" @click="prevSlide('movies')">
            <i class='bx bx-chevron-left'></i>
          </button>
          
          <div class="slider-wrapper">
            <div class="slider-track" :ref="el => setSliderTrack('movies', el)">
              <div 
                v-for="(item, index) in moviesData" 
                :key="index"
                class="portfolio-item"
              >
                <div class="portfolio-card">
                  <div class="card-image">
                    <img :src="getYouTubeThumbnail(item.url)" :alt="item.title" />
                    <div class="card-overlay">
                      <button class="play-btn" @click="openVideoModal(item.url, item.title)">
                        <i class='bx bx-play-circle'></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-content">
                    <h3 class="card-title">{{ item.title }}</h3>
                    <div class="card-category">
                      <i class='bx bx-tag'></i>
                      <span>{{ item.type || 'Movie/Series' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button class="slider-nav next-btn movies-next" @click="nextSlide('movies')">
            <i class='bx bx-chevron-right'></i>
          </button>
        </div>

        <!-- Movies Slider Indicators -->
        <div class="slider-indicators movies-indicators">
          <button 
            v-for="i in moviesTotalSlides" 
            :key="i"
            class="indicator"
            :class="{ active: moviesCurrentSlide === i - 1 }"
            @click="goToSlide('movies', i - 1)"
          ></button>
        </div>
      </div>

      <!-- Music Videos Section -->
      <div class="portfolio-category-section">
        <div class="category-header">
          <div class="category-icon">
            <i class='bx bx-music'></i>
          </div>
          <h3 class="category-title">Music Videos</h3>
          <div class="category-line"></div>
        </div>

        <!-- Music Slider -->
        <div class="slider-container">
          <button class="slider-nav prev-btn music-prev" @click="prevSlide('music')">
            <i class='bx bx-chevron-left'></i>
          </button>
          
          <div class="slider-wrapper">
            <div class="slider-track" :ref="el => setSliderTrack('music', el)">
              <div 
                v-for="(item, index) in musicData" 
                :key="index"
                class="portfolio-item"
              >
                <div class="portfolio-card">
                  <div class="card-image">
                    <img :src="getYouTubeThumbnail(item.url)" :alt="item.title" />
                    <div class="card-overlay">
                      <button class="play-btn" @click="openVideoModal(item.url, item.title)">
                        <i class='bx bx-play-circle'></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-content">
                    <h3 class="card-title">{{ item.title }}</h3>
                    <div class="card-category">
                      <i class='bx bx-tag'></i>
                      <span>{{ item.type || 'Music Video' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button class="slider-nav next-btn music-next" @click="nextSlide('music')">
            <i class='bx bx-chevron-right'></i>
          </button>
        </div>

        <!-- Music Slider Indicators -->
        <div class="slider-indicators music-indicators">
          <button 
            v-for="i in musicTotalSlides" 
            :key="i"
            class="indicator"
            :class="{ active: musicCurrentSlide === i - 1 }"
            @click="goToSlide('music', i - 1)"
          ></button>
        </div>
      </div>
    </div>

    <!-- Video Modal -->
    <div class="video-modal" :class="{ active: showModal }" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-modal" @click="closeModal">
          <i class='bx bx-x'></i>
        </button>
        <h3 class="modal-title">{{ modalTitle }}</h3>
        <div class="video-wrapper">
          <iframe 
            :src="modalUrl" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Movies & Series Data
const moviesData = ref([
  { title: "THIS IS IT", url: "https://youtu.be/IuxwXmIXuCU?si=x43x5d9Tb_6Hy7vl", type: "Movie" },
  { title: "YOU ME MAYBE", url: "https://youtu.be/0CFeuZJXaYE?si=rB7d7LR5a6SO3nAq", type: "Movie" },
  { title: "LEAKED", url: "https://www.instagram.com/reel/CmZ9od3q0Wi/?igshid=MzRlODBiNWFlZA%3D%3D", type: "Movie" },
  { title: "INSPECTOR K Season 5", url: "https://youtu.be/fYazSZ6yACY", type: "Series" },
  { title: "ENTANGLED", url: "https://youtu.be/y-cYt61YMYgcw", type: "Movie" },
  { title: "PARALLEL LINES", url: "https://youtu.be/L0H0wioI4EU?si=LvimPR3eVzDhyGnB", type: "Short Film" }
])

// Music Videos Data
const musicData = ref([
  { title: "Jonny Drille, Ayra Starr & Young John - COLORADO", url: "https://www.youtube.com/watch?v=MS7I2kVp0bw", type: "Music Video" },
  { title: "SKIBII - DATS HOW STARZ DO", url: "https://www.youtube.com/watch?v=ASM6AfzXMvc", type: "Music Video" },
  { title: "SPYRO - WHO IS YOUR GUY", url: "https://youtu.be/OHnXY9F7m9c", type: "Music Video" },
  { title: "DJ NEPTUNE & SPYRO - COUNT YOUR BLESSINGS", url: "https://youtu.be/QRtaKaUkq_k?si=Se6df5UoCadFSijo", type: "Music Video" },
  { title: "MAJOR LAZER & JOEBOY", url: "https://youtu.be/aOo7VfJr5HE?si=Ms-tlnY4UzCiZyj0", type: "Music Video" },
  { title: "GAFGOLD - COLLECT", url: "https://youtu.be/gbgWwn3kFUQ", type: "Music Video" },
  { title: "RIOSOUNDZ - ONLY YOU", url: "https://youtu.be/-8QghYVPlXA?si=EYM3NJ3M0smnpl3R", type: "Music Video" },
  { title: "JOSSY - KINGKONG", url: "https://youtu.be/zzJUOvUB50g?si=-OKJfRTX7Ua-Qhwx", type: "Music Video" },
  { title: "TAM X - BANA", url: "https://youtu.be/h-MlBkOAT3U?si=n8actq68-Wyk2XId", type: "Music Video" },
  { title: "IB-KAY - EKO", url: "https://youtu.be/6uyGZurovb4", type: "Music Video" },
])

// Slider state for movies
const moviesCurrentSlide = ref(0)
const moviesSliderTrack = ref(null)
const moviesItemsPerSlide = ref(3)
const moviesTotalSlides = ref(Math.ceil(moviesData.value.length / moviesItemsPerSlide.value))

// Slider state for music
const musicCurrentSlide = ref(0)
const musicSliderTrack = ref(null)
const musicItemsPerSlide = ref(3)
const musicTotalSlides = ref(Math.ceil(musicData.value.length / musicItemsPerSlide.value))

// Modal state
const showModal = ref(false)
const modalUrl = ref('')
const modalTitle = ref('')

const setSliderTrack = (type, el) => {
  if (type === 'movies' && el) {
    moviesSliderTrack.value = el
  } else if (type === 'music' && el) {
    musicSliderTrack.value = el
  }
}

const getYouTubeThumbnail = (url) => {
  let videoId = ''
  if (url.includes('youtu.be')) {
    videoId = url.split('/').pop().split('?')[0]
  } else if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1].split('&')[0]
  }
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

const getEmbedUrl = (url) => {
  let videoId = ''
  if (url.includes('youtu.be')) {
    videoId = url.split('/').pop().split('?')[0]
  } else if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1].split('&')[0]
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`
}

const openVideoModal = (url, title) => {
  modalUrl.value = getEmbedUrl(url)
  modalTitle.value = title
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  modalUrl.value = ''
  document.body.style.overflow = ''
}

const nextSlide = (type) => {
  if (type === 'movies') {
    if (moviesCurrentSlide.value < moviesTotalSlides.value - 1) {
      moviesCurrentSlide.value++
      animateSlide('movies')
    }
  } else if (type === 'music') {
    if (musicCurrentSlide.value < musicTotalSlides.value - 1) {
      musicCurrentSlide.value++
      animateSlide('music')
    }
  }
}

const prevSlide = (type) => {
  if (type === 'movies') {
    if (moviesCurrentSlide.value > 0) {
      moviesCurrentSlide.value--
      animateSlide('movies')
    }
  } else if (type === 'music') {
    if (musicCurrentSlide.value > 0) {
      musicCurrentSlide.value--
      animateSlide('music')
    }
  }
}

const goToSlide = (type, index) => {
  if (type === 'movies') {
    moviesCurrentSlide.value = index
    animateSlide('movies')
  } else if (type === 'music') {
    musicCurrentSlide.value = index
    animateSlide('music')
  }
}

const animateSlide = (type) => {
  if (type === 'movies' && moviesSliderTrack.value) {
    const slideWidth = moviesSliderTrack.value.parentElement.offsetWidth
    gsap.to(moviesSliderTrack.value, {
      x: -(moviesCurrentSlide.value * slideWidth),
      duration: 0.6,
      ease: "power3.inOut"
    })
  } else if (type === 'music' && musicSliderTrack.value) {
    const slideWidth = musicSliderTrack.value.parentElement.offsetWidth
    gsap.to(musicSliderTrack.value, {
      x: -(musicCurrentSlide.value * slideWidth),
      duration: 0.6,
      ease: "power3.inOut"
    })
  }
}

// Update items per slide based on screen width
const updateItemsPerSlide = () => {
  const width = window.innerWidth
  if (width >= 968) {
    moviesItemsPerSlide.value = 3
    musicItemsPerSlide.value = 3
  } else if (width >= 768) {
    moviesItemsPerSlide.value = 2
    musicItemsPerSlide.value = 2
  } else {
    moviesItemsPerSlide.value = 1
    musicItemsPerSlide.value = 1
  }
  
  moviesTotalSlides.value = Math.ceil(moviesData.value.length / moviesItemsPerSlide.value)
  musicTotalSlides.value = Math.ceil(musicData.value.length / musicItemsPerSlide.value)
  
  // Reset slides
  moviesCurrentSlide.value = 0
  musicCurrentSlide.value = 0
  
  // Re-animate
  setTimeout(() => {
    animateSlide('movies')
    animateSlide('music')
  }, 100)
}

const handleResize = () => {
  updateItemsPerSlide()
}

onMounted(() => {
  updateItemsPerSlide()
  
  // Initial animation for portfolio section
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.portfolio',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  })
  
  tl.from('.portfolio-badge', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out'
  })
  .from('.portfolio-title .title-line', {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.3')
  .from('.portfolio-divider', {
    width: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.4')
  .from('.portfolio-subtitle', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.3')
  .from('.portfolio-category-section', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.2')
  
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>

</style>