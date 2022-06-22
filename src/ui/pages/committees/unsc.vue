<template>
  <section class="committee">
    <div class="container">
      <CardsDescriptionCard
        class-name="committee-card"
        :division-bar="false"
        color="quaternary"
        breadcrumb="Comité en inglés"
        title="UNSC (The United Nations Security Council))"
        button-url="/signup"
        button-label="Sign up"
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255626/images/committees/UNSC/IMG_3522_1_dqczil.jpg"
        image-alt="Logo of the United Nations Security Council"
      >
        <template #description>
          <p>
            The United Nations Security Council (UNSC) is one of the six
            principal organs of the United Nations (UN), and has primary
            responsibility for the maintenance of international peace and
            security.
          </p>
          <p>
            Created after World War II, the Security Council takes the lead in
            determining the existence of a threat to the peace or act of
            aggression. It calls upon the parties to a dispute to settle it by
            peaceful means and recommends methods of adjustment or terms of
            settlement. It has 15 Members, and each Member has one vote; all
            Member States are obligated to comply with Council decisions.
          </p>
        </template>
      </CardsDescriptionCard>
      <CardsTrailerCard
        class-name="trailer-container"
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255617/images/committees/UNSC/logo_UNSC_c9flyp.svg"
        image-alt="Logo of the United Nations Security Council"
        video-url="https://www.youtube.com/embed/fluDdkqENVg"
      />
      <div class="topics-and-documents">
        <div class="topics-container">
          <CommitteesTopicCard
            theme="quaternary"
            title="CRISIS"
            description="Afghanistan, a new nation for terrorists?"
          />
        </div>
        <div class="documents-container">
          <h2 class="quaternary text-center">Documents</h2>
          <Document
            class-name="document"
            theme="quaternary"
            name="Handbook_UNSC.pdf"
            url="https://drive.google.com/file/d/1g1CZflXHgG2Qak13dNzPbwjfKUqxLCGt/view?usp=sharing"
          />
          <Document
            class-name="document"
            theme="quaternary"
            name="Protocol_UNSC.pdf"
            url="https://drive.google.com/file/d/1mQP9FlG04d_-65-Vyh2qjmZR9RPyq6Sn/view?usp=sharing"
          />
        </div>
      </div>
      <div class="members-container">
        <DivisionBar class-name="division-bar" />
        <h2 class="quaternary section-subtitle text-center">
          Members of the table
        </h2>
        <ImagesGalleryWrapper>
          <template #images>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255623/images/committees/UNSC/IMG_3479_idslof.jpg"
                alt="Integrante de UNSC"
                loading="lazy"
              />
              <figcaption>Chairwoman</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255622/images/committees/UNSC/IMG_3511_echzef.jpg"
                alt="Integrante de UNSC"
                loading="lazy"
              />
              <figcaption>Advisor</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255625/images/committees/UNSC/IMG_3488_na9umf.jpg"
                alt="Integrante de UNSC"
                loading="lazy"
              />
              <figcaption>First Moderator</figcaption>
            </figure>
            <figure>
              <img
                src="https://res.cloudinary.com/aztecmun/image/upload/v1647255622/images/committees/UNSC/IMG_3498_h2bn2y.jpg"
                alt="Integrante de UNSC"
                loading="lazy"
              />
              <figcaption>Second Moderator</figcaption>
            </figure>
          </template>
        </ImagesGalleryWrapper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UnscDescriptionPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | UNSC',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/committees/details';
</style>
