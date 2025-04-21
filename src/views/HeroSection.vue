<template>
  <section
    id="inicio"
    class="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 md:pt-36 md:pb-24"
  >
    <!-- Fondo abstracto dinámico -->
    <div class="absolute inset-0 overflow-hidden opacity-10">
      <div class="absolute top-0 left-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-20 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-500 opacity-20 blur-3xl"></div>
    </div>

    <!-- Contenido principal -->
    <div class="container relative mx-auto px-6">
      <div class="flex flex-col items-center lg:flex-row">
        <!-- Columna de texto -->
        <div class="mb-12 lg:mb-0 lg:w-1/2 lg:pr-10 animate-slide-in-left">
          <!-- Badge de novedad con efecto de atención -->
          <div class="mb-6 inline-flex animate-bounce items-center rounded-full bg-gradient-to-r from-blue-600 to-teal-500 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-400/30 transition-all hover:shadow-blue-400/50">
            <span class="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-white"></span>
            ¡NUEVA VERSIÓN DISPONIBLE!
          </div>

          <!-- Título principal con gradiente -->
          <h1 class="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Optimiza</span> tu cadena de<br>
            <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">suministro</span> con inteligencia
          </h1>

          <!-- Subtítulo descriptivo -->
          <p class="mb-6 text-lg text-gray-600 md:text-xl">
            La plataforma todo-en-uno que transforma tus procesos de compras,
            <span class="font-semibold text-blue-600">reduciendo costos</span> y
            <span class="font-semibold text-teal-500">maximizando eficiencia</span>
            con tecnología de vanguardia.
          </p>

          <!-- CTA Principal y secundario -->
          <div class="mb-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            
            <router-link
              to="/afiliados"
              class="flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-teal-600 hover:shadow-xl hover:shadow-blue-400/30 group"
            >
              Ver categorías
              <svg
                class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </router-link>

            
            <a
              href="#features"
              class="flex items-center justify-center rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600"
            >
              <svg
                class="mr-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
              Ver características
            </a>
          </div>

         
          <div class="flex items-center">
            <div class="flex -space-x-3">
              <img
                class="h-12 w-12 rounded-full border-2 border-white shadow-md"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Cliente satisfecho"
                loading="lazy"
              />
              <img
                class="h-12 w-12 rounded-full border-2 border-white shadow-md"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Cliente satisfecho"
                loading="lazy"
              />
              <img
                class="h-12 w-12 rounded-full border-2 border-white shadow-md"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Cliente satisfecho"
                loading="lazy"
              />
              <div class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-xs font-bold text-white shadow-md">
                +2.5K
              </div>
            </div>
            <div class="ml-4">
              <div class="flex items-center">
                <div class="flex text-yellow-400">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    ></path>
                  </svg>
                </div>
                <span class="ml-2 text-sm font-medium text-gray-600">4.9 (2,500+ reseñas)</span>
              </div>
              <p class="mt-1 text-sm text-gray-500">
                Empresas líderes en 15 países confían en nuestra solución
              </p>
            </div>
          </div>
        </div>

        <!-- Columna de imagen -->
        <div class="lg:w-1/2 animate-slide-in-right">
          <div class="relative">
            
            <div class="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                class="h-auto w-full transform transition-all duration-500 hover:scale-105"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Dashboard de gestión de suministros"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-blue-900/10"></div>
            </div>

            <!-- Tarjeta flotante con métrica impactante -->
            <div
              class="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-5 shadow-2xl md:block"
            >
              <div class="flex items-start">
                <div class="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <svg
                    class="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Eficiencia mejorada
                  </p>
                  <p class="text-2xl font-bold text-gray-900">+87%</p>
                  <p class="text-sm text-gray-600">en procesos de compra</p>
                </div>
              </div>
            </div>

            <!-- Sello de garantía -->
            <div
              class="absolute -right-6 -top-6 hidden items-center rounded-full bg-white px-4 py-2 shadow-lg md:flex"
            >
              <div class="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                <svg
                  class="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="text-xs font-medium text-gray-500">GARANTÍA</p>
                <p class="text-sm font-bold text-gray-900">30 días</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Logos de empresas clientes (social proof) -->
    <div class="container mx-auto mt-16 px-6 animate-slide-in-bottom">
      <p class="mb-6 text-center text-sm font-medium uppercase tracking-wider text-gray-500">
        Confiado por equipos de todo el mundo
      </p>
      <div class="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale">
        <img class="h-8" src="https://logo.clearbit.com/google.com" alt="Google" loading="lazy" />
        <img class="h-8" src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" loading="lazy" />
        <img class="h-8" src="https://logo.clearbit.com/amazon.com" alt="Amazon" loading="lazy" />
        <img class="h-8" src="https://logo.clearbit.com/slack.com" alt="Slack" loading="lazy" />
        <img class="h-8" src="https://logo.clearbit.com/airbnb.com" alt="Airbnb" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  mounted() {
    
    const elements = document.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right, .animate-slide-in-bottom');
    elements.forEach(el => {
      el.style.opacity = '0';
      setTimeout(() => {
        el.style.opacity = '1';
      }, 10);
    });
  }
};
</script>

<style>

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}


@keyframes slideInLeft {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInBottom {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out forwards;
}

.animate-slide-in-bottom {
  animation: slideInBottom 0.8s ease-out forwards;
}


.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}


.gradient-text {
  background-size: 200% auto;
  animation: gradient-shift 3s ease infinite;
}

@keyframes gradient-shift {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}
</style>