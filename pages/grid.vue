<template>
  <div class="container grid">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</template>

<script>
export default {
  name: 'GridSystem'
}
</script>

<style lang="scss" scoped>
  .container {
    border: 5px solid #e1bee7;
    background-color: #fff1ff;
  }
  .item {
    border: 5px solid #00bcd4;
    font-size: $font-size-normal;
  }
</style>
