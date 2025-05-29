import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import Inicio from '@/views/Inicio.vue'
import Analisis from '@/views/Analisis.vue'
import Habitaciones from '@/views/Habitaciones.vue'
import Reservas from '@/views/Reservas.vue'
import Registro from '@/views/Registro.vue'
import Admin from '@/views/Admin.vue'

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { title: 'Inicio de Sesión', public: true, hideForAuth: true }
  },
  {
    path: '/inicio',
    component: Inicio,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Inicio',
        component: { template: '<div>Bienvenido</div>' },
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
        meta: { title: 'Registro de Usuario' }
      },
      {
        path: 'admin',
        name: 'Admin',
        component: Admin,
        meta: { title: 'Panel de Administración', requiresAuth: true }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(`[Router] Intentando navegar a: ${to.fullPath}`)
  const isAuthenticated = localStorage.getItem('isAuthenticated')

  if (to.meta.requiresAuth && !isAuthenticated) {
    console.warn('[Router] Acceso no autorizado, redirigiendo a /login')
    return next('/login')
  }

  if (to.meta.hideForAuth && isAuthenticated && to.path === '/login') {
    console.log('[Router] Usuario autenticado, redirigiendo a /inicio')
    return next('/inicio')
  }

  console.log('[Router] Navegación permitida')
  next()
})

router.afterEach((to) => {
  const title = to.meta.title || 'Hotel Admin'
  document.title = `Hotel Admin | ${title}`
  console.log(`[Router] Título actualizado: ${document.title}`)
})

export default router
