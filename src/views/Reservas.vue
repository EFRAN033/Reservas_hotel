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
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
              <input type="checkbox" v-model="reserva.adicionales.desayuno">
              <span class="ml-2">Desayuno (+S/35)</span>
            </label>
            <label class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 cursor-pointer">
              <input type="checkbox" v-model="reserva.adicionales.estacionamiento">
              <span class="ml-2">Estacionamiento (+S/20)</span>
            </label>
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
        adicionales: { desayuno: false, estacionamiento: false }
      },
      habitacionesDisponibles: [],
      reservasGuardadas: []
    }
  },
  mounted() {
    this.cargarReservas();
  },
  methods: {
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
      if (this.reserva.tipoHabitacion === 'SIMPLE') total = 250
      else if (this.reserva.tipoHabitacion === 'DOBLE') total = 350
      else if (this.reserva.tipoHabitacion === 'SUITE') total = 500
      
      if (this.reserva.adicionales.desayuno) total += 35
      if (this.reserva.adicionales.estacionamiento) total += 20
      
      return total
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
        adicionales: { desayuno: false, estacionamiento: false }
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