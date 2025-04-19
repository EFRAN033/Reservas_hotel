<template>
  <section class="py-24 bg-gradient-to-br from-gray-50 to-white">
    <div class="container mx-auto px-8 sm:px-12">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <!-- Imagen con elemento flotante -->
        <div class="md:w-1/2">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Smart Purchasing System"
              class="rounded-2xl shadow-xl w-full border border-gray-200 transition-transform duration-500 hover:scale-[1.02]"
            />
            <div
              class="absolute -top-8 -left-8 bg-white p-6 rounded-xl shadow-lg hidden md:block"
            >
              <div class="flex items-center">
                <div class="bg-blue-100 p-4 rounded-lg mr-4">
                  <i class="fas fa-chart-line text-blue-600 text-2xl"></i>
                </div>
                <div>
                  <p class="text-gray-500 text-sm">Crecimiento promedio</p>
                  <p class="font-bold text-xl text-gray-900">+28% anual</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenido textual -->
        <div class="md:w-1/2">
          <span class="inline-block mb-4 px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold uppercase tracking-wider">
            INNOVACIÓN
          </span>
          <h2 class="text-4xl font-bold text-gray-900 mb-8 leading-tight">
            <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Tecnología</span> que anticipa el futuro
          </h2>
          <p class="text-gray-600 text-lg mb-10 leading-relaxed">
            Nuestra plataforma combina inteligencia artificial avanzada, análisis predictivo y automatización inteligente para ofrecerte una solución completa que transforma tu cadena de suministro.
          </p>

          <!-- Características -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div 
              v-for="(feature, index) in features"
              :key="index"
              class="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div class="flex items-center mb-4">
                <div class="bg-gradient-to-r from-blue-100 to-teal-50 p-3 rounded-lg mr-4">
                  <i :class="feature.icon" class="text-blue-600 text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-1">{{ feature.title }}</h3>
                  <p class="text-gray-500">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Botones -->
          <div class="flex flex-wrap gap-6">
            <a
              href="#"
              class="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Regístrate Gratis
              <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <a
              href="#"
              class="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-colors duration-300"
            >
              Saber más
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EnhancedDesignSection",
  data() {
    return {
      features: [
        {
          icon: "fas fa-brain",
          title: "IA Predictiva",
          description: "Anticipa demandas y evita desabastecimientos",
        },
        {
          icon: "fas fa-robot",
          title: "Automatización",
          description: "Reduce errores y ahorra tiempo",
        },
        {
          icon: "fas fa-network-wired",
          title: "Integración",
          description: "Conecta todos tus sistemas",
        },
        {
          icon: "fas fa-shield-check",
          title: "Seguridad",
          description: "Protege tus datos sensibles",
        },
      ],
    };
  },
};
</script>