<template>
  <nuxt-link :to="iconUrl">icon</nuxt-link>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: {
    className: {
      type: String,
      default: '',
    },
    iconUrl: {
      type: String,
      required: true,
    },
  },
};
</script>
