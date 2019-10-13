<template>
  <div class="feedback-container">
    <comTextarea :value="data" />
  </div>
</template>

<script>
import api from "../controllers/ApiController";
import comTextarea from "./textarea";

export default {
  name: "Container2",
  components: {
    comTextarea
  },
  data() {
    return {
      data: [],
      age: 18
    };
  },
  async mounted() {
    let data = await api.getUserbyAge(this.age).then(value => {
      return value;
    });
    this.data = JSON.stringify(data, undefined, 4);
  }
};
</script>