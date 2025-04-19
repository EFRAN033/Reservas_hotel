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

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
        <div
          v-for="(client, index) in clients"
          :key="index"
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
      ]
    };
  }
};
</script>