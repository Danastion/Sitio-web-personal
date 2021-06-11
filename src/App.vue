<template>
  <div id="app">
    <!--Si el elemento va a aparecer en todas las paginas es mejor importarlo en el app.vue/ -->
    <Navburger />
    <router-view />
  </div>
</template>

<script>
import Navburger from "@/components/NavBurger.vue";

export default {
  name: "app",
  components: {
    Navburger
  }
};
</script>
<style>

@import 'assets/style.css';
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
html, body {
  font-family: 'Space Mono', monospace;
}

#app {
  font-family: 'Space Mono', monospace;
}
</style>

