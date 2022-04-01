<template>
  <div class="contenedor">
    <admin/>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import contacto from "../components/contacto.vue";
import admin from "../components/admin.vue"


export default {
  name: "AboutView",
  components: {
    contacto,
    admin,
  },
};
</script>

<style scoped>
.contenedor{
  margin-left: 25%;
  width: 50%;
  height: 750px;
  background-color: rgb(255, 240, 240);
  border-radius: 20px;
}
</style>