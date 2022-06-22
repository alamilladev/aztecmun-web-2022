<template>
  <div :class="['document-container', theme, className]">
    <img
      class="download-icon"
      src="https://res.cloudinary.com/aztecmun/image/upload/v1655911711/images/icons/download_qlde0b.svg"
      alt="icono de descarga de archivo"
    />
    <a :href="url" target="_blank" rel="noopener noreferrer" class="link">
      {{ name }}
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
  display: flex;
  border: 1px solid;
  border-radius: 6px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;

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

  .download-icon {
    width: 15px;
    margin-right: 8px;
  }

  .link {
    color: $color-black;
  }
}
</style>
