<template>

</template>

<script>
export default {
  name: 'PersonaPage',
  head() {
    return {
      script: [
        {
          src: 'https://cdn.withpersona.com/dist/persona-v4.2.0.js'
        }
      ]
    }
  },
  mounted() {
    const client = new Persona.Client({
      templateId: "itmpl_u7Ax9R6dX6h1EMsa5RTAhR9w",
      environment: "sandbox",
      onReady: () => client.open(),
      onComplete: ({ inquiryId, status, fields }) => {
        // Inquiry completed. Optionally tell your server about it.
        console.log(`Sending finished inquiry ${inquiryId} to backend`);
      },
      onCancel: ({ inquiryId, sessionToken }) => console.log('onCancel'),
      onError: (error) => console.log(error),
    });
  }
}
</script>
