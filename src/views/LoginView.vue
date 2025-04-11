<template>
  <div class="min-h-screen bg-[#f5f9fc] flex">
    <!-- Header -->
    <header class="fixed top-0 inset-x-0 bg-white shadow-md z-[1000] px-4 md:px-12 py-2 h-[70px] md:h-[60px]">
        <nav class="w-full h-full flex items-center justify-between">
          <div class="flex items-center gap-4">
            <router-link 
              to="/" 
              class="flex items-center gap-2 text-[#104e75] hover:text-[#003157] transition-colors group"
            >
              <!-- Icono de flecha  -->
              <div class="relative w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#104e75] to-[#448ba9] group-hover:scale-105 transition-transform">
                <i class="fas fa-chevron-left text-white text-sm"></i>
              </div>
              <span class="hidden md:inline text-sm font-medium">Volver</span>
            </router-link>
            <a href="#" class="flex items-center h-14 overflow-hidden">
              <img 
                src="@/assets/imagenes/LOGO.svg" 
                alt="Fullness Logo"
                class="h-12 translate-y-2 object-contain hover:scale-105 transition-transform duration-300"
              >
            </a>

          </div>
        </nav>
      </header>
    <!-- Espacio para el Header -->
    <div class="h-[70px] md:h-[60px]"></div>

    <!-- Sección de Login -->
    <div class="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 lg:p-20">
      <div class="w-full max-w-md space-y-8">
        <!-- Logo y Título -->
        <div class="text-center space-y-4">
          <img src="@/assets/imagenes/logo(1).png" alt="Logo Fullness" class="w-40 mx-auto">
          <h1 class="text-3xl font-bold bg-gradient-to-r from-[#104e75] to-[#003157] bg-clip-text text-transparent">
            Iniciar Sesión
          </h1>
          <p class="text-gray-600">Accede para agendar tus sesiones de fisioterapia</p>
        </div>

        <!-- Formulario -->
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label class="block text-sm font-medium text-[#003157] mb-2">Correo electrónico</label>
            <div class="relative">
              <input
                type="email"
                v-model="form.email"
                required
                class="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9]"
                placeholder="ejemplo@gmail.com">
              <i class="fas fa-envelope absolute right-3 top-3.5 text-[#104e75]"></i>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-[#003157] mb-2">Contraseña</label>
            <div class="relative">
              <input
                type="password"
                v-model="form.password"
                required
                class="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9]"
                placeholder="••••••••">
              <i class="fas fa-lock absolute right-3 top-3.5 text-[#104e75]"></i>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <label class="flex items-center space-x-2">
              <input
                type="checkbox"
                v-model="form.remember"
                class="w-4 h-4 text-[#104e75] border-gray-300 rounded focus:ring-[#104e75]">
              <span class="text-sm text-gray-600">Mantener sesión activa</span>
            </label>
            <router-link to="/forgot-password" class="text-sm text-[#104e75] hover:underline">
              ¿Olvidó su contraseña?
            </router-link>
          </div>

          <button
            type="submit"
            class="w-full bg-gradient-to-r from-[#104e75] to-[#003157] text-white py-3.5 px-6 rounded-lg font-semibold
                   hover:from-[#003157] hover:to-[#104e75] transition-all transform hover:scale-[1.02] shadow-md">
            Iniciar Sesión
          </button>
        </form>

        <!-- Divisor -->
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="px-2 bg-white text-sm text-gray-500">O CONTINUAR CON</span>
          </div>
        </div>

        <!-- Botones Sociales -->
        <div class="flex gap-2">
          <button @click="socialLogin('google')" class="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-[#dee3e9] transition-colors group">
            <i class="fab fa-google text-[#104e75] group-hover:text-[#003157] text-base"></i>
            <span class="text-xs hidden md:inline">Google</span>
          </button>
          <button @click="socialLogin('facebook')" class="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-[#dee3e9] transition-colors group">
            <i class="fab fa-facebook-f text-[#104e75] group-hover:text-[#003157] text-base"></i>
            <span class="text-xs hidden md:inline">Facebook</span>
          </button>
          <button @click="socialLogin('linkedin')" class="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-[#dee3e9] transition-colors group">
            <i class="fab fa-linkedin-in text-[#104e75] group-hover:text-[#003157] text-base"></i>
            <span class="text-xs hidden md:inline">LinkedIn</span>
          </button>
        </div>

        <!-- Enlaces adicionales -->
        <p class="text-center text-sm text-gray-600">
          ¿No tienes cuenta? 
          <router-link to="/registro" class="text-[#104e75] font-semibold hover:underline">
            Regístrate
          </router-link>
        </p>
      </div>
    </div>

    <!-- Sección de Imagen -->
    <div class="hidden md:block w-1/2 bg-gradient-to-br from-[#104e75cc] to-[#003157cc] relative">
      <img 
        src="https://img.freepik.com/foto-gratis/tiro-medio-terapia-rehabilitacion-fisica_23-2149173475.jpg" 
        class="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
        alt="Fisioterapia">
      
      <!-- Overlay de Contacto -->
      <div class="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white space-y-2">
        <div class="flex items-center space-x-2">
          <i class="fas fa-phone"></i>
          <span>(+51) 941-609-887</span>
        </div>
        <div class="flex items-center space-x-2">
          <i class="fas fa-envelope"></i>
          <span>contacto@fullness.org</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      }
    }
  },
  //Isaac
  methods: {
    handleLogin() {
      // Validación de credenciales
      if (this.form.email === 'abc@gmail.com' && this.form.password === '123456') {
        // Guardar estado de autenticación en localStorage
        localStorage.setItem('isAuthenticated', 'true');
        // Redirigir al usuario a la página de inicio
        this.$router.push('/');
      } else {
        // Mostrar mensaje de error
        alert('Credenciales incorrectas. Por favor, intente nuevamente.');
      }
    },
    socialLogin(provider) {
      // Lógica para login social
    }
  }
  //Isaac Fin
}
</script>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

@media (max-width: 768px) {
  .login-container {
    grid-template-columns: 1fr;
  }
}
</style>