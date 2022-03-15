<template>
  <section class="committees">
    <div class="container">
      <h1 class="primary page-title">
        Conoce a los comités que forman parte de AztecMUN 2022
      </h1>
      <p class="committee-definition">
        Un comité es un grupo de estudiantes que investigan y debaten acerca de
        una problemática específica, simulan ser una organización miembro de las
        naciones unidas, exponiendo soluciones a problemáticas mundiales.
        Generalmente se compone por presidente, moderador y asesor.
      </p>
      <div class="committees-wrapper">
        <CardsDescriptionCard
          class-name="committee-card"
          color="secondary"
          breadcrumb="Comité en español"
          title="CIB (Comité Internacional de Bioética)"
          button-url="/committees/cib"
          button-label="Ver más"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255609/images/committees/CIB/logo_CIB_wfntlj.svg"
          image-alt="Logo del la UNESCO, organización a la que pertenece el Comité Internacional de Bioética"
        >
          <template #description>
            <p>
              El Comité Internacional de Bioética observa los progresos y
              aplicaciones en las ciencias de la vida, al fin de velar por el
              respeto de la dignidad y la libertad humana y animal, ya que es el
              único comité donde se lleva una reflexión de manera global sobre
              cuestiones sociales que tienen que ver con la salud de las
              personas y, por tanto, que tienen interés en todo el mundo.
            </p>
            <p>
              Tiene por objeto aliviar el sufrimiento y mejorar el bienestar de
              la humanidad, con la finalidad de establecer un foro en el que se
              debatan ideas acerca de las implicaciones sociales, políticas,
              éticas y legales de las soluciones a los problemas humanos.
            </p>
          </template>
        </CardsDescriptionCard>
        <CardsDescriptionCard
          class-name="committee-card"
          color="tertiary"
          breadcrumb="Comité en español"
          title="CIDH (Corte Interamericana de Derechos Humanos)"
          button-url="/committees/cidh"
          button-label="Ver más"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255609/images/committees/CIDH/logo_CIDH_mpksev.svg"
          image-alt="Logo de la Corte Interamericana de Derechos Humanos"
        >
          <template #description>
            <p>
              La Corte Interamericana de Derechos Humanos es una institución
              judicial autónoma cuyo objetivo es la aplicación e interpretación
              de la Convención Americana sobre Derechos Humanos, la Convención
              Americana es un tratado internacional que prevé derechos y
              libertades que tiene que ser respetados, entró en vigor en 1978.
            </p>
            <p>
              La Corte Interamericana ejerce una función contenciosa, dentro de
              la que se encuentra la resolución de casos contenciosos y el
              mecanismo de supervisión de sentencias. Su sede de la Corte
              Interamericana se encuentra en San José de Costa Rica.
            </p>
          </template>
        </CardsDescriptionCard>
        <CardsDescriptionCard
          class-name="committee-card"
          color="primary"
          breadcrumb="Comité en inglés"
          title="UNICEF (United Nations Children's Fund)"
          button-url="/committees/unicef"
          button-label="Ver más"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647256379/images/committees/UNICEF/logo_UNICEF_hcnex7.svg"
          image-alt="Logo of United Nations Children's Fund"
        >
          <template #description>
            <p>
              UNICEF was founded in order to support children affected by the
              Second World War, concerned about the rights of the most
              vulnerable children and adolescents who suffer violence of some
              kind or who do not have the necessary resources to improve their
              quality of life.
            </p>
            <p>
              Seeks that minors enjoy a full life in every sense, protects the
              physical, emotional and mental health of infants, covers their
              basic needs, increases opportunities for children to reach their
              potential, promotes knowledge and respect for children's rights,
              and a humanitarian response is given, programs are implemented for
              the benefit of those who need it. By getting involved, raising our
              voices, supporting, and being donors we can help each girl have a
              fair opportunity to grow and achieve her goals.
            </p>
          </template>
        </CardsDescriptionCard>
        <CardsDescriptionCard
          class-name="committee-card"
          color="quaternary"
          breadcrumb="Comité en inglés"
          title="UNSC (The United Nations Security Council)"
          button-url="/committees/unsc"
          button-label="Ver más"
          image-url="https://res.cloudinary.com/aztecmun/image/upload/v1647255617/images/committees/UNSC/logo_UNSC_c9flyp.svg"
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CommitteesPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | Comités',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/committees';
</style>
