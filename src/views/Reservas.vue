<template>
  <div class="p-4 h-screen flex flex-col">
    <!-- Encabezado -->
    <div class="flex justify-between items-center mb-4">
      <div>
        <h2 class="text-xl font-bold">Nueva Reserva</h2>
        <p class="text-xs text-gray-500">Complete los datos requeridos</p>
      </div>
      <div class="flex gap-2">
        <button @click="exportarReservas" class="px-3 py-1.5 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition flex items-center text-sm">
          <i class="fas fa-file-export mr-1"></i> Exportar
        </button>
        <button @click="nuevaReserva" class="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center text-sm">
          <i class="fas fa-plus mr-1"></i> Nueva
        </button>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="flex-1 overflow-y-auto pb-4">
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
                <input type="text" v-model="reserva.nombre" placeholder="Nombre completo" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Correo electrónico*</label>
                <input type="email" v-model="reserva.correo" placeholder="correo@ejemplo.com" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-medium text-gray-700 mb-1">Fecha de nacimiento*</label>
                  <input type="date" v-model="reserva.fechaNacimiento" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-700 mb-1">Sexo*</label>
                  <select v-model="reserva.sexo" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                    <option value="">Seleccionar</option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMENINO">Femenino</option>
                  </select>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-medium text-gray-700 mb-1">Tipo de documento*</label>
                  <select v-model="reserva.tipoDocumento" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                    <option value="DNI">DNI</option>
                    <option value="CE">Carné Extranjería</option>
                    <option value="PAS">Pasaporte</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs font-medium text-gray-700 mb-1">Número de documento*</label>
                  <input type="text" v-model="reserva.numeroDocumento" placeholder="Número" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
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
                <input type="date" v-model="reserva.checkIn" @change="validarFechas" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">Check-out*</label>
                <input type="date" v-model="reserva.checkOut" @change="validarFechas" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
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
                <select v-model="reserva.tipoHabitacion" @change="actualizarHabitaciones" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
                  <option value="">Seleccionar tipo</option>
                  <option value="SIMPLE">Simple</option>
                  <option value="DOBLE">Doble</option>
                  <option value="SUITE">Suite</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-medium text-gray-700 mb-1">N° Habitación*</label>
                <select v-model="reserva.numeroHabitacion" :disabled="!reserva.tipoHabitacion" class="w-full px-2 py-1.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm">
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
            <button @click="mostrarModalServicios" class="w-full px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition flex items-center justify-between text-sm">
              <span>Seleccionar servicios</span>
              <i class="fas fa-chevron-right"></i>
            </button>
              
            <div v-if="serviciosSeleccionados.length > 0" class="mt-2">
              <h4 class="text-xs font-medium mb-1">Servicios seleccionados:</h4>
              <div class="space-y-1">
                <div v-for="servicio in serviciosSeleccionados" :key="servicio.id" class="flex justify-between items-center p-1.5 bg-gray-50 rounded text-xs">
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
            <button @click="cancelarReserva" class="px-3 py-1.5 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition text-sm">
              Cancelar
            </button>
            <button @click="guardarReserva" class="px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex items-center text-sm">
              <i class="fas fa-save mr-1"></i> Guardar
            </button>
          </div>
        </div>
      </div>
    </div>

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
  </div>
</template>

<script>
export default {
  data() {
    return {
      reserva: {
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
        serviciosAdicionales: []
      },
      habitacionesDisponibles: [],
      reservasGuardadas: [],
      modalServiciosVisible: false,
      filtroCategoria: null,
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
    }
  },
  mounted() {
    this.cargarReservas()
  },
  methods: {
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
      
      const nuevaReserva = {
        ...this.reserva,
        id: Date.now(),
        total: this.calcularTotal(),
        fechaCreacion: new Date().toISOString(),
        diasEstadia: this.diasEstadia
      }
      
      this.reservasGuardadas.push(nuevaReserva)
      localStorage.setItem('reservasHotel', JSON.stringify(this.reservasGuardadas))
      alert('Reserva guardada')
      this.nuevaReserva()
    },
    nuevaReserva() {
      this.reserva = {
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
        serviciosAdicionales: []
      }
    },
    cancelarReserva() {
      if (confirm('¿Cancelar esta reserva sin guardar?')) {
        this.nuevaReserva()
      }
    },
    exportarReservas() {
      if (this.reservasGuardadas.length === 0) {
        alert('No hay reservas para exportar')
        return
      }
      
      const data = JSON.stringify(this.reservasGuardadas, null, 2)
      const blob = new Blob([data], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `reservas_hotel_${new Date().toISOString().slice(0,10)}.json`
      a.click()
      URL.revokeObjectURL(url)
    },
    mostrarModalServicios() {
      this.modalServiciosVisible = true
    },
    cerrarModalServicios() {
      this.modalServiciosVisible = false
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
</style>