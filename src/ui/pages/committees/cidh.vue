<template>
  <section class="committee">
    <div class="container">
      <CardsDescriptionCard
        class-name="committee-card"
        :division-bar="false"
        color="tertiary"
        breadcrumb="Comité en español"
        title="CIDH (Corte Interamericana de Derechos Humanos)"
        button-url="/signup"
        button-label="Regístrate"
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255613/images/committees/CIDH/IMG_3463_gm397o.jpg"
        image-alt="Logo de la Corte Interamericana de Derechos Humanos"
      >
        <template #description>
          <p>
            La Corte Interamericana de Derechos Humanos es una institución
            judicial autónoma cuyo objetivo es la aplicación e interpretación de
            la Convención Americana sobre Derechos Humanos, la Convención
            Americana es un tratado internacional que prevé derechos y
            libertades que tiene que ser respetados, entró en vigor en 1978.
          </p>
          <p>
            La Corte Interamericana ejerce una función contenciosa, dentro de la
            que se encuentra la resolución de casos contenciosos y el mecanismo
            de supervisión de sentencias. Su sede de la Corte Interamericana se
            encuentra en San José de Costa Rica.
          </p>
        </template>
      </CardsDescriptionCard>
      <CardsTrailerCard
        class-name="trailer-container"
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255609/images/committees/CIDH/logo_CIDH_mpksev.svg"
        image-alt="Logo de la Corte Interamericana de Derechos Humanos"
        video-url="https://www.youtube.com/embed/eS_briTzf_c"
      />
      <div class="topics-and-documents">
        <div class="topics-container">
          <CommitteesTopicCard
            theme="tertiary"
            title="CASO"
            description="Caso pueblos indígenas Tagaeri y Taromenane Vs. Ecuador"
          />
        </div>
        <div class="documents-container">
          <h2 class="tertiary text-center">Documentos</h2>
          <Document
            class-name="document"
            theme="tertiary"
            name="Handbook_CIDH.pdf"
            url="https://drive.google.com/file/d/14vM1TA-KCKgtD8ln7ddCXXPrKcycTkG8/view?usp=sharing"
          />
          <Document
            class-name="document"
            theme="tertiary"
            name="Protocolo_CIDH.pdf"
            url="https://drive.google.com/file/d/1aEfm3AzKtgmbvVCIiO1AnLnfIvQojkKN/view?usp=sharing"
          />
        </div>
      </div>
      <div class="members-container">
        <DivisionBar class-name="division-bar" />
        <h2 class="tertiary section-subtitle text-center">
          Integrantes de la mesa
        </h2>
        <ImagesGalleryWrapper>
          <template #images>
            <figure>
              e
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255608/images/committees/CIDH/IMG_3442_ucny8h.jpg"
                alt="Integrante de CIDH"
                loading="lazy"
              />
              <figcaption>Juez Presidente</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255626/images/committees/CIDH/IMG_3445_er9kor.jpg"
                alt="Integrante de CIDH"
                loading="lazy"
              />
              <figcaption>Juez Vicepresidente</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255609/images/committees/CIDH/IMG_3454_lhqf67.jpg"
                alt="Integrante de CIDH"
                loading="lazy"
              />
              <figcaption>Juez Vicepresidente</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255607/images/committees/CIDH/IMG_3428_mr0ppb.jpg"
                alt="Integrante de CIDH"
                loading="lazy"
              />
              <figcaption>Secretaria</figcaption>
            </figure>
          </template>
        </ImagesGalleryWrapper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CidhDescriptionPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | CIDH',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/committees/details';
</style>
