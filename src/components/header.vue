<template>
<nav>
  <div class="contenedorHeader">
    <div class="contLogo">
      <h2>Stardew</h2>
    </div>
    <div class="contProductos">
      <p> <router-link to="/">Pasteles</router-link> </p>
      <p>Gelatinas</p>
      <p>Bebidas</p>
      <p>Brownies</p>
      <p>Muffins</p>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "HeaderPasteleria",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
h2 {
  font-family: "Satisfy", cursive;
  font-size: 30px;
}

.contenedorHeader {
  margin-left: 0%;
  width: 100%;
  height: 100px;
  background-color: rgb(238, 231, 231);
}

.contLogo {
  position: absolute;
  margin-top: 9px;
  margin-left: 30px;
  width: 110px;
  height: 60px;
}

.contProductos {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  width: 40%;
  height: 50px;
  margin-left: 30%;
  margin-top: 25px;
}
</style>
