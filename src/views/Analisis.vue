<template>
    <div class="p-3 bg-gray-50 min-h-screen">
      <!-- Encabezado -->
      <div class="flex flex-wrap justify-between items-center mb-3 gap-2">
        <div>
          <h1 class="text-xl font-bold text-gray-800">Dashboard</h1>
          <p class="text-xs text-gray-500">Resumen de métricas</p>
        </div>
        <div class="flex gap-2">
          <select 
            v-model="filtroRango" 
            class="text-xs p-1.5 border rounded bg-white"
            @change="cargarDatos"
          >
            <option value="7">7 días</option>
            <option value="30">30 días</option>
            <option value="90">3 meses</option>
          </select>
          <button class="text-xs bg-blue-500 text-white px-2.5 py-1 rounded hover:bg-blue-600">
            Exportar
          </button>
        </div>
      </div>
  
      <!-- Tarjetas de métricas -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div 
          v-for="(m, i) in metricas" 
          :key="i" 
          class="bg-white p-2 rounded border border-gray-200 hover:shadow-xs"
        >
          <p class="text-xs text-gray-500 truncate">{{ m.titulo }}</p>
          <p class="font-bold text-lg">{{ m.valor }}</p>
          <p :class="`text-xs ${m.tendencia.includes('+') ? 'text-green-500' : 'text-red-500'}`">
            {{ m.tendencia }}
          </p>
        </div>
      </div>
  
      <!-- Gráfico de líneas interactivo (mismo tamaño) -->
      <div class="bg-white p-3 rounded border border-gray-200 mb-3">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-sm font-semibold">Tendencia de Reservas</h2>
          <div class="flex gap-1 text-xs">
            <button 
              v-for="(btn, index) in timeButtons" 
              :key="index"
              @click="changeTimeRange(btn.value)"
              :class="`px-2 py-0.5 rounded ${activeTimeRange === btn.value ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`"
            >
              {{ btn.label }}
            </button>
          </div>
        </div>
        <div class="h-48 relative">
          <canvas ref="lineChart"></canvas>
          <div 
            v-if="tooltip.visible" 
            class="absolute bg-white border border-gray-200 shadow-md p-2 rounded text-xs"
            :style="{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }"
          >
            <p class="font-semibold">{{ tooltip.label }}</p>
            <p>Reservas: {{ tooltip.value }}</p>
          </div>
        </div>
      </div>
  
      <!-- Tres gráficos inferiores -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div class="bg-white p-3 rounded border border-gray-200">
          <h2 class="text-sm font-semibold mb-2">Disponibilidad</h2>
          <div class="h-56"><canvas ref="pieChart"></canvas></div>
        </div>
        <div class="bg-white p-3 rounded border border-gray-200">
          <h2 class="text-sm font-semibold mb-2">1er Semestre</h2>
          <div class="h-56"><canvas ref="barChart1"></canvas></div>
        </div>
        <div class="bg-white p-3 rounded border border-gray-200">
          <h2 class="text-sm font-semibold mb-2">2do Semestre</h2>
          <div class="h-56"><canvas ref="barChart2"></canvas></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  
  const filtroRango = ref('7')
  const metricas = ref([
    { titulo: 'Ocupación', valor: '78%', tendencia: '+5%' },
    { titulo: 'Reservas', valor: '124', tendencia: '+12%' },
    { titulo: 'Ingresos', valor: '$28k', tendencia: '-3%' },
    { titulo: 'Clientes', valor: '98', tendencia: '+8%' }
  ])
  
  const lineChart = ref(null)
  const pieChart = ref(null)
  const barChart1 = ref(null)
  const barChart2 = ref(null)
  let lineChartInstance = null
  
  // Interactividad
  const timeButtons = ref([
    { label: '7D', value: '7' },
    { label: '1M', value: '30' },
    { label: '3M', value: '90' },
    { label: '1A', value: '365' }
  ])
  const activeTimeRange = ref('7')
  const tooltip = ref({
    visible: false,
    x: 0,
    y: 0,
    label: '',
    value: 0
  })
  
  const changeTimeRange = (range) => {
    activeTimeRange.value = range
    // Simular cambio de datos
    const datasets = lineChartInstance.data.datasets[0].data
    if (range === '7') {
      lineChartInstance.data.datasets[0].data = [65, 59, 80, 81, 56, 55, 40]
    } else if (range === '30') {
      lineChartInstance.data.datasets[0].data = Array(30).fill().map((_, i) => Math.floor(Math.random() * 30) + 50)
    } else {
      lineChartInstance.data.datasets[0].data = Array(12).fill().map((_, i) => Math.floor(Math.random() * 50) + 30)
    }
    lineChartInstance.update()
  }
  
  const setupChartInteractivity = (chart) => {
    const canvas = chart.canvas
    canvas.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const points = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false)
      
      if (points.length) {
        const point = points[0]
        tooltip.value = {
          visible: true,
          x: x,
          y: y - 60, // Ajustar posición arriba del cursor
          label: chart.data.labels[point.index],
          value: chart.data.datasets[point.datasetIndex].data[point.index]
        }
      } else {
        tooltip.value.visible = false
      }
    }
    
    canvas.onmouseout = () => {
      tooltip.value.visible = false
    }
  }
  
  const initCharts = () => {
    // Gráfico de líneas interactivo
    lineChartInstance = new Chart(lineChart.value, {
      type: 'line',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Reservas',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { 
          legend: { display: false },
          tooltip: {
            enabled: false // Desactivamos tooltips nativos para usar el personalizado
          }
        },
        scales: { y: { beginAtZero: true } },
        interaction: {
          mode: 'nearest',
          intersect: false
        }
      }
    })
    setupChartInteractivity(lineChartInstance)
  
    // Otros gráficos (igual que antes)
    new Chart(pieChart.value, {
      type: 'pie',
      data: {
        labels: ['Ocupadas', 'Disponibles'],
        datasets: [{
          data: [35, 65],
          backgroundColor: ['#3B82F6', '#10B981'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } }
      }
    })
  
    const barOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  
    new Chart(barChart1.value, {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
          data: [30, 40, 45, 50, 49, 60],
          backgroundColor: '#3B82F6',
          borderRadius: 4
        }]
      },
      options: barOptions
    })
  
    new Chart(barChart2.value, {
      type: 'bar',
      data: {
        labels: ['Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: '#10B981',
          borderRadius: 4
        }]
      },
      options: barOptions
    })
  }
  
  const cargarDatos = async () => {
    await new Promise(r => setTimeout(r, 200))
    metricas.value = filtroRango.value === '7' ? [
      { titulo: 'Ocupación', valor: '78%', tendencia: '+5%' },
      { titulo: 'Reservas', valor: '124', tendencia: '+12%' },
      { titulo: 'Ingresos', valor: '$28k', tendencia: '-3%' },
      { titulo: 'Clientes', valor: '98', tendencia: '+8%' }
    ] : [
      { titulo: 'Ocupación', valor: '82%', tendencia: '+8%' },
      { titulo: 'Reservas', valor: '387', tendencia: '+22%' },
      { titulo: 'Ingresos', valor: '$89k', tendencia: '+5%' },
      { titulo: 'Clientes', valor: '245', tendencia: '+15%' }
    ]
  }
  
  onMounted(() => { cargarDatos(); initCharts() })
  </script>
  
  <style>
  canvas {
    width: 100% !important;
    height: 100% !important;
  }
  .tooltip {
    pointer-events: none;
  }
  </style>