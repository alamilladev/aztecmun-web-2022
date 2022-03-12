<template>
  <nuxt-link :to="linkUrl" :class="[className, 'link-arrow']">
    <img
      src="~/assets/images/icons/arrow-back.svg"
      alt="Arrow back"
      width="30"
      height="30"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'ArrowBack',
  props: {
    className: {
      type: String,
      default: '',
    },
    linkUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.link-arrow {
  display: block;
  width: 30px;
}
</style>
