<template>
  <div class="feedback-container">
    <comTextarea :value="data" />
  </div>
</template>

<script>
import api from "../controllers/ApiController";
import comTextarea from "./textarea";

export default {
  name: "Container3",
  components: {
    comTextarea
  },
  data() {
    return {
      data: [],
      cant: 5
    };
  },
  async mounted() {
    let data = await api.getUserCountString(this.cant, "ES").then(value => {
      return value;
    });
    this.data = JSON.stringify(data, undefined, 4);
  }
};
</script>