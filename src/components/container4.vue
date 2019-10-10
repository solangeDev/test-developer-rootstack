<template>
    <div>
        Numero de Capacidad : 
        <input type="text" v-model="capacity" @change="searchInput()">
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
      capacity: 0
    };
  },
  async mounted() {},
  methods: {
      async searchInput(){
         const data = await api.fastestShip(this.capacity).then((x)=>{
            this.data = JSON.stringify(x, undefined, 4);
         })
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
