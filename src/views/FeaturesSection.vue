<template>
  <section id="soluciones" class="relative py-20 bg-gradient-to-br from-gray-50 to-white">
    
    
    <div class="container mx-auto px-6">
      <!-- Encabezado con buen balance -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <span class="inline-block mb-4 px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-medium text-sm tracking-wide">
          PLATAFORMA INTEGRADA
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Soluciones</span> para tu cadena de suministro
        </h2>
        <p class="text-lg text-gray-600">
          Tecnología que optimiza tus operaciones logísticas sin complicaciones
        </p>
      </div>

      <!-- Tarjetas con espaciado equilibrado -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-blue-100"
        >
          <div class="flex items-center mb-6">
            <div class="flex-shrink-0 mr-5">
              <div class="h-14 w-14 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                <i :class="feature.icon" class="text-xl"></i>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-900">{{ feature.title }}</h3>
              <p class="text-gray-600 mt-1">{{ feature.description }}</p>
            </div>
          </div>
          
          <ul class="space-y-3 mb-6">
            <li v-for="(item, i) in feature.items" :key="i" class="flex items-start">
              <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>
          
          <a href="#" class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group">
            Conocer más
            <svg class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- CTA con buen peso visual -->
      <div class="text-center mt-16">
        <a href="#" class="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors">
          Explorar todas las soluciones
          <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
        
        <div class="mt-10">
          <p class="text-sm text-gray-500 mb-4">Confían en nuestra plataforma</p>
          <div class="flex flex-wrap justify-center gap-6 opacity-80">
            <img class="h-7" src="https://logo.clearbit.com/amazon.com" alt="Amazon" loading="lazy">
            <img class="h-7" src="https://logo.clearbit.com/walmart.com" alt="Walmart" loading="lazy">
            <img class="h-7" src="https://logo.clearbit.com/dhl.com" alt="DHL" loading="lazy">
            <img class="h-7" src="https://logo.clearbit.com/maersk.com" alt="Maersk" loading="lazy">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BalancedSolutions",
  data() {
    return {
      features: [
        {
          icon: "fas fa-warehouse",
          title: "Gestión de Inventarios",
          description: "Control inteligente de tus existencias",
          items: [
            "Reabastecimiento predictivo",
            "Alertas de stock crítico",
            "Optimización automática"
          ],
        },
        {
          icon: "fas fa-truck-moving",
          title: "Logística Integrada",
          description: "Visibilidad completa de tu cadena",
          items: [
            "Seguimiento en tiempo real",
            "Optimización de rutas",
            "Gestión de proveedores"
          ],
        },
        {
          icon: "fas fa-chart-line",
          title: "Analítica Avanzada",
          description: "Toma decisiones basadas en datos",
          items: [
            "Dashboards personalizados",
            "Indicadores clave",
            "Reportes automatizados"
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.transition-shadow {
  transition: box-shadow 0.3s ease;
}
.transition-colors {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>