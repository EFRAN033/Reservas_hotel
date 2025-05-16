<template>
  <div class="flex flex-col h-screen bg-gray-50">
    <!-- Header fijo -->
    <header class="bg-white shadow-sm z-10">
      <div class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Sistema de Reservas</h1>
            <p class="text-sm md:text-base text-gray-600 mt-1 md:mt-2">
              {{ modoEdicion ? 'Editando reserva' : (mostrarFormulario ? 'Nueva reserva' : 'Listado de reservas') }}
            </p>
          </div>
          <div class="flex space-x-2 md:space-x-3">
            <button 
              v-if="!mostrarFormulario"
              @click="mostrarFormulario = true; modoEdicion = false; resetFormulario()" 
              class="flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              <i class="fas fa-plus mr-1 md:mr-2"></i> 
              <span class="hidden md:inline">Nueva Reserva</span>
              <span class="md:hidden">Nueva</span>
            </button>
            <button 
              v-if="mostrarFormulario"
              @click="mostrarFormulario = false" 
              class="flex items-center px-3 py-1 md:px-4 md:py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm md:text-base"
            >
              <i class="fas fa-list mr-1 md:mr-2"></i> 
              <span>Ver Listado</span>
            </button>
            <button 
              v-if="!mostrarFormulario"
              @click="exportarExcel" 
              class="flex items-center px-3 py-1 md:px-4 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm md:text-base"
            >
              <i class="fas fa-file-excel mr-1 md:mr-2"></i> 
              <span class="hidden md:inline">Exportar</span>
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
        <!-- Formulario de Reserva -->
        <div v-if="mostrarFormulario" class="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Columna izquierda -->
            <div class="space-y-3">
              <!-- Datos del huésped -->
              <div class="bg-white rounded shadow p-3 border border-gray-100">
                <h3 class="font-semibold text-gray-800 mb-2 flex items-center text-sm">
                  <i class="fas fa-user-circle mr-1"></i> Datos del Huésped
                </h3>
                <div class="space-y-2">
                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Nombre completo*</label>
                    <input 
                      type="text" 
                      v-model="reserva.nombre" 
                      placeholder="Nombre completo" 
                      class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Correo electrónico*</label>
                    <input 
                      type="email" 
                      v-model="reserva.correo" 
                      placeholder="correo@ejemplo.com" 
                      class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-xs font-medium text-gray-700 mb-1">Fecha de nacimiento*</label>
                      <input 
                        type="date" 
                        v-model="reserva.fechaNacimiento" 
                        class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                    </div>
                    <div>
                      <label class="block text-xs font-medium text-gray-700 mb-1">Sexo*</label>
                      <select 
                        v-model="reserva.sexo" 
                        class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Seleccionar</option>
                        <option value="MASCULINO">Masculino</option>
                        <option value="FEMENINO">Femenino</option>
                      </select>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-xs font-medium text-gray-700 mb-1">Tipo de documento*</label>
                      <select 
                        v-model="reserva.tipoDocumento" 
                        class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="DNI">DNI</option>
                        <option value="CE">Carné Extranjería</option>
                        <option value="PAS">Pasaporte</option>
                      </select>
                    </div>
                    <div>
                      <label class="block text-xs font-medium text-gray-700 mb-1">Número de documento*</label>
                      <input 
                        type="text" 
                        v-model="reserva.numeroDocumento" 
                        placeholder="Número" 
                        class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                    </div>
                  </div>
                </div>
              </div>

              <!-- Fechas -->
              <div class="bg-white rounded shadow p-3 border border-gray-100">
                <h3 class="font-semibold text-gray-800 mb-2 flex items-center text-sm">
                  <i class="far fa-calendar-alt mr-1"></i> Fechas de Estadía
                </h3>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Check-in*</label>
                    <input 
                      type="date" 
                      v-model="reserva.checkIn" 
                      @change="validarFechas" 
                      class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Check-out*</label>
                    <input 
                      type="date" 
                      v-model="reserva.checkOut" 
                      @change="validarFechas" 
                      class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                  </div>
                </div>
                <div v-if="diasEstadia > 0" class="text-sm text-blue-500 mt-1">
                  {{ diasEstadia }} noche{{ diasEstadia !== 1 ? 's' : '' }}
                </div>
              </div>
            </div>

            <!-- Columna derecha -->
            <div class="space-y-3">
              <!-- Habitación -->
              <div class="bg-white rounded shadow p-3 border border-gray-100">
                <h3 class="font-semibold text-gray-800 mb-2 flex items-center text-sm">
                  <i class="fas fa-bed mr-1"></i> Detalles de Habitación
                </h3>
                <div class="space-y-2">
                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">Tipo de habitación*</label>
                    <select 
                      v-model="reserva.tipoHabitacion" 
                      @change="actualizarHabitaciones" 
                      class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="">Seleccionar tipo</option>
                      <option value="SIMPLE">Simple</option>
                      <option value="DOBLE">Doble</option>
                      <option value="SUITE">Suite</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-700 mb-1">N° Habitación*</label>
                    <select 
                      v-model="reserva.numeroHabitacion" 
                      :disabled="!reserva.tipoHabitacion" 
                      class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    >
                      <option value="">Seleccionar habitación</option>
                      <option 
                        v-for="hab in habitacionesDisponibles" 
                        :key="hab.numero" 
                        :value="hab.numero"
                        :class="{'text-green-600': hab.tieneBano, 'text-red-600': !hab.tieneBano}"
                      >
                        {{ hab.numero }} ({{ hab.estado }}) - {{ hab.tieneBano ? 'Con baño' : 'Sin baño' }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Servicios -->
              <div class="bg-white rounded shadow p-3 border border-gray-100">
                <h3 class="font-semibold text-gray-800 mb-2 flex items-center text-sm">
                  <i class="fas fa-concierge-bell mr-1"></i> Servicios Adicionales
                </h3>
                <button 
                  @click="mostrarModalServicios" 
                  class="w-full px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition flex items-center justify-between text-sm"
                >
                  <span>Seleccionar servicios</span>
                  <i class="fas fa-chevron-right"></i>
                </button>
                  
                <div v-if="serviciosSeleccionados.length > 0" class="mt-2">
                  <h4 class="text-xs font-medium mb-1">Servicios seleccionados:</h4>
                  <div class="space-y-1">
                    <div 
                      v-for="servicio in serviciosSeleccionados" 
                      :key="servicio.id" 
                      class="flex justify-between items-center p-1.5 bg-gray-50 rounded text-xs"
                    >
                      <span>{{ servicio.nombre }} (S/ {{ servicio.precio }}) <span v-if="servicio.porNoche">× {{ diasEstadia }} noche{{ diasEstadia !== 1 ? 's' : '' }}</span></span>
                      <span class="font-medium">S/ {{ servicio.porNoche ? (servicio.precio * diasEstadia).toFixed(2) : servicio.precio.toFixed(2) }}</span>
                      <button @click="eliminarServicio(servicio.id)" class="text-red-400 hover:text-red-600">
                        <i class="fas fa-times text-xs"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Resumen -->
          <div class="mt-4 pt-4 border-t">
            <div class="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <h3 class="font-semibold">Resumen</h3>
                <div class="text-xs mt-1 space-y-1">
                  <div v-if="reserva.tipoHabitacion" class="flex justify-between">
                    <span>Habitación {{ tipoHabitacionTexto[reserva.tipoHabitacion] }} ({{ diasEstadia }} noche{{ diasEstadia !== 1 ? 's' : '' }}):</span>
                    <span>S/ {{ (precioBaseHabitacion * diasEstadia).toFixed(2) }}</span>
                  </div>
                  
                  <div v-for="servicio in serviciosSeleccionados" :key="servicio.id" class="flex justify-between">
                    <span>{{ servicio.nombre }} <span v-if="servicio.porNoche">({{ diasEstadia }} noche{{ diasEstadia !== 1 ? 's' : '' }})</span>:</span>
                    <span>S/ {{ (servicio.porNoche ? servicio.precio * diasEstadia : servicio.precio).toFixed(2) }}</span>
                  </div>
                </div>
                
                <div class="flex items-baseline mt-2">
                  <span class="text-xl font-bold text-blue-600">S/ {{ calcularTotal().toFixed(2) }}</span>
                  <span class="ml-1 text-xs text-gray-500">Total</span>
                </div>
              </div>
              <div class="flex gap-2 self-end">
                <button 
                  @click="cancelarReserva" 
                  class="px-3 py-1.5 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition text-sm"
                >
                  Cancelar
                </button>
                <button 
                  @click="guardarReserva" 
                  class="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center text-sm"
                >
                  <i class="fas fa-save mr-1"></i> 
                  {{ modoEdicion ? 'Actualizar' : 'Guardar' }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Listado de Reservas -->
        <div v-else>
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
                          v-for="servicio in getServiciosReserva(reserva)" 
                          :key="servicio.id"
                          class="inline-flex items-center px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-xs font-medium"
                          :class="getClaseServicio(servicio.categoria)"
                        >
                          <i :class="servicio.icono" class="mr-0.5 md:mr-1 text-xs"></i> 
                          <span class="hidden md:inline">{{ servicio.nombre }}</span>
                          <span class="md:hidden">{{ servicio.nombre.charAt(0) }}</span>
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
      </div>
    </main>

    <!-- Modal de Servicios -->
    <div v-if="modalServiciosVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded shadow w-full max-w-2xl max-h-[80vh] flex flex-col">
        <!-- Encabezado -->
        <div class="flex justify-between items-center p-3 border-b">
          <h3 class="font-semibold">Servicios Adicionales</h3>
          <button @click="cerrarModalServicios" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <!-- Cuerpo -->
        <div class="p-3 overflow-y-auto flex-grow">
          <!-- Categorías -->
          <div class="mb-4">
            <h4 class="text-sm font-medium mb-2">Categorías</h4>
            <div class="flex flex-wrap gap-1">
              <button 
                v-for="cat in categoriasServicios" 
                :key="cat.id"
                @click="filtroCategoria = cat.id"
                :class="{'bg-blue-100 text-blue-700': filtroCategoria === cat.id}"
                class="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition text-xs"
              >
                {{ cat.nombre }}
              </button>
              <button 
                @click="filtroCategoria = null"
                :class="{'bg-blue-100 text-blue-700': !filtroCategoria}"
                class="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition text-xs"
              >
                Todos
              </button>
            </div>
          </div>
          
          <!-- Servicios -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div 
              v-for="servicio in serviciosFiltrados" 
              :key="servicio.id"
              @click="toggleServicio(servicio)"
              :class="{'border-blue-500 bg-blue-50': servicioSeleccionado(servicio.id)}"
              class="p-2 border rounded cursor-pointer hover:border-blue-300 transition text-xs"
            >
              <div class="flex items-start">
                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <i :class="servicio.icono" class="text-blue-600 text-sm"></i>
                </div>
                <div>
                  <h5 class="font-medium">{{ servicio.nombre }}</h5>
                  <p class="text-gray-600 mt-0.5">{{ servicio.descripcion }}</p>
                  <div class="mt-1 flex justify-between items-center">
                    <span class="font-semibold text-blue-600">S/ {{ servicio.precio }}</span>
                    <span v-if="servicio.porNoche" class="text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded">
                      Por noche
                    </span>
                    <span v-if="servicio.recomendado" class="text-xs bg-green-100 text-green-800 px-1 py-0.5 rounded ml-1">
                      Recomendado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pie -->
        <div class="p-3 border-t flex justify-between items-center text-sm">
          <span>Total seleccionados: {{ serviciosSeleccionados.length }}</span>
          <button 
            @click="cerrarModalServicios"
            class="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
          >
            Aplicar Servicios
          </button>
        </div>
      </div>
    </div>

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
      mostrarFormulario: false,
      modoEdicion: false,
      reserva: {
        id: null,
        nombre: '',
        correo: '',
        fechaNacimiento: '',
        sexo: '',
        tipoDocumento: 'DNI',
        numeroDocumento: '',
        checkIn: '',
        checkOut: '',
        tipoHabitacion: '',
        numeroHabitacion: '',
        serviciosAdicionales: [],
        fechaCreacion: ''
      },
      habitacionesDisponibles: [],
      reservasGuardadas: [],
      modalServiciosVisible: false,
      filtroCategoria: null,
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
      },
      preciosHabitaciones: {
        SIMPLE: 250,
        DOBLE: 350,
        SUITE: 500
      },
      tipoHabitacionTexto: {
        'SIMPLE': 'Simple',
        'DOBLE': 'Doble',
        'SUITE': 'Suite'
      },
      serviciosDisponibles: [
        // Alimentos y Bebidas
        { id: 1, nombre: 'Desayuno Buffet', descripcion: 'Buffet internacional con variedad de opciones', precio: 45, categoria: 'alimentos', icono: 'fas fa-bread-slice', porNoche: true, recomendado: true },
        { id: 2, nombre: 'Desayuno Continental', descripcion: 'Desayuno ligero con café, jugo y panadería', precio: 25, categoria: 'alimentos', icono: 'fas fa-coffee', porNoche: true },
        { id: 3, nombre: 'Desayuno Ejecutivo', descripcion: 'Incluye huevos al gusto y proteínas', precio: 35, categoria: 'alimentos', icono: 'fas fa-egg', porNoche: true },
        { id: 4, nombre: 'Almuerzo Ejecutivo', descripcion: 'Menú del día con entrada, plato principal y postre', precio: 65, categoria: 'alimentos', icono: 'fas fa-utensils' },
        { id: 5, nombre: 'Cena Gourmet', descripcion: 'Experiencia culinaria de 3 tiempos', precio: 120, categoria: 'alimentos', icono: 'fas fa-wine-glass-alt', recomendado: true },
        { id: 6, nombre: 'Cena Romántica', descripcion: 'Cena para dos con vino y decoración especial', precio: 150, categoria: 'alimentos', icono: 'fas fa-heart' },
        { id: 7, nombre: 'Room Service 24h', descripcion: 'Acceso ilimitado al servicio a la habitación', precio: 80, categoria: 'alimentos', icono: 'fas fa-concierge-bell', porNoche: true },
        { id: 8, nombre: 'Paquete Picnic', descripcion: 'Canasta con alimentos para excursiones', precio: 55, categoria: 'alimentos', icono: 'fas fa-basket-simple' },
        { id: 9, nombre: 'Minibar Premium', descripcion: 'Recarga con snacks y bebidas gourmet', precio: 75, categoria: 'alimentos', icono: 'fas fa-wine-bottle' },
        { id: 10, nombre: 'Clase de Cocina', descripcion: 'Taller con chef profesional (2 horas)', precio: 90, categoria: 'alimentos', icono: 'fas fa-mortar-pestle' },
        { id: 11, nombre: 'Degustación de Vinos', descripcion: 'Selección de 5 vinos con maridaje', precio: 110, categoria: 'alimentos', icono: 'fas fa-wine-glass', recomendado: true },
        { id: 12, nombre: 'Cesta de Frutas', descripcion: 'Selección de frutas de temporada', precio: 30, categoria: 'alimentos', icono: 'fas fa-apple-whole' },
        { id: 13, nombre: 'Chocolates Premium', descripcion: 'Caja de chocolates artesanales', precio: 40, categoria: 'alimentos', icono: 'fas fa-candy-cane' },
        { id: 14, nombre: 'Brunch Dominical', descripcion: 'Combinación desayuno-almuerzo los domingos', precio: 70, categoria: 'alimentos', icono: 'fas fa-pancakes' },
        
        // Habitación
        { id: 15, nombre: 'Late Check-out', descripcion: 'Check-out hasta las 3pm sin costo adicional', precio: 0, categoria: 'habitacion', icono: 'fas fa-clock' },
        { id: 16, nombre: 'Early Check-in', descripcion: 'Check-in desde las 10am sin costo adicional', precio: 0, categoria: 'habitacion', icono: 'fas fa-clock' },
        { id: 17, nombre: 'Upgrade de Habitación', descripcion: 'Mejora a una categoría superior', precio: 100, categoria: 'habitacion', icono: 'fas fa-arrow-up', porNoche: true },
        { id: 18, nombre: 'Habitación con Vista', descripcion: 'Vista privilegiada a puntos destacados', precio: 50, categoria: 'habitacion', icono: 'fas fa-mountain-sun', porNoche: true, recomendado: true },
        { id: 19, nombre: 'Lavandería Express', descripcion: 'Servicio de lavandería en 4 horas', precio: 25, categoria: 'habitacion', icono: 'fas fa-tshirt' },
        { id: 20, nombre: 'Planchado Express', descripcion: 'Servicio de planchado en 2 horas', precio: 15, categoria: 'habitacion', icono: 'fas fa-iron' },
        
        // Bienestar
        { id: 21, nombre: 'SPA Completo', descripcion: 'Paquete completo de spa por 2 horas', precio: 150, categoria: 'bienestar', icono: 'fas fa-spa', recomendado: true },
        { id: 22, nombre: 'Masaje Relajante', descripcion: 'Sesión de masaje de 60 minutos', precio: 90, categoria: 'bienestar', icono: 'fas fa-spa' },
        { id: 23, nombre: 'Masaje Descontracturante', descripcion: 'Sesión de masaje terapéutico', precio: 110, categoria: 'bienestar', icono: 'fas fa-spa' },
        { id: 24, nombre: 'Tratamiento Facial', descripcion: 'Cuidado profesional para tu piel', precio: 80, categoria: 'bienestar', icono: 'fas fa-spa' },
        { id: 25, nombre: 'Acceso a Gimnasio', descripcion: 'Uso ilimitado del gimnasio', precio: 30, categoria: 'bienestar', icono: 'fas fa-dumbbell', porNoche: true },
        { id: 26, nombre: 'Clase de Yoga', descripcion: 'Sesión guiada de yoga', precio: 40, categoria: 'bienestar', icono: 'fas fa-spa' },
        { id: 27, nombre: 'Sauna y Jacuzzi', descripcion: 'Acceso por 2 horas', precio: 60, categoria: 'bienestar', icono: 'fas fa-hot-tub-person' },
        
        // Transporte
        { id: 28, nombre: 'Estacionamiento', descripcion: 'Espacio seguro para su vehículo', precio: 20, categoria: 'transporte', icono: 'fas fa-parking', porNoche: true },
        { id: 29, nombre: 'Transporte Aeropuerto', descripcion: 'Traslado ida y vuelta al aeropuerto', precio: 50, categoria: 'transporte', icono: 'fas fa-shuttle-van', recomendado: true },
        { id: 30, nombre: 'Alquiler de Bicicleta', descripcion: 'Por 24 horas', precio: 25, categoria: 'transporte', icono: 'fas fa-bicycle' },
        { id: 31, nombre: 'Chofer Privado', descripcion: 'Servicio por 4 horas', precio: 120, categoria: 'transporte', icono: 'fas fa-car' },
        { id: 32, nombre: 'Tour en City Bus', descripcion: 'Recorrido turístico en bus panorámico', precio: 35, categoria: 'transporte', icono: 'fas fa-bus' },
        
        // Turismo
        { id: 33, nombre: 'Tour Ciudad', descripcion: 'Recorrido guiado por la ciudad', precio: 80, categoria: 'turismo', icono: 'fas fa-map-marked-alt', recomendado: true },
        { id: 34, nombre: 'Excursión a Montaña', descripcion: 'Tour de día completo con guía', precio: 130, categoria: 'turismo', icono: 'fas fa-mountain' },
        { id: 35, nombre: 'Tour Gastronómico', descripcion: 'Recorrido por los mejores restaurantes', precio: 110, categoria: 'turismo', icono: 'fas fa-utensils' },
        { id: 36, nombre: 'Tour Nocturno', descripcion: 'Recorrido por la vida nocturna', precio: 90, categoria: 'turismo', icono: 'fas fa-moon' },
        { id: 37, nombre: 'Entradas a Museos', descripcion: 'Paquete de 3 museos principales', precio: 60, categoria: 'turismo', icono: 'fas fa-landmark' },
        
        // Familia
        { id: 38, nombre: 'Niñera', descripcion: 'Servicio de niñera por 4 horas', precio: 70, categoria: 'familia', icono: 'fas fa-baby' },
        { id: 39, nombre: 'Cuna Infantil', descripcion: 'Para niños menores de 2 años', precio: 0, categoria: 'familia', icono: 'fas fa-baby-carriage' },
        { id: 40, nombre: 'Kit de Juegos', descripcion: 'Juguetes y actividades para niños', precio: 15, categoria: 'familia', icono: 'fas fa-gamepad' },
        { id: 41, nombre: 'Menú Infantil', descripcion: 'Opciones especiales para niños', precio: 20, categoria: 'familia', icono: 'fas fa-child' },
        
        // Regalos
        { id: 42, nombre: 'Flores y Chocolate', descripcion: 'Arreglo floral y caja de chocolates', precio: 45, categoria: 'regalos', icono: 'fas fa-gift' },
        { id: 43, nombre: 'Botella de Vino', descripcion: 'Selección premium de la bodega', precio: 65, categoria: 'regalos', icono: 'fas fa-wine-bottle' },
        { id: 44, nombre: 'Cesta de Regalo', descripcion: 'Selección de productos locales', precio: 55, categoria: 'regalos', icono: 'fas fa-gift' },
        { id: 45, nombre: 'Foto Profesional', descripcion: 'Sesión de fotos en el hotel', precio: 85, categoria: 'regalos', icono: 'fas fa-camera' }
      ],
      categoriasServicios: [
        { id: 'alimentos', nombre: 'Alimentos y Bebidas' },
        { id: 'habitacion', nombre: 'Habitación' },
        { id: 'bienestar', nombre: 'Bienestar' },
        { id: 'transporte', nombre: 'Transporte' },
        { id: 'turismo', nombre: 'Turismo' },
        { id: 'familia', nombre: 'Familia' },
        { id: 'regalos', nombre: 'Regalos' }
      ]
    }
  },
  computed: {
    serviciosSeleccionados() {
      return this.reserva.serviciosAdicionales.map(servId => 
        this.serviciosDisponibles.find(s => s.id === servId)
      ).filter(Boolean)
    },
    serviciosFiltrados() {
      return this.filtroCategoria 
        ? this.serviciosDisponibles.filter(s => s.categoria === this.filtroCategoria)
        : this.serviciosDisponibles
    },
    diasEstadia() {
      if (!this.reserva.checkIn || !this.reserva.checkOut) return 0
      const diff = new Date(this.reserva.checkOut) - new Date(this.reserva.checkIn)
      return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
    },
    precioBaseHabitacion() {
      return this.preciosHabitaciones[this.reserva.tipoHabitacion] || 0
    },
    reservasFiltradas() {
      let filtered = this.reservasGuardadas;

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
    getServiciosReserva(reserva) {
      return reserva.serviciosAdicionales.map(id => 
        this.serviciosDisponibles.find(s => s.id === id)
      ).filter(Boolean);
    },
    getClaseServicio(categoria) {
      const clases = {
        'alimentos': 'bg-yellow-100 text-yellow-800',
        'habitacion': 'bg-teal-100 text-teal-800',
        'bienestar': 'bg-pink-100 text-pink-800',
        'transporte': 'bg-blue-100 text-blue-800',
        'turismo': 'bg-green-100 text-green-800',
        'familia': 'bg-purple-100 text-purple-800',
        'regalos': 'bg-red-100 text-red-800'
      };
      return clases[categoria] || 'bg-gray-100 text-gray-800';
    },
    actualizarHabitaciones() {
      if (this.reserva.tipoHabitacion === 'SIMPLE') {
        this.habitacionesDisponibles = [
          { numero: '101', estado: 'Disponible', tieneBano: true },
          { numero: '102', estado: 'Disponible', tieneBano: false }
        ]
      } else if (this.reserva.tipoHabitacion === 'DOBLE') {
        this.habitacionesDisponibles = [
          { numero: '201', estado: 'Disponible', tieneBano: true },
          { numero: '202', estado: 'Mantenimiento', tieneBano: true }
        ]
      } else if (this.reserva.tipoHabitacion === 'SUITE') {
        this.habitacionesDisponibles = [
          { numero: '301', estado: 'Disponible', tieneBano: true },
          { numero: '302', estado: 'Ocupada', tieneBano: true }
        ]
      } else {
        this.habitacionesDisponibles = []
      }
    },
    validarFechas() {
      if (this.reserva.checkIn && this.reserva.checkOut && 
          new Date(this.reserva.checkOut) < new Date(this.reserva.checkIn)) {
        alert('La fecha de salida debe ser posterior a la de entrada')
        this.reserva.checkOut = ''
      }
    },
    calcularTotal() {
      let total = this.precioBaseHabitacion * this.diasEstadia
      this.serviciosSeleccionados.forEach(s => {
        total += s.porNoche ? s.precio * this.diasEstadia : s.precio
      })
      return total
    },
    cargarReservas() {
      const reservas = localStorage.getItem('reservasHotel')
      this.reservasGuardadas = reservas ? JSON.parse(reservas) : []
    },
    guardarReserva() {
      const camposRequeridos = [
        !this.reserva.nombre, !this.reserva.correo, !this.reserva.fechaNacimiento,
        !this.reserva.sexo, !this.reserva.numeroDocumento, !this.reserva.checkIn,
        !this.reserva.checkOut, !this.reserva.tipoHabitacion, !this.reserva.numeroHabitacion
      ]
      
      if (camposRequeridos.some(Boolean)) {
        alert('Complete todos los campos obligatorios')
        return
      }
      
      if (this.diasEstadia <= 0) {
        alert('La fecha de salida debe ser posterior a la de entrada')
        return
      }
      
      const reservaActualizada = {
        ...this.reserva,
        total: this.calcularTotal(),
        diasEstadia: this.diasEstadia
      }

      if (this.modoEdicion) {
        // Actualizar reserva existente
        const index = this.reservasGuardadas.findIndex(r => r.id === this.reserva.id)
        if (index !== -1) {
          this.reservasGuardadas[index] = reservaActualizada
        }
      } else {
        // Crear nueva reserva
        reservaActualizada.id = Date.now()
        reservaActualizada.fechaCreacion = new Date().toISOString()
        this.reservasGuardadas.push(reservaActualizada)
      }
      
      localStorage.setItem('reservasHotel', JSON.stringify(this.reservasGuardadas))
      alert(`Reserva ${this.modoEdicion ? 'actualizada' : 'guardada'}`)
      this.resetFormulario()
      this.mostrarFormulario = false
    },
    resetFormulario() {
      this.reserva = {
        id: null,
        nombre: '',
        correo: '',
        fechaNacimiento: '',
        sexo: '',
        tipoDocumento: 'DNI',
        numeroDocumento: '',
        checkIn: '',
        checkOut: '',
        tipoHabitacion: '',
        numeroHabitacion: '',
        serviciosAdicionales: [],
        fechaCreacion: ''
      }
      this.modoEdicion = false
    },
    cancelarReserva() {
      if (confirm('¿Cancelar esta reserva sin guardar?')) {
        this.resetFormulario()
        this.mostrarFormulario = false
      }
    },
    exportarExcel() {
      if (this.reservasGuardadas.length === 0) {
        alert('No hay reservas para exportar')
        return
      }

      // Formatear datos para Excel
      const datosFormateados = this.reservasGuardadas.map(reserva => ({
        'Nombre': reserva.nombre,
        'Tipo Documento': reserva.tipoDocumento,
        'N° Documento': reserva.numeroDocumento,
        'Check-in': this.formatFechaExcel(reserva.checkIn),
        'Check-out': this.formatFechaExcel(reserva.checkOut),
        'Noches': this.calcularNoches(reserva.checkIn, reserva.checkOut),
        'Tipo Habitación': reserva.tipoHabitacion,
        'N° Habitación': reserva.numeroHabitacion,
        'Servicios': this.getServiciosReserva(reserva).map(s => s.nombre).join(', '),
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
        { wch: 15 }, { wch: 12 }, { wch: 25 },
        { wch: 12 }, { wch: 18 }
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
      return this.reservasGuardadas.filter(r => r.tipoHabitacion === tipo).length;
    },
    eliminarReserva(id) {
      this.reservaAEliminar = id;
      this.showDeleteModal = true;
    },
    confirmarEliminar() {
      this.reservasGuardadas = this.reservasGuardadas.filter(r => r.id !== this.reservaAEliminar);
      localStorage.setItem('reservasHotel', JSON.stringify(this.reservasGuardadas));
      this.showDeleteModal = false;
      this.cargarReservas();
    },
    cancelarEliminar() {
      this.showDeleteModal = false;
      this.reservaAEliminar = null;
    },
    editarReserva(reserva) {
      this.reserva = JSON.parse(JSON.stringify(reserva));
      this.modoEdicion = true;
      this.mostrarFormulario = true;
      this.actualizarHabitaciones();
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
    },
    refrescarDatos() {
      this.cargarReservas();
    },
    mostrarModalServicios() {
      this.modalServiciosVisible = true;
    },
    cerrarModalServicios() {
      this.modalServiciosVisible = false;
    },
    toggleServicio(servicio) {
      const index = this.reserva.serviciosAdicionales.indexOf(servicio.id)
      index === -1 
        ? this.reserva.serviciosAdicionales.push(servicio.id)
        : this.reserva.serviciosAdicionales.splice(index, 1)
    },
    eliminarServicio(id) {
      const index = this.reserva.serviciosAdicionales.indexOf(id)
      if (index !== -1) this.reserva.serviciosAdicionales.splice(index, 1)
    },
    servicioSeleccionado(id) {
      return this.reserva.serviciosAdicionales.includes(id)
    }
  }
}
</script>

<style scoped>
select option.text-green-600 {
  color: #16a34a;
}
select option.text-red-600 {
  color: #dc2626;
}

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