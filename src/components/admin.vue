<template>
  <div class="tabla">
      <h1>Pedidos pendientes</h1>
      <table class="default">
          <tr>
            <th>Cliente</th>
            <th>Sabor</th>
            <th>Tamaño</th>
            <th>Combinar con sabor</th>
            <th>Adornos</th>
            <th>Combinar con adorno</th>
            <th>Precio</th>
          </tr>
        
          <tr>
            <td>{{$store.getters.obtenerNombre}}</td>
            <td>{{$store.getters.obtenerSaborSeleccionado}}</td>
            <td>{{$store.getters.obtenerTamanoSeleccionado}}</td>
            <td>{{$store.getters.obtenerCombinarConPastel}}</td>
            <td>{{$store.getters.obtenerAdornoSeleccionado}}</td>
            <td>{{$store.getters.obtenerCombinarConAdorno}}</td>
            <td>{{$store.getters.obtenerPrecio}}</td>
          </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: "admin",
};
</script>

<style scoped>
.tabla{
  background-color: aliceblue;
}

.default {
  width: 90%;
  height: 100px;
  margin-top: 30px;
  margin-left: 05%;
  background-color: rgb(244, 241, 255);
  border-radius: 30px;
  border: 3px solid rgb(222, 222, 228);
}
</style>
