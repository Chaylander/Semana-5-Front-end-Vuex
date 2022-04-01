
<template>
  <div class="container">
    <img :src="Imagen" />
    <h3>{{ nombrePastel }}</h3>
  </div>
</template>

<script>
export default {
  name: "sabores",
  props: {
    Imagen: String,
    nombrePastel: String,
  },
};
</script>

<style scoped>
.container {
  width: 400px;
  height: 300px;
  margin-top: 10px;
  background-color: rgb(244, 241, 255);
  border-radius: 30px;
  border: 1px solid rgb(222, 222, 228);
}

img {
  margin-top: 50px;
}
</style>
