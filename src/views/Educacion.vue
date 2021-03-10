<template>
  <div>
    
    <Titulo texto="Educacion"/>
   
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
           
            estudios:[
              
  {
    "año": 2020,
    "titulo": "Desarrollador Frontend",
    "lugar": "DUOC UC, Santiago",
  },
  {
    "año": 2019,
    "titulo": "Introducción al diseño web",
    "lugar": "Programadores Chile",
  },
  {
    "año": 2018,
    "titulo": "Introducción al UX",
    "lugar": "Programadores Chile; CIISA.",
  },
  {
    "año": 2012,
    "titulo": "Título profesional Diseñador Gráfico Publicitario",
    "lugar": "Instituto Profesional Los Leones",
  },
  ]
        }
    },
}
</script>
