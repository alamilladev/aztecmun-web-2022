<template>
  <img 
    :class="className"
    src="~/assets/images/logo.png"
    alt="Logo de AztecMUN edición 2022"
    height="50"
    loading="lazy"
  >
</template>

<script>
export default {
  name: 'LogoAztecmun',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
