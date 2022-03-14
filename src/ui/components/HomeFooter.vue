<template>
  <footer>
    <div class="footer-main-content container flex">
      <LogoAztecmun />
      <nav class="nav-container subgrid">
        <div class="nav-column">
          <nuxt-link class="nav-link black" to="/">Nosotros</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Secretarías</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Comités</nuxt-link>
        </div>
        <div class="nav-column">
          <nuxt-link class="nav-link black" to="/">Recursos</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Agenda</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Pago</nuxt-link>
        </div>
        <div class="nav-column">
          <nuxt-link class="nav-link black" to="/">Soporte</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Blog</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Estadísticas</nuxt-link>
        </div>
      </nav>
      <div class="contact-container">
        <div class="contact-icons-wrapper">
          <!-- <IconsSocialMedia :icon-url="require('~/assets/')" />
          <IconsSocialMedia :icon-url="require('~/assets/')" />
          <IconsSocialMedia :icon-url="require('~/assets/')" /> -->
        </div>
        <p>contacto@aztecmun.com</p>
      </div>
      <div class="constrols">controls block</div>
    </div>
    <p class="copyright">&copy; AztecMUN 2022. Made with love.</p>
  </footer>
</template>

<script>
export default {
  name: 'HomeFooter',
};
</script>

<style lang="scss" scoped>
footer {
  background-color: $color-gray-variant;
  min-height: 243px;

  .footer-main-content {
    padding: 57px 0;
    min-height: initial;
    border-bottom: 1px solid $color-gray;

    &.flex {
      justify-content: center;
      align-items: center;
      gap: 50px;
    }
    .nav-container {
      &.subgrid {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 15px;
        @include for-size(s) {
          grid-column-gap: 50px;
        }
        @include for-size(m) {
          grid-column-gap: 90px;
        }
      }
      .nav-column {
        .nav-link {
          display: block;
          margin-bottom: 13px;
        }
      }
    }
  }
  .copyright {
    text-align: center;
    padding: 17px 0;
  }
}
</style>
