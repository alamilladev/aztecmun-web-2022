<template>
  <section class="committee">
    <div class="container">
      <CardsDescriptionCard
        class-name="committee-card"
        :division-bar="false"
        color="primary"
        breadcrumb="Comité en español"
        title="OMS (Organización Mundial de la Salud)"
        button-url="/signup"
        button-label="Regístrate"
        image-url="https://res.cloudinary.com/aztecmun/image/upload/v1648510396/images/committees/OMS/logo_OMS_ml4ve3.svg"
        image-alt="Logo de la Organización Mundial de la Salud"
      >
        <template #description>
          <p>
            La Organización Mundial de la Salud (OMS) es la agencia
            especializada de las Naciones Unidas para la salud, que consta de
            194 estados miembros. La Organización Mundial de la Salud trabaja en
            todo el mundo para promover el más alto nivel posible de salud para
            todos, independientemente de su raza, religión, sexo, ideología
            política o condición económica o social.
          </p>
          <p>
            La misión de la Organización Mundial de la Salud es promover la
            salud, mantener la seguridad mundial y atender a las poblaciones
            vulnerables. El acceso a una atención médica adecuada y asequible es
            un derecho humano, y la atención médica universal es un principio
            fundamental que guía las operaciones de la Organización Mundial de
            la Salud.
          </p>
        </template>
      </CardsDescriptionCard>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OmsDescriptionPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | OMS',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/committees/details';
</style>
