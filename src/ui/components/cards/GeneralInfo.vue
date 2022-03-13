<template>
  <div :class="['info-container', className]">
    <img
      class="info-img"
      :src="imageUrl"
      :alt="imageAlt"
      width="100"
      loading="lazy"
    />
    <p class="info-description">{{ description }}</p>
    <ButtonsLinkBtn
      type="outline"
      color="quaternary"
      size="medium"
      :link-url="buttonLink"
      :label="buttonLabel"
    />
  </div>
</template>

<script>
export default {
  name: 'GeneralInfo',
  props: {
    className: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonLink: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.info-container {
  text-align: center;
  max-width: 246px;
  min-height: 296px;

  .info-description {
    margin: 40px 0 29px;
  }
}
</style>
