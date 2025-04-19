<template>
  <header class="fixed w-full bg-white shadow-md z-50">
    <!-- Cambié container por w-full y añadí px-4 para mejor espaciado en móvil -->
    <div class="w-full px-4 py-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold">
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
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>

      <!-- Menú móvil - Añadí w-full para asegurar que ocupe todo el ancho -->
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
      
      // Pequeña optimización: si el menú se abre, deshabilitar scroll de body
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
          document.querySelector(this.getAttribute("href"))?.scrollIntoView({
            behavior: "smooth",
          });

          // Cerrar menú móvil si está abierto
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