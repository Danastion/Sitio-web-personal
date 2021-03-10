<template>
  <div>
    
    <Titulo texto="Habilidades" />
    <ul v-for="habilidad in habilidades" :key="habilidad.id">
      <li><img :src=habilidad.src alt="No Image" title="Order Now" />{{habilidad.programa}}</li>      
    </ul>
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
  components: {
    Titulo,
  },
  data() {
    return {
      habilidades: [
        {
          programa: "Adobe Illustrator",
          src:'https://via.placeholder.com/150'
        },
        {
          programa: "Adobe Potoshop",
          src:'https://via.placeholder.com/150'
        },
        {
          programa: "Adobe Indesign",
          src:'https://via.placeholder.com/150'
        },
        {
          programa: "HTML/CSS3",
          src:'https://via.placeholder.com/150'
        },
        {
          programa: "Javascript",
          src:'https://via.placeholder.com/150'
        },
        {
          programa: "Vuejs",
          src:'https://via.placeholder.com/150'
        },
        {
          programa: "MSOffice",
          src:'https://via.placeholder.com/150'
        },
        
      ]
    };
  }
};
</script>


<style>
</style>