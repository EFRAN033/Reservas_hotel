<template>
  <div class="p-6">
    <!-- Encabezado -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Gestión de Habitaciones</h1>
        <p class="text-sm text-gray-600">Administre el inventario y estado de las habitaciones</p>
      </div>
      <div class="flex space-x-3">
        <button @click="abrirModalNuevaHabitacion" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center">
          <i class="fas fa-plus mr-2"></i> Nueva Habitación
        </button>
        <button @click="exportarDatos" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition flex items-center">
          <i class="fas fa-file-export mr-2"></i> Exportar
        </button>
      </div>
    </div>

    <!-- Filtros y búsqueda -->
    <div class="bg-white rounded-lg shadow-md p-4 border border-gray-100 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Tipo</label>
          <select v-model="filtros.tipo" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Todos</option>
            <option value="SIMPLE">Simple</option>
            <option value="DOBLE">Doble</option>
            <option value="SUITE">Suite</option>
            <option value="FAMILIAR">Familiar</option>
            <option value="EJECUTIVA">Ejecutiva</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Estado</label>
          <select v-model="filtros.estado" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Todos</option>
            <option value="DISPONIBLE">Disponible</option>
            <option value="OCUPADA">Ocupada</option>
            <option value="MANTENIMIENTO">Mantenimiento</option>
            <option value="LIMPIEZA">Limpieza</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Piso</label>
          <select v-model="filtros.piso" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Todos</option>
            <option v-for="piso in 10" :key="piso" :value="piso">{{ piso }}</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Búsqueda</label>
          <div class="relative">
            <input v-model="filtros.busqueda" type="text" placeholder="N° Habitación..." class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Tarjetas de habitaciones -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="habitacion in habitacionesFiltradas" :key="habitacion.numero" 
           class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
        <!-- Encabezado de la tarjeta -->
        <div class="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h3 class="font-bold text-lg">Habitación #{{ habitacion.numero }}</h3>
          <span class="px-2 py-1 text-xs rounded-full" 
                :class="{
                  'bg-green-500': habitacion.estado === 'DISPONIBLE',
                  'bg-red-500': habitacion.estado === 'OCUPADA',
                  'bg-yellow-500': habitacion.estado === 'MANTENIMIENTO',
                  'bg-gray-500': habitacion.estado === 'LIMPIEZA'
                }">
            {{ estadoTexto[habitacion.estado] }}
          </span>
        </div>
        
        <!-- Cuerpo de la tarjeta -->
        <div class="p-4">
          <div class="flex items-center mb-3">
            <i class="fas fa-bed mr-2 text-blue-500"></i>
            <span class="font-medium">{{ tipoTexto[habitacion.tipo] }}</span>
          </div>
          <div class="flex items-center mb-3">
            <i class="fas fa-layer-group mr-2 text-blue-500"></i>
            <span>Piso {{ habitacion.piso }}</span>
          </div>
          <div class="flex items-center mb-3">
            <i class="fas fa-users mr-2 text-blue-500"></i>
            <span>Capacidad: {{ habitacion.capacidad }} personas</span>
          </div>
          <div class="flex items-center mb-4">
            <i class="fas fa-tag mr-2 text-blue-500"></i>
            <span class="font-semibold">S/ {{ habitacion.precioBase }} por noche</span>
          </div>
          
          <!-- Amenities -->
          <div class="mb-4">
            <h4 class="text-sm font-medium text-gray-700 mb-2">Servicios:</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="(amenity, index) in habitacion.amenities.slice(0, 3)" :key="index" 
                    class="text-xs px-2 py-1 bg-gray-100 rounded-full flex items-center">
                <i :class="amenityIcons[amenity]" class="mr-1 text-blue-500"></i>
                {{ amenity }}
              </span>
              <span v-if="habitacion.amenities.length > 3" class="text-xs px-2 py-1 bg-gray-100 rounded-full">
                +{{ habitacion.amenities.length - 3 }} más
              </span>
            </div>
          </div>
          
          <!-- Acciones -->
          <div class="flex justify-between border-t pt-3">
            <button @click.stop="editarHabitacion(habitacion)" class="text-blue-600 hover:text-blue-800">
              <i class="fas fa-edit mr-1"></i> Editar
            </button>
            <button @click.stop="cambiarEstado(habitacion)" class="text-gray-600 hover:text-gray-800">
              <i class="fas fa-sync-alt mr-1"></i> Estado
            </button>
            <button @click.stop="verDetalles(habitacion)" class="text-green-600 hover:text-green-800">
              <i class="fas fa-eye mr-1"></i> Ver
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para nueva/editar habitación -->
    <div v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div class="flex justify-between items-center p-4 border-b">
          <h3 class="text-xl font-semibold text-gray-800">{{ modoEdicion ? 'Editar' : 'Nueva' }} Habitación</h3>
          <button @click="cerrarModal" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="p-4">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Número*</label>
              <input v-model="habitacionForm.numero" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tipo*</label>
                <select v-model="habitacionForm.tipo" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option v-for="(tipo, key) in tipoTexto" :key="key" :value="key">{{ tipo }}</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Piso*</label>
                <select v-model="habitacionForm.piso" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option v-for="piso in 10" :key="piso" :value="piso">{{ piso }}</option>
                </select>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Capacidad*</label>
                <input v-model="habitacionForm.capacidad" type="number" min="1" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Precio base*</label>
                <input v-model="habitacionForm.precioBase" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Estado*</label>
              <select v-model="habitacionForm.estado" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option v-for="(estado, key) in estadoTexto" :key="key" :value="key">{{ estado }}</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Servicios</label>
              <div class="grid grid-cols-2 gap-2">
                <label v-for="amenity in amenitiesDisponibles" :key="amenity" class="flex items-center space-x-2">
                  <input type="checkbox" v-model="habitacionForm.amenities" :value="amenity" class="rounded text-blue-600">
                  <span>{{ amenity }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        
        <div class="p-4 border-t flex justify-end space-x-3">
          <button @click="cerrarModal" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            Cancelar
          </button>
          <button @click="guardarHabitacion" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            {{ modoEdicion ? 'Actualizar' : 'Guardar' }}
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
      filtros: {
        tipo: '',
        estado: '',
        piso: '',
        busqueda: ''
      },
      habitaciones: [
        {
          numero: '101',
          tipo: 'SIMPLE',
          piso: 1,
          capacidad: 1,
          precioBase: 250,
          estado: 'DISPONIBLE',
          amenities: ['WiFi', 'TV', 'Aire acondicionado']
        },
        {
          numero: '201',
          tipo: 'DOBLE',
          piso: 2,
          capacidad: 2,
          precioBase: 350,
          estado: 'OCUPADA',
          amenities: ['WiFi', 'TV', 'Aire acondicionado', 'Minibar']
        },
        {
          numero: '301',
          tipo: 'SUITE',
          piso: 3,
          capacidad: 2,
          precioBase: 500,
          estado: 'DISPONIBLE',
          amenities: ['WiFi', 'TV', 'Aire acondicionado', 'Minibar', 'Jacuzzi']
        },
        {
          numero: '102',
          tipo: 'SIMPLE',
          piso: 1,
          capacidad: 1,
          precioBase: 250,
          estado: 'MANTENIMIENTO',
          amenities: ['WiFi', 'TV']
        },
        {
          numero: '202',
          tipo: 'DOBLE',
          piso: 2,
          capacidad: 2,
          precioBase: 350,
          estado: 'LIMPIEZA',
          amenities: ['WiFi', 'TV', 'Aire acondicionado']
        },
        {
          numero: '302',
          tipo: 'SUITE',
          piso: 3,
          capacidad: 2,
          precioBase: 500,
          estado: 'DISPONIBLE',
          amenities: ['WiFi', 'TV', 'Aire acondicionado', 'Minibar']
        }
      ],
      habitacionForm: {
        numero: '',
        tipo: 'SIMPLE',
        piso: 1,
        capacidad: 1,
        precioBase: 0,
        estado: 'DISPONIBLE',
        amenities: []
      },
      modalVisible: false,
      modoEdicion: false,
      tipoTexto: {
        'SIMPLE': 'Simple',
        'DOBLE': 'Doble',
        'SUITE': 'Suite',
        'FAMILIAR': 'Familiar',
        'EJECUTIVA': 'Ejecutiva'
      },
      estadoTexto: {
        'DISPONIBLE': 'Disponible',
        'OCUPADA': 'Ocupada',
        'MANTENIMIENTO': 'Mantenimiento',
        'LIMPIEZA': 'Limpieza'
      },
      amenitiesDisponibles: [
        'WiFi', 'TV', 'Aire acondicionado', 'Minibar', 'Jacuzzi', 
        'Caja fuerte', 'Room service', 'Teléfono', 'Escritorio', 
        'Plancha', 'Secador', 'Cafetera'
      ],
      amenityIcons: {
        'WiFi': 'fas fa-wifi',
        'TV': 'fas fa-tv',
        'Aire acondicionado': 'fas fa-snowflake',
        'Minibar': 'fas fa-wine-bottle',
        'Jacuzzi': 'fas fa-hot-tub',
        'Caja fuerte': 'fas fa-lock',
        'Room service': 'fas fa-concierge-bell',
        'Teléfono': 'fas fa-phone',
        'Escritorio': 'fas fa-desk',
        'Plancha': 'fas fa-iron',
        'Secador': 'fas fa-wind',
        'Cafetera': 'fas fa-coffee'
      }
    }
  },
  computed: {
    habitacionesFiltradas() {
      return this.habitaciones.filter(habitacion => {
        const cumpleTipo = !this.filtros.tipo || habitacion.tipo === this.filtros.tipo
        const cumpleEstado = !this.filtros.estado || habitacion.estado === this.filtros.estado
        const cumplePiso = !this.filtros.piso || habitacion.piso == this.filtros.piso
        const cumpleBusqueda = !this.filtros.busqueda || 
          habitacion.numero.toLowerCase().includes(this.filtros.busqueda.toLowerCase())
        
        return cumpleTipo && cumpleEstado && cumplePiso && cumpleBusqueda
      })
    }
  },
  methods: {
    abrirModalNuevaHabitacion() {
      this.habitacionForm = {
        numero: '',
        tipo: 'SIMPLE',
        piso: 1,
        capacidad: 1,
        precioBase: 0,
        estado: 'DISPONIBLE',
        amenities: []
      }
      this.modoEdicion = false
      this.modalVisible = true
    },
    editarHabitacion(habitacion) {
      this.habitacionForm = JSON.parse(JSON.stringify(habitacion))
      this.modoEdicion = true
      this.modalVisible = true
    },
    cerrarModal() {
      this.modalVisible = false
    },
    guardarHabitacion() {
      if (!this.habitacionForm.numero) {
        alert('El número de habitación es requerido')
        return
      }
      
      if (this.modoEdicion) {
        const index = this.habitaciones.findIndex(h => h.numero === this.habitacionForm.numero)
        if (index !== -1) {
          this.habitaciones.splice(index, 1, {...this.habitacionForm})
        }
      } else {
        // Verificar si ya existe
        if (this.habitaciones.some(h => h.numero === this.habitacionForm.numero)) {
          alert('Ya existe una habitación con este número')
          return
        }
        this.habitaciones.push({...this.habitacionForm})
      }
      
      this.cerrarModal()
    },
    cambiarEstado(habitacion) {
      const estados = Object.keys(this.estadoTexto)
      const currentIndex = estados.indexOf(habitacion.estado)
      const nextIndex = (currentIndex + 1) % estados.length
      
      habitacion.estado = estados[nextIndex]
    },
    verDetalles(habitacion) {
      alert(`Detalles de habitación ${habitacion.numero}\nTipo: ${this.tipoTexto[habitacion.tipo]}\nEstado: ${this.estadoTexto[habitacion.estado]}`)
    },
    exportarDatos() {
      const dataStr = JSON.stringify(this.habitaciones, null, 2)
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
      
      const exportFileDefaultName = `habitaciones_${new Date().toISOString().slice(0,10)}.json`
      
      const linkElement = document.createElement('a')
      linkElement.setAttribute('href', dataUri)
      linkElement.setAttribute('download', exportFileDefaultName)
      linkElement.click()
    }
  }
}
</script>

<style scoped>
/* Transiciones suaves para hover */
.transition {
  transition: all 0.3s ease;
}

/* Sombra más pronunciada al hacer hover */
.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>