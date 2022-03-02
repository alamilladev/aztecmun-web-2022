<template>
  <div>
    <section class="hero">
      <div class="container grid">
        <div class="hero-info">
          <h1>
            Modelo de naciones unidas<br>
            <span class="semibold">AztecMUN </span><i>edicion 2022</i>
          </h1>
          <p>Desarrolla tus habilidades comunicativas y pensamiento crítico-analítico a través del debate.</p>
          <div class="buttons-wrapper">
            <ButtonsLinkBtn
              type="fill"
              color="primary"
              size="medium"
              link-url="/"
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
        <img class="hero-image" src="~/assets/images/home/hero.jpg" alt="Miembros del comité organizador de aztecmun">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default'
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/home/styles.scss';
</style>
