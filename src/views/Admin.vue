<template>
  <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
    <!-- Datos del Admin -->
    <div class="text-center">
      <p class="text-lg font-semibold">Nombre: Juan</p>
      <p class="text-lg font-semibold">Apellido: Pérez</p>
      <p class="text-lg font-semibold">Correo Electrónico: juan.perez@email.com</p>
      <p class="text-lg font-semibold">Celular: +51 987654321</p>
    </div>

    <!-- Botón Cerrar Sesión -->
    <button 
      @click="cerrarSesion"
      class="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
    >
      Cerrar sesión
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    cerrarSesion() {
      // Lógica para cerrar sesión
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si quieres */
</style>
