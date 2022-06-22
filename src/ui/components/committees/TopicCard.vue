<template>
  <div class="topic">
    <h2 :class="['text-center', theme]">{{ title }}</h2>
    <p class="text-center">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TopicCard',
  props: {
    theme: {
      type: String,
      default: 'primary',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.topic {
  &:nth-child(2n) {
    margin-top: 40px;
  }
}
</style>
