<template>
  <h1>Comités</h1>
</template>

<script>
export default {
  name: 'CommitteesPage',
  layout: 'HomeLayout',
  async asyncData({ redirect }) {
    await redirect('/maintenance');
  },
  head: {
    title: 'AztecMUN 2022 | Comités',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/committees';
</style>
