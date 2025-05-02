import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Analisis from '@/views/Analisis.vue'
import Habitaciones from '@/views/Habitaciones.vue'
import Reservas from '@/views/Reservas.vue'
import Registro from '@/views/Registro.vue'

const routes = [
  {
    path: '/',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    component: Inicio,
    children: [
      {
        path: '',
        name: 'Inicio',
        component: { template: '<div></div>' },
        meta: { title: 'Inicio' }
      },
      {
        path: 'analisis',
        name: 'Analisis',
        component: Analisis,
        meta: { title: 'Análisis' }
      },
      {
        path: 'habitaciones',
        name: 'Habitaciones',
        component: Habitaciones,
        meta: { title: 'Habitaciones' }
      },
      {
        path: 'reservas',
        name: 'Reservas',
        component: Reservas,
        meta: { title: 'Reservas' }
      },
      {
        path: 'registro',
        name: 'Registro',
        component: Registro,
        meta: { title: 'Registro' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
