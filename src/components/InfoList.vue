
<template>
  <div class="list-item-container">
    <div class="list-item-head p-8">
      <img :src=user.src alt="No Image" title="Order Now" />
      {{user.cargo}}, {{user.empresa}} 
      <span class="toggle float-right" @click="user.visible = !user.visible" 
            v-text="toggletText[user.visible * 1]">
      </span>
    </div>
    <div class="list-item-body p-8" v-show="user.visible"> 
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props:["user"],
  data(){
    return { toggletText: ['show', 'hide'] }
  }
}
</script>
<style scoped>
.list-item-container{
  width: 80%;
  margin: 0 auto;
  background-color:rgb(255, 72, 0);
  margin-bottom: 10px;
}
.p-8{
  padding: 20px;
}
.list-item-head{
  background-color: #35495E;
  color: rgb(255, 0, 0);
}
.float-right{
  float: right;
}
.toggle{
  cursor: pointer;
}
</style>