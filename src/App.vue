<template>
  <div id="app">
<!--Si el elemento va a aparecer en todas las paginas es mejor importarlo en el app.vue/ -->
    <Navburger/> 
     <router-view/>
  </div>
</template>

<script>
import Navburger from '@/components/NavBurger.vue';

export default {
  name: 'app',
   components: {
    Navburger
  }, 
}
</script>
<style>
/* global styles */
body{
  margin:   0;
  padding:  0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

