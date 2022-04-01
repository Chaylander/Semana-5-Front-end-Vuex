import { createStore } from "vuex";

export default createStore({
  state: {
    datos:{
      nombre:'',
      email:'',
      tel:'',
    },
    pedidos:{
      pastel:{
        saborSeleccionado:[""],
        tamanoSeleccionado:[""],
        combinarConPastel:[""],
        adornoSeleccionado:[""],
        combinarConAdorno: [""],
        saborSeleccionadox: null,
        precio:0, 
      },
      
    }

  },
  getters: {
    obtenerNombre(state) {
      return state.datos.nombre;
    },
    obtenerEmail(state) {
      return state.datos.email;
    },
    obtenerTel(state) {
      return state.datos.tel;
    },
    
    obtenerSaborSeleccionado(state) {
      return state.pedidos.pastel.saborSeleccionado;
    },

    obtenerTamanoSeleccionado(state) {
      return state.pedidos.pastel.tamanoSeleccionado;
    },

    obtenerCombinarConPastel(state) { 
      return state.pedidos.pastel.combinarConPastel;
    },
    
    obtenerAdornoSeleccionado(state) { 
      return state.pedidos.pastel.adornoSeleccionado;
    },

    obtenerCombinarConAdorno(state) {
      return state.pedidos.pastel.combinarConAdorno;
    },

    obtenerPrecio(state) {
      return state.pedidos.pastel.precio;
    }
    

    
  },
  mutations: {
    guardarNombre(state, nombre) {
      state.datos.nombre = nombre;
    },
    guardarEmail(state, email){
      state.datos.email = email;
    },
    guardarTel(state, tel){
      state.datos.tel = tel;
    },
    
    guardarSabor(state, saborSeleccionado) {
      state.pedidos.pastel.saborSeleccionado = saborSeleccionado;
      //state.pedidos.pastel.saborSeleccionado.push(saborSeleccionado)
    },

    guardarTamano(state, tamanoSeleccionado) {
      state.pedidos.pastel.tamanoSeleccionado = tamanoSeleccionado;
      if (tamanoSeleccionado == "chico") {
        state.pedidos.pastel.precio = 50;
        console.log("entro al if bro");
        console.log (state.pedidos.pastel.precio);
      }
      else if (tamanoSeleccionado == "mediano") {
        state.pedidos.pastel.precio = 300;
        console.log("entro al if bro");
        console.log (state.pedidos.pastel.precio);
      }
      else {
        state.pedidos.pastel.precio = 500;
      }
    },

    guardarCombinarConPastel(state, combinarConPastel) {
      state.pedidos.pastel.combinarConPastel = combinarConPastel;
    },

    guardarAdornoSeleccionado(state, adornoSeleccionado) {
      state.pedidos.pastel.adornoSeleccionado = adornoSeleccionado;
      if (adornoSeleccionado == "mensaje") {
        state.pedidos.pastel.precio = state.pedidos.pastel.precio + 50;
        console.log (state.pedidos.pastel.precio);
      }
      else if (adornoSeleccionado == "bombones") {
        state.pedidos.pastel.precio = state.pedidos.pastel.precio + 15;
        console.log (state.pedidos.pastel.precio);
      }
      else if (adornoSeleccionado == "panditas") {
        state.pedidos.pastel.precio = state.pedidos.pastel.precio + 20;
        console.log (state.pedidos.pastel.precio);
      }
      else if (adornoSeleccionado == "chispas") {
        state.pedidos.pastel.precio = state.pedidos.pastel.precio + 20;
        console.log (state.pedidos.pastel.precio);
      }
    },

    guardarCombinarConAdorno(state, combinarConAdorno) {
      state.pedidos.pastel.combinarConAdorno = combinarConAdorno;
      if (combinarConAdorno == "mensaje") {
        state.pedidos.pastel.precio = state.pedidos.pastel.precio + 50;
        console.log (state.pedidos.pastel.precio);
      }
      else if (combinarConAdorno == "bombones") {
        state.pedidos.pastel.precio = state.pedidos.pastel.precio + 15;
        console.log (state.pedidos.pastel.precio);
      }
      else if (combinarConAdorno == "panditas") {
        state.pedidos.pastel.precio = state.pedidos.pastel.precio + 20;
        console.log (state.pedidos.pastel.precio);
      }
      else if (combinarConAdorno == "chispas") {
        state.pedidos.pastel.precio = state.pedidos.pastel.precio + 20;
        console.log (state.pedidos.pastel.precio);
      }
    }

    
   /*
   guardarPastel(state, saborSeleccionado, tamanoSeleccionado, combinarConPastel, adornoSeleccionado, combinarConAdorno) {
    state.pedidos.pastel.saborSeleccionado = saborSeleccionado;
    state.pedidos.pastel.tamanoSeleccionado = tamanoSeleccionado;
    state.pedidos.pastel.combinarConPastel = combinarConPastel;
    state.pedidos.pastel.adornoSeleccionado = adornoSeleccionado;
    state.pedidos.pastel.combinarConAdorno = combinarConAdorno;
   },
*/
},
  actions: {
    
  },
  modules: {

  },
});
