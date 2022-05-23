<template>
  <footer>
    <div class="footer-main-content container flex">
      <LogoAztecmun />
      <nav class="nav-container subgrid">
        <div class="nav-column">
          <nuxt-link class="nav-link black" to="/secretariats">
            Nosotros
          </nuxt-link>
          <nuxt-link class="nav-link black" to="/secretariats">
            Secretarías
          </nuxt-link>
          <nuxt-link class="nav-link black" to="/committees">
            Comités
          </nuxt-link>
        </div>
        <div class="nav-column">
          <nuxt-link class="nav-link black" to="/">Recursos</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Agenda</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Pago</nuxt-link>
        </div>
        <div class="nav-column">
          <nuxt-link class="nav-link black" to="/">Soporte</nuxt-link>
          <nuxt-link class="nav-link black" to="/">Blog</nuxt-link>
          <nuxt-link class="nav-link black" to="/statistics/delegates">
            Estadísticas
          </nuxt-link>
        </div>
      </nav>
      <div class="contact-container">
        <div class="contact-icons-wrapper">
          <IconsSocialMedia
            link-url="https://www.facebook.com/AZTECMUN2022"
            image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255612/images/icons/social_media/facebook_cwhwiq.svg"
            image-alt="logo de facebook"
          />
          <IconsSocialMedia
            link-url="https://www.instagram.com/aztecmun/"
            image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255612/images/icons/social_media/instagram_btelxy.svg"
            image-alt="logo de instagram"
          />
          <IconsSocialMedia
            link-url="https://www.youtube.com/channel/UCWfYUHG3iPIN63VlPUG7uGQ"
            image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255614/images/icons/social_media/youtube_qsde9e.svg"
            image-alt="Logo de youtube"
          />
        </div>
        <p>aztecmun.plantelazteca@gmail.com</p>
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
      gap: 70px;
    }
    .nav-container {
      &.subgrid {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 15px;
        @include for-size(s) {
          grid-column-gap: 40px;
        }
      }
      .nav-column {
        .nav-link {
          display: block;
          margin-bottom: 13px;
        }
      }
    }
    .contact-icons-wrapper {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 10px;
    }
  }
  .copyright {
    text-align: center;
    padding: 17px 0;
  }
}
</style>
