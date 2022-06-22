<template>
  <div :class="['trailer', className]">
    <DivisionBar v-if="divisionBar" class-name="division-bar" />
    <div class="content-wrapper">
      <div class="content-left">
        <img :src="imageUrl" :alt="imageAlt" width="100%" loading="lazy" />
        <ButtonsLinkBtn
          type="fill"
          color="primary"
          size="full"
          :link-url="buttonUrl"
          :label="buttonLabel"
        />
      </div>
      <iframe
        width="560"
        height="315"
        :src="videoUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <DivisionBar v-if="divisionBar" class-name="division-bar" />
  </div>
</template>

<script>
export default {
  name: 'TrailerCard',
  props: {
    className: { type: String, default: '' },
    divisionBar: { type: Boolean, default: true },
    imageUrl: { type: String, required: true },
    imageAlt: { type: String, required: true },
    buttonLabel: { type: String, required: true },
    buttonUrl: { type: String, required: true },
    videoUrl: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.trailer {
  max-width: 965px;
  .division-bar {
    &:first-child {
      margin-bottom: 25px;
    }
    &:last-child {
      margin-top: 25px;
    }
  }
  .content-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-direction: row-reverse;

    .content-left {
      max-width: 300px;
      img {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
