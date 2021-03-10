<template>
<!-- Nav Links -->
  <div id="app" class="nav-box">
    <ul v-if="showNav" class="nav-container">
     <li @click="openNav"> <router-link to="/">Home</router-link> |</li>
     <li @click="openNav"> <router-link to="/educacion">Educacion</router-link> | </li>
     <li @click="openNav"> <router-link to="/habilidades">Habilidades</router-link> |</li>
     <li @click="openNav"> <router-link to="/experiencia">Experiencia</router-link> |</li>
     <li @click="openNav"> <router-link to="/conversemos">Conversemos</router-link> |</li>
     <li @click="openNav"> <router-link to="/experiencia_b">EXPERIENCIA B</router-link> |</li>
    </ul>
    <button v-show="showNav" class="nav-close" @click="openNav">X</button>

    <div class="box">
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
.nav-box{
  background-color: bisque;
}
.nav-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: rgb(199, 9, 31, 0.4);
}
.nav-close {
  color: rgba(197, 6, 27, 0.6);
  background-color: transparent;
  border: none;
  margin: 20px 30px;
  font-size: 30px;
  font-weight: 300;
  position: absolute;
  top: 0;
  right: 0;
}

.nav-close:hover {
  background-color: white;
  border-radius: 25px;
}


li {
  font-size: 40px;
  font-weight: 300;
  padding: 12px 0 0 0;
  text-shadow: 2px 2px 2px gray;
}

li:not(:last-child) {
  border-bottom: 1px solid rgba(197, 6, 27, 0.3);
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  background: teal;
  padding: 0 40px;
  border-radius: 5px;
}

.nav-close {
  color: rgba(197, 6, 27, 0.6);
  background-color: transparent;
  border: none;
  margin: 20px 30px;
  font-size: 30px;
  font-weight: 300;
  position: absolute;
  top: 0;
  right: 0;
}

.nav-close:hover {
  background-color: white;
  border-radius: 25px;
}

.hamburger-menu {
  float: right;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 5px;
  background-color: white;
  color: rgba(197, 6, 27, 0.6);
}

h2 {
  color: teal;
}
</style>
