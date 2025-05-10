<template>
  <div class="flex flex-col h-screen bg-gray-50">
    <!-- Header fijo -->
    <header class="bg-white shadow-sm z-10">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Registro de Huéspedes</h1>
            <p class="text-sm md:text-base text-gray-600 mt-1 md:mt-2">Listado completo de todas las reservas registradas</p>
          </div>
          <div class="flex space-x-2 md:space-x-3">
            <button 
              @click="exportarExcel" 
              class="flex items-center px-3 py-1 md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base"
            >
              <i class="fas fa-file-excel mr-1 md:mr-2"></i> 
              <span class="hidden md:inline">Exportar Excel</span>
              <span class="md:hidden">Excel</span>
            </button>
            <button 
              @click="refrescarDatos" 
              class="flex items-center px-3 py-1 md:px-4 md:py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm md:text-base"
            >
              <i class="fas fa-sync-alt mr-1 md:mr-2"></i>
              <span class="hidden md:inline">Refrescar</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Contenido principal con scroll -->
    <main class="flex-1 overflow-y-auto overflow-x-hidden pb-6">
      <div class="container mx-auto px-4 pt-4">
        <!-- Filtros -->
        <div class="bg-white p-4 rounded-xl shadow-sm mb-4 md:mb-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Tipo de habitación</label>
              <select 
                v-model="filtroTipoHabitacion" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
              >
                <option value="">Todos</option>
                <option value="SIMPLE">Simple</option>
                <option value="DOBLE">Doble</option>
                <option value="SUITE">Suite</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Fecha desde</label>
              <input 
                type="date" 
                v-model="filtroFechaDesde" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Fecha hasta</label>
              <input 
                type="date" 
                v-model="filtroFechaHasta" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Buscar huésped</label>
              <div class="relative">
                <input 
                  type="text" 
                  v-model="filtroNombre" 
                  placeholder="Nombre del huésped"
                  class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
                >
                <i class="fas fa-search absolute left-2 top-2.5 md:top-3 text-gray-400 text-sm md:text-base"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Estadísticas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4 md:mb-6">
          <div class="bg-white p-3 md:p-4 rounded-xl shadow-sm border-l-4 border-indigo-500">
            <h3 class="text-xs md:text-sm font-medium text-gray-500">Total reservas</h3>
            <p class="text-xl md:text-2xl font-bold">{{ reservasFiltradas.length }}</p>
          </div>
          <div class="bg-white p-3 md:p-4 rounded-xl shadow-sm border-l-4 border-green-500">
            <h3 class="text-xs md:text-sm font-medium text-gray-500">Simples</h3>
            <p class="text-xl md:text-2xl font-bold">{{ contarPorTipo('SIMPLE') }}</p>
          </div>
          <div class="bg-white p-3 md:p-4 rounded-xl shadow-sm border-l-4 border-blue-500">
            <h3 class="text-xs md:text-sm font-medium text-gray-500">Dobles</h3>
            <p class="text-xl md:text-2xl font-bold">{{ contarPorTipo('DOBLE') }}</p>
          </div>
          <div class="bg-white p-3 md:p-4 rounded-xl shadow-sm border-l-4 border-purple-500">
            <h3 class="text-xs md:text-sm font-medium text-gray-500">Suites</h3>
            <p class="text-xl md:text-2xl font-bold">{{ contarPorTipo('SUITE') }}</p>
          </div>
        </div>

        <!-- Tabla de reservas -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden mb-4 md:mb-6">
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Huésped
                  </th>
                  <th scope="col" class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Documento
                  </th>
                  <th scope="col" class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Habitación
                  </th>
                  <th scope="col" class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Fechas
                  </th>
                  <th scope="col" class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Servicios
                  </th>
                  <th scope="col" class="px-4 py-2 md:px-6 md:py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" class="px-4 py-2 md:px-6 md:py-3 text-right text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="reserva in reservasFiltradas" :key="reserva.id" class="hover:bg-gray-50 transition-colors">
                  <td class="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-8 w-8 md:h-10 md:w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <i class="fas fa-user text-indigo-600 text-sm md:text-base"></i>
                      </div>
                      <div class="ml-3">
                        <div class="text-xs md:text-sm font-medium text-gray-900">{{ reserva.nombre }}</div>
                        <div class="text-xs md:text-sm text-gray-500">{{ formatFecha(reserva.fechaCreacion) }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                    <div class="text-xs md:text-sm text-gray-900">{{ reserva.tipoDocumento }}</div>
                    <div class="text-xs md:text-sm text-gray-500">{{ reserva.numeroDocumento }}</div>
                  </td>
                  <td class="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                    <span 
                      :class="{
                        'bg-green-100 text-green-800': reserva.tipoHabitacion === 'SIMPLE',
                        'bg-blue-100 text-blue-800': reserva.tipoHabitacion === 'DOBLE',
                        'bg-purple-100 text-purple-800': reserva.tipoHabitacion === 'SUITE'
                      }" 
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >
                      {{ reserva.tipoHabitacion }} - {{ reserva.numeroHabitacion }}
                    </span>
                  </td>
                  <td class="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                    <div class="text-xs md:text-sm text-gray-900">
                      {{ formatFecha(reserva.checkIn) }} <i class="fas fa-arrow-right text-xs mx-1 text-gray-400"></i>
                      {{ formatFecha(reserva.checkOut) }}
                    </div>
                    <div class="text-xs md:text-sm text-gray-500">
                      {{ calcularNoches(reserva.checkIn, reserva.checkOut) }} noches
                    </div>
                  </td>
                  <td class="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap">
                    <div class="flex flex-wrap gap-1 md:gap-2">
                      <span 
                        v-if="tieneServicio(reserva, 1)" 
                        class="inline-flex items-center px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                      >
                        <i class="fas fa-coffee mr-0.5 md:mr-1 text-xs"></i> 
                        <span class="hidden md:inline">Desayuno</span>
                        <span class="md:hidden">D</span>
                      </span>
                      <span 
                        v-if="tieneServicio(reserva, 15)" 
                        class="inline-flex items-center px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800"
                      >
                        <i class="fas fa-parking mr-0.5 md:mr-1 text-xs"></i> 
                        <span class="hidden md:inline">Parking</span>
                        <span class="md:hidden">P</span>
                      </span>
                      <span 
                        v-if="tieneServicio(reserva, 17)" 
                        class="inline-flex items-center px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800"
                      >
                        <i class="fas fa-spa mr-0.5 md:mr-1 text-xs"></i> 
                        <span class="hidden md:inline">SPA</span>
                      </span>
                    </div>
                  </td>
                  <td class="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm font-bold text-gray-900">
                    S/ {{ reserva.total.toFixed(2) }}
                  </td>
                  <td class="px-4 py-3 md:px-6 md:py-4 whitespace-nowrap text-right text-xs md:text-sm font-medium">
                    <button 
                      @click="eliminarReserva(reserva.id)" 
                      class="text-red-600 hover:text-red-900 mr-2 md:mr-3"
                      title="Eliminar reserva"
                    >
                      <i class="fas fa-trash text-sm md:text-base"></i>
                    </button>
                    <button 
                      @click="editarReserva(reserva)" 
                      class="text-indigo-600 hover:text-indigo-900"
                      title="Editar reserva"
                    >
                      <i class="fas fa-edit text-sm md:text-base"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mensaje cuando no hay resultados -->
          <div v-if="reservasFiltradas.length === 0" class="text-center py-8 md:py-12">
            <i class="fas fa-hotel text-3xl md:text-4xl text-gray-300 mb-3 md:mb-4"></i>
            <h3 class="text-base md:text-lg font-medium text-gray-500">No se encontraron reservas</h3>
            <p class="text-xs md:text-sm text-gray-400 mt-1">Intenta ajustar los filtros de búsqueda</p>
          </div>

          <!-- Paginación -->
          <div v-if="reservasFiltradas.length > 0" class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p class="text-xs md:text-sm text-gray-700">
                  Mostrando
                  <span class="font-medium">{{ pagination.from }}</span>
                  a
                  <span class="font-medium">{{ pagination.to }}</span>
                  de
                  <span class="font-medium">{{ pagination.total }}</span>
                  resultados
                </p>
              </div>
              <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button 
                    @click="prevPage" 
                    :disabled="pagination.currentPage === 1"
                    class="relative inline-flex items-center px-2 py-1.5 md:px-2 md:py-2 rounded-l-md border border-gray-300 bg-white text-xs md:text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <span class="sr-only">Anterior</span>
                    <i class="fas fa-chevron-left text-xs md:text-sm"></i>
                  </button>
                  <button 
                    v-for="page in pagination.totalPages" 
                    :key="page"
                    @click="goToPage(page)"
                    :class="{
                      'bg-indigo-50 border-indigo-500 text-indigo-600': page === pagination.currentPage,
                      'bg-white border-gray-300 text-gray-500 hover:bg-gray-50': page !== pagination.currentPage
                    }"
                    class="relative inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 border text-xs md:text-sm font-medium"
                  >
                    {{ page }}
                  </button>
                  <button 
                    @click="nextPage" 
                    :disabled="pagination.currentPage === pagination.totalPages"
                    class="relative inline-flex items-center px-2 py-1.5 md:px-2 md:py-2 rounded-r-md border border-gray-300 bg-white text-xs md:text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <span class="sr-only">Siguiente</span>
                    <i class="fas fa-chevron-right text-xs md:text-sm"></i>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal de confirmación -->
    <div v-if="showDeleteModal" class="fixed z-20 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <i class="fas fa-exclamation-triangle text-red-600 text-base md:text-lg"></i>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">Eliminar reserva</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">¿Estás seguro que deseas eliminar esta reserva? Esta acción no se puede deshacer.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              @click="confirmarEliminar" 
              type="button" 
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Eliminar
            </button>
            <button 
              @click="cancelarEliminar" 
              type="button" 
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
  data() {
    return {
      reservas: [],
      filtroTipoHabitacion: '',
      filtroNombre: '',
      filtroFechaDesde: '',
      filtroFechaHasta: '',
      showDeleteModal: false,
      reservaAEliminar: null,
      pagination: {
        currentPage: 1,
        perPage: 10,
        total: 0,
        totalPages: 0,
        from: 0,
        to: 0
      }
    }
  },
  computed: {
    reservasFiltradas() {
      let filtered = this.reservas;

      // Aplicar filtros
      if (this.filtroTipoHabitacion) {
        filtered = filtered.filter(r => r.tipoHabitacion === this.filtroTipoHabitacion);
      }

      if (this.filtroNombre) {
        const searchTerm = this.filtroNombre.toLowerCase();
        filtered = filtered.filter(r => r.nombre.toLowerCase().includes(searchTerm));
      }

      if (this.filtroFechaDesde) {
        filtered = filtered.filter(r => new Date(r.checkIn) >= new Date(this.filtroFechaDesde));
      }

      if (this.filtroFechaHasta) {
        filtered = filtered.filter(r => new Date(r.checkOut) <= new Date(this.filtroFechaHasta));
      }

      // Calcular paginación
      this.pagination.total = filtered.length;
      this.pagination.totalPages = Math.ceil(filtered.length / this.pagination.perPage);
      this.pagination.from = (this.pagination.currentPage - 1) * this.pagination.perPage + 1;
      this.pagination.to = Math.min(
        this.pagination.currentPage * this.pagination.perPage,
        filtered.length
      );

      // Retornar datos paginados
      return filtered.slice(
        (this.pagination.currentPage - 1) * this.pagination.perPage,
        this.pagination.currentPage * this.pagination.perPage
      );
    }
  },
  created() {
    this.cargarReservas();
  },
  methods: {
    tieneServicio(reserva, servicioId) {
      return reserva.serviciosAdicionales?.includes(servicioId) || false;
    },
    cargarReservas() {
      const reservasGuardadas = localStorage.getItem('reservasHotel');
      if (reservasGuardadas) {
        this.reservas = JSON.parse(reservasGuardadas);
      }
    },
    refrescarDatos() {
      this.cargarReservas();
    },
    exportarExcel() {
      if (this.reservas.length === 0) {
        alert('No hay reservas para exportar');
        return;
      }

      // Formatear datos para Excel
      const datosFormateados = this.reservas.map(reserva => ({
        'Nombre': reserva.nombre,
        'Tipo Documento': reserva.tipoDocumento,
        'N° Documento': reserva.numeroDocumento,
        'Check-in': this.formatFechaExcel(reserva.checkIn),
        'Check-out': this.formatFechaExcel(reserva.checkOut),
        'Noches': this.calcularNoches(reserva.checkIn, reserva.checkOut),
        'Tipo Habitación': reserva.tipoHabitacion,
        'N° Habitación': reserva.numeroHabitacion,
        'Desayuno': this.tieneServicio(reserva, 1) ? 'Sí' : 'No',
        'Estacionamiento': this.tieneServicio(reserva, 15) ? 'Sí' : 'No',
        'SPA': this.tieneServicio(reserva, 17) ? 'Sí' : 'No',
        'Total (S/)': reserva.total.toFixed(2),
        'Fecha Registro': this.formatFechaExcel(reserva.fechaCreacion)
      }));

      // Crear libro de Excel
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(datosFormateados);
      
      // Estilos para el Excel
      const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "4F46E5" } },
        alignment: { horizontal: "center" }
      };
      
      // Aplicar estilos a los encabezados
      const range = XLSX.utils.decode_range(ws['!ref']);
      for(let C = range.s.c; C <= range.e.c; ++C) {
        const cell = XLSX.utils.encode_cell({r: 0, c: C});
        if(!ws[cell]) continue;
        ws[cell].s = headerStyle;
      }
      
      // Ajustar el ancho de las columnas
      ws['!cols'] = [
        { wch: 20 }, { wch: 12 }, { wch: 15 }, 
        { wch: 12 }, { wch: 12 }, { wch: 8 },
        { wch: 15 }, { wch: 12 }, { wch: 10 },
        { wch: 10 }, { wch: 10 }, { wch: 12 },
        { wch: 18 }
      ];

      XLSX.utils.book_append_sheet(wb, ws, "Reservas");

      // Generar archivo
      const fecha = new Date().toISOString().slice(0, 10);
      XLSX.writeFile(wb, `Reservas_Hotel_${fecha}.xlsx`);
    },
    formatFechaExcel(fecha) {
      return new Date(fecha).toLocaleDateString('es-PE');
    },
    formatFecha(fecha) {
      return new Date(fecha).toLocaleDateString('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    },
    calcularNoches(checkIn, checkOut) {
      const diffTime = Math.abs(new Date(checkOut) - new Date(checkIn));
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
    contarPorTipo(tipo) {
      return this.reservas.filter(r => r.tipoHabitacion === tipo).length;
    },
    eliminarReserva(id) {
      this.reservaAEliminar = id;
      this.showDeleteModal = true;
    },
    confirmarEliminar() {
      this.reservas = this.reservas.filter(r => r.id !== this.reservaAEliminar);
      localStorage.setItem('reservasHotel', JSON.stringify(this.reservas));
      this.showDeleteModal = false;
      this.cargarReservas();
    },
    cancelarEliminar() {
      this.showDeleteModal = false;
      this.reservaAEliminar = null;
    },
    editarReserva(reserva) {
      console.log('Editar reserva:', reserva);
    },
    prevPage() {
      if (this.pagination.currentPage > 1) {
        this.pagination.currentPage--;
      }
    },
    nextPage() {
      if (this.pagination.currentPage < this.pagination.totalPages) {
        this.pagination.currentPage++;
      }
    },
    goToPage(page) {
      this.pagination.currentPage = page;
    }
  }
}
</script>

<style scoped>
/* Estilos para el scroll */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 #f7fafc;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f7fafc;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #cbd5e0;
  border-radius: 10px;
  border: 2px solid #f7fafc;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background-color: #a0aec0;
}

/* Asegurar que el contenedor principal ocupe toda la altura */
.h-screen {
  height: 100vh;
}

.flex-1 {
  flex: 1 1 0%;
  min-height: 0; /* Importante para que el scroll funcione correctamente */
}

/* Mejoras de responsive */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  table {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  th, td {
    padding: 0.5rem;
    font-size: 0.75rem;
  }
}
</style>