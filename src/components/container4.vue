<template>
  <div class="feedback-container">
    <div class="input-container">
      <span>Numero de Capacidad :</span>
      <input type="text" v-model="capacity" @change="searchInput()" />
    </div>
    <comTextarea :value="data" />
  </div>
</template>

<script>
import api from "../controllers/ApiController";
import comTextarea from "./textarea";

export default {
  name: "Container4",
  components: {
    comTextarea
  },
  data() {
    return {
      data: [],
      capacity: 0
    };
  },
  async mounted() {},
  methods: {
    async searchInput() {
      this.data = null;
      const data = await api.fastestShip(this.capacity).then(x => {
        this.data = JSON.stringify(x, undefined, 4);
      });
    }
  }
};
</script>
