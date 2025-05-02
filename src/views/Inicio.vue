<template>
  <div class="app-container flex flex-col h-screen overflow-hidden bg-gray-50">
    <!-- Banner superior con mejoras sutiles -->
    <div class="header-image w-full h-48 bg-gray-200 relative shadow-lg transition-all duration-300">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

      <img
        src="../assets/imagenes/banner.png"
        alt="Hotel Banner"
        class="w-full h-full object-cover transform transition-all duration-700 hover:scale-105 relative z-1"
        loading="eager"
      />

      <!-- Logo circular (tamaños preservados) -->
      <div class="absolute left-6 top-6 w-32 h-32 rounded-full border-2 border-white/90 shadow-xl overflow-hidden z-50 bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-2xl">
        <img 
          src="../assets/imagenes/hilton.svg" 
          alt="Logo Hotel" 
          class="w-full h-full object-contain scale-[2.2] hover:scale-[2.5] transform transition-transform duration-500 origin-center"
        />
      </div>

      <!-- Título dinámico con mejor legibilidad -->
      <div class="absolute bottom-10 left-0 right-0 text-center z-50 px-4">
        <h1 class="text-white font-bold text-4xl drop-shadow-2xl animate-fade-in">
          {{ pageTitle }}
        </h1>
      </div>
    </div>

    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenido principal con mejor scroll -->
    <main class="content-area flex-1 overflow-y-auto bg-gray-50 ml-16 transition-all duration-300 scroll-smooth">
      <!-- Panel del admin con mejor jerarquía visual -->
      <div v-if="showAdminPanel" class="admin-panel">
        <div class="w-full max-w-5xl mx-auto mt-32 mb-8 px-6 z-30 relative">
          <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100/80 hover:shadow-2xl transition-shadow duration-300">
            <!-- Encabezado mejorado -->
            <div class="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-6 relative">
              <h2 class="text-2xl font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Panel del Administrador
              </h2>
            </div>

            <!-- Información con mejor feedback visual -->
            <div class="p-8 bg-gradient-to-br from-white to-gray-50">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Columna izquierda -->
                <div class="space-y-6">
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                    <p class="text-sm font-medium text-blue-900/80 uppercase tracking-wider mb-1">Nombre</p>
                    <p class="text-2xl font-semibold text-gray-800">Juan Carlos</p>
                  </div>
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                    <p class="text-sm font-medium text-blue-900/80 uppercase tracking-wider mb-1">Apellido</p>
                    <p class="text-2xl font-semibold text-gray-800">Pérez López</p>
                  </div>
                </div>

                <!-- Columna derecha -->
                <div class="space-y-6">
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                    <p class="text-sm font-medium text-blue-900/80 uppercase tracking-wider mb-1">Correo electrónico</p>
                    <p class="text-xl font-semibold text-gray-800 break-all">admin@hilton.com</p>
                  </div>
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                    <p class="text-sm font-medium text-blue-900/80 uppercase tracking-wider mb-1">Teléfono</p>
                    <p class="text-2xl font-semibold text-gray-800">+51 987 654 321</p>
                  </div>
                </div>
              </div>

              <!-- Botón con mejor feedback -->
              <div class="mt-8 text-center">
                <button 
                  @click="cerrarSesion"
                  class="px-10 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center mx-auto"
                  aria-label="Cerrar sesión"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido dinámico (espaciado preservado) -->
      <div class="dynamic-content" :class="{'pt-8': showAdminPanel, 'pt-[calc(48px+16rem+4rem)]': !showAdminPanel}">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './sidebar.vue';
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';

// Obtener el nombre o título de la sección según la ruta actual
const pageTitle = computed(() => {
  switch (route.name) {
    case 'Inicio':
      return 'Bienvenido al Inicio';
    case 'Analisis':
      return 'Análisis';
    case 'Habitaciones':
      return 'Habitaciones';
    case 'Reservas':
      return 'Reservas';
    case 'Registro':
      return 'Registro de Usuario';
    default:
      return 'Página no encontrada';
  }
});

const router = useRouter();
const route = useRoute();

const showAdminPanel = computed(() => {
  const currentPath = route.path;
  return currentPath === '/inicio' || 
         currentPath === '/inicio/' || 
         currentPath === '/inicio' + '/' ||
         currentPath === '/inicio' + '';
});

const cerrarSesion = () => {
  localStorage.removeItem('isAuthenticated');
  router.push('/login');
};
</script>

<style scoped>
.content-area {
  scroll-behavior: smooth;
  position: relative;
  scroll-padding-top: 1rem;
}

.dynamic-content {
  min-height: calc(100vh - 48px - 16rem);
  position: relative;
  z-index: 20;
}

.header-image {
  position: relative;
  z-index: 40;
}

.from-transparent {
  --tw-gradient-from: transparent var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.admin-panel {
  position: relative;
  z-index: 30;
}

/* Animaciones */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

/* Mejoras de accesibilidad */
button:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
}

/* Ajustes del título preservados */
.header-image h1 {
  margin-bottom: 10px;
  font-size: 5rem;
  line-height: 1.2;
}
</style>