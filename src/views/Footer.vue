<template>
  <footer id="contacto" class="bg-dark text-white pt-20 pb-10">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-10 mb-16">
        <div>
          <h3 class="text-2xl font-bold mb-4">
            <span class="text-primary">Pro</span
            ><span class="text-secondary">Veo</span>
          </h3>
          <p class="text-gray-400 mb-6">
            La plataforma líder en gestión inteligente de compras y cadena de
            suministro para empresas innovadoras.
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-secondary transition-colors"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-secondary transition-colors"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-secondary transition-colors"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-secondary transition-colors"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Producto
          </h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Funcionalidades</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Precios</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Integraciones</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Actualizaciones</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Roadmap</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Recursos
          </h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Blog</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Guías</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Webinars</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >Centro de ayuda</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-secondary transition-colors"
                >API Docs</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
            Contacto
          </h4>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center">
              <i class="fas fa-envelope text-secondary mr-2"></i>
              <a
                href="mailto:hola@Proveo.com"
                class="text-gray-400 hover:text-secondary transition-colors"
                >hola@Proveo.com</a
              >
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone-alt text-secondary mr-2"></i>
              <a
                href="tel:+525512345678"
                class="text-gray-400 hover:text-secondary transition-colors"
                >+52 55 1234 5678</a
              >
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt text-secondary mr-2"></i>
              <span class="text-gray-400">Av. Reforma 123, CDMX</span>
            </li>
          </ul>
          <form class="space-y-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              class="w-full bg-gray-800 rounded-lg px-4 py-3 focus:outline-none text-white placeholder-gray-500"
            />
            <button
              type="submit"
              class="bg-secondary text-dark font-semibold w-full px-6 py-3 rounded-lg transition-all duration-400 hover:bg-yellow-400 hover:-translate-y-0.5 shadow-md hover:shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/40"
            >
              Suscribirse al newsletter
            </button>
          </form>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-gray-500 text-sm mb-4 md:mb-0">
          © 2023 Proveo. Todos los derechos reservados.
        </p>
        <div class="flex space-x-6">
          <a
            href="#"
            class="text-gray-400 hover:text-secondary transition-colors text-sm"
            >Términos</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-secondary transition-colors text-sm"
            >Privacidad</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-secondary transition-colors text-sm"
            >Cookies</a
          >
          <a
            href="#"
            class="text-gray-400 hover:text-secondary transition-colors text-sm"
            >Aviso legal</a
          >
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
