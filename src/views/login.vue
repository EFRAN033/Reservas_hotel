<template>
  <div class="login-main-container">
    <!-- Fondo principal -->
    <div class="background-image"></div>
    <div class="overlay"></div>

    <!-- Contenedor principal -->
    <div class="content-container">
      <!-- Formulario de login -->
      <div class="form-container">
        <!-- Logo -->
        <div class="logo-container">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          <h1 class="text-3xl font-bold text-gray-800">Panel Admin</h1>
        </div>

        <h2 class="text-xl font-semibold text-center mb-8 text-gray-700">Acceso Administrativo</h2>

        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email -->
          <div class="input-group">
            <label for="email" class="input-label">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Usuario Admin
            </label>
            <div class="relative">
              <div class="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input v-model="email" type="email" id="email" required class="input-field with-icon"
                placeholder="admin@hotel.com" autocomplete="username" />
            </div>
          </div>

          <!-- Contraseña -->
          <div class="input-group">
            <label for="password" class="input-label">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Contraseña
            </label>
            <div class="relative">
              <div class="input-icon">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input v-model="password" type="password" id="password" required class="input-field with-icon"
                placeholder="••••••••" autocomplete="current-password" />
            </div>
          </div>

          <!-- Botón -->
          <div>
            <button type="submit" class="submit-button group" :disabled="loading">
              <span v-if="!loading" class="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Acceder al Panel
              </span>
              <span v-else class="loading-spinner">
                <svg class="spinner-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Verificando...
              </span>
            </button>
          </div>

          <!-- Error -->
          <div v-if="errorMessage" class="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd" />
            </svg>
            {{ errorMessage }}
          </div>
        </form>

        <!-- Mensaje inferior -->
        <div class="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1 text-blue-500" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd" />
          </svg>
          Área restringida - Solo personal autorizado
        </div>
      </div>

      <!-- Imagen -->
      <div class="hotel-image-container">
        <div class="hotel-image-overlay"></div>
        <img src="@/assets/imagenes/hilton.svg" alt="Hotel" class="hotel-image" />
        <div class="hotel-image-caption">
          <h3 class="text-2xl font-bold text-white">Gestión Hotelera</h3>
          <p class="text-white opacity-90">Panel de control administrativo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');
const router = useRouter();

const handleLogin = () => {
  loading.value = true;
  errorMessage.value = '';

  setTimeout(() => {
    const adminUsers = [
      { email: 'admin@hotel.com', password: 'AdminSecure123' },
    ];

    const isValid = adminUsers.some(
      user => user.email === email.value && user.password === password.value
    );

    if (isValid) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push({ name: 'inicio' });
    } else {
      errorMessage.value = 'Credenciales incorrectas';
    }
    loading.value = false;
  }, 1500);
};
</script>

<style scoped>
.login-main-container {
  @apply min-h-screen flex items-center justify-center relative overflow-hidden;
}

.background-image {
  @apply absolute inset-0 bg-cover bg-center bg-no-repeat;
  background-image: url('../assets/imagenes/LOGIN(1).png');
  z-index: 1;
}

.overlay {
  @apply absolute inset-0 bg-black bg-opacity-60;
  z-index: 2;
}

.content-container {
  @apply flex w-full max-w-6xl mx-4 z-10 rounded-xl overflow-hidden shadow-2xl;
  height: 80vh;
  max-height: 700px;
}

.form-container {
  @apply bg-white p-10 w-full max-w-md flex flex-col justify-center;
  z-index: 3;
  flex: 1;
}

.logo-container {
  @apply flex items-center justify-center mb-8 space-x-3;
}

.input-group {
  @apply mb-4;
}

.input-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}

.input-field {
  @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200;
}

.input-field.with-icon {
  @apply pl-11;
}

.input-icon {
  @apply absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400;
}

.submit-button {
  @apply w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center font-medium;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.loading-spinner {
  @apply flex items-center justify-center;
}

.spinner-icon {
  @apply animate-spin -ml-1 mr-3 h-5 w-5 text-white;
}

.error-message {
  @apply text-red-500 text-sm text-center mt-2 py-2 px-3 bg-red-50 rounded-md;
}

.hotel-image-container {
  @apply hidden lg:block relative flex-1 bg-gray-900;
}

.hotel-image {
  @apply w-full h-full object-cover;
}

.hotel-image-overlay {
  @apply absolute inset-0 bg-black bg-opacity-40;
}

.hotel-image-caption {
  @apply absolute bottom-0 left-0 p-6;
}
</style>
