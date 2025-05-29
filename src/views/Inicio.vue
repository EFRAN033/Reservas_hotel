<template>
  <div class="app-container flex flex-col h-screen overflow-hidden bg-gray-50">
    <!-- Banner superior -->
    <div class="header-image w-full h-48 bg-gray-200 relative shadow-lg">
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

      <img
        src="../assets/imagenes/banner.png"
        alt="Hotel Banner"
        class="w-full h-full object-cover"
      />
      <button 
        @click="irAAdmin"
        class="absolute left-6 top-6 w-24 h-24 rounded-full border-3 border-white shadow-xl overflow-hidden z-50 bg-white cursor-pointer focus:outline-none focus:ring-3 focus:ring-blue-300 flex items-center justify-center p-0"
      >
        <img 
          src="../assets/imagenes/hilton.svg" 
          alt="Logo Hotel" 
          class="min-w-[180%] min-h-[180%] object-contain"
          style="border-radius: 50%; transform: scale(1.2);"
        />
      </button>

      <!-- Título dinámico -->
      <div class="absolute bottom-10 left-0 right-0 text-center z-50 px-4">
        <h1 class="text-white font-bold text-4xl drop-shadow-2xl">
          {{ pageTitle }}
        </h1>
      </div>
    </div>

    <!-- Sidebar -->
    <Sidebar />

    <!-- Contenido principal -->
    <main class="content-area flex-1 overflow-y-auto bg-gray-50 ml-16">
      <!-- Panel del admin -->
      <div v-if="showAdminPanel" class="admin-panel">
        <div class="w-full max-w-5xl mx-auto mt-32 mb-8 px-6 z-30 relative">
          <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <!-- Encabezado -->
            <div class="bg-gradient-to-r from-blue-900 to-blue-800 px-8 py-6 relative">
              <h2 class="text-2xl font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Panel del Administrador
              </h2>
            </div>

            <!-- Información del admin -->
            <div class="p-8 bg-gradient-to-br from-white to-gray-50">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Columna izquierda -->
                <div class="space-y-6">
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <p class="text-sm font-medium text-blue-900/80 uppercase tracking-wider mb-1">Nombre</p>
                    <p class="text-2xl font-semibold text-gray-800">Juan Carlos</p>
                  </div>
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <p class="text-sm font-medium text-blue-900/80 uppercase tracking-wider mb-1">Apellido</p>
                    <p class="text-2xl font-semibold text-gray-800">Pérez López</p>
                  </div>
                </div>

                <!-- Columna derecha -->
                <div class="space-y-6">
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <p class="text-sm font-medium text-blue-900/80 uppercase tracking-wider mb-1">Correo electrónico</p>
                    <p class="text-xl font-semibold text-gray-800 break-all">admin@hilton.com</p>
                  </div>
                  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <p class="text-sm font-medium text-blue-900/80 uppercase tracking-wider mb-1">Teléfono</p>
                    <p class="text-2xl font-semibold text-gray-800">+51 987 654 321</p>
                  </div>
                </div>
              </div>

              <!-- Botón de cerrar sesión -->
              <div class="mt-8 text-center">
                <button 
                  @click="cerrarSesion"
                  class="px-10 py-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
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

      <!-- Contenido dinámico para rutas hijas -->
      <div class="dynamic-content" :class="{'pt-8': showAdminPanel, 'pt-[calc(48px+16rem+4rem)]': !showAdminPanel}">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './sidebar.vue'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

// Título dinámico según ruta hija actual
const pageTitle = computed(() => {
  switch (route.name) {
    case 'Inicio': return 'Bienvenido al Inicio'
    case 'Analisis': return 'Análisis'
    case 'Habitaciones': return 'Habitaciones'
    case 'Reservas': return 'Reservas'
    case 'Registro': return 'Registro de Usuario'
    case 'Admin': return 'Panel de Administración'
    default: return 'Página no encontrada'
  }
})

// Mostrar panel admin si la ruta es /inicio/admin
const showAdminPanel = computed(() => {
  return route.name === 'Admin'
})

// Función para ir a Admin.vue (ruta hija)
const irAAdmin = () => {
  router.push('/inicio/admin')
}

// Función para cerrar sesión y redirigir a login
const cerrarSesion = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
</script>

<style scoped>
/* Estilos principales */
.content-area {
  scroll-behavior: smooth;
}

.dynamic-content {
  min-height: calc(100vh - 48px - 16rem);
}

.header-image {
  position: relative;
  z-index: 40;
}

.admin-panel {
  position: relative;
  z-index: 30;
}

button {
  border-width: 3px;
}

button img {
  border-radius: 50%;
  object-fit: contain;
  display: block;
  transform: scale(1.2) !important;
  transform-origin: center;
  min-width: 180%;
  min-height: 180%;
}


button:focus {
  outline: none;
  ring-width: 3px;
}
</style>
