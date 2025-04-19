<template>
  <section class="py-20 bg-gradient-to-r from-primary to-blue-800 text-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-yellow-500 font-semibold mb-2">NUESTRO IMPACTO</p>
        <h2 class="text-3xl font-bold mb-4">
          Resultados que transforman negocios
        </h2>
        <p class="text-blue-100 max-w-2xl mx-auto">
          Métricas reales que generan valor tangible para nuestros afileados
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="bg-white/10 p-8 rounded-xl text-center backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-lg hover:border-yellow-500 border-2 border-transparent"
        >
          <div
            :class="`bg-${stat.color}-50/20`"
            class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <i :class="[stat.icon, `text-${stat.color}-400`, 'text-3xl']"></i>
          </div>
          <h3 class="text-4xl font-bold mb-2">{{ stat.value }}</h3>
          <p class="text-blue-100">{{ stat.label }}</p>
          <div class="mt-4 h-1 bg-blue-900 rounded-full overflow-hidden">
            <div
              :class="`bg-${stat.color}-400`"
              class="h-full"
              :style="`width: ${stat.percentage}%`"
            ></div>
          </div>
        </div>
      </div>

      <div class="text-center mt-16">
        <p class="text-blue-200 italic">
          Logramos estos números combinando tecnología de punta con un equipo
          apasionado por la excelencia operativa
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatsSection",
  data() {
    return {
      stats: [
        {
          icon: "fas fa-boxes",
          value: "2,245,341",
          label: "Productos gestionados",
          color: "yellow",
          percentage: 85,
        },
        {
          icon: "fas fa-bolt",
          value: "46,328",
          label: "Pedidos Urgentes",
          color: "red",
          percentage: 65,
        },
        {
          icon: "fas fa-check-circle",
          value: "828,867",
          label: "Entregas Exitosas",
          color: "green",
          percentage: 92,
        },
      ],
    };
  },
};
</script>