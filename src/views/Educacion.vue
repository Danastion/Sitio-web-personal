<template>
<div>
  <div class="contenedor_superior">
      <div class="titulo_tema">
        <Titulo texto="Educacion" />
      </div>
    </div>


  <div class="contenedor_mayor">

    <div class="contenedor_interior_L">
      <div class="circulo">2020</div>
    </div>

    <div class="contenedor_interior_R">
      Desarrollador Frontend
      DUOC UC, Santiago.
    </div>

    <div class="contenedor_interior_L">
      <div class="circulo">2020</div>
    </div>

    <div class="contenedor_interior_R">
      Desarrollador Frontend
      DUOC UC, Santiago.
    </div>
  </div>
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
      estudios: [
        {
          año: 2020,
          titulo: "Desarrollador Frontend",
          lugar: "DUOC UC, Santiago"
        },
        {
          año: 2019,
          titulo: "Introducción al diseño web",
          lugar: "Programadores Chile"
        },
        {
          año: 2018,
          titulo: "Introducción al UX",
          lugar: "Programadores Chile; CIISA."
        },
        {
          año: 2012,
          titulo: "Título profesional Diseñador Gráfico Publicitario",
          lugar: "Instituto Profesional Los Leones"
        }
      ]
    };
  }
};
</script>

<style scoped>
.contenedor_mayor {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  /* background: red; */
  padding: 80px;
  box-sizing: border-box;
}

.contenedor_superior {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  /* background: rgb(235, 60, 241); */
}
.contenedor_interior_L {
  flex: 1;
  padding: 30px;
  /* background: rgb(195, 177, 10); */
}

.contenedor_interior_R {
  flex: 2;
  padding: 30px;
  /* background: blue; */
}

.circulo {
  height: 200px;
  width: 200px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  text-align: center;
  display: flex;
  background: yellow;
}

.titulo_tema {
  font-style: italic;
  font-weight: bold;
  font-size: 48px;
  line-height: 0px;
  /* identical to box height, or 0% */
  color: #18191f;
}

/* MEDIA QUERIES +++++++++++++++++++++++++++++++++++++++++++++++++++ */
@media screen and (max-width: 768px) {
  .contenedor_mayor {
    flex-direction: column;
  }
}
</style>
