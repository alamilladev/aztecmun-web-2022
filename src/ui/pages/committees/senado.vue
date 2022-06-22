<template>
  <section class="committee">
    <div class="container">
      <CardsDescriptionCard
        class-name="committee-card"
        :division-bar="false"
        color="secondary"
        breadcrumb="Comité en español"
        title="Senado (Senado de la República)"
        button-url="/signup"
        button-label="Regístrate"
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1648510456/images/committees/SENADO/logo_senado_iuziai.svg"
        image-alt="Logo del senado de la república"
      >
        <template #description>
          <p>
            EI Senado de la República, es la institución republicana que
            cristaliza el pacto federal y que, a partir de la próxima
            legislatura, se integrará por 128 senadores.
          </p>
          <p>
            Destaca la participación que el Senado tiene en la aprobación de los
            tratados o convenciones diplomáticas que suscriba el Poder
            Ejecutivo, esto implica que el Senado debe examinar el contenido del
            tratado o convención propuesto para su aprobación, con objeto de
            determinar si no existe oposición alguna en la Constitución
          </p>
        </template>
      </CardsDescriptionCard>
      <DivisionBar class-name="division-bar" />
      <div class="topics-and-documents">
        <div class="topics-container">
          <CommitteesTopicCard
            theme="secondary"
            title="TÓPICO A"
            description="Proyecto de decreto por los derechos políticos y electorales de las y los indígenas"
          />
          <CommitteesTopicCard
            theme="secondary"
            title="TÓPICO B"
            description="Proyecto de decreto para el desarrollo de justicia para los adolescentes"
          />
        </div>
        <div class="documents-container">
          <h2 class="secondary text-center">Documentos</h2>
          <Document
            class-name="document"
            theme="secondary"
            name="Handbook_SENADO.pdf"
            url="https://drive.google.com/file/d/1d5MnVgsvu2hFHLUNmq86tsNqYOb90ZJg/view?usp=sharing"
          />
          <Document
            class-name="document"
            theme="secondary"
            name="Protocolo_SENADO.pdf"
            url="https://drive.google.com/file/d/1KSG4k7dtekGEwJd2BJkq3DK4eB3aqJQr/view?usp=sharing"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SenadoDescriptionPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | SENADO',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/committees/details';
</style>
