<template>
  <section class="registers">
    <div class="container">
      <h1 class="primary page-title">
        Datos de registro de delegados para comités
      </h1>

      <div class="registers-table-container">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Edad</th>
              <th>Estado</th>
              <th>Escuela</th>
              <th>Comité</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in registers" :key="index">
              <th>{{ user.name }}</th>
              <th>{{ user.email }}</th>
              <th>{{ user.phone }}</th>
              <th>{{ user.age }}</th>
              <th>{{ user.state }}</th>
              <th>{{ user.school }}</th>
              <th>{{ user.committee }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import User from '@@/src/app/modules/user';

export default {
  name: 'RegistersPage',
  layout: 'HomeLayout',
  data() {
    return {
      registers: [],
    };
  },
  head: {
    title: 'AztecMUN 2022 | Registros',
  },
  mounted() {
    const user = new User();
    user.listenLatestRegisteredUsers((registeredUsers) => {
      this.registers = registeredUsers;
    });
  },
};
</script>

<style lang="scss" scoped>
.registers {
  .registers-table-container {
    margin-top: 50px;
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
