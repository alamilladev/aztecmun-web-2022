<template>
  <section class="documents-section">
    <div class="container">
      <h1 class="primary page-title">Documentos oficiales de AztecMUN 2022</h1>
      <p class="documents-description">
        También se pueden consultar los Handdbooks y protocolos dentro de la
        página específica de cada comité.
      </p>
      <div class="documents-container">
        <div class="main-documents">
          <div class="document">
            <h3 class="text-center">Plantilla postura oficial</h3>
            <Document
              theme="primary"
              name="plantilla_postura_oficial.docx"
              url="https://docs.google.com/document/d/14YZPRgG1qs9HjaUvuukf9CX5CTw6Ot42/edit?usp=sharing&ouid=106100230164843543918&rtpof=true&sd=true"
            />
          </div>
          <div class="document">
            <h3 class="text-center">Código de vestimenta</h3>
            <Document
              theme="primary"
              name="codigo_de_vestimenta.pdf"
              url="https://drive.google.com/file/d/1PuhLeB6VG7wOMQ3qj0toJDi66NTLgoOx/view?usp=sharing"
            />
          </div>
        </div>
        <div class="committees-documents">
          <div class="document">
            <h3 class="secondary text-center">Documentos CIB</h3>
            <Document
              theme="secondary"
              name="Handbook_CIB.pdf"
              url="https://drive.google.com/file/d/1kLvGEBb0UHkUSnSoerB-N--snEJg5WOq/view?usp=sharing"
            />
            <Document
              theme="secondary"
              name="Protocolo_CIB.pdf"
              url="https://drive.google.com/file/d/1c8yVt0iGucTJToBNwy4KzB4fc20RBQ2m/view?usp=sharing"
            />
          </div>
          <div class="document">
            <h3 class="tertiary text-center">Documentos CIDH</h3>
            <Document
              theme="tertiary"
              name="Handbook_CIDH.pdf"
              url="https://drive.google.com/file/d/14vM1TA-KCKgtD8ln7ddCXXPrKcycTkG8/view?usp=sharing"
            />
            <Document
              theme="tertiary"
              name="Protocolo_CIDH.pdf"
              url="https://drive.google.com/file/d/1aEfm3AzKtgmbvVCIiO1AnLnfIvQojkKN/view?usp=sharing"
            />
          </div>
          <div class="document">
            <h3 class="primary text-center">Documentos OMS</h3>
            <Document
              theme="primary"
              name="Handbook_OMS.pdf"
              url="https://drive.google.com/file/d/1eaFxnZucuiVs_oREAJQ6FFq1RU13qjgk/view?usp=sharing"
            />
            <Document
              theme="primary"
              name="Protocolo_OMS.pdf"
              url="https://drive.google.com/file/d/1OhlsxMPpG_lpknmgBF2EZE_208inhHeB/view?usp=sharing"
            />
          </div>
          <div class="document">
            <h3 class="secondary text-center">Documentos SENADO</h3>
            <Document
              theme="secondary"
              name="Handbook_SENADO.pdf"
              url="https://drive.google.com/file/d/1d5MnVgsvu2hFHLUNmq86tsNqYOb90ZJg/view?usp=sharing"
            />
            <Document
              theme="secondary"
              name="Protocolo_SENADO.pdf"
              url="https://drive.google.com/file/d/1KSG4k7dtekGEwJd2BJkq3DK4eB3aqJQr/view?usp=sharing"
            />
          </div>
          <div class="document">
            <h3 class="primary text-center">Documents UNICEF</h3>
            <Document
              theme="primary"
              name="Handbook_UNICEF.pdf"
              url="https://drive.google.com/file/d/1OSZnP3P57CF96JYAMoGmjzLMOhnPtED8/view?usp=sharing"
            />
            <Document
              theme="primary"
              name="Protocol_UNICEF.pdf"
              url="https://drive.google.com/file/d/1mzBEgIYzk3M8LrTSmdOK0cNjSKx_OGIB/view?usp=sharing"
            />
          </div>
          <div class="document">
            <h3 class="quaternary text-center">Documents UNSC</h3>
            <Document
              theme="quaternary"
              name="Handbook_UNSC.pdf"
              url="https://drive.google.com/file/d/1g1CZflXHgG2Qak13dNzPbwjfKUqxLCGt/view?usp=sharing"
            />
            <Document
              theme="quaternary"
              name="Protocol_UNSC.pdf"
              url="https://drive.google.com/file/d/1mQP9FlG04d_-65-Vyh2qjmZR9RPyq6Sn/view?usp=sharing"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocumentsPage',
  layout: 'HomeLayout',
  head: {
    title: 'AztecMUN 2022 | Documentos',
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/documents';
</style>
