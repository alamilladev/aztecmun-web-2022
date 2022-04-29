<template>
  <p>redirigiendo...</p>
</template>

<script>
export default {
  name: 'DownloadsRegisters',
  fetch({ redirect }) {
    redirect(
      'https://docs.google.com/spreadsheets/d/1Ay2Xw669Q3Boo3rJ09fIQwG-H43vbXVu/edit?usp=sharing&ouid=106100230164843543918&rtpof=true&sd=true'
    );
  },
};
</script>
