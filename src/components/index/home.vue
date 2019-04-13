<template>
  <div class="maxwin">
    <banner></banner>
    <div class="cavs01">
      <div class="img">
        <img src="../../assets/cavs01.png" width="100%">
        <div class="box">
          <div class="item"></div>
          <div class="item">
            <Icon size="30" class="icon" type="md-repeat"/>
          </div>
          <div class="item">
            <Icon size="30" class="icon" type="ios-rewind-outline"/>
          </div>
          <div class="item">
            <Icon size="30" class="icon" type="ios-pause-outline"/>
          </div>
          <div class="item">
            <Icon size="30" class="icon" type="ios-play-outline"/>
          </div>
          <div class="item"></div>
        </div>
      </div>
    </div>
    <div class="cavs02">
      <div style="width:29%;height:100%; float: left;">
        <img class="ani" src="../../assets/cavs02-01.png" width="100%">
        <div class="cavs-text shadow">
          <span class="shadow">11001111</span>
          <br>
          <span class="shadow">10101010101</span>
          <br>
          <span class="shadow">0001110</span>
          <br>
          <span class="shadow">1010000010100010110</span>
          <br>
          <span class="shadow">011010100</span>
          <br>
          <span class="shadow">0100110010010</span>
          <br>
        </div>
      </div>
      <div style="float:right;width:69%;">
        <img src="../../assets/cavs02-02.png" width="100%">
        <div class="goods">
          <ul>
            <router-link :to="{name:'goodsdetails',params:{id:item.id}}" tag="li" class="item-list" v-for="item in goods" :key="item.id">
              <div class="image"><img src="../../assets/logo.png" width="100%" /></div>
              <div class="info">
                  价格:{{item.price}} <br/>
                  赠送积分：3800<br/>
                  {{item.id}}
              </div>
              <div class="title">{{item.product_name}}</div>
            </router-link>
          </ul>
        </div>
      </div>
      <img src="../../assets/cavs02-2.png" width="100%">
    </div>
  </div>
</template>

<script>
import banner from "./banner.vue";
export default {
  name: "home",
  data() {
    return {
      goods: []
    };
  },
  components: {
    banner: banner
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getGoods: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/goods/recommends",
        data: {
          rec_nums: 9
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.goods = res.data.result;
          }
          console.log(this.goods);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    //监听
  },
  mounted: function() {
    //渲染之前调用
    this.getGoods();
  }
};
</script>

<style scoped>
.cavs01 {
  position: relative;
}
.cavs01 .img {
  position: relative;
  top: 0;
  z-index: 0;
}
.cavs01 .box {
  position: absolute;
  top: 0;
  z-index: 998;
  height: 100%;
  width: 100%;
  /* border: 1px solid #15F5FF; */
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.cavs01 .box .item {
  flex: 0 1 100%;
  /* border: 1px solid #15F5FF; */
  text-align: center;
}
.item .icon {
  text-align: center;
  color: rgba(88, 200, 238, 0.2);
  text-shadow: 0px 0px 10px #15f5ff;
}
.icon:hover {
  color: rgba(88, 200, 238, 1);
  text-shadow: 0px 0px 15px #15f5ff;
  border: 1px solid #15f5ff;
}

.imgback {
  height: 120vh;
  background-image: url(../../assets/background.png);
  background-size: 100%;
  background-repeat: repeat;
}
.goods {
  width: 100%;
  height: auto;
}
.goods ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #15f5ff;
}
.goods ul li {
  flex: 1;
  min-width: 95%;
  min-height: 130px;
  flex-grow: 0;
  border: 1px solid #0889b3;
  text-align: center;
  margin-right: 5px;
  margin-bottom: 5px;
  position: relative;
}
.goods .title{
    position: absolute;
    height:30px;
    width:100%;
    bottom:0;
    line-height: 30px;
    border-top:1px solid #0889b3;
    background:rgba(88, 200, 238, 0.2);
}
.goods .image{
    position:absolute;
    height: 99px;
    width:40%;
    left: 0;
    border-right:1px solid #0889b3;
}
.goods .info{
    position:absolute;
    height: 99px;
    width:58%;
    right: 0;
    text-align: left;
}
.cavs-text {
  width: 100%;
  height: 120px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  font-size: 8px;
  line-height: 20px;
}
</style>
