<template>
  <header>
    <div class="container flex">
      <LogoAztecmun />
      <nav>
        <nuxt-link class="nav-link black" to="/">Nosotros</nuxt-link>
        <nuxt-link class="nav-link black" to="/">Secretarías</nuxt-link>
        <nuxt-link class="nav-link black" to="/">Recursos</nuxt-link>
        <nuxt-link class="nav-link black" to="/">Agenda</nuxt-link>
        <ButtonsLinkBtn
          class-name="nav-btn"
          type="outline"
          color="secondary"
          size="medium"
          link-url="/signup"
          label="Regístrate"
        />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
};
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  height: 70px;
  @include for-size(xl) {
    padding: 0 20px;
  }
  background-color: $color-white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .flex {
    align-items: center;
    justify-content: center;
    @include for-size(l) {
      justify-content: space-between;
    }

    nav {
      display: none;
      @include for-size(l) {
        display: block;
      }
      .nav-link:not(:first-child) {
        margin-left: 30px;
        @include for-size(xl) {
          margin-left: 49px;
        }
      }
      .nav-btn {
        margin-left: 30px;
        @include for-size(xl) {
          margin-left: 65px;
        }
      }
    }
  }
}
</style>
