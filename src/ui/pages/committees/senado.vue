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
