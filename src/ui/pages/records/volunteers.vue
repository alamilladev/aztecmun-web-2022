<template>
  <section class="registers">
    <div class="container">
      <h1 class="primary page-title">Datos de registro de voluntarios</h1>
      <div class="control-buttons-wrapper">
        <ButtonsLinkBtn
          class-name="btn"
          type="fill"
          color="secondary"
          size="medium"
          link-url="/statistics/volunteers"
          label="Ver estadísticas"
        />
      </div>
      <div class="registers-table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Estado</th>
              <th>Institución</th>
              <th>Grupo</th>
              <th>Turno</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Puesto</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="dataLoaded">
              <tr v-for="(volunteer, index) in registers" :key="index">
                <th>{{ volunteer.name }}</th>
                <th>{{ volunteer.age }}</th>
                <th>{{ volunteer.state }}</th>
                <th>{{ volunteer.school }}</th>
                <th>{{ volunteer.group }}</th>
                <th>{{ volunteer.shift }}</th>
                <th>{{ volunteer.email }}</th>
                <th>{{ volunteer.phone }}</th>
                <th>{{ volunteer.role }}</th>
              </tr>
            </template>
            <tr v-else>
              <th>Cargando datos...</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import Volunteer from '@@/src/app/modules/volunteer';

export default {
  name: 'RecordsVolunteersPage',
  layout: 'HomeLayout',
  data() {
    return {
      dataLoaded: false,
      registers: [],
    };
  },
  head: {
    title: 'AztecMUN 2022 | Registros de voluntarios',
  },
  mounted() {
    const volunteer = new Volunteer();
    volunteer.listenLatestRegisteredVolunteers((registeredVolunteers) => {
      this.registers = registeredVolunteers;
      this.dataLoaded = true;
    });
  },
};
</script>

<style lang="scss" scoped>
.registers {
  .control-buttons-wrapper {
    margin: 50px 0;

    .btn:nth-child(2n) {
      margin-left: 20px;
    }
  }
  .registers-table-container {
    overflow-x: auto;
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid $color-gray;
      font-family: $font-primary;

      th {
        text-align: left;
        padding: 8px;
      }

      thead {
        tr {
          color: $color-secondary;
        }
      }
      tbody {
        th {
          font-weight: 400;
        }
        tr:nth-child(2n + 1) {
          background-color: $color-gray-variant;
        }
      }
    }
  }
}
</style>
