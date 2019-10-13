<template>
  <div class="feedback-container">
    <div class="input-container">
      <span>Tipo de terreno:</span>
      <input type="text" v-model="terrain" @change="searchInput()" />
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
      terrain: null
    };
  },
  async mounted() {},
  methods: {
    async searchInput() {
      this.data = null;
      const data = await api.getDataPlanets(this.terrain).then(x => {
        this.data = JSON.stringify(x, undefined, 4);
      });
    }
  }
};
</script>