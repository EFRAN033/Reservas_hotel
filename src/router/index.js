import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue' // Importación en minúsculas para coincidir con el archivo
import Inicio from '@/views/Inicio.vue'
import Analisis from '@/views/Analisis.vue'
import Habitaciones from '@/views/Habitaciones.vue'
import Reservas from '@/views/Reservas.vue'
import Registro from '@/views/Registro.vue'
import Admin from '@/views/Admin.vue'

const routes = [
  // Redirección raíz a login
  {
    path: '/',
    redirect: '/login'
  },
  // Ruta de login (pública)
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: 'Inicio de Sesión',
      public: true, // Ruta accesible sin autenticación
      hideForAuth: true // Oculta esta ruta si el usuario está autenticado
    }
  },
  // Ruta principal protegida
  {
    path: '/inicio',
    component: Inicio,
    meta: { requiresAuth: true }, // Protección de autenticación
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
      }
    ]
  },
  // Ruta de administración
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      title: 'Panel de Administración',
      requiresAuth: true
    }
  },
  // Ruta de captura para errores 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Guardia de navegación mejorado con logs de diagnóstico
router.beforeEach((to, from, next) => {
  console.log(`[Router] Intentando navegar a: ${to.path}`)
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  
  // Verificar autenticación para rutas protegidas
  if (to.meta.requiresAuth && !isAuthenticated) {
    console.warn('[Router] Acceso no autorizado, redirigiendo a login')
    return next('/login')
  }

  // Redirigir si ya está autenticado y trata de acceder al login
  if (to.meta.hideForAuth && isAuthenticated) {
    console.log('[Router] Usuario autenticado, redirigiendo a /inicio')
    return next('/inicio')
  }

  console.log('[Router] Navegación permitida')
  next()
})

// Configuración del título de la página
router.afterEach((to) => {
  const title = to.meta.title || 'Hotel Admin'
  document.title = `Hotel Admin | ${title}`
  console.log(`[Router] Título actualizado: ${document.title}`)
})

export default router