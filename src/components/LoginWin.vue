<template>
  <div class="maxwin">
    <logo></logo>
    <router-view></router-view>
  </div>
</template>

<script>
import logo from "../components/member/logo.vue";
export default {
  name: "LoginWin",
  data() {
    return {};
  },
  components: {
    logo: logo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>