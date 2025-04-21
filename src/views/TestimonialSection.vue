<template>
  <section id="testimonios" class="py-16 bg-gradient-to-br from-blue-900 to-gray-900">
    <div class="container mx-auto px-4 sm:px-6">
      <!-- Encabezado -->
      <div class="text-center mb-12">
        <span class="inline-block mb-3 px-4 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold uppercase">
          TESTIMONIOS
        </span>
        <h2 class="text-3xl font-bold text-white mb-2">
          <span class="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Voces</span> de confianza
        </h2>
        <p class="text-blue-100 max-w-md mx-auto">
          Empresas que transformaron su cadena de suministro
        </p>
      </div>

      <!-- Testimonios -->
      <div class="grid gap-6 md:grid-cols-2">
        <div 
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="p-6 rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700 hover:border-teal-400 transition-all"
        >
          <div class="flex items-start gap-4 mb-4">
            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full border border-teal-400/30"/>
            <div>
              <h4 class="font-bold text-white">{{ testimonial.name }}</h4>
              <p class="text-blue-300 text-sm">{{ testimonial.position }}</p>
            </div>
          </div>
          <p class="text-blue-100 mb-4">"{{ testimonial.quote }}"</p>
          <div class="flex justify-between items-center">
            <div class="flex text-yellow-400">
              <i v-for="star in 5" :key="star" class="fas fa-star text-xs"/>
            </div>
            <span class="text-blue-300 text-sm">{{ testimonial.date }}</span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-10">
        <a href="#" class="inline-flex items-center px-6 py-2 border border-teal-400 text-teal-400 rounded-full text-sm hover:bg-teal-400/10 transition">
          Ver más testimonios
          <i class="fas fa-chevron-right ml-2 text-xs"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Nina Rodríguez",
          position: "Directora de Logística",
          avatar: "https://randomuser.me/api/portraits/women/65.jpg",
          quote: "Redujimos un 60% el tiempo en gestión de compras con mayor precisión en inventarios.",
          date: "Hace 2 meses"
        },
        {
          name: "Carlos Méndez",
          position: "CEO Distribuciones",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          quote: "Costos logísticos reducidos 35% con implementación rápida y soporte excepcional.",
          date: "Hace 5 meses"
        }
      ]
    };
  }
};
</script>