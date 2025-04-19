<template>
    <!-- Header simplificado con solo flecha de regreso -->
    <header class="fixed w-full bg-white shadow-md z-50">
      <div class="container mx-auto px-1 py-4">
        <div class="flex items-center">
          <button 
            @click="goBack"
            class="p-2 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <svg 
              class="h-4 w-6 text-gray-600 hover:text-blue-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  
    <!-- Sección de Afiliados -->
    <section id="afiliados" class="pt-24 pb-16 bg-gray-50">
      <div class="container mx-auto px-6">
        <!-- Encabezado -->
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Nuestros Afiliados
            </span>
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Contamos con una amplia red de empresas afiliadas, lo que nos permite garantizar
            el reabastecimiento continuo y eficiente de productos.
          </p>
        </div>
  
        <!-- Grid de categorías -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tarjeta Prendas -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-r from-blue-100 to-teal-100 flex items-center justify-center">
              <svg class="h-20 w-20 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Prendas</h3>
              <p class="text-gray-600 mb-4">Colección exclusiva de proveedores textiles certificados</p>
              <router-link 
                to="/prendas" 
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Ver proveedores
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>
  
          <!-- Tarjeta Suministros -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center">
              <svg class="h-20 w-20 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Suministros</h3>
              <p class="text-gray-600 mb-4">Materiales esenciales para tu cadena de producción</p>
              <router-link 
                to="/suministros" 
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Ver catálogo
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>
  
          <!-- Tarjeta Recursos -->
          <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="h-48 bg-gradient-to-r from-teal-100 to-green-100 flex items-center justify-center">
              <svg class="h-20 w-20 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Recursos</h3>
              <p class="text-gray-600 mb-4">Herramientas y servicios complementarios</p>
              <router-link 
                to="/recursos" 
                class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                Explorar
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
  
        <!-- Sección de beneficios -->
        <div class="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="p-8 md:p-12">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Ventajas de trabajar con nuestros afiliados</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-gray-700">Descuentos exclusivos para miembros registrados</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-gray-700">Garantía de reabastecimiento en menos de 72 horas</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="text-gray-700">Certificación de calidad en todos los productos</span>
                </li>
              </ul>
            </div>
            <div class="bg-gradient-to-br from-blue-50 to-teal-50 p-8 md:p-12 flex items-center">
              <div class="w-full text-center">
                <h4 class="text-xl font-semibold text-gray-800 mb-4">¿Quieres ser proveedor afiliado?</h4>
                <p class="text-gray-600 mb-6">Únete a nuestra red y aumenta tu visibilidad</p>
                <button 
                  @click="contactar"
                  class="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Solicitar información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AfiliadosSection',
    methods: {
      goBack() {
        // Opción 1: Volver a la página anterior
        // this.$router.go(-1);
        
        // Opción 2: Navegar a ruta específica
        this.$router.push('/');
      },
      contactar() {
        // Lógica para manejar el contacto
        this.$router.push('/contacto');
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
    padding-top: 5rem; /* Asegura espacio para el header fixed */
  }
  </style>