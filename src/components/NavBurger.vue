<template>
<div class="menu">
  <header>
 <!-- Hamburger Menu -->  
    <div>
      <div class="menu-background"></div>
      <ul class="menu-content">
          <slot><nav-list/></slot>
      </ul>    
</div>
</header>
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

