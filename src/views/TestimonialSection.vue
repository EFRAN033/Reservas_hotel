<template>
  <section id="testimonios" class="py-24 bg-gradient-to-br from-blue-900 to-gray-900 relative overflow-hidden">
    <!-- Elemento decorativo de fondo -->
    <div class="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-5 text-[20rem] font-black text-teal-400 pointer-events-none select-none">
      SCP
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <span class="inline-block mb-4 px-5 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-bold uppercase tracking-wider">
          TESTIMONIOS
        </span>
        <h2 class="text-4xl font-bold text-white mb-5">
          <span class="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Voces</span> de nuestros clientes
        </h2>
        <p class="text-blue-100 max-w-2xl mx-auto text-lg">
          Empresas que transformaron su cadena de suministro con nuestras soluciones
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="p-10 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-teal-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div class="flex items-start mb-8">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-20 h-20 rounded-full mr-6 border-2 border-teal-400/30"
            />
            <div class="flex-1">
              <h4 class="font-bold text-xl text-white mb-1">{{ testimonial.name }}</h4>
              <p class="text-blue-300">{{ testimonial.position }}</p>
            </div>
            <div class="text-teal-400/30 text-3xl">
              <i class="fas fa-quote-right"></i>
            </div>
          </div>
          <p class="text-blue-100 text-lg mb-8 leading-relaxed">"{{ testimonial.quote }}"</p>
          <div class="flex items-center justify-between">
            <div class="flex">
              <i
                v-for="star in 5"
                :key="star"
                class="fas fa-star text-yellow-400 mr-1"
              ></i>
            </div>
            <span class="text-blue-300 text-sm">{{ testimonial.date }}</span>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <a
          href="#"
          class="inline-flex items-center px-8 py-3.5 border-2 border-teal-400 text-teal-400 font-bold rounded-full hover:bg-teal-400/10 hover:shadow-lg transition-all duration-300"
        >
          Ver más testimonios
          <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UniqueTestimonialSection",
  data() {
    return {
      testimonials: [
        {
          name: "Nina Rodríguez",
          position: "Directora de Logística, Grupo Alimentario S.A.",
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          quote: "Implementar Proveo fue un punto de inflexión para nuestra operación. Redujimos un 60% el tiempo dedicado a gestión de compras y aumentamos la precisión de nuestros inventarios en un 90%. La visibilidad en tiempo real nos permite tomar decisiones estratégicas diarias.",
          date: "Hace 2 meses",
        },
        {
          name: "Carlos Méndez",
          position: "CEO, Distribuciones Continentales",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          quote: "Con Proveo redujimos nuestros costos logísticos en un 35% y mejoramos la precisión de nuestros inventarios. La implementación fue rápida y el equipo de soporte excepcional. Recomendado para cualquier empresa que busque optimizar su cadena de suministro.",
          date: "Hace 5 meses",
        },
      ],
    };
  },
};
</script>

<style scoped>
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}
</style>