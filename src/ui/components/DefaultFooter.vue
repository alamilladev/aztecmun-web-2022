<template>
  <footer>
    <div class="footer-main-content container grid">
      <LogoAztecmun />
      <nav class="nav-container subgrid">
        <div class="nav-column">
          <NuxtLink class="nav-link black" to="/">Nosotros</NuxtLink>
          <NuxtLink class="nav-link black" to="/">Secretarías</NuxtLink>
          <NuxtLink class="nav-link black" to="/">Comités</NuxtLink>
        </div>
        <div class="nav-column">
          <NuxtLink class="nav-link black" to="/">Recursos</NuxtLink>
          <NuxtLink class="nav-link black" to="/">Agenda</NuxtLink>
          <NuxtLink class="nav-link black" to="/">Pago</NuxtLink>
        </div>
        <div class="nav-column">
          <NuxtLink class="nav-link black" to="/">Soporte</NuxtLink>
          <NuxtLink class="nav-link black" to="/">Blog</NuxtLink>
          <NuxtLink class="nav-link black" to="/">Estadísticas</NuxtLink>
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
  name: 'DefaultFooter',
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
    &.grid {
      grid-template-columns: repeat(var(--max-4-columns), auto);
      place-items: center;
    }
    .nav-container {
      &.subgrid {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 90px;
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
