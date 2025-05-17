<template>
  <div class="min-h-screen bg-gray-50 pt-12 px-4">
    <div class="max-w-3xl mx-auto">
      <!-- Tarjeta principal -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <!-- Encabezado -->
        <div class="bg-indigo-600 px-6 py-4">
          <h1 class="text-xl font-bold text-white">Panel de Administración</h1>
        </div>

        <!-- Contenido distribuido -->
        <div class="p-8 space-y-8">
          <!-- Sección de información personal -->
          <div class="space-y-6">
            <h2 class="text-lg font-semibold text-gray-800 border-b pb-2">Información Personal</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-1">
                <p class="text-sm text-gray-500">Nombre</p>
                <p class="text-lg font-medium">Juan</p>
              </div>
              <div class="space-y-1">
                <p class="text-sm text-gray-500">Apellido</p>
                <p class="text-lg font-medium">Pérez</p>
              </div>
              <div class="space-y-1 md:col-span-2">
                <p class="text-sm text-gray-500">Correo Electrónico</p>
                <p class="text-lg font-medium">juan.perez@email.com</p>
              </div>
              <div class="space-y-1 md:col-span-2">
                <p class="text-sm text-gray-500">Teléfono</p>
                <p class="text-lg font-medium">+51 987654321</p>
              </div>
            </div>
          </div>

          <!-- Sección de acciones -->
          <div class="space-y-6 pt-6 border-t border-gray-200">
            <h2 class="text-lg font-semibold text-gray-800 border-b pb-2">Acciones</h2>
            <div class="grid grid-cols-1 gap-4">
              <button class="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-lg hover:bg-indigo-700 transition-transform duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Editar Información</span>
              </button>

              <button 
                @click="cerrarSesion"
                class="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-lg hover:bg-red-700 transition-transform duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cerrarSesion() {
      if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        // Eliminar autenticación
        localStorage.removeItem('isAuthenticated');
        
        // Redirigir al login
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style scoped>
/* Efectos de hover mejorados */
button {
  transition: all 0.2s ease;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Animación suave al cargar */
.bg-white {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
