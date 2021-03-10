<template>
  <div id="app">
    
    <infoList v-for="(item, index) in dynamicList" :key="index" :user="item">
      <img :src=item.src alt="No Image" title="Order Now" />{{item.desc_cargo}}
    </infoList>
  </div>
</template>

<script>

import InfoList from "../components/InfoList";
export default {
  name: "App",
  components: { InfoList },
  data(){
    return {
      dynamicList: []
    }
  },
  methods: {
    prepareDynamicList(){
      let list = [
        {cargo: "Diseñador", empresa:"URCOM COMUNICACIONES",desc_cargo:"He desarrollado soluciones de comunicación visual en múltiples soportes para clientes como: Holdin Komatsu Cummins", src:'https://via.placeholder.com/150'},
        {cargo: "DOCENTE", empresa: "UAR", desc_cargo:"He desarrollado soluciones de comunicación visual en múltiples soportes para clientes como: Holdin Komatsu Cummins", src:'https://via.placeholder.com/150'},
        {cargo: "DISEÑADOR", empresa: "MOVDEP",desc_cargo:"He desarrollado soluciones de comunicación visual en múltiples soportes para clientes como: Holdin Komatsu Cummins", src:'https://via.placeholder.com/150'},
        {cargo: "ANIMADOR", empresa:"CANTOS DEL HAIN",desc_cargo:"He desarrollado soluciones de comunicación visual en múltiples soportes para clientes como: Holdin Komatsu Cummins", src:'https://via.placeholder.com/150'}
      ];
      list.forEach(element => {
       this.dynamicList.push({...element, visible: false});
      });
    }
  },
  async created(){
    await this.prepareDynamicList();
  },

};
</script>


