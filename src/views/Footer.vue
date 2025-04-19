<template>
  <footer id="contacto" class="bg-dark text-white pt-8 md:pt-12 pb-4 md:pb-6">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-10">
        <!-- Logo y redes -->
        <div>
          <h3 class="text-lg md:text-xl font-bold mb-2 md:mb-3">
            <span class="text-blue-600">Pro</span>
            <span class="text-blue-800">Veo</span>
          </h3>
          <p class="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
            Plataforma líder en gestión inteligente de compras y cadena de suministro.
          </p>
          <div class="flex space-x-2 md:space-x-3">
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Producto (oculto en móvil) -->
        <div class="hidden md:block">
          <h4 class="font-semibold mb-2 md:mb-3 border-b border-gray-700 pb-1 text-sm md:text-base text-gray-400">Producto</h4>
          <ul class="space-y-1">
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">Funcionalidades</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">Precios</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">Integraciones</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">Actualizaciones</a></li>
          </ul>
        </div>

        <!-- Recursos (oculto en móvil) -->
        <div class="hidden md:block">
          <h4 class="font-semibold mb-2 md:mb-3 border-b border-gray-700 pb-1 text-sm md:text-base text-gray-400">Recursos</h4>
          <ul class="space-y-1">
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">Blog</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">Guías</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">Webinars</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">Centro de ayuda</a></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h4 class="font-semibold mb-2 md:mb-3 border-b border-gray-700 pb-1 text-sm md:text-base text-gray-400">Contacto</h4>
          <ul class="space-y-1 mb-3 md:mb-4">
            <li class="flex items-center">
              <i class="fas fa-envelope text-blue-600 mr-2 text-xs"></i>
              <a href="mailto:hola@Proveo.com" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">hola@Proveo.com</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone-alt text-blue-600 mr-2 text-xs"></i>
              <a href="tel:+525512345678" class="text-gray-400 hover:text-blue-600 transition-colors text-xs md:text-sm">+52 55 1234 5678</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt text-blue-600 mr-2 text-xs"></i>
              <span class="text-gray-400 text-xs md:text-sm">Av. Reforma 123, CDMX</span>
            </li>
          </ul>
          <form class="space-y-2">
            <input
              type="email"
              placeholder="Tu correo"
              class="w-full bg-gray-800 rounded px-3 py-1 md:py-2 focus:outline-none text-white placeholder-gray-500 text-xs md:text-sm"
            />
            <button
              type="submit"
              class="bg-blue-600 text-white font-medium w-full px-4 py-1 md:py-2 rounded text-xs md:text-sm transition-all hover:bg-blue-700"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright y legales -->
      <div class="border-t border-gray-800 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-xxs md:text-xs mb-2 md:mb-0">
          © 2023 Proveo. Todos los derechos reservados.
        </p>
        <div class="flex space-x-3 md:space-x-4">
          <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xxs md:text-xs">Términos</a>
          <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xxs md:text-xs">Privacidad</a>
          <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xxs md:text-xs">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>