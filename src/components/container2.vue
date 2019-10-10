<template>
    <div>
        <textarea name="" cols="30" rows="10" :value= data></textarea>
    </div>
</template>

<script>
import api from "../controllers/ApiController";

export default {
 name: "Container2",
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
