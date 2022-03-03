<template>
  <nuxt-link :to="linkUrl" :class="['btn-link', className, type, color, size]">
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'LinkBtn',
  props: {
    className: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    linkUrl: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-link {
    display: inline-block;
    line-height: 40px;
    border-radius: 6px;
    text-align: center;

    &.primary {
      font-weight: 700;
      border: 1px solid $color-primary;
      background-color: $color-primary;
      color: $color-white;
    }
    &.secondary {
      font-weight: 600;
      border: 1px solid $color-secondary;
      color: $color-secondary;
    }
    &.quaternary {
      font-weight: 600;
      border: 1px solid $color-quaternary;
      color: $color-quaternary;
    }
    &.small { width: 140px; }
    &.medium { width: 180px; }
  }
</style>
