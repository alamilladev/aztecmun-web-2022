<template>
  <header>
    <div class="container grid">
      <img class="logo" src="~/assets/images/home/logo.png" alt="Logo de AztecMUN edición 2022">
      <nav>
        <nuxt-link class="nav-link" to="/">Nosotros</nuxt-link>
        <nuxt-link class="nav-link" to="/">Recursos</nuxt-link>
        <nuxt-link class="nav-link" to="/">Agenda</nuxt-link>
        <nuxt-link class="nav-link" to="/">Pago</nuxt-link>
        <ButtonsLinkBtn
          class-name="nav-btn"
          type="outline"
          color="secondary"
          size="medium"
          link-url="/"
          label="Regístrate"
        />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNavbar'
}
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  height: 70px;
  background-color: $color-white;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

  .grid {
    grid-template-columns: 1fr 3fr;
    align-items: center;

    nav {
      justify-self: end;
      .nav-link {
        margin-left: 49px;
        color: $color-black;
        &:hover {
          color: $color-quaternary;
        }
      }
      .nav-btn {
        margin-left: 65px;
      }
    }
  }
}
</style>
