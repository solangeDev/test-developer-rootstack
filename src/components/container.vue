<template>
    <div>
        <textarea name="" cols="30" rows="10" :value= data></textarea>
    </div>
</template>
<script>
import api from "../controllers/ApiController";

export default {
 name: "Container",
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
}
</script>