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
      <p> <router-link to="/about">Administración</router-link></p>
    </div>
    <div class="irPedidos">
      <button @click="$router.push('pedido')">Hacer pedido</button>
    </div>
  </div>
</nav>
<router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

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

.irPedidos{
  position: absolute;
  width: 100px;
  height: 30px;
  margin-left: 85%;
  margin-top: 1.7%;
}

.irPedidos button{
  width: 120px;
  height: 40px;
  background-color: #42b983;
  border-radius: 10px;
  border:1px solid #f1f5ff;
}
</style>
