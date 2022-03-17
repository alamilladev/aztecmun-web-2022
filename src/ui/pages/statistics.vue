<template>
  <section class="statistics">
    <div class="container">
      <h1 class="primary page-title">Estádisticas de registro de delegados</h1>

      <div class="statistics-chart-container">
        <ChartsBarChart
          title="Delegados registrados por comités"
          :labels="['Numero de registros']"
          :datasets="comitteesData"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatisticsPage',
  layout: 'HomeLayout',
  data() {
    return {
      comitteesData: [
        {
          label: 'CIB',
          data: [],
          backgroundColor: '#128d56',
        },
        {
          label: 'CIDH',
          data: [],
          backgroundColor: '#e8b85b',
        },
        {
          label: 'UNICEF',
          data: [],
          backgroundColor: '#4988db',
        },
        {
          label: 'UNSC',
          data: [],
          backgroundColor: '#c0293a',
        },
      ],
    };
  },
  head: {
    title: 'AztecMUN 2022 | Estadísticas',
  },
  beforeMount() {
    for (let i = 0; i < this.comitteesData.length; i++) {
      this.comitteesData[i].data.push(30);
    }
  },
};
</script>

<style lang="scss" scoped>
.statistics-chart-container {
  max-width: 900px;
  margin: 80px auto 0;
}
</style>
