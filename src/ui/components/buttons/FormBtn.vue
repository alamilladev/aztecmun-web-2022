<template>
  <button
    :class="['btn btn-form', className, type, color, size]"
    @click="onClick"
  >
    {{ label }}
  </button>
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
    label: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/button.scss';

// .btn-form {
// }
</style>
