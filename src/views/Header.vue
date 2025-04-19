<template>
  <header class="fixed w-full bg-white shadow-md z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="text-2xl font-bold">
          <span class="text-blue-600">Pro</span
          ><span class="text-blue-800">Veo</span>
        </div>

        <nav class="hidden md:flex space-x-8">
          <a href="#inicio" class="hover:text-blue-600 transition-colors"
            >Inicio</a
          >
          <a href="#soluciones" class="hover:text-blue-600 transition-colors"
            >Soluciones</a
          >
          <a href="#casos" class="hover:text-blue-600 transition-colors"
            >Casos</a
          >
          <a href="#precios" class="hover:text-blue-600 transition-colors"
            >Precios</a
          >
          <a href="#contacto" class="hover:text-blue-600 transition-colors"
            >Contacto</a
          >
        </nav>

        <button class="md:hidden focus:outline-none" @click="toggleMenu">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>

      <div
        id="mobile-menu"
        class="md:hidden max-h-0 overflow-hidden transition-all duration-300"
      >
        <div class="pt-4 pb-2 space-y-3">
          <a href="#inicio" class="block hover:text-blue-600 transition-colors"
            >Inicio</a
          >
          <a
            href="#soluciones"
            class="block hover:text-blue-600 transition-colors"
            >Soluciones</a
          >
          <a href="#casos" class="block hover:text-blue-600 transition-colors"
            >Casos</a
          >
          <a
            href="#precios"
            class="block hover:text-blue-600 transition-colors"
            >Precios</a
          >
          <a
            href="#contacto"
            class="block hover:text-blue-600 transition-colors"
            >Contacto</a
          >
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
    },
    setupSmoothScrolling() {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });

          // Close mobile menu if open
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