<template>
  <section class="committee">
    <div class="container">
      <CardsDescriptionCard
        class-name="committee-card"
        :division-bar="false"
        color="secondary"
        breadcrumb="Comité en español"
        title="CIB (Comité Internacional de Bioética)"
        button-url="/signup"
        button-label="Regístrate"
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255614/images/committees/CIB/IMG_3424_fgu89a.jpg"
        image-alt="Logo del la UNESCO, organización a la que pertenece el Comité Internacional de Bioética"
      >
        <template #description>
          <p>
            El Comité Internacional de Bioética observa los progresos y
            aplicaciones en las ciencias de la vida, al fin de velar por el
            respeto de la dignidad y la libertad humana y animal, ya que es el
            único comité donde se lleva una reflexión de manera global sobre
            cuestiones sociales que tienen que ver con la salud de las personas
            y, por tanto, que tienen interés en todo el mundo.
          </p>
          <p>
            Tiene por objeto aliviar el sufrimiento y mejorar el bienestar de la
            humanidad, con la finalidad de establecer un foro en el que se
            debatan ideas acerca de las implicaciones sociales, políticas,
            éticas y legales de las soluciones a los problemas humanos.
          </p>
        </template>
      </CardsDescriptionCard>
      <CardsTrailerCard
        class-name="trailer-container"
        button-label="Ver documentos"
        button-url=""
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255609/images/committees/CIB/logo_CIB_wfntlj.svg"
        image-alt="Logo del la UNESCO, organización a la que pertenece el Comité Internacional de Bioética"
        video-url="https://www.youtube.com/embed/ZVF4KEHk8A0"
      />
      <div class="topics-container">
        <CommitteesTopicCard
          theme="secondary"
          title="TÓPICO A"
          description="Experimentación animal en productos de uso cotidiano"
        />

        <CommitteesTopicCard
          theme="secondary"
          title="TÓPICO B"
          description="Energía nuclear y atómica en México y el mundo"
        />
      </div>
      <div class="members-container">
        <DivisionBar class-name="division-bar" />
        <h2 class="secondary section-subtitle text-center">
          Integrantes de la mesa
        </h2>
        <ImagesGalleryWrapper>
          <template #images>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255617/images/committees/CIB/IMG_3392_nwrkbz.jpg"
                alt="Integrante de CIB"
                loading="lazy"
              />
              <figcaption>Presidente</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255611/images/committees/CIB/IMG_3409_fccc3r.jpg"
                alt="Integrante de CIB"
                loading="lazy"
              />
              <figcaption>Asesor</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255610/images/committees/CIB/IMG_3401_fqrwhr.jpg"
                alt="Integrante de CIB"
                loading="lazy"
              />
              <figcaption>Moderador</figcaption>
            </figure>
          </template>
        </ImagesGalleryWrapper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CibDescriptionPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | CIB',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/committees/details';
</style>
