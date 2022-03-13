<template>
  <div>
    <section class="hero">
      <div class="container grid">
        <div class="hero-info">
          <h1>
            Modelo de naciones unidas<br />
            <span class="semibold">AztecMUN </span><i>edicion 2022</i>
          </h1>
          <p>
            Forma parte de nosotros para desarrollar tus habilidades
            comunicativas y de pensamiento crítico-analítico a través del
            debate.
          </p>
          <div class="buttons-wrapper">
            <ButtonsLinkBtn
              type="fill"
              color="primary"
              size="medium"
              link-url="/signup"
              label="Registrate"
            />
            <ButtonsLinkBtn
              type="outline"
              color="secondary"
              size="medium"
              link-url="/"
              label="Conócenos"
            />
          </div>
        </div>
        <img
          class="hero-image"
          src="~/assets/images/home/hero.jpg"
          alt="Miembros del comité organizador de aztecmun"
        />
      </div>
    </section>

    <section class="invitation">
      <div class="container">
        <h2 class="section-subtitle text-center">
          Forma parte del modelo y vive<br />
          una gran experiencia
        </h2>
        <div class="invitation-cards-wrapper grid">
          <CardsGeneralInfo
            :image-url="
              require('~/assets/images/home/invitation/checklist.svg')
            "
            image-alt="Icono de una lista con tareas completadas"
            description="Conoce más acerca de nosotros y las secretarías detrás del modelo."
            button-link="/"
            button-label="Conócenos"
          />
          <CardsGeneralInfo
            :image-url="require('~/assets/images/home/invitation/warning.svg')"
            image-alt="Icono color amarillo con un signo de exclamación como advertencia"
            description="Revisa la información de los comités que forman parte de esta edición."
            button-link="/"
            button-label="Ver comités"
          />
          <CardsGeneralInfo
            :image-url="
              require('~/assets/images/home/invitation/signup-completed.svg')
            "
            image-alt="Icono verde con la ilustracion de una persona y una marca de verificación"
            description="Completa el formulario de registro y realiza una aportación económica."
            button-link="/signup"
            button-label="Registrate"
          />
        </div>
      </div>
    </section>

    <section class="location">
      <div class="container grid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.1320780426878!2d-99.11695490812845!3d19.50125396904587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9db726e782f%3A0x506aac36c192aeb8!2sPlantel%20Fundaci%C3%B3n%20Azteca!5e0!3m2!1ses-419!2smx!4v1646262933007!5m2!1ses-419!2smx"
          class="location-map"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        <div class="location-info">
          <h2>Fecha y dirección de la sede</h2>
          <div class="location-details-wrapper subgrid">
            <div class="location-detail-item">
              <img
                src="~/assets/images/home/location/calendar.svg"
                alt="Icono de calendario color amarillo"
                loading="lazy"
              />
              <p>
                <strong>Días del modelo</strong><br />
                4 y 5 de Junio de 2022
              </p>
            </div>
            <div class="location-detail-item">
              <img
                src="~/assets/images/home/location/cash-app.svg"
                alt="Icono del simbolo de dolar en color amarillo"
                loading="lazy"
              />
              <p>
                <strong>Monto a pagar</strong><br />
                MXN $450
              </p>
            </div>
            <div class="location-detail-item">
              <img
                src="~/assets/images/home/location/location.svg"
                alt="Icono del simbolo de dolar en color amarillo"
                loading="lazy"
              />
              <p>
                Av. Acueducto de Guadalupe 25, Santa Isabel Tola, Gustavo A.
                Madero, 07010 Ciudad de México, CDMX
              </p>
            </div>
          </div>
          <ButtonsLinkBtn
            type="fill"
            color="primary"
            size="medium"
            link-url="/"
            label="Ver agenda"
          />
        </div>
      </div>
    </section>

    <section class="committees">
      <h2 class="section-subtitle text-center">
        Conoce los comités que forman parte de esta edición
      </h2>
      <div class="container grid">
        <CardsPresentationCard
          title="Comité Internacional de Bioética"
          :image-url="require('~/assets/images/committees/logo-CIB.png')"
          image-alt="Logo del comité internacional de Bioética"
          button-link="/"
          button-label="Ver más"
        />
        <CardsPresentationCard
          title="Corte Interamericana de Derechos Humanos"
          :image-url="require('~/assets/images/committees/logo-CIDH.png')"
          image-alt="Logo de la corte interamericana de derechos humanos"
          button-link="/"
          button-label="Ver más"
        />
        <CardsPresentationCard
          title="United Nations Security Council"
          :image-url="require('~/assets/images/committees/logo-UNSC.png')"
          image-alt="Logo del consejo de seguridad de la ONU"
          button-link="/"
          button-label="Ver más"
        />
      </div>
    </section>

    <section class="sponsors">
      <h2 class="section-subtitle text-center">Nuestros patrocinadores</h2>
      <div class="container grid">
        <img
          src="~/assets/images/home/sponsors/plantel-azteca.png"
          alt="logo de plantel azteca"
          height="50"
          loading="lazy"
        />
        <img
          src="~/assets/images/home/sponsors/grupo-salinas.png"
          alt="logo de grupo salinas"
          height="50"
          loading="lazy"
        />
        <img
          src="~/assets/images/home/sponsors/grupo-jumex.png"
          alt="logo de grupo jumex"
          height="50"
          loading="lazy"
        />
        <img
          src="~/assets/images/home/sponsors/fundacion-azteca.png"
          alt="logo de fundacion azteca"
          height="50"
          loading="lazy"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'HomeLayout',
  async asyncData({ redirect }) {
    await redirect('/maintenance');
  },
  head: {
    title: 'AztecMUN 2022 | Inicio',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/home';
</style>
