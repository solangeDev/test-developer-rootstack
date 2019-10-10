<template>
    <div>
        <textarea name="" cols="30" rows="10" :value= data></textarea>
    </div>
</template>

<script>
import api from "../controllers/ApiController";

export default {
 name: "Container3",
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

