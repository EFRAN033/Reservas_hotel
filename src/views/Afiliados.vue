<template>
    <header class="fixed w-full bg-white shadow-sm z-50">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Botón de retroceso mejorado -->
          <button 
            @click="goBack"
            class="group flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            <svg 
              class="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" 
              viewBox="0 0 320 512"
              fill="currentColor"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"/>
            </svg>
            <span class="text-sm font-medium text-gray-600 group-hover:text-blue-600 hidden sm:inline">Volver</span>
          </button>
          
          <!-- Logo o título opcional -->
          <h1 class="text-lg font-semibold text-gray-800">
            <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Nuestros Proveedores
            </span>
          </h1>
          
          <!-- Espacio balanceado -->
          <div class="w-10"></div>
        </div>
      </div>
    </header>
  
    <!-- Sección de Afiliados mejorada -->
    <section id="afiliados" class="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div class="container mx-auto px-4 sm:px-6">
        <!-- Encabezado mejorado -->
        <div class="text-center mb-16 px-4">
          <span class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-3">
            RED DE PROVEEDORES
          </span>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Nuestros Afiliados de Confianza
            </span>
          </h2>
          <p class="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Conectamos tu negocio con los mejores proveedores certificados, garantizando calidad, disponibilidad continua y los mejores precios del mercado.
          </p>
        </div>
  
        <!-- Filtros de categoría (nuevo elemento) -->
        <div class="flex flex-wrap justify-center gap-3 mb-12 px-4">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="filterByCategory(category.id)"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              activeCategory === category.id 
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
  
        <!-- Grid de categorías mejorado -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <!-- Tarjeta mejorada - Prendas -->
          <div 
            class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1"
            @mouseenter="hoverCard = 'prendas'"
            @mouseleave="hoverCard = null"
          >
            <div class="relative h-52 bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center">
              <svg 
                class="h-24 w-24 text-blue-600 transition-transform duration-300" 
                :class="{'scale-110': hoverCard === 'prendas'}"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              <div class="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full shadow-xs text-xs font-semibold text-blue-600">
                24 Proveedores
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-3">
                <h3 class="text-xl font-bold text-gray-900">Prendas</h3>
                <span class="ml-2 px-2 py-1 text-xs font-semibold text-teal-800 bg-teal-100 rounded-full">Nuevos</span>
              </div>
              <p class="text-gray-600 mb-5">Materiales textiles de alta calidad para todas tus necesidades de confección.</p>
              <div class="flex justify-between items-center">
                <router-link 
                  to="/prendas" 
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                >
                  Explorar proveedores
                  <svg class="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
                <span class="text-xs text-gray-500">Desde $15/unidad</span>
              </div>
            </div>
          </div>
  
          <!-- Tarjeta mejorada - Suministros -->
          <div 
            class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1"
            @mouseenter="hoverCard = 'suministros'"
            @mouseleave="hoverCard = null"
          >
            <div class="relative h-52 bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center">
              <svg 
                class="h-24 w-24 text-purple-600 transition-transform duration-300" 
                :class="{'scale-110': hoverCard === 'suministros'}"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
              <div class="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full shadow-xs text-xs font-semibold text-purple-600">
                18 Proveedores
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Suministros</h3>
              <p class="text-gray-600 mb-5">Todo lo necesario para mantener tu producción funcionando sin interrupciones.</p>
              <div class="flex justify-between items-center">
                <router-link 
                  to="/suministros" 
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                >
                  Ver catálogo
                  <svg class="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
                <span class="text-xs text-gray-500">Desde $8/unidad</span>
              </div>
            </div>
          </div>
  
          <!-- Tarjeta mejorada - Recursos -->
          <div 
            class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-1"
            @mouseenter="hoverCard = 'recursos'"
            @mouseleave="hoverCard = null"
          >
            <div class="relative h-52 bg-gradient-to-br from-teal-50 to-green-50 flex items-center justify-center">
              <svg 
                class="h-24 w-24 text-teal-600 transition-transform duration-300" 
                :class="{'scale-110': hoverCard === 'recursos'}"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <div class="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full shadow-xs text-xs font-semibold text-teal-600">
                12 Proveedores
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">Recursos</h3>
              <p class="text-gray-600 mb-5">Servicios y herramientas para optimizar tu cadena de suministro.</p>
              <div class="flex justify-between items-center">
                <router-link 
                  to="/recursos" 
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                >
                  Descubrir más
                  <svg class="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </router-link>
                <span class="text-xs text-gray-500">Variados</span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Sección de beneficios mejorada -->
        <div class="mt-20 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="p-10 md:p-12">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Beneficios exclusivos para compradores</h3>
              <ul class="space-y-5">
                <li class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-900">Descuentos escalonados</h4>
                    <p class="text-gray-600 mt-1">A mayor volumen de compra, mejores precios obtienes con nuestros proveedores premium.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-900">Entrega garantizada</h4>
                    <p class="text-gray-600 mt-1">Reabastecimiento en menos de 72 horas o te compensamos con créditos.</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <svg class="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-900">Control de calidad</h4>
                    <p class="text-gray-600 mt-1">Todos los productos pasan por nuestro estricto proceso de verificación.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-blue-50 to-teal-50 p-10 md:p-12 flex items-center relative overflow-hidden">
              <div class="absolute -right-10 -bottom-10 opacity-20">
                <svg class="h-40 w-40 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="relative w-full text-center">
                <div class="inline-flex items-center justify-center bg-white bg-opacity-30 rounded-full p-2 mb-5">
                  <svg class="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h4 class="text-xl font-bold text-gray-800 mb-3">¿Eres proveedor?</h4>
                <p class="text-gray-600 mb-6 max-w-md mx-auto">Únete a nuestra red exclusiva y llega a cientos de compradores calificados.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-3">
                  <button 
                    @click="contactar"
                    class="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Solicitar información
                  </button>
                  <button 
                    @click="verRequisitos"
                    class="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 border border-gray-200 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Ver requisitos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
            
      </div>
    </section>
    <Footer />
  </template>
  
  <script>
import Footer from './Footer.vue';

export default {
  name: 'AfiliadosSection',
  components: {
    Footer
  },
  data() {
    return {
      hoverCard: null,
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'prendas', name: 'Prendas' },
        { id: 'suministros', name: 'Suministros' },
        { id: 'recursos', name: 'Recursos' },
        { id: 'premium', name: 'Premium' }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    contactar() {
      this.$router.push('/contacto');
    },
    verRequisitos() {
      this.$router.push('/requisitos-proveedores');
    },
    filterByCategory(categoryId) {
      this.activeCategory = categoryId;
      // Lógica de filtrado aquí
    }
  }
};
</script>
  
  <style scoped>
  /* Animación para la flecha de retroceso */
  button:hover svg {
    animation: bounceLeft 0.5s ease infinite alternate;
  }
  
  @keyframes bounceLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-4px);
    }
  }
  
  /* Ajuste de padding para el header fijo */
  section {
    padding-top: 5rem;
  }
  
  /* Efecto hover para las tarjetas */
  .card-hover-effect {
    transition: all 0.3s ease;
  }
  .card-hover-effect:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  </style>