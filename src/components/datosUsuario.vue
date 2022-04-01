<template>
    <div class="datosUsuario">
        <label for="nombre">Nombre</label><br>
        <input  v-model="nombre"  id="nombre" name="nombre" ><br>

        <label for="correo">E-mail</label><br>
        <input  type="email" v-model="email" id="correo" name="correo"><br>
        
        <label for="tel">Teléfono</label><br>
        <input type="tel" v-model="tel" id="tel" name="tel" maxlength="10"><br>
    </div>
</template>



<script>

import contacto from "../components/contacto.vue";

export default {
  name: "HacerPedido",
  components: {
    contacto,
  },
  computed:{
    nombre: {
        get () {
            return this.$store.state.datos.nombre
        },
        set (value) { //Setea el valor en store
            this.$store.commit('guardarNombre', value)
    }
    },
    email: {
        get () {
            return this.$store.state.datos.email
        },
        set (value) { //Setea el valor en store
            this.$store.commit('guardarEmail', value)
        },
    },
    tel: {
        get () {
            return this.$store.state.datos.tel
        },
        set (value) {
            this.$store.commit('guardarTel',value)
        }
    }

},
};
</script>

<style scoped>
.datosUsuario{
    position:absolute;
    width: 400px;
    height: 100px;
    margin-left: -5%;
    margin-top: -40%;
}

.datosUsuario label{
    margin-right: 350px;
}

.datosUsuario input{
    width: 500px;
    border-radius: 5px;
}
</style>