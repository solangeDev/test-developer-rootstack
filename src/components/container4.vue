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
         this.data = null;
         const data = await api.fastestShip(this.capacity).then((x)=>{
            this.data = JSON.stringify(x, undefined, 4);
         })
      }
  }
}
</script>
