<template>
  <div :class="['document-container', theme, className]">
    <a :href="url" target="_blank" rel="noopener noreferrer" class="link">
      <img
        class="download-icon"
        src="https://res.cloudinary.com/aztecmun/image/upload/v1655911711/images/icons/download_qlde0b.svg"
        alt="icono de descarga de archivo"
      />
      <span>
        {{ name }}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ComponentDocument',
  props: {
    className: {
      type: String,
      default: 'document',
    },
    theme: {
      type: String,
      default: 'primary',
    },
    url: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.document-container {
  border: 1px solid;
  border-radius: 6px;
  padding: 5px 10px;

  &.primary {
    border-color: $color-primary;
  }
  &.secondary {
    border-color: $color-secondary;
  }
  &.tertiary {
    border-color: $color-tertiary;
  }
  &.quaternary {
    border-color: $color-quaternary;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-black;

    .download-icon {
      width: 15px;
      margin-right: 8px;
    }
  }
}
</style>
