<template>
  <div class="p-6">
    <!-- Título y acciones -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-gray-800">Nueva Reserva</h2>
        <p class="text-sm text-gray-600">Complete los datos requeridos</p>
      </div>
      <div class="flex space-x-3">
        <button @click="exportarReservas" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition flex items-center">
          <i class="fas fa-file-export mr-2"></i> Exportar
        </button>
        <button @click="nuevaReserva" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
          <i class="fas fa-plus mr-2"></i> Nueva
        </button>
      </div>
    </div>

    <!-- Formulario en dos columnas -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Columna izquierda -->
      <div class="space-y-4">
        <!-- Tarjeta de datos personales -->
        <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100">
          <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
            <i class="fas fa-user-circle mr-2"></i> Datos del Huésped
          </h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nombre completo*</label>
              <input type="text" v-model="reserva.nombre" placeholder="Nombre completo" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de documento*</label>
                <select v-model="reserva.tipoDocumento" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="DNI">DNI</option>
                  <option value="CE">Carné Extranjería</option>
                  <option value="PAS">Pasaporte</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Número de documento*</label>
                <input type="text" v-model="reserva.numeroDocumento" placeholder="Número" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>
            </div>
          </div>
        </div>

        <!-- Tarjeta de fechas -->
        <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100">
          <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
            <i class="far fa-calendar-alt mr-2"></i> Fechas de Estadía
          </h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Check-in*</label>
              <input type="date" v-model="reserva.checkIn" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Check-out*</label>
              <input type="date" v-model="reserva.checkOut" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
          </div>
        </div>
      </div>

      <!-- Columna derecha -->
      <div class="space-y-4">
        <!-- Tarjeta de habitación -->
        <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100">
          <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
            <i class="fas fa-bed mr-2"></i> Detalles de Habitación
          </h3>
          <div class="space-y-3">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de habitación*</label>
              <select v-model="reserva.tipoHabitacion" @change="actualizarHabitaciones" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Seleccionar tipo</option>
                <option value="SIMPLE">Simple</option>
                <option value="DOBLE">Doble</option>
                <option value="SUITE">Suite</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">N° Habitación*</label>
              <select v-model="reserva.numeroHabitacion" :disabled="!reserva.tipoHabitacion" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Seleccionar habitación</option>
                <option v-for="hab in habitacionesDisponibles" :key="hab.numero" :value="hab.numero">
                  {{ hab.numero }} ({{ hab.estado }})
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Tarjeta de adicionales -->
        <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100">
          <h3 class="font-semibold text-gray-800 mb-3 flex items-center">
            <i class="fas fa-concierge-bell mr-2"></i> Servicios Adicionales
          </h3>
          <div class="space-y-3">
            <!-- Botón para abrir el modal de servicios -->
            <button @click="mostrarModalServicios" class="w-full px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition flex items-center justify-between">
              <span>Seleccionar servicios adicionales</span>
              <i class="fas fa-chevron-right"></i>
            </button>
            
            <!-- Lista de servicios seleccionados -->
            <div v-if="serviciosSeleccionados.length > 0" class="mt-3">
              <h4 class="text-sm font-medium text-gray-700 mb-2">Servicios seleccionados:</h4>
              <div class="space-y-2">
                <div v-for="servicio in serviciosSeleccionados" :key="servicio.id" class="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span>{{ servicio.nombre }} (S/ {{ servicio.precio }})</span>
                  <button @click="eliminarServicio(servicio.id)" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Resumen y acciones -->
    <div class="mt-8 pt-6 border-t border-gray-200">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div class="mb-4 md:mb-0">
          <h3 class="text-lg font-semibold text-gray-800">Resumen</h3>
          <div class="flex items-baseline mt-2">
            <span class="text-2xl font-bold text-blue-600">S/ {{ calcularTotal().toFixed(2) }}</span>
            <span class="ml-2 text-sm text-gray-500">Total</span>
          </div>
          <div v-if="reservasGuardadas.length > 0" class="mt-2 text-sm text-gray-500">
            Tienes {{ reservasGuardadas.length }} reserva(s) guardada(s)
          </div>
        </div>
        <div class="flex space-x-3">
          <button @click="cancelarReserva" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Cancelar
          </button>
          <button @click="guardarReserva" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
            <i class="fas fa-save mr-2"></i> Guardar Reserva
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de Servicios Adicionales -->
    <div v-if="modalServiciosVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <!-- Encabezado del modal -->
        <div class="flex justify-between items-center p-4 border-b">
          <h3 class="text-xl font-semibold text-gray-800">Servicios Adicionales</h3>
          <button @click="cerrarModalServicios" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <!-- Cuerpo del modal -->
        <div class="p-4 overflow-y-auto flex-grow">
          <!-- Categorías de servicios -->
          <div class="mb-6">
            <h4 class="text-lg font-medium text-gray-800 mb-3">Categorías</h4>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="categoria in categoriasServicios" 
                :key="categoria.id"
                @click="filtroCategoria = categoria.id"
                :class="{'bg-blue-100 text-blue-700': filtroCategoria === categoria.id}"
                class="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                {{ categoria.nombre }}
              </button>
              <button 
                @click="filtroCategoria = null"
                :class="{'bg-blue-100 text-blue-700': !filtroCategoria}"
                class="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                Todos
              </button>
            </div>
          </div>
          
          <!-- Lista de servicios -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div 
              v-for="servicio in serviciosFiltrados" 
              :key="servicio.id"
              @click="toggleServicio(servicio)"
              :class="{'border-blue-500 bg-blue-50': servicioSeleccionado(servicio.id)}"
              class="p-4 border rounded-lg cursor-pointer hover:border-blue-300 transition"
            >
              <div class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i :class="servicio.icono" class="text-blue-600"></i>
                </div>
                <div>
                  <h5 class="font-medium text-gray-800">{{ servicio.nombre }}</h5>
                  <p class="text-sm text-gray-600 mt-1">{{ servicio.descripcion }}</p>
                  <div class="mt-2 flex justify-between items-center">
                    <span class="font-semibold text-blue-600">S/ {{ servicio.precio }}</span>
                    <span v-if="servicio.porNoche" class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Por noche
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pie del modal -->
        <div class="p-4 border-t flex justify-between items-center">
          <div>
            <span class="font-medium">Total seleccionados: {{ serviciosSeleccionados.length }}</span>
          </div>
          <button 
            @click="cerrarModalServicios"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Aplicar Servicios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reserva: {
        nombre: '',
        tipoDocumento: 'DNI',
        numeroDocumento: '',
        checkIn: '',
        checkOut: '',
        tipoHabitacion: '',
        numeroHabitacion: '',
        serviciosAdicionales: [] // Cambiamos a array para múltiples servicios
      },
      habitacionesDisponibles: [],
      reservasGuardadas: [],
      modalServiciosVisible: false,
      filtroCategoria: null,
      // Base de datos de servicios
      serviciosDisponibles: [
        // Servicios de Alimentos Ampliados
        { id: 1, nombre: 'Desayuno Buffet', descripcion: 'Buffet internacional con variedad de opciones', precio: 45, categoria: 'alimentos', icono: 'fas fa-bread-slice', porNoche: true },
        { id: 2, nombre: 'Desayuno Continental', descripcion: 'Desayuno ligero con café, jugo y panadería', precio: 25, categoria: 'alimentos', icono: 'fas fa-coffee', porNoche: true },
        { id: 3, nombre: 'Desayuno Ejecutivo', descripcion: 'Incluye huevos al gusto y proteínas', precio: 35, categoria: 'alimentos', icono: 'fas fa-egg', porNoche: true },
        { id: 4, nombre: 'Almuerzo Ejecutivo', descripcion: 'Menú del día con entrada, plato principal y postre', precio: 65, categoria: 'alimentos', icono: 'fas fa-utensils' },
        { id: 5, nombre: 'Cena Gourmet', descripcion: 'Experiencia culinaria de 3 tiempos', precio: 120, categoria: 'alimentos', icono: 'fas fa-wine-glass-alt' },
        { id: 6, nombre: 'Cena Romántica', descripcion: 'Cena para dos con vino y decoración especial', precio: 150, categoria: 'alimentos', icono: 'fas fa-heart' },
        { id: 7, nombre: 'Room Service 24h', descripcion: 'Acceso ilimitado al servicio a la habitación', precio: 80, categoria: 'alimentos', icono: 'fas fa-concierge-bell', porNoche: true },
        { id: 8, nombre: 'Paquete Picnic', descripcion: 'Canasta con alimentos para excursiones', precio: 55, categoria: 'alimentos', icono: 'fas fa-basket-simple' },
        { id: 9, nombre: 'Minibar Premium', descripcion: 'Recarga con snacks y bebidas gourmet', precio: 75, categoria: 'alimentos', icono: 'fas fa-wine-bottle' },
        { id: 10, nombre: 'Clase de Cocina', descripcion: 'Taller con chef profesional (2 horas)', precio: 90, categoria: 'alimentos', icono: 'fas fa-mortar-pestle' },
        { id: 11, nombre: 'Degustación de Vinos', descripcion: 'Selección de 5 vinos con maridaje', precio: 110, categoria: 'alimentos', icono: 'fas fa-wine-glass' },
        { id: 12, nombre: 'Cesta de Frutas', descripcion: 'Selección de frutas de temporada', precio: 30, categoria: 'alimentos', icono: 'fas fa-apple-whole' },
        { id: 13, nombre: 'Chocolates Premium', descripcion: 'Caja de chocolates artesanales', precio: 40, categoria: 'alimentos', icono: 'fas fa-candy-cane' },
        { id: 14, nombre: 'Brunch Dominical', descripcion: 'Combinación desayuno-almuerzo los domingos', precio: 70, categoria: 'alimentos', icono: 'fas fa-pancakes' },
        
        // Otros servicios (mantenidos del código original)
        { id: 15, nombre: 'Estacionamiento', descripcion: 'Espacio seguro para su vehículo', precio: 20, categoria: 'transporte', icono: 'fas fa-parking', porNoche: true },
        { id: 16, nombre: 'Late Check-out', descripcion: 'Check-out hasta las 3pm sin costo adicional', precio: 0, categoria: 'habitacion', icono: 'fas fa-clock' },
        { id: 17, nombre: 'SPA Completo', descripcion: 'Paquete completo de spa por 2 horas', precio: 150, categoria: 'bienestar', icono: 'fas fa-spa' },
        { id: 18, nombre: 'Tour Ciudad', descripcion: 'Recorrido guiado por la ciudad', precio: 80, categoria: 'turismo', icono: 'fas fa-map-marked-alt' },
        { id: 19, nombre: 'Lavandería Express', descripcion: 'Servicio de lavandería en 4 horas', precio: 25, categoria: 'habitacion', icono: 'fas fa-tshirt' },
        { id: 20, nombre: 'Masaje Relajante', descripcion: 'Sesión de masaje de 60 minutos', precio: 90, categoria: 'bienestar', icono: 'fas fa-spa' },
        { id: 21, nombre: 'Transporte Aeropuerto', descripcion: 'Traslado ida y vuelta al aeropuerto', precio: 50, categoria: 'transporte', icono: 'fas fa-shuttle-van' },
        { id: 22, nombre: 'Niñera', descripcion: 'Servicio de niñera por 4 horas', precio: 70, categoria: 'familia', icono: 'fas fa-baby' },
        { id: 23, nombre: 'Flores y Chocolate', descripcion: 'Arreglo floral y caja de chocolates', precio: 45, categoria: 'regalos', icono: 'fas fa-gift' }
      ],
      categoriasServicios: [
        { id: 'alimentos', nombre: 'Alimentos y Bebidas' }, // Actualizado el nombre
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
        )
      },
    serviciosFiltrados() {
      if (!this.filtroCategoria) {
        return this.serviciosDisponibles
      }
      return this.serviciosDisponibles.filter(s => s.categoria === this.filtroCategoria)
    }
  },
  mounted() {
    this.cargarReservas();
  },
  methods: {
    servicioSeleccionado(servicioId) {
      return this.reserva.serviciosAdicionales.includes(servicioId)
    },
    mostrarModalServicios() {
      this.modalServiciosVisible = true
    },
    cerrarModalServicios() {
      this.modalServiciosVisible = false
    },
    toggleServicio(servicio) {
      const index = this.reserva.serviciosAdicionales.indexOf(servicio.id)
      if (index === -1) {
        this.reserva.serviciosAdicionales.push(servicio.id)
      } else {
        this.reserva.serviciosAdicionales.splice(index, 1)
      }
    },
    eliminarServicio(servicioId) {
      const index = this.reserva.serviciosAdicionales.indexOf(servicioId)
      if (index !== -1) {
        this.reserva.serviciosAdicionales.splice(index, 1)
      }
    },
    actualizarHabitaciones() {
      if (this.reserva.tipoHabitacion === 'SIMPLE') {
        this.habitacionesDisponibles = [
          { numero: '101', estado: 'Disponible' },
          { numero: '102', estado: 'Disponible' }
        ]
      } else if (this.reserva.tipoHabitacion === 'DOBLE') {
        this.habitacionesDisponibles = [
          { numero: '201', estado: 'Disponible' },
          { numero: '202', estado: 'Mantenimiento' }
        ]
      } else if (this.reserva.tipoHabitacion === 'SUITE') {
        this.habitacionesDisponibles = [
          { numero: '301', estado: 'Disponible' },
          { numero: '302', estado: 'Ocupada' }
        ]
      } else {
        this.habitacionesDisponibles = []
      }
    },
    calcularTotal() {
      let total = 0
      // Precio base por habitación
      if (this.reserva.tipoHabitacion === 'SIMPLE') total = 250
      else if (this.reserva.tipoHabitacion === 'DOBLE') total = 350
      else if (this.reserva.tipoHabitacion === 'SUITE') total = 500
      
      // Calcular días de estadía
      const diasEstadia = this.calcularDiasEstadia()
      
      // Sumar servicios adicionales
      this.serviciosSeleccionados.forEach(servicio => {
        if (servicio.porNoche) {
          total += servicio.precio * diasEstadia
        } else {
          total += servicio.precio
        }
      })
      
      return total
    },
    calcularDiasEstadia() {
      if (!this.reserva.checkIn || !this.reserva.checkOut) return 1
      
      const fechaInicio = new Date(this.reserva.checkIn)
      const fechaFin = new Date(this.reserva.checkOut)
      const diffTime = fechaFin - fechaInicio
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      return diffDays > 0 ? diffDays : 1
    },
    cargarReservas() {
      const reservasGuardadas = localStorage.getItem('reservasHotel');
      if (reservasGuardadas) {
        this.reservasGuardadas = JSON.parse(reservasGuardadas);
      }
    },
    guardarReserva() {
      if (!this.reserva.nombre || !this.reserva.numeroDocumento || 
          !this.reserva.checkIn || !this.reserva.checkOut || 
          !this.reserva.tipoHabitacion || !this.reserva.numeroHabitacion) {
        alert('Complete todos los campos obligatorios');
        return;
      }
      
      const nuevaReserva = {
        ...this.reserva,
        id: Date.now(),
        total: this.calcularTotal(),
        fechaCreacion: new Date().toISOString()
      };
      
      this.reservasGuardadas.push(nuevaReserva);
      localStorage.setItem('reservasHotel', JSON.stringify(this.reservasGuardadas));
      
      alert('Reserva guardada localmente');
      this.nuevaReserva();
    },
    nuevaReserva() {
      this.reserva = {
        nombre: '',
        tipoDocumento: 'DNI',
        numeroDocumento: '',
        checkIn: '',
        checkOut: '',
        tipoHabitacion: '',
        numeroHabitacion: '',
        serviciosAdicionales: []
      };
    },
    cancelarReserva() {
      if (confirm('¿Cancelar esta reserva sin guardar?')) {
        this.nuevaReserva();
      }
    },
    exportarReservas() {
      if (this.reservasGuardadas.length === 0) {
        alert('No hay reservas para exportar');
        return;
      }
      
      const dataStr = JSON.stringify(this.reservasGuardadas, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = `reservas_hotel_${new Date().toISOString().slice(0,10)}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    }
  }
}
</script>

<style scoped>
/* Transiciones suaves para el modal */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>