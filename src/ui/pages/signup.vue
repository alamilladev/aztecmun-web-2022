<template>
  <section class="signup background">
    <div class="signup-container">
      <div class="signup-container-head">
        <ButtonsArrowBack class-name="signup-arrow" link-url="/" />
        <LogoAztecmun class-name="signup-logo" />
      </div>
      <form class="signup-form">
        <div class="form-element">
          <label for="age">Edad:</label>
          <input
            id="age"
            name="age"
            type="number"
            placeholder="18"
            required
            class="form-input"
          />
        </div>
        <ButtonsFormBtn
          class-name="signup-btn"
          type="fill"
          color="primary"
          size="medium"
          label="Registrate"
          :on-click="submitForm"
        />
      </form>
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
  methods: {
    submitForm(e) {
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/signup';
</style>
