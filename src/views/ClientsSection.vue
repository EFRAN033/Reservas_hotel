<template>
  <section id="clientes" class="py-16 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block mb-3 px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
          CONFÍAN EN NOSOTROS
        </span>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Empresas líderes</span> en sus sectores
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Nuestra plataforma impulsa las operaciones de las organizaciones más innovadoras
        </p>
      </div>

      <!-- Versión Desktop: Grid estático -->
      <div class="hidden md:grid grid-cols-4 lg:grid-cols-7 gap-8">
        <div
          v-for="(client, index) in clients"
          :key="'desktop-' + index"
          class="flex justify-center items-center h-20"
        >
          <img
            :src="client.logo"
            :alt="`Logo ${client.name}`"
            class="h-12 opacity-80 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Versión Mobile Carrusel automático -->
      <div class="md:hidden relative overflow-hidden h-24 w-full">
        <div 
          class="absolute top-0 left-0 flex items-center h-full carrusel-track"
          :style="{ width: carruselWidth }"
        >
          <div 
            v-for="(client, index) in duplicatedClients" 
            :key="'mobile-' + index"
            class="flex-shrink-0 flex justify-center items-center w-32 px-4"
          >
            <img
              :src="client.logo"
              :alt="`Logo ${client.name}`"
              class="max-h-12 max-w-[100px] opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import cliente1 from '@/assets/imagenes/cliente1.svg';
import cliente2 from '@/assets/imagenes/cliente2.svg';
import cliente3 from '@/assets/imagenes/cliente3.svg';
import cliente4 from '@/assets/imagenes/cliente4.svg';
import cliente5 from '@/assets/imagenes/cliente5.svg';
import cliente6 from '@/assets/imagenes/cliente6.svg';
import cliente7 from '@/assets/imagenes/cliente7.svg';

export default {
  name: "ClientsSection",
  data() {
    return {
      clients: [
        { name: "Google", logo: cliente1 },
        { name: "Amazon", logo: cliente2 },
        { name: "Microsoft", logo: cliente3 },
        { name: "Walmart", logo: cliente4 },
        { name: "DHL", logo: cliente5 },
        { name: "Maersk", logo: cliente6 },
        { name: "Coca Cola", logo: cliente7 }
      ],
      carruselSpeed: 30 
    };
  },
  computed: {
    duplicatedClients() {
      return [...this.clients, ...this.clients]; 
    },
    carruselWidth() {
      return `${this.clients.length * 160}px`; 
    }
  },
  mounted() {
    this.startCarrusel();
  },
  methods: {
    startCarrusel() {
      const carruselTrack = document.querySelector('.carrusel-track');
      if (carruselTrack) {
        const animation = carruselTrack.animate(
          [
            { transform: 'translateX(0)' },
            { transform: `translateX(-${this.carruselWidth})` }
          ],
          {
            duration: this.carruselSpeed * 1000,
            iterations: Infinity
          }
        );
        
        // Pausar al hacer hover (opcional)
        carruselTrack.addEventListener('mouseenter', () => animation.pause());
        carruselTrack.addEventListener('mouseleave', () => animation.play());
      }
    }
  }
};
</script>

<style scoped>

.carrusel-track {
  will-change: transform; 
}


img {
  object-fit: contain;
  height: auto;
}
</style>