<template>
  <section id="precios" class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block mb-3 px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
          PRECIOS
        </span>
        <h2 class="text-3xl font-bold text-gray-900 mb-5">
          <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Planes flexibles</span> para cada necesidad
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Elige la solución que mejor se adapte a tu operación logística
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          :class="{ 'border-2 border-blue-600 shadow-lg': plan.popular }"
          class="bg-white p-7 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
        >
          <div
            v-if="plan.popular"
            class="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-bold px-4 py-2 rounded-bl-lg rounded-tr-lg"
          >
            RECOMENDADO
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-900">{{ plan.name }}</h3>
          <p class="text-gray-500 mb-5">{{ plan.description }}</p>
          <div class="mb-6">
            <span class="text-4xl font-bold">{{ plan.price }}</span>
            <span class="text-gray-400">/mes</span>
          </div>
          <ul class="space-y-3 mb-7">
            <li
              v-for="(feature, i) in plan.features"
              :key="i"
              class="flex items-start"
              :class="{ 'text-gray-400': !feature.included }"
            >
              <i
                :class="
                  feature.included
                    ? 'fas fa-check text-teal-500 mt-1 mr-3'
                    : 'fas fa-times text-gray-300 mt-1 mr-3'
                "
              ></i>
              <span>{{ feature.text }}</span>
            </li>
          </ul>
          <a
            href="#"
            :class="
              plan.popular
                ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold px-6 py-3 rounded-full w-full text-center hover:shadow-md'
                : 'border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-full w-full text-center hover:bg-blue-50'
            "
          >
            Comenzar ahora
          </a>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-gray-600">
          ¿Necesitas un plan a medida?
          <a href="#" class="text-blue-600 font-semibold hover:underline">Contáctanos</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BalancedPricingSection",
  data() {
    return {
      plans: [
        {
          name: "Básico",
          description: "Ideal para emprendimientos y pequeñas empresas",
          price: "S/299",
          popular: false,
          features: [
            { text: "Gestión de hasta 5 proveedores", included: true },
            { text: "500 pedidos mensuales", included: true },
            { text: "Soporte por correo electrónico", included: true },
            { text: "Reportes básicos", included: false },
          ],
        },
        {
          name: "Profesional",
          description: "Perfecto para empresas en crecimiento",
          price: "S/799",
          popular: true,
          features: [
            { text: "Gestión de hasta 20 proveedores", included: true },
            { text: "5,000 pedidos mensuales", included: true },
            { text: "Soporte prioritario 24/5", included: true },
            { text: "Reportes avanzados", included: true },
          ],
        },
        {
          name: "Empresa",
          description: "Solución completa para operaciones grandes",
          price: "S/1,999",
          popular: false,
          features: [
            { text: "Proveedores ilimitados", included: true },
            { text: "Pedidos ilimitados", included: true },
            { text: "Soporte dedicado 24/7", included: true },
            { text: "Reportes personalizados", included: true },
          ],
        },
      ],
    };
  },
};
</script>