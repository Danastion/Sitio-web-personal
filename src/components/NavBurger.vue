<template>
<div class="menu">
 <!-- Hamburger Menu -->  
    <div class="menu">
      <div class="menu-background"></div>
      <ul class="menu-content">
          <slot><nav-list/></slot>
      </ul>
     

</div>
</div>
</template> 

<script>
import navList from "@/components/navList.vue";
export default {
 components: {
    'nav-list': navList
  },
  data() {
    return {
      showNav: false

    }
  },
}

</script>

<style scoped>
.menu {
  position: absolute;
  z-index: 3;
  display: flex;
/*   height: 100vh; */
  top: 0;
  left: 0;
  
}

.menu-content {
  box-sizing: border-box;
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 10px 20px;
  line-height: 1.6;
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



.box {
  padding: 20px;
}


h2 {
  color: teal;
}
  
</style>