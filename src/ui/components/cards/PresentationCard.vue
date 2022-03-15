<template>
  <div :class="['presentation-container', className]">
    <h3 class="presentation-title">{{ title }}</h3>
    <img
      class="presentation-img"
      :src="imageUrl"
      :alt="imageAlt"
      height="170"
      loading="lazy"
    />
    <ButtonsLinkBtn
      type="fill"
      color="primary"
      size="full"
      :link-url="buttonLink"
      :label="buttonLabel"
    />
  </div>
</template>

<script>
export default {
  name: 'PresentationCard',
  props: {
    className: {
      type: String,
      default: '',
    },
    title: {
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
.presentation-container {
  text-align: center;
  max-width: 281px;
  padding: 32px 28px;
  background-color: $color-white;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.25);

  .presentation-img {
    margin: 19px 0;
  }
}
</style>
