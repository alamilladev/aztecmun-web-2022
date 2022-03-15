<template>
  <article :class="['description-card-container', className]">
    <img
      v-if="divisionBar"
      class="division-bar"
      src="https://res.cloudinary.com/aztecmun/image/upload/v1647298982/images/generic_illustrations/division_bar_jetwnb.svg"
      alt="Ilustración de manchas de colores para usar como barra de separación"
      width="100%"
    />
    <div class="card-content-container flex">
      <div class="card-content-info">
        <span v-if="breadcrumb" class="breadcrumb gray">{{ breadcrumb }}</span>
        <h2 :class="['card-info-title', color]">{{ title }}</h2>
        <slot name="description"></slot>
        <ButtonsLinkBtn
          v-if="button"
          class-name="see-more-btn"
          type="outline"
          :color="color"
          size="full"
          :link-url="buttonUrl"
          :label="buttonLabel"
        />
      </div>
      <img
        class="card-content-image"
        :src="imageUrl"
        :alt="imageAlt"
        loading="lazy"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'DescriptionCard',
  props: {
    className: {
      type: String,
      default: '',
    },
    divisionBar: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      required: true,
    },
    breadcrumb: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    button: {
      type: Boolean,
      default: true,
    },
    buttonUrl: {
      type: String,
      required: true,
    },
    buttonLabel: {
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

<style lang="scss" scoped>
.description-card-container {
  max-width: 965px;
  &:nth-child(2n + 0) {
    .card-content-container {
      flex-direction: row-reverse;
    }
  }
  .division-bar {
    margin-bottom: 21px;
  }
  .card-content-container {
    justify-content: center;
    align-items: center;
    @include for-size(xl) {
      justify-content: space-between;
    }
    .card-content-info {
      max-width: 553px;
      .breadcrumb {
        font-size: $font-size-medium;
      }
      .card-info-title {
        margin: 10px 0 20px;
      }
      p {
        &:not(:last-child) {
          margin-bottom: 15px;
        }
      }
      .see-more-btn {
        margin-top: 10px;
        @include for-size(xl) {
          max-width: 250px;
        }
      }
    }
    .card-content-image {
      max-width: 500px;
      width: 100%;
      margin-top: 40px;

      @include for-size(xl) {
        max-width: 350px;
        margin-top: 0;
      }
    }
  }
}
</style>
