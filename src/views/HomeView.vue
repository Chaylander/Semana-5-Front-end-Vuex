<template>
  <div class="home">
     <!-- <headerPasteleria /> El header ya no es un componente, se utiliza APP.vue como el header ya que
     ese aparece al inicio de todas las paginas --> 
    <textointermedio texto="Deleitate con nuestros sabores"/>
    <div class="contenedorSabores">
      <sabores
        :Imagen="require('../assets/chocolate.png')"
        nombrePastel="Chocolate"
      />
      <sabores
        :Imagen="require('../assets/frutas.png')"
        nombrePastel="Frutas"
      />
      <sabores
        :Imagen="require('../assets/redvelvet.png')"
        nombrePastel="Red velvet"
      />
      <sabores
        :Imagen="require('../assets/tresleches.png')"
        nombrePastel="Tres leches"
      />
      <sabores
        :Imagen="require('../assets/zanahoria.png')"
        nombrePastel="Zanahoria"
      />
      <sabores
        :Imagen="require('../assets/dulcedeleche.png')"
        nombrePastel="Dulce de leche"
      />
    </div>
    <textointermedio texto="Precios"/>
    <tamanosPrecios/>
    <textointermedio texto="Adornos"/>
    <adornos/>
    <contacto />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import contacto from "../components/contacto.vue";
import textointermedio from "../components/textointermedio.vue";
import HeaderPasteleria from "../components/header.vue";
import sabores from "../components/sabores";
import tamanosPrecios from "../components/tamanosPrecios.vue"
import Adornos from '../components/adornos.vue';

export default {
  name: "HomeView",
  components: {
    contacto,
    HeaderPasteleria,
    textointermedio,
    sabores,
    tamanosPrecios,
    Adornos
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+1+Code&display=swap");

* {
  font-family: "M PLUS 1 Code", sans-serif;
  box-sizing: border-box;
}

body {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    104deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(249, 255, 202, 1) 0%,
    rgba(159, 228, 242, 1) 100%
  );
}

.contenedorSabores {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin-left: 7.5%;
  width: 85%;
  height: 750px;
  background-color: rgb(255, 240, 240);
  border-radius: 20px;
}
</style>
