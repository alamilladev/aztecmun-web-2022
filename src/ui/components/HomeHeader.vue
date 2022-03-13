<template>
  <header>
    <div class="container grid">
      <LogoAztecmun />
      <nav>
        <nuxt-link class="nav-link black" to="/">Nosotros</nuxt-link>
        <nuxt-link class="nav-link black" to="/">Recursos</nuxt-link>
        <nuxt-link class="nav-link black" to="/">Agenda</nuxt-link>
        <nuxt-link class="nav-link black" to="/">Pago</nuxt-link>
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
  background-color: $color-white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  .grid {
    grid-template-columns: 1fr 3fr;
    align-items: center;

    nav {
      justify-self: end;
      .nav-link {
        margin-left: 49px;
      }
      .nav-btn {
        margin-left: 65px;
      }
    }
  }
}
</style>
