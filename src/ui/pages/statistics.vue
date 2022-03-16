<template>
  <section class="statistics">
    <div class="container">
      <h1 class="primary page-title">
        Estádisticas de registro de delegados para comités
      </h1>

      <div class="statistics-table-container">grafico de estadisticas</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatisticsPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | Estadísticas',
  },
};
</script>

<style lang="scss">
.statistics {
  .statistics-table-container {
    overflow-x: auto;
  }
}
</style>
