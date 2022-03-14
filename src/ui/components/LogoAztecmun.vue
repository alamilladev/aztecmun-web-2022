<template>
  <nuxt-link to="/" :class="[className, 'link-logo']">
    <img
      src="https://res.cloudinary.com/aztecmun/image/upload/v1647246021/images/logo_rncir2.png"
      alt="Logo de AztecMUN edición 2022"
      height="50"
      loading="lazy"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'LogoAztecmun',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.link-logo {
  display: block;
  width: 212px;
}
</style>
