<template>
  <section class="agenda">
    <div class="container agenda-container">
      <img
        src="https://res.cloudinary.com/aztecmun/image/upload/v1655854648/images/agenda/agenda_dia_1_athcai.png"
        alt="Agenda día 30 de junio"
      />
      <img
        src="https://res.cloudinary.com/aztecmun/image/upload/v1655854648/images/agenda/agenda_dia_2_syft4q.png"
        alt="Agenda día 1 de julio"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AgendaPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | Agenda',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/agenda';
</style>
