<template>
  <div class="color-fondo">
    <section class="container">
      <div class="item-left">
        <img :src="image" class="imagen" />
        <div class="circulo"></div>
      </div>

      <div class="item-right">
                <div class="textos">
          <Titulo texto="Nelson Espinoza" class="titulo-principal"/>
          <h4 class="subtitulo">Diseñador y Frontend</h4>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import image from "@/assets/Saly-15.png/";
import Titulo from "../components/Titulo";
export default {
  components: {
    Titulo
  },
  data: function() {
    return {
      image: image
    };
  }
};
</script>

<style scoped>
.color-fondo {
  background-color: white;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}
.item-left {
  flex: 50%;
  margin-top: 100px;
/*   background-color: blueviolet; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-right {
  flex: 50%;
  margin-top: 100px;
  background-color: rgb(86, 226, 43);
}

.titulo-principal {
  font-size: 8rem;
  line-height: 1;
  font-family: "Space Mono", monospace;
  font-weight: 700;
  color: #ef784d;
  text-align: left;
}

.circulo{
  position: absolute;
  width: 400px;
  height:400px;
  background: #8AC007;
  border-radius: 1000px;
  z-index:-1;
}

.imagen {
width: 60%;
/* background-color: brown;  */

}

.textos {
  flex-direction: column;
}

.subtitulo {
  color: #ef784d;
  font-size: 2.8rem;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-align: left;
}
</style>
