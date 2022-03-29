<template>
  <div>
    <section class="hero">
      <div class="container grid">
        <div class="hero-info">
          <h1>
            Modelo de naciones unidas<br />
            <span class="semibold">AztecMUN </span><i>edición 2022</i>
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
              link-url="/secretariats"
              label="Conócenos"
            />
          </div>
        </div>
        <img
          class="hero-image"
          src="https://res.cloudinary.com/aztecmun/image/upload/v1647256919/images/home/hero_hq1oye.png"
          alt="Miembros del comité organizador de aztecmun"
        />
      </div>
    </section>

    <section class="invitation">
      <div class="container">
        <h2 class="primary section-subtitle text-center">
          Forma parte del modelo y vive<br />
          una gran experiencia
        </h2>
        <div class="invitation-cards-wrapper flex">
          <CardsGeneralInfo
            image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255611/images/home/invitation/checklist_vfrhoj.svg"
            image-alt="Icono de una lista con tareas completadas"
            description="Conoce más acerca de nosotros y las secretarías detrás del modelo."
            button-link="/secretariats"
            button-label="Conócenos"
          />
          <CardsGeneralInfo
            image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255609/images/home/invitation/warning_naocxu.svg"
            image-alt="Icono color amarillo con un signo de exclamación como advertencia"
            description="Revisa la información de los comités que forman parte de esta edición."
            button-link="/committees"
            button-label="Ver comités"
          />
          <CardsGeneralInfo
            image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255611/images/home/invitation/signup_completed_pw6ekg.svg"
            image-alt="Icono verde con la ilustracion de una persona y una marca de verificación"
            description="Completa el formulario de registro para unirte a un comité de AztecMUN 2022"
            button-link="/signup"
            button-label="Registrate"
          />
        </div>
      </div>
    </section>

    <!-- <section class="location">
      <div class="container flex">
        <div class="location-info">
          <h2>Fecha y dirección de la sede</h2>
          <div class="location-details-wrapper">
            <div class="location-top-details">
              <div class="location-detail-item">
                <img
                  src="https://res.cloudinary.com/aztecmun/image/upload/v1647255607/images/home/location/calendar_m0dxhz.svg"
                  alt="Icono de calendario color amarillo"
                  loading="lazy"
                />
                <p>
                  <strong>Días del modelo</strong><br />
                  Junio de 2022
                </p>
              </div>
              <div class="location-detail-item">
                <img
                  src="https://res.cloudinary.com/aztecmun/image/upload/v1647255607/images/home/location/cash_app_hjrf2d.svg"
                  alt="Icono del simbolo de dolar en color amarillo"
                  loading="lazy"
                />
                <p>
                  <strong>Monto a pagar</strong><br />
                  MXN $ ----
                </p>
              </div>
            </div>
            <div class="location-detail-item">
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255607/images/home/location/location_vwpxoc.svg"
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
            color="secondary"
            size="medium"
            link-url="/"
            label="Ver agenda"
          />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d768.1320780426878!2d-99.11695490812845!3d19.50125396904587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9db726e782f%3A0x506aac36c192aeb8!2sPlantel%20Fundaci%C3%B3n%20Azteca!5e0!3m2!1ses-419!2smx!4v1646262933007!5m2!1ses-419!2smx"
          class="location-map"
          width="100%"
          height="390px"
          loading="lazy"
        ></iframe>
      </div>
    </section> -->

    <section class="committees">
      <h2 class="primary section-subtitle text-center">
        Conoce los comités que forman parte de esta edición
      </h2>
      <div class="container flex">
        <CardsPresentationCard
          title="Comité Internacional de Bioética"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255609/images/committees/CIB/logo_CIB_wfntlj.svg"
          image-alt="Logo del comité internacional de Bioética"
          button-link="/committees/cib"
          button-label="Ver más"
        />
        <CardsPresentationCard
          title="Corte Interamericana de Derechos Humanos"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255609/images/committees/CIDH/logo_CIDH_mpksev.svg"
          image-alt="Logo de la corte interamericana de derechos humanos"
          button-link="/committees/cidh"
          button-label="Ver más"
        />
        <CardsPresentationCard
          title="Organización Mundial de la Salud"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1648510396/images/committees/OMS/logo_OMS_ml4ve3.svg"
          image-alt="Logo de la Organización Mundial de la Salud"
          button-link="/committees/oms"
          button-label="Ver más"
        />
        <CardsPresentationCard
          title="Senado de la República"
          committee="senado"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1648510456/images/committees/SENADO/logo_senado_iuziai.svg"
          image-alt="Logo del senado de la república"
          button-link="/committees/senado"
          button-label="Ver más"
        />
        <CardsPresentationCard
          title="United Nations Children's Fund"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647256379/images/committees/UNICEF/logo_UNICEF_hcnex7.svg"
          image-alt="Logo del Fondo de las Naciones Unidas para la Infancia"
          button-link="/committees/unicef"
          button-label="Ver más"
        />
        <CardsPresentationCard
          title="United Nations Security Council"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255617/images/committees/UNSC/logo_UNSC_c9flyp.svg"
          image-alt="Logo del consejo de seguridad de la ONU"
          button-link="/committees/unsc"
          button-label="Ver más"
        />
      </div>
    </section>

    <section class="sponsors">
      <h2 class="primary section-subtitle text-center">
        Nuestros patrocinadores
      </h2>
      <div class="container flex">
        <img
          src="https://res.cloudinary.com/aztecmun/image/upload/v1647255607/images/home/sponsors/logo_plantel_azteca_w67uyv.png"
          alt="logo de plantel azteca"
          height="50"
          loading="lazy"
        />
        <img
          src="https://res.cloudinary.com/aztecmun/image/upload/v1647255607/images/home/sponsors/logo_grupo_salinas_sjzaod.png"
          alt="logo de grupo salinas"
          height="50"
          loading="lazy"
        />
        <img
          src="https://res.cloudinary.com/aztecmun/image/upload/v1647255607/images/home/sponsors/logo_fundacion_azteca_zfnfbd.png"
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
  head: {
    title: 'AztecMUN 2022 | Inicio',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/home';
</style>
