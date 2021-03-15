<template>

  <div class="color-fondo">
    
    <Titulo texto="Experiencia Laboral" />
    <button class="boton" @click="consumirApi">CONSUMIR API</button>
    <div v-for="item in arrayBlog" :key="item.id">{{item.title}}</div>

<!-- AQUI PARTE LA PRUEBA CON V-IF -->

    <h1>Click the Button to Show or Hide</h1>

  <button class="boton" v-on:click="isHidden_a = !isHidden_a">
    <template v-if="isHidden_a">Diseñador Senior</template>
    <template v-else>Click to Hide the Images</template>
  </button>

  <img src="https://via.placeholder.com/150" v-if="!isHidden_a">

  <p v-if="!isHidden_a">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequatur quae repudiandae aut amet labore. Quos molestiae dignissimos, eius quia, vitae, aliquid consequatur aspernatur alias necessitatibus numquam tempore itaque modi.</p>
  <img src="https://via.placeholder.com/150" v-if="!isHidden_a">


  <button  class="boton" v-on:click="isHidden_b = !isHidden_b">
    <template v-if="isHidden_b">Docente</template>
    <template v-else>Esconder</template>
  </button>

  <img src="https://via.placeholder.com/150" v-if="!isHidden_b">

  <p v-if="!isHidden_b">He desarrollado soluciones de comunicación visual en múltiples soportes para clientes como:

Holdin Komatsu Cummins
Gráfica para las inauguraciones de los ediﬁcios corporativos de Komatsu en Lo Boza y  la planta de remanufacturas Cummins en Iquique, la campaña de  seguridad laboral “tarjeta verde” y el concurso de innovación del holding.      


Metro de Santiago  
Como diseñador para el área de desarrollo  organizacional, reformulé y mantuve los medios internos revista andén y  mantenimetro por 2 años. Fui responsable del diseño y la implementación comunicacional del lanzamiento intranet 2019 y la campaña de seguridad interna 2017. Organicé y deﬁní la identidad gráﬁca del centro formativo interno en conjunto con el área marketing de la empresa. 

Melón 
Realizo el informativo semanal el que actualmente está en su edición nº49, y creé la identidad corporativa para la iniciativa de diversidad e integración de la compañía. Desarrollé la campaña “mes de la ética” 2020.</p>
  <img src="https://via.placeholder.com/150" v-if="!isHidden_b">

</div>

</template>

<script>
import Titulo from "../components/Titulo";


export default {
  components: {
    Titulo
  },
  data() {
    return {
       isHidden_a: true,
       isHidden_b: true,
       isHidden_c: true,
      selected: 'Home',
      arrayBlog: []
    };
  },
  methods: {
      setSelected(tab) {
      this.selected = tab;
    },

    async consumirApi() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const array = await data.json();
        console.log(array);
        this.arrayBlog = array;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.color-fondo {
  background-color: #ff4400;
  height: 100%;
  margin: 0;
  border: 0;
}

.boton {
  display:flex;
}
</style>

