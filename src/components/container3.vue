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