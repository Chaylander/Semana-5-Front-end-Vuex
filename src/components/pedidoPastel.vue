<template>
    <div class="containerPedidoPastel">
        <div class="preguntaNumero">
         <p>¿Cuantos pasteles quieres?</p>
        <select v-model.number="noPasteles" maxlength="1" placeholder="">
            <option >1</option>
        </select>
         </div>
         <!-- <p>quieres pasteles</p> {{ noPasteles }} -->
       
        <!--
        <span v-for="x in noPasteles ">{{ x }}</span>

        <div v-for="x in noPasteles ">Hola</div>
        -->
        <!-- Aqui se seleccionan los sabores -->
        <div class="divFor">
            <div v-for="(x,index) in noPasteles" :key="index">
            <p>Pastel {{x}}</p>
            <p>Escoge un sabor</p>
            <select v-model="saborSeleccionado">
                <option disabled value="">Please select one</option>
                <option>Chocolate</option>
                <option>Dulce de leche</option>
                <option>Frutas</option>
                <option>Red velvet</option>
                <option>Tres leches</option>
                <option>Zanahoria</option>
            </select>

            <p>Escoge un tamaño</p>
            <select v-model="tamanoSeleccionado">
                <option value="chico">Chico</option>
                <option value="mediano">Mediano</option>
                <option value="grande">Grande</option>
            </select>

            <p>Combinar con</p>
            <select v-model="combinarConPastel">
                <option>No combinar</option>
                <option>Chocolate</option>
                <option>Dulce de leche</option>
                <option>Frutas</option>
                <option>Red velvet</option>
                <option>Tres leches</option>
                <option>Zanahoria</option>
            </select>

            <p>Seleccionar adorno</p>
            <select v-model="adornoSeleccionado">
                <option value="mensaje">Mensaje escrito</option>
                <option value="bombones">Bombones</option>
                <option value="panditas">Panditas</option>
                <option value="chispas">Chispas</option>
            </select>

            <p>Combinar con adorno</p>
            <select v-model="combinarConAdorno">
                <option >No combinar</option>
                <option value="mensaje">Mensaje escrito</option>
                <option value="bombones">Bombones</option>
                <option value="panditas">Panditas</option>
                <option value="chispas">Chispas</option>
            </select>
            
            </div>
        </div>
        <h4>precio: {{$store.getters.obtenerPrecio}}</h4>
        
    </div>
</template>

<script>
export default {
  name: "pedidoPastel",
  data() {
      return {
          noPasteles: "",
          
      }
  },
  computed:{
      
    saborSeleccionado: {
        get () {
            return this.$store.state.pedidos.pastel.saborSeleccionado
        },
        set (value) { //Setea el valor en store
            this.$store.commit('guardarSabor', value)
        },

    },
    tamanoSeleccionado: {
        get () {
            return this.$store.state.pedidos.pastel.tamanoSeleccionado
        },
        set (value) { //Setea el valor en store
            this.$store.commit('guardarTamano', value)
        },
    },
    combinarConPastel: {
        get () {
            return this.$store.state.pedidos.pastel.combinarConPastel
        },
        set (value) {
            this.$store.commit('guardarCombinarConPastel', value)
        }
    },
    adornoSeleccionado: {
        get() {
            return this.$store.state.pedidos.pastel.adornoSeleccionado
        },
        set (value){
            this.$store.commit('guardarAdornoSeleccionado', value)

        }
    },
    combinarConAdorno: {
        get () {
            return this.$store.state.pedidos.pastel.combinarConAdorno
        },
        set (value){
            this.$store.commit('guardarCombinarConAdorno',value)
        }
    },
    precio: {
        get () {
            return this.$store.state.pedidos.pastel.precio
        },
        set (value){
            this.$store.commit('guardarPrecio',value)
        }
    }

},
};
</script>

<style scoped>
.containerPedidoPastel{
    /*background-color: aquamarine;*/
    width: 80%;
    height: 1200px;
    margin-top: 95%;
}

.containerPedidoPastel select{
    height: 30px;
}

.containerPedidoPastel h4{
    position: relative;
    margin-left: -91%;
}

.preguntaNumero{
    margin-left: -90%;
}

.divFor{
    /*background-color: brown;*/
    margin-top: -30px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 450px;
    margin-left: -90%;
}

.divFor p{
    margin-top:5px;
}





</style>