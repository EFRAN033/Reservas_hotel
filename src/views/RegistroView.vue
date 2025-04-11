<template>
  <!-- Header -->
  <header class="fixed top-0 inset-x-0 bg-white shadow-md z-[1000] px-4 md:px-12 py-2 h-[70px] md:h-[60px]">
    <nav class="w-full h-full flex items-center justify-between">
      <div class="flex items-center gap-4">
        <router-link 
          to="/" 
          class="flex items-center gap-2 text-[#104e75] hover:text-[#003157] transition-colors group"
        >
          <!-- Diseño mejorado del botón "Volver" -->
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

  <!-- Contenido principal -->
  <main class="pt-[60px] h-screen bg-[#dee3e9] flex items-center justify-center p-4">
    <div class="w-full max-w-6xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row min-h-[calc(100vh-100px)] max-h-[800px]">
      <!-- Sección ilustrativa -->
      <div class="hidden md:flex md:w-2/5 bg-gradient-to-b from-[#104e75] to-[#003157] rounded-l-2xl p-6 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[url('@/assets/imagenes/texture.png')]"></div>
        <div class="h-full flex flex-col justify-center text-white relative">
          <div class="space-y-5">
            <img src="@/assets/imagenes/logo(1).png" alt="logo" class="w-50 h-20 mx-auto animate-fade-in">
            <h2 class="text-2xl font-bold text-center font-sans">Tu camino al bienestar comienza aquí</h2>
            <p class="text-sm text-center opacity-90 leading-relaxed px-2">
              En Fullness, no solo te registras, te unes a una comunidad comprometida con tu salud integral.
            </p>
            <ul class="space-y-3 mt-6">
              <li class="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg">
                <div class="p-1.5 bg-[#448ba9]/20 rounded-md">
                  <i class="fas fa-hand-holding-heart text-[#448ba9] text-base"></i>
                </div>
                <span class="text-sm">Acompañamiento personalizado</span>
              </li>
              <li class="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg">
                <div class="p-1.5 bg-[#448ba9]/20 rounded-md">
                  <i class="fas fa-shield-alt text-[#448ba9] text-base"></i>
                </div>
                <span class="text-sm">Seguridad de nivel médico</span>
              </li>
              <li class="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg">
                <div class="p-1.5 bg-[#448ba9]/20 rounded-md">
                  <i class="fas fa-comments text-[#448ba9] text-base"></i>
                </div>
                <span class="text-sm">Soporte 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="w-full md:w-3/5 p-6 flex flex-col justify-center overflow-y-auto">
        <div class="text-center mb-6">
          <h1 class="text-2xl font-bold text-[#104e75] mb-1 font-sans">Comienza tu experiencia Fullness</h1>
          <p class="text-[#003157] text-sm">Crea tu cuenta en simples pasos</p>
        </div>

        <!-- Selector de perfil -->
        <div class="grid grid-cols-2 gap-2 mb-4">
          <button 
            @click="isFisio = false"
            :class="[
              'group relative p-3 rounded-lg border-2 transition-all',
              !isFisio 
                ? 'border-[#104e75] bg-[#dee3e9] text-[#104e75] shadow-sm' 
                : 'border-gray-200 hover:border-[#b7ebfa] text-gray-500 hover:text-gray-700'
            ]">
            <div class="flex flex-col items-center gap-1">
              <i class="fas fa-user-circle text-xl"></i>
              <span class="font-medium text-xs">Soy Paciente</span>
            </div>
            <div v-if="!isFisio" class="absolute -top-1.5 -right-1.5">
              <div class="bg-[#104e75] text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                <i class="fas fa-check"></i>
              </div>
            </div>
          </button>
          <button 
            @click="isFisio = true"
            :class="[
              'group relative p-3 rounded-lg border-2 transition-all',
              isFisio 
                ? 'border-[#104e75] bg-[#dee3e9] text-[#104e75] shadow-sm' 
                : 'border-gray-200 hover:border-[#b7ebfa] text-gray-500 hover:text-gray-700'
            ]">
            <div class="flex flex-col items-center gap-1">
              <i class="fas fa-user-md text-xl"></i>
              <span class="font-medium text-xs">Soy Especialista</span>
            </div>
            <div v-if="isFisio" class="absolute -top-1.5 -right-1.5">
              <div class="bg-[#104e75] text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px]">
                <i class="fas fa-check"></i>
              </div>
            </div>
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="text-xs font-medium text-gray-700">Nombre completo</label>
              <div class="relative">
                <input 
                  type="text"
                  v-model="form.nombre"
                  required
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9] placeholder-gray-400">
                <i class="fas fa-user-tag absolute right-2 top-2.5 text-gray-400 text-sm"></i>
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-xs font-medium text-gray-700">DNI / Identificación</label>
              <div class="relative">
                <input
                  type="text"
                  v-model="form.dni"
                  required
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9] placeholder-gray-400">
                <i class="fas fa-id-card absolute right-2 top-2.5 text-gray-400 text-sm"></i>
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-xs font-medium text-gray-700">Correo electrónico</label>
              <div class="relative">
                <input
                  type="email"
                  v-model="form.email"
                  required
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9] placeholder-gray-400">
                <i class="fas fa-envelope absolute right-2 top-2.5 text-gray-400 text-sm"></i>
              </div>
            </div>
            <div class="space-y-1">
              <label class="text-xs font-medium text-gray-700">Teléfono</label>
              <div class="relative">
                <input
                  type="tel"
                  v-model="form.telefono"
                  required
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9] placeholder-gray-400">
                <i class="fas fa-mobile-alt absolute right-2 top-2.5 text-gray-400 text-sm"></i>
              </div>
            </div>
            <div class="col-span-2 space-y-1">
              <label class="text-xs font-medium text-gray-700">Contraseña segura</label>
              <div class="relative">
                <input
                  type="password"
                  v-model="form.password"
                  required
                  class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9] placeholder-gray-400">
                <i class="fas fa-lock absolute right-2 top-2.5 text-gray-400 text-sm"></i>
              </div>
            </div>
          </div>

          <div v-if="isFisio" class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="text-xs font-medium text-gray-700">N° Colegiado</label>
              <input
                type="text"
                v-model="form.num_colegiado"
                class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9]">
            </div>
            <div class="space-y-1">
              <label class="text-xs font-medium text-gray-700">Especialidad</label>
              <select
                v-model="form.especialidad"
                class="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#448ba9] focus:border-[#448ba9]">
                <option value="">Selecciona especialidad</option>
                <option value="1">Fisioterapia Deportiva</option>
                <option value="2">Rehabilitación Neurológica</option>
                <option value="3">Traumatología</option>
              </select>
            </div>
          </div>

          <div class="flex items-start mt-3">
            <input
              id="terms"
              type="checkbox"
              v-model="form.terms"
              required
              class="w-3.5 h-3.5 text-[#104e75] border-gray-300 rounded focus:ring-[#104e75] mt-1">
            <label for="terms" class="ml-2 text-xs text-gray-600 leading-tight">
              Acepto los <a href="#" class="text-[#104e75] font-medium hover:underline">términos</a> y 
              <a href="#" class="text-[#104e75] font-medium hover:underline">privacidad</a>
            </label>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full mt-4 bg-gradient-to-r from-[#104e75] to-[#448ba9] hover:from-[#003157] hover:to-[#104e75] text-white py-3 px-5 rounded-lg font-semibold transition-all transform hover:scale-[1.01] shadow-md">
            <span v-if="!loading" class="flex items-center justify-center gap-1.5 text-sm">
              <i class="fas fa-rocket text-sm"></i>
              Comenzar ahora
            </span>
            <span v-else class="flex items-center justify-center gap-1.5 text-sm">
              <i class="fas fa-spinner fa-spin"></i>
              Creando tu espacio...
            </span>
          </button>

          <!-- Login social -->
          <div class="space-y-3 mt-4">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center">
                <span class="px-2 bg-white text-gray-500 text-xs">Continúa con</span>
              </div>
            </div>
            <div class="flex gap-2">
              <button 
                id="googleSignInButton"
                class="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-[#f8f9fa] transition-colors bg-white text-gray-700"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                  class="w-4 h-4"
                  alt="Google"
                >
                <span class="text-xs font-medium">Continuar con Google</span>
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
          </div>

          <p class="text-center text-xs text-[#003157] mt-3">
            ¿Ya tienes cuenta? 
            <router-link to="/login" class="text-[#104e75] font-semibold hover:underline">
              Accede aquí
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CompactRegister',
  data() {
    return {
      showLoader: true,
      loading: false,
      isFisio: false,
      googleClientId: '488360135215-3fbij1cj0rijjlhh4lbo9vt0kvoenh55.apps.googleusercontent.com',
      form: {
        nombre: '',
        dni: '',
        telefono: '',
        email: '',
        password: '',
        num_colegiado: '',
        especialidad: '',
        terms: false,
        tipo_usuario: 'paciente'
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.showLoader = false
    }, 2200);
    // Inicializa Google Sign-In después de montar el componente
    this.$nextTick(() => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: this.googleClientId,
          callback: this.handleGoogleCredentialResponse,
          ux_mode: 'popup',
          context: 'signup'
        });
        // Personaliza el botón
        window.google.accounts.id.renderButton(
          document.getElementById('googleSignInButton'),
          { 
            theme: 'outline',
            size: 'medium',
            text: 'signup_with',
            shape: 'rectangular',
            width: 300
          }
        );
      }
    });
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Lógica de registro normal aquí
      } finally {
        this.loading = false;
      }
    },
    async handleGoogleCredentialResponse(response) {
      try {
        this.loading = true;
        // 1. Enviar credencial al backend
        const res = await fetch('http://localhost:5000/auth/google/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            credential: response.credential,
            isFisio: this.isFisio
          })
        });
        const data = await res.json();
        if (data.success) {
          // 2. Redirigir al dashboard después del registro
          this.$router.push('/dashboard');
        } else {
          console.error('Error en registro Google:', data.error);
        }
      } catch (error) {
        console.error('Error al procesar Google Sign-In:', error);
      } finally {
        this.loading = false;
      }
    },
    socialLogin(provider) {
      if (provider === 'google') {
        // Forzar el popup de Google si el botón no funciona
        window.google.accounts.id.prompt();
      } else {
        console.log(`Iniciando sesión con ${provider}`);
      }
    }
  }
}
</script>

<style>
/* Estilos adicionales para el botón de Google */
.g_id_signin iframe {
  width: 100% !important;
  height: 40px !important;
}

#googleSignInButton {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>