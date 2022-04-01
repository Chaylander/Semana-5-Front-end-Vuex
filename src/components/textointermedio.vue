
<template>
  <div class="mensajePrincipal">
    <h2>{{texto}}</h2>
  </div>
</template>

<script>
export default {
  name: "textointermedio",
  props: {
    texto: String,
  },
};
</script>

<style scoped>
h2{
  font-family: "Satisfy", cursive;
  font-size: 30px;
}
</style>
