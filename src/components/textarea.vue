<template>
  <div class="console-container">
    <div class="console">
      <textarea name cols="30" rows="10" :value="value"></textarea>
    </div>
  </div>
</template>
<script>
import api from "../controllers/ApiController";

export default {
  name: "Container",
  data() {
    return {
      data: []
    };
  },
  async mounted() {},
  props: ["value"]
};
</script>

