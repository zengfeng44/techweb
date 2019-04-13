<template>
  <div class="maxwin">
    <div class="header maxwin">
      <div class="headbox">
        <Icon @click="getBack()" class="icon" size="30" type="md-arrow-round-back"/>
        <div class="stitle">title</div>
        <div class="icon"></div>
      </div>
    </div>
    <div class="conten">
      <router-view></router-view>

    </div>
  </div>
</template>

<script>
export default {
  name: "MinWin",
  data() {
    return {};
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getBack: function() {
      //this.$router.push({ path: "/" });
      window.history.go(-1)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headbox {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.header {
  position: fixed;
  top: 0px;
  height: 80px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-image: url(../assets/header.png);
  background-size: auto;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 999;
}
.conten {
  width: 100%;
  height: auto;
  margin-top: 80px;
  margin-right: auto;
  margin-left: auto;
}
.icon {
  flex: 1;
  text-align: center;
  line-height: 80px;
  color: rgba(15, 179, 238, 0.705);
  text-shadow: 0 0 2px rgba(30, 130, 166, 1);
}
.stitle {
  flex: 3;
  text-align: center;
  line-height: 80px;
  color: #fff;
  text-shadow: 0 0 2px rgba(30, 130, 166, 1);
}
</style>