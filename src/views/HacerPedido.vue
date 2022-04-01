<template>
    <div class="contenedorFormulario">
      <datosUsuario/>
      <pedidoPastel/>
      <!-- MODAL, es la ventana que se abre al pulsar el boton-->
      <button id="show-modal" @click="showModal = true">Hacer pedido</button>
      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Pedido realizado!</h3>
        </template>
        </modal>
      </Teleport>
      <!-- MODAL, es la ventana que se abre al pulsar el boton-->
      
    </div>
</template>

<script>
import contacto from "../components/contacto.vue";
import datosUsuario from "../components/datosUsuario.vue"
import pedidoPastel from "../components/pedidoPastel.vue"
import modal from "../components/modal.vue"


export default {
  name: "HacerPedido",
  components: {
    contacto,
    datosUsuario,
    pedidoPastel,
    modal,
  },
    data() {
      return {
        showModal: false
    }
  }
};
</script>

<style scoped>
.contenedorFormulario {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin-left: 25%;
  width: 50%;
  height: 950px;
  background-color: rgb(255, 240, 240);
  border-radius: 20px;
}
button{
  margin-top:100%;
  margin-left: -172%;
}
</style>