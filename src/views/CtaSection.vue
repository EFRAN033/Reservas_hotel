<template>
  <section class="py-24 bg-white">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">¿Listo para transformar</span> tu cadena de suministro?
      </h2>
      <p class="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Únete a las empresas líderes que ya están revolucionando sus procesos de compras y abastecimiento con nuestra plataforma inteligente.
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-6 max-w-xl mx-auto">
        <a
          href="#"
          class="px-10 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-full text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          Comenzar prueba gratuita
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
        <a
          href="#"
          class="px-10 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full text-lg hover:bg-blue-50 transition-colors duration-300"
        >
          Hablar con un experto
        </a>
      </div>

      <div class="mt-12 flex flex-wrap items-center justify-center gap-4 text-gray-600">
        <div class="flex items-center">
          <i class="fas fa-check-circle text-teal-500 mr-2"></i>
          <span>Prueba de 14 días</span>
        </div>
        <div class="hidden sm:block">•</div>
        <div class="flex items-center">
          <i class="fas fa-check-circle text-teal-500 mr-2"></i>
          <span>Sin tarjeta requerida</span>
        </div>
        <div class="hidden sm:block">•</div>
        <div class="flex items-center">
          <i class="fas fa-check-circle text-teal-500 mr-2"></i>
          <span>Cancelación en cualquier momento</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CleanCtaSection",
};
</script>