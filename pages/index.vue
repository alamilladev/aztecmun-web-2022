<template>
  <div class="container">
    <img class="mobile-img" src="~/assets/images/coming-soon-mobile.png" alt="AztecMUN 2022. Coming soon...">
    <img class="desktop-img" src="~/assets/images/coming-soon-deskto.png" alt="AztecMUN 2022. Coming soon...">
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    height: 100vh;
    background-color: #163768;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      &.mobile-img {
        @include cell768p() {
          display: none;
        }
      }
      &.desktop-img {
        display: none;
        @include cell768p() {
          display: inline-block;
        }
      }
    }
  }
</style>
