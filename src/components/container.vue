<template>
  <div class="feedback-container">
    <comTextarea :value="data" />
  </div>
</template>
<script>
import api from "../controllers/ApiController";
import comTextarea from "./textarea";

export default {
  name: "Container",
  components: {
    comTextarea
  },
  data() {
    return {
      data: [],
      cant: 10
    };
  },
  async mounted() {
    let data = await api.getUserOrderby(this.cant).then(value => {
      return value;
    });
    this.data = JSON.stringify(data, undefined, 4);
  }
};
</script>