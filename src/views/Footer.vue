<template>
  <footer id="contacto" class="bg-dark text-white pt-8 pb-4">
    <div class="container mx-auto px-3">
      <!-- Versión móvil compacta -->
      <div class="md:hidden">
        <div class="flex flex-col items-center mb-6">
          <h3 class="text-lg font-bold mb-2">
            <span class="text-blue-600">Pro</span>
            <span class="text-blue-800">Veo</span>
          </h3>
          <p class="text-gray-400 text-xs text-center mb-3 max-w-xs">
            Plataforma líder en gestión de compras y cadena de suministro.
          </p>
          <div class="flex space-x-4 mb-4">
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-sm">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-sm">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-sm">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          
          <div class="w-full">
            <h4 class="font-semibold mb-2 border-b border-gray-700 pb-1 text-sm text-gray-400 text-center">Contacto Rápido</h4>
            <ul class="space-y-1 text-center">
              <li>
                <a href="mailto:hola@Proveo.com" class="text-gray-400 hover:text-blue-600 transition-colors text-xs">hola@Proveo.com</a>
              </li>
              <li>
                <a href="tel:+525512345678" class="text-gray-400 hover:text-blue-600 transition-colors text-xs">+52 55 1234 5678</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Versión desktop completa -->
      <div class="hidden md:grid md:grid-cols-4 gap-6 mb-8">
        <!-- Logo y redes -->
        <div>
          <h3 class="text-xl font-bold mb-3">
            <span class="text-blue-600">Pro</span>
            <span class="text-blue-800">Veo</span>
          </h3>
          <p class="text-gray-400 text-sm mb-3">
            Plataforma líder en gestión inteligente de compras y cadena de suministro.
          </p>
          <div class="flex space-x-3">
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-sm">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-sm">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-sm">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Secciones solo en desktop -->
        <div class="hidden md:block">
          <h4 class="font-semibold mb-2 border-b border-gray-700 pb-1 text-sm text-gray-400">Producto</h4>
          <ul class="space-y-1">
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs">Funcionalidades</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs">Precios</a></li>
          </ul>
        </div>

        <div class="hidden md:block">
          <h4 class="font-semibold mb-2 border-b border-gray-700 pb-1 text-sm text-gray-400">Recursos</h4>
          <ul class="space-y-1">
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs">Blog</a></li>
            <li><a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xs">Centro de ayuda</a></li>
          </ul>
        </div>

        <!-- Contacto -->
        <div>
          <h4 class="font-semibold mb-2 border-b border-gray-700 pb-1 text-sm text-gray-400">Contacto</h4>
          <ul class="space-y-1 mb-3">
            <li class="flex items-center">
              <i class="fas fa-envelope text-blue-600 mr-2 text-xs"></i>
              <a href="mailto:hola@Proveo.com" class="text-gray-400 hover:text-blue-600 transition-colors text-xs">Email</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone-alt text-blue-600 mr-2 text-xs"></i>
              <a href="tel:+525512345678" class="text-gray-400 hover:text-blue-600 transition-colors text-xs">Llamar</a>
            </li>
          </ul>
          <form class="space-y-2">
            <input
              type="email"
              placeholder="Tu correo"
              class="w-full bg-gray-800 rounded px-2 py-1 focus:outline-none text-white placeholder-gray-500 text-xs"
            />
            <button
              type="submit"
              class="bg-blue-600 text-white font-medium w-full px-3 py-1 rounded text-xs transition-all hover:bg-blue-700"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright y legales -->
      <div class="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 text-xxs mb-2 md:mb-0">
          © 2023 Proveo. Todos los derechos reservados.
        </p>
        <div class="flex space-x-3">
          <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xxs">Términos</a>
          <a href="#" class="text-gray-400 hover:text-blue-600 transition-colors text-xxs">Privacidad</a>
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

<style>
/* Clase personalizada para texto extra pequeño */
.text-xxs {
  font-size: 0.65rem;
  line-height: 0.9rem;
}
</style>