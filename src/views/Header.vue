<template>
  <header class="fixed w-full bg-white shadow-md z-50">
    <div class="w-full px-4 py-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex items-center justify-between">
        <!-- Logo completamente pegado a la izquierda -->
        <div class="text-2xl font-bold -ml-3 transform translate-x-1">
          <span class="text-blue-600">Pro</span>
          <span class="text-blue-800">Veo</span>
        </div>

        <nav class="hidden md:flex space-x-8">
          <a href="#inicio" class="hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#soluciones" class="hover:text-blue-600 transition-colors">Soluciones</a>
          <a href="#casos" class="hover:text-blue-600 transition-colors">Casos</a>
          <a href="#precios" class="hover:text-blue-600 transition-colors">Precios</a>
          <a href="#contacto" class="hover:text-blue-600 transition-colors">Contacto</a>
        </nav>

        <button class="md:hidden focus:outline-none" @click="toggleMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Menú móvil -->
      <div
        id="mobile-menu"
        class="w-full md:hidden max-h-0 overflow-hidden transition-all duration-300"
      >
        <div class="pt-4 pb-2 space-y-3">
          <a href="#inicio" class="block hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#soluciones" class="block hover:text-blue-600 transition-colors">Soluciones</a>
          <a href="#casos" class="block hover:text-blue-600 transition-colors">Casos</a>
          <a href="#precios" class="block hover:text-blue-600 transition-colors">Precios</a>
          <a href="#contacto" class="block hover:text-blue-600 transition-colors">Contacto</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    toggleMenu() {
      const menu = document.getElementById("mobile-menu");
      menu.classList.toggle("max-h-0");
      menu.classList.toggle("max-h-[1000px]");
      
      if (menu.classList.contains("max-h-[1000px]")) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(anchor.getAttribute("href"))?.scrollIntoView({
            behavior: "smooth",
          });

          const menu = document.getElementById("mobile-menu");
          if (menu.classList.contains("max-h-[1000px]")) {
            this.toggleMenu();
          }
        });
      });
    },
  },
  mounted() {
    this.setupSmoothScrolling();
  },
};
</script>