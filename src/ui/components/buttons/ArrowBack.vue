<template>
  <button :class="[className, 'btn-arrow']" @click.prevent="onClick">
    <img
      src="https://res.cloudinary.com/aztecmun/image/upload/v1647246021/images/icons/arrow-back_dhlkkf.svg"
      alt="Arrow back"
      width="30"
      height="30"
    />
  </button>
</template>

<script>
export default {
  name: 'ArrowBack',
  props: {
    className: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-arrow {
  display: block;
  width: 30px;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}
</style>
