<template>
    <div class="app-container flex flex-col h-screen overflow-hidden bg-gray-50">
      <!-- Banner superior -->
      <div class="header-image w-full h-48 bg-gray-200 relative shadow-lg">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
  
        <img
          src="../assets/imagenes/banner.png"
          alt="Hotel Banner"
          class="w-full h-full object-cover"
          loading="eager"
        />
  
        <!-- Logo circular -->
        <div class="absolute left-6 top-6 w-32 h-32 rounded-full border-2 border-white/90 shadow-xl overflow-hidden z-50 bg-white/95">
          <img 
            src="../assets/imagenes/hilton.svg" 
            alt="Logo Hotel" 
            class="w-full h-full object-contain scale-[2.2]"
          />
        </div>
  
        <!-- Título -->
        <div class="absolute bottom-10 left-0 right-0 text-center z-50 px-4">
          <h1 class="text-white font-bold text-4xl drop-shadow-2xl">
            Panel de Administración
          </h1>
        </div>
      </div>
  
      <!-- Sidebar -->
      <div class="sidebar fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-all duration-300">
        <div class="flex flex-col h-full">
          <!-- Logo más pequeño -->
          <div class="p-4 flex items-center justify-center border-b border-gray-200">
            <img src="../assets/imagenes/hilton.svg" alt="Logo" class="h-12">
          </div>
  
          <!-- Menú de navegación -->
          <nav class="flex-1 overflow-y-auto py-4">
            <ul>
              <li>
                <router-link 
                  to="/admin" 
                  class="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-100 text-blue-600 font-medium"
                >
                  <i class="fas fa-tachometer-alt mr-3"></i>
                  Dashboard
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/admin/reservas" 
                  class="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-100 text-blue-600 font-medium"
                >
                  <i class="fas fa-calendar-check mr-3"></i>
                  Reservas
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/admin/habitaciones" 
                  class="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-100 text-blue-600 font-medium"
                >
                  <i class="fas fa-bed mr-3"></i>
                  Habitaciones
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/admin/huespedes" 
                  class="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-100 text-blue-600 font-medium"
                >
                  <i class="fas fa-users mr-3"></i>
                  Huéspedes
                </router-link>
              </li>
              <li>
                <router-link 
                  to="/admin/reportes" 
                  class="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  active-class="bg-blue-100 text-blue-600 font-medium"
                >
                  <i class="fas fa-chart-bar mr-3"></i>
                  Reportes
                </router-link>
              </li>
            </ul>
          </nav>
  
          <!-- Perfil y cerrar sesión -->
          <div class="p-4 border-t border-gray-200">
            <div class="flex items-center mb-4">
              <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <i class="fas fa-user text-blue-600"></i>
              </div>
              <div>
                <p class="font-medium">Admin</p>
                <p class="text-xs text-gray-500">Administrador</p>
              </div>
            </div>
            <button 
              @click="cerrarSesion"
              class="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <i class="fas fa-sign-out-alt mr-2"></i>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
  
      <!-- Contenido principal -->
      <main class="content-area flex-1 overflow-y-auto bg-gray-50 ml-64 pl-6 pr-6 pt-6">
        <!-- Estadísticas resumen -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <h3 class="text-sm font-medium text-gray-500">Reservas Hoy</h3>
            <p class="text-3xl font-bold">24</p>
            <p class="text-sm text-green-600 mt-1"><i class="fas fa-arrow-up mr-1"></i> 12% vs ayer</p>
          </div>
          <div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <h3 class="text-sm font-medium text-gray-500">Ocupación</h3>
            <p class="text-3xl font-bold">78%</p>
            <p class="text-sm text-green-600 mt-1"><i class="fas fa-arrow-up mr-1"></i> 5% vs semana pasada</p>
          </div>
          <div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <h3 class="text-sm font-medium text-gray-500">Ingresos Hoy</h3>
            <p class="text-3xl font-bold">S/ 12,450</p>
            <p class="text-sm text-red-600 mt-1"><i class="fas fa-arrow-down mr-1"></i> 3% vs ayer</p>
          </div>
          <div class="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <h3 class="text-sm font-medium text-gray-500">Habitaciones Libres</h3>
            <p class="text-3xl font-bold">14</p>
            <p class="text-sm text-gray-500 mt-1">De 65 totales</p>
          </div>
        </div>
  
        <!-- Gráficos y tablas -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <!-- Gráfico de ocupación -->
          <div class="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-medium">Ocupación por Tipo de Habitación</h3>
              <select class="text-sm border border-gray-300 rounded-md px-3 py-1">
                <option>Últimos 7 días</option>
                <option>Últimos 30 días</option>
                <option>Este mes</option>
              </select>
            </div>
            <div class="h-64">
              <!-- Aquí iría tu gráfico (usar Chart.js o similar) -->
              <div class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
                <p class="text-gray-500">Gráfico de ocupación</p>
              </div>
            </div>
          </div>
  
          <!-- Últimas reservas -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h3 class="text-lg font-medium mb-4">Últimas Reservas</h3>
            <div class="space-y-4">
              <div v-for="reserva in ultimasReservas" :key="reserva.id" class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i class="fas fa-user text-blue-600"></i>
                </div>
                <div>
                  <p class="font-medium">{{ reserva.nombre }}</p>
                  <p class="text-sm text-gray-500">{{ reserva.habitacion }} · {{ reserva.fecha }}</p>
                </div>
              </div>
            </div>
            <button class="w-full mt-4 text-sm text-blue-600 hover:text-blue-800">
              Ver todas las reservas
            </button>
          </div>
        </div>
  
        <!-- Tabla de habitaciones -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div class="p-6 flex justify-between items-center border-b border-gray-200">
            <h3 class="text-lg font-medium">Estado de Habitaciones</h3>
            <button class="text-sm text-blue-600 hover:text-blue-800">
              Actualizar
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Habitación
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tipo
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Última limpieza
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="habitacion in habitaciones" :key="habitacion.numero" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap font-medium">
                    {{ habitacion.numero }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    {{ habitacion.tipo }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="{
                      'bg-green-100 text-green-800': habitacion.estado === 'Disponible',
                      'bg-red-100 text-red-800': habitacion.estado === 'Ocupada',
                      'bg-yellow-100 text-yellow-800': habitacion.estado === 'Mantenimiento'
                    }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                      {{ habitacion.estado }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ habitacion.limpieza }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button class="text-blue-600 hover:text-blue-900 mr-3">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="text-red-600 hover:text-red-900">
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ultimasReservas: [
          { id: 1, nombre: 'Juan Pérez', habitacion: '201 - Doble', fecha: 'Hoy 10:30 AM' },
          { id: 2, nombre: 'María Gómez', habitacion: '305 - Suite', fecha: 'Hoy 09:15 AM' },
          { id: 3, nombre: 'Carlos Ruiz', habitacion: '102 - Simple', fecha: 'Ayer 05:45 PM' },
          { id: 4, nombre: 'Laura Sánchez', habitacion: '204 - Doble', fecha: 'Ayer 03:20 PM' }
        ],
        habitaciones: [
          { numero: '101', tipo: 'Simple', estado: 'Disponible', limpieza: 'Hoy 08:00 AM' },
          { numero: '102', tipo: 'Simple', estado: 'Ocupada', limpieza: 'Ayer 03:30 PM' },
          { numero: '201', tipo: 'Doble', estado: 'Disponible', limpieza: 'Hoy 09:15 AM' },
          { numero: '202', tipo: 'Doble', estado: 'Mantenimiento', limpieza: '2 días atrás' },
          { numero: '301', tipo: 'Suite', estado: 'Ocupada', limpieza: 'Ayer 11:45 AM' },
          { numero: '302', tipo: 'Suite', estado: 'Disponible', limpieza: 'Hoy 10:00 AM' }
        ]
      }
    },
    methods: {
      cerrarSesion() {
        // Lógica para cerrar sesión
        this.$router.push('/login');
      }
    }
  }
  </script>
  
  <style scoped>
  .app-container {
    position: relative;
  }
  
  .header-image {
    position: relative;
    z-index: 30;
  }
  
  .sidebar {
    top: 192px; /* Ajuste para el banner */
    height: calc(100vh - 192px);
  }
  
  .content-area {
    margin-top: 192px; /* Ajuste para el banner */
    height: calc(100vh - 192px);
  }
  </style>