<template>
<!-- Nav Links -->
  <div id="app" class="nav-box">
    <ul v-if="showNav" class="nav-container">
     <li @click="openNav"> <router-link to="/">Home</router-link></li>
     <li @click="openNav"> <router-link to="/educacion">Educacion</router-link></li>
     <li @click="openNav"> <router-link to="/habilidades">Habilidades</router-link></li>
     <li @click="openNav"> <router-link to="/experiencia">Experiencia</router-link></li>
     <li @click="openNav"> <router-link to="/conversemos">Conversemos</router-link></li>
     <li @click="openNav"> <router-link to="/experiencia_b">EXPERIENCIA B</router-link></li>
    </ul>
    <button v-show="showNav" class="nav-close" @click="openNav">X</button>

    <div>
      <button v-if ="!showNav" class="hamburger-menu" @click="openNav">&#9776;</button>
    </div>
  </div>

</template>

<script>
export default {

  data() {
    return {
      showNav: false /*  La variable parte como false, o sea el menu parte sin mostrar nada */
    }
  },
  methods: {
    openNav() {
      this.showNav = !this.showNav /* Este metodo toma la variable showNav y la invierte cada vez que es llamda, funciona como un switch */
    }
  },
}

</script>
<style scoped>


</style>