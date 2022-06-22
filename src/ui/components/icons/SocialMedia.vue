<template>
  <a :href="linkUrl" target="_blank" rel="noopener noreferrer">
    <img :src="imageUrl" :alt="imageAlt" loading="lazy" />
  </a>
</template>

<script>
export default {
  name: 'SocialMedia',
  props: {
    className: {
      type: String,
      default: '',
    },
    linkUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
  },
};
</script>
