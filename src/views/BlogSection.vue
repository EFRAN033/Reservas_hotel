<template>
  <section id="blog" class="py-16 bg-white">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="text-center mb-12 max-w-2xl mx-auto">
        <p class="text-blue-600 font-medium mb-3 text-sm uppercase tracking-wider">Blog especializado</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Optimiza tu cadena de suministro</h2>
        <p class="text-gray-600">Conoce las últimas tendencias en gestión logística</p>
      </div>

      <!-- Contenedor del carrusel (mobile) y grid (desktop) -->
      <div class="relative">
        <!-- Carrusel solo en mobile -->
        <div class="md:hidden overflow-hidden py-4">
          <div 
            class="flex space-x-4 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            ref="carousel"
            @scroll="handleScroll"
          >
            <div 
              v-for="(post, index) in posts"
              :key="index"
              class="flex-shrink-0 w-[calc(100%-100px)] sm:w-80 transition-all duration-300"
              :class="{
                'scale-90 opacity-80': !isCenter(index),
                'scale-100 shadow-lg': isCenter(index)
              }"
              :style="{
                transform: isCenter(index) ? 'scale(1)' : 'scale(0.9)',
                opacity: isCenter(index) ? '1' : '0.8'
              }"
            >
              <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                <!-- Imagen -->
                <div class="relative h-48">
                  <img
                    :src="post.image"
                    :alt="post.title"
                    class="w-full h-full object-cover"
                  />
                  <div v-if="post.popular" class="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Destacado
                  </div>
                </div>
                
                <!-- Contenido -->
                <div class="p-5">
                  <div class="flex items-center text-gray-500 text-xs mb-3">
                    <span>{{ post.date }}</span>
                    <span class="mx-1">•</span>
                    <span>{{ post.readTime }}</span>
                  </div>
                  
                  <h3 class="text-lg font-bold mb-3 text-gray-900">{{ post.title }}</h3>
                  <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
                  
                  <a href="#" class="text-blue-600 text-sm font-medium hover:underline flex items-center">
                    Leer más
                    <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Grid solo en desktop -->
        <div class="hidden md:grid md:grid-cols-3 gap-6">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <!-- Imagen -->
            <div class="relative h-48">
              <img
                :src="post.image"
                :alt="post.title"
                class="w-full h-full object-cover"
              />
              <div v-if="post.popular" class="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Destacado
              </div>
            </div>
            
            <!-- Contenido -->
            <div class="p-5">
              <div class="flex items-center text-gray-500 text-xs mb-3">
                <span>{{ post.date }}</span>
                <span class="mx-1">•</span>
                <span>{{ post.readTime }}</span>
              </div>
              
              <h3 class="text-lg font-bold mb-3 text-gray-900">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
              
              <a href="#" class="text-blue-600 text-sm font-medium hover:underline flex items-center">
                Leer más
                <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-10">
        <a
          href="#"
          class="inline-flex items-center px-6 py-2.5 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
        >
          Ver todos los artículos
          <svg class="ml-2 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompactBlogSection",
  data() {
    return {
      posts: [
        {
          title: "IA en gestión de inventarios",
          excerpt: "Cómo implementar inteligencia artificial para optimizar tus compras.",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "15 Jun 2023",
          readTime: "8 min",
          popular: true,
        },
        {
          title: "Gestión de riesgos logísticos",
          excerpt: "Metodologías para mitigar riesgos en cadenas globales.",
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "28 May 2023",
          readTime: "6 min",
        },
        {
          title: "Modelos de abastecimiento",
          excerpt: "Estrategias para mercados volátiles sin perder eficiencia.",
          image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
          date: "12 May 2023",
          readTime: "10 min",
        },
      ],
      centerIndex: 0,
      carouselWidth: 0,
      itemWidth: 0
    };
  },
  mounted() {
    this.calculateDimensions();
    window.addEventListener('resize', this.calculateDimensions);

    setInterval(() => {
      this.centerIndex = (this.centerIndex + 1) % this.posts.length;
      this.scrollToCenter();
    }, 3000);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateDimensions);
  },
  methods: {
    calculateDimensions() {
      if (this.$refs.carousel) {
        this.carouselWidth = this.$refs.carousel.offsetWidth;
        this.itemWidth = this.carouselWidth * 0.8; 
      }
    },
    handleScroll() {
      const scrollLeft = this.$refs.carousel.scrollLeft;
      this.centerIndex = Math.round(scrollLeft / this.itemWidth);
    },
    isCenter(index) {
      return index === this.centerIndex;
    },
    scrollToCenter() {
      if (this.$refs.carousel) {
        this.$refs.carousel.scrollTo({
          left: this.centerIndex * this.itemWidth,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
.transition-shadow {
  transition: box-shadow 0.2s ease;
}
.transition-colors {
  transition: background-color 0.2s ease, color 0.2s ease;
}

/* Estilos para el carrusel */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.snap-x {
  scroll-snap-type: x mandatory;
}
.snap-center {
  scroll-snap-align: center;
}

.scale-100 {
  transform: scale(1);
  z-index: 10;
}
.scale-90 {
  transform: scale(0.9);
  z-index: 1;
}
</style>