<template>
  <section class="committee">
    <div class="container">
      <CardsDescriptionCard
        class-name="committee-card"
        :division-bar="false"
        color="primary"
        breadcrumb="Comité en inglés"
        title="UNICEF (United Nations Children's Fund)"
        button-url="/signup"
        button-label="Regístrate"
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255616/images/committees/UNICEF/IMG_3522_1_uulvii.jpg"
        image-alt="Logo of United Nations Children's Fund"
      >
        <template #description>
          <p>
            UNICEF was founded in order to support children affected by the
            Second World War, concerned about the rights of the most vulnerable
            children and adolescents who suffer violence of some kind or who do
            not have the necessary resources to improve their quality of life.
          </p>
          <p>
            Seeks that minors enjoy a full life in every sense, protects the
            physical, emotional and mental health of infants, covers their basic
            needs, increases opportunities for children to reach their
            potential, promotes knowledge and respect for children's rights, and
            a humanitarian response is given, programs are implemented for the
            benefit of those who need it. By getting involved, raising our
            voices, supporting, and being donors we can help each girl have a
            fair opportunity to grow and achieve her goals.
          </p>
        </template>
      </CardsDescriptionCard>
      <CardsTrailerCard
        class-name="trailer-container"
        button-label="Ver documentos"
        button-url=""
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647256379/images/committees/UNICEF/logo_UNICEF_hcnex7.svg"
        image-alt="Logo of United Nations Children's Fund"
        video-url="https://www.youtube.com/embed/Lv0XQ7jp7HQ"
      />
      <div class="members-container">
        <h2 class="primary section-subtitle text-center">
          Integrantes de la mesa
        </h2>
        <ImagesGalleryWrapper>
          <template #images>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255622/images/committees/UNICEF/IMG_3345_gdkvbc.jpg"
                alt="Integrante de UNICEF"
                loading="lazy"
              />
              <figcaption>Chairwoman</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255617/images/committees/UNICEF/IMG_3324_a6lizo.jpg"
                alt="Integrante de UNICEF"
                loading="lazy"
              />
              <figcaption>Advisor</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255623/images/committees/UNICEF/IMG_3339_yjit1y.jpg"
                alt="Integrante de UNICEF"
                loading="lazy"
              />
              <figcaption>Moderator</figcaption>
            </figure>
          </template>
        </ImagesGalleryWrapper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UnicefDescriptionPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | UNICEF',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/committees/details';
</style>
