<template>
  <section class="signup background">
    <div class="signup-container">
      <div class="signup-container-head">
        <ButtonsArrowBack class-name="signup-arrow" link-url="/" />
        <LogoAztecmun class-name="signup-logo" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignupPage',
  layout: 'default',
  head: {
    title: 'AztecMUN 2022 | SignUp',
  },
};
</script>

<style lang="scss" scoped>
@import '@ui/assets/styles/pages/signup';
</style>
