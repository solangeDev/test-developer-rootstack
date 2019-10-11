<template>
    <div>
        Tipo de terreno: 
        <input type="text" v-model="terrain" @change="searchInput()">
        <textarea name="" cols="30" rows="10" :value= data></textarea>
    </div>
</template>

<script>
import api from "../controllers/ApiController";

export default {
 name: "Container4",
  data() {
    return {
      data: [],
      terrain: null
    };
  },
  async mounted() {},
  methods: {
      async searchInput(){
         this.data = null;
         const data = await api.getDataPlanets(this.terrain).then((x)=>{
            this.data = JSON.stringify(x, undefined, 4);
         });    
      }
  }
}
</script>

<style>
textarea {
  width: 100%;
  min-height: 30rem;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 0.8rem;
  line-height: 1.2;
}
</style>
