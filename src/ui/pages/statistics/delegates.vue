<template>
  <section class="statistics">
    <div class="container">
      <h1 class="primary page-title">Estádisticas de registro de delegados</h1>

      <div class="statistics-chart-container">
        <ChartsBarChart
          v-if="dataLoaded"
          title="Cantidad de registros por comités"
          :labels="['Personas registradas']"
          :chart-datasets="committeeRecords"
        />
        <h3 v-else>Cargando datos...</h3>
      </div>
    </div>
  </section>
</template>

<script>
import User from '@@/src/app/modules/user';

export default {
  name: 'StatisticsDelegatesPage',
  layout: 'HomeLayout',
  data() {
    return {
      dataLoaded: false,
      committeeRecords: [
        {
          label: 'CIB',
          backgroundColor: '#128d56',
          data: [],
        },
        {
          label: 'CIDH',
          backgroundColor: '#e8b85b',
          data: [],
        },
        {
          label: 'OMS',
          backgroundColor: '#4988db',
          data: [],
        },
        {
          label: 'SENADO',
          backgroundColor: '#128d56',
          data: [],
        },
        {
          label: 'UNICEF',
          backgroundColor: '#4988db',
          data: [],
        },
        {
          label: 'UNSC',
          backgroundColor: '#c0293a',
          data: [],
        },
      ],
    };
  },
  head: {
    title: 'AztecMUN 2022 | Estadísticas de delegados',
  },
  created() {
    const user = new User();
    user
      .getCommitteesNumberOfRecords([
        'CIB',
        'CIDH',
        'OMS',
        'SENADO',
        'UNICEF',
        'UNSC',
      ])
      .then((numbersOfRecords) => {
        for (let i = 0; i < numbersOfRecords.length; i++) {
          if (this.committeeRecords[i]) {
            this.committeeRecords[i].data.push(numbersOfRecords[i]);
          }
        }
        this.dataLoaded = true;
      });
  },
};
</script>

<style lang="scss" scoped>
.statistics-chart-container {
  max-width: 900px;
  margin: 80px auto 0;
}
</style>
