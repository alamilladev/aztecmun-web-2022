<template>
  <div class="maintenance-container">
    <h1>Pagina en mantenimiento</h1>
    <p>
      Estamos trabajando para solucionar los errores <br />
      Gracias por su comprención
    </p>
    <nuxt-link to="/signup" class="link">Probar registro</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MaintenancePage',
  layout: 'default',
  head: {
    title: 'AztecMUN 2022 | Mantenimiento',
  },
};
</script>

<style lang="scss" scoped>
.maintenance-container {
  text-align: center;

  p {
    margin: 20px 0;
  }
}
</style>
