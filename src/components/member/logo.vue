<template>
  <div>
    <div class="logobox">
      <div class="logoimg">
        <img class="anic1 c1" src="../../assets/logo/c1.png" width="100%">
        <img class="anic3 c1" src="../../assets/logo/c2.png" width="100%">
        <img class="anic4 c1" src="../../assets/logo/c3.png" width="100%">
        <img class="anic6 c1" src="../../assets/logo/c4.png" width="100%">
        <img class="anic3 c1" src="../../assets/logo/c5.png" width="100%">
        <img class="anic4 c1" src="../../assets/logo/c6.png" width="100%">
        <!-- <img class="anic1 c1" src="../../assets/logo/c7.png" width="100%" /> -->
        <img class="anic7 c1" src="../../assets/logo/c8.png" width="100%">
        <!-- <img class="anic1 c1" src="../../assets/logo/c9.png" width="100%" /> -->
        <img class="anic8 c1" src="../../assets/logo/c10.png" width="100%">
        <!-- <img class="anic1 c1" src="../../assets/logo/c11.png" width="100%" /> -->
        <img class="anic7 c1" src="../../assets/logo/c12.png" width="100%">
        <img class="anic1 c1" src="../../assets/logo/c13.png" width="100%">
        <!-- <img class="anic5 c1" src="../../assets/logo/c14.png" width="100%" /> -->
        <img class="anic9 c1" src="../../assets/logo/c15.png" width="100%">
        <img class="anic8 c1" src="../../assets/logo/c16.png" width="100%">
        <img class="anic10 c1" src="../../assets/logo/c17.png" width="100%">
        <img class="anic1 c1" src="../../assets/logo/c18.png" width="100%">
        <img class="anic3 c1" src="../../assets/logo/c19.png" width="100%">
        <img class="anic4 c1" src="../../assets/logo/c20.png" width="100%">
      </div>
    </div>
    <div class="logoname"></div>
  </div>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {

    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getBack: function() {
      this.$router.push({ path: "/" });
    }
  },
  watch: {
    //监听
  },
  mounted: function() {
    //渲染之前调用
  },
  created() {}
};
</script>

<style scoped>
.logoname {
  width: 100%;
}
.logonamebk {
  width: 300px;
  height: 100px;
  border: 1px solid #0889b3;
  background: rgba(12, 67, 91, 0.3);
  margin: auto;
}
.logobox {
  margin-top: 50px;
  height: 250px;
  width: 100%;
}
.logoimg {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  position: relative;
  text-align: center;
  line-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.c1 {
  position: absolute;
  z-index: 1;
}
</style>
