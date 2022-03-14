<template>
  <nuxt-link
    :to="linkUrl"
    :class="['btn btn-link', color, type, size, className]"
  >
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'LinkBtn',
  props: {
    className: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    linkUrl: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/button.scss';
</style>
