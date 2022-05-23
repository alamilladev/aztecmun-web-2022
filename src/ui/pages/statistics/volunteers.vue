<template>
  <section class="statistics">
    <div class="container">
      <h1 class="primary page-title">
        Estádisticas de registro de voluntarios
      </h1>

      <div class="statistics-chart-container">
        <ChartsBarChart
          v-if="dataLoaded"
          title="Cantidad de registros por puesto"
          :labels="['Personas registradas']"
          :chart-datasets="volunteersRolesRecords"
        />
        <h3 v-else>Cargando datos...</h3>
      </div>
    </div>
  </section>
</template>

<script>
import Volunteer from '@@/src/app/modules/volunteer';

export default {
  name: 'StatisticsDelegatesPage',
  layout: 'HomeLayout',
  data() {
    return {
      dataLoaded: false,
      volunteersRolesRecords: [
        {
          label: 'Paje',
          backgroundColor: '#128d56',
          data: [],
        },
        {
          label: 'Auxiliar',
          backgroundColor: '#e8b85b',
          data: [],
        },
      ],
    };
  },
  head: {
    title: 'AztecMUN 2022 | Estadísticas de voluntarios',
  },
  created() {
    const volunteer = new Volunteer();
    volunteer
      .getVolunteersRolesNumberOfRecords(['Paje', 'Auxiliar'])
      .then((numbersOfRecords) => {
        for (let i = 0; i < numbersOfRecords.length; i++) {
          if (this.volunteersRolesRecords[i]) {
            this.volunteersRolesRecords[i].data.push(numbersOfRecords[i]);
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
