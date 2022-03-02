<template>
  <nuxt-link :to="linkUrl" :class="[className, type, color, size]">
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'LinkBtn',
  props: {
    className: {
      type: String,
      default: 'btn-link'
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
      background-color: $color-primary;
      color: $color-white;
    }
    &.secondary {
      font-weight: 600;
      border: 1px solid $color-secondary;
      color: $color-secondary;
    }
    &.small { width: 140px; }
    &.medium { width: 180px; }
  }
</style>
