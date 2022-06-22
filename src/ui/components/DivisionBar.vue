<template>
  <img
    :class="className"
    src="https://res.cloudinary.com/aztecmun/image/upload/v1655858793/images/generic_illustrations/division_bar_mferil.svg"
    alt="Ilustración de manchas de colores para usar como barra de separación"
    width="100%"
    loading="lazy"
  />
</template>

<script>
export default {
  name: 'DivisionBar',
  props: {
    className: {
      type: String,
      default: 'division-bar',
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  display: block;
}
</style>
