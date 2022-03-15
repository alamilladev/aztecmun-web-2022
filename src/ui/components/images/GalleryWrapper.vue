<template>
  <div class="images-wrapper flex">
    <slot name="images"></slot>
  </div>
</template>

<script>
export default {
  name: 'GalleryWrapper',
};
</script>

<style lang="scss" scoped>
.images-wrapper {
  justify-content: center;
  align-items: center;
  gap: 60px;

  @include for-size(m) {
    gap: 90px;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  figcaption {
    text-align: center;
    font-family: $font-primary;
    font-size: $font-size-medium;
    font-weight: 600;
    color: $color-gray;
    @include for-size(m) {
      font-size: $font-size-large;
    }
  }
}
</style>
