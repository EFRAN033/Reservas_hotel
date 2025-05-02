<template>
  <div class="app-container">
    <!-- Sidebar movido ligeramente hacia abajo -->
    <div class="sidebar">
      <div class="icon-container">
        <router-link to="/inicio/analisis" class="icon-item">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
            <span class="icon-label">Análisis</span>
          </div>
        </router-link>

        <router-link to="/inicio/habitaciones" class="icon-item">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <span class="icon-label">Habitaciones</span>
          </div>
        </router-link>

        <router-link to="/inicio/reservas" class="icon-item">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span class="icon-label">Reserva</span>
          </div>
        </router-link>

        <router-link to="/inicio/registro" class="icon-item">
          <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="icon-label">Registro</span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
// Lógica del componente
</script>

<style scoped>
.app-container {
  @apply flex h-screen;
}

/* Sidebar movido hacia abajo */
.sidebar {
  @apply w-16 bg-gradient-to-b from-blue-900 to-blue-800 flex flex-col items-center fixed left-0;
  top: 60%;
  transform: translateY(-50%);
  border-radius: 0 20px 20px 0;
  height: 70vh;
  min-height: 400px;
  padding: 2rem 0;
  z-index: 10;
  box-shadow: 4px 0 15px rgba(0, 46, 91, 0.3);
}

.icon-container {
  @apply flex flex-col items-center justify-between h-full py-6;
}

.icon-item {
  @apply p-2 rounded-xl text-white transition-all duration-300 relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
}

.icon-wrapper {
  @apply relative flex items-center justify-center;
}

.icon-label {
  @apply absolute left-full ml-3 px-3 py-1 bg-blue-800 text-white text-sm font-medium rounded-md whitespace-nowrap;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

/* Solo mostrar en hover */
.icon-item:hover .icon-label {
  opacity: 1;
  transform: translateX(0);
}

.icon-item:hover {
  @apply bg-white bg-opacity-10;
  transform: scale(1.05);
}

.icon-item svg {
  stroke-width: 1.8;
}

.main-content {
  @apply flex-1 overflow-auto p-6 bg-gray-50 ml-16;
}

@media (max-width: 768px) {
  .sidebar {
    @apply w-14;
    height: 65vh;
    min-height: 350px;
    padding: 1.5rem 0;
    border-radius: 0 16px 16px 0;
    top: 60%;
  }
  
  .icon-container {
    @apply py-4;
  }
  
  .icon-item {
    @apply p-1.5;
    width: 36px;
    height: 36px;
  }
  
  .main-content {
    @apply ml-14 p-4;
  }
  
  .icon-label {
    @apply text-xs;
  }
}
</style>