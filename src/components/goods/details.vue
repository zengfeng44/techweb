<template>
  <div class="maxwin">
    <div class="box">
      <div class="goodsimg" :style="goodsimg">
        <img class="abox999" src="../../assets/goods/backimg.png" width="100%">

        <img class="abox900" :src="goodsData.picture" width="100%">
      </div>
      <div class="goodsinfo">
        <div class="title txt">商品名称:{{goodsData.product_name}}</div>
        <div class="info txt">商品价格:{{goodsData.price}}</div>
      </div>
      <div class="parameter b">
        <div class="btnBox">
          <div class="btnimg r" :style="btnl">商品详情</div>
        </div>
        <div class="btnBox">
          <div class="btnimg2 l" :style="btnr">商品规格</div>
        </div>
      </div>
      <div class="goodsconten b">aaaa</div>
    </div>
    <div class="shop-box maxwin">
      <button class="all" @click="addCart()">加入购物车</button>
      <button class="all"  @click="toCart()">购物车走起</button>
    </div>
    <div style="height:40px"></div>
  </div>
</template>

<script>
export default {
  name: "goodsdetails",
  data() {
    return {
      goodsimg: "",
      btnl: "",
      btnr: "",
      goodsData: ""
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getGoods: function() {
      let id = this.$route.params.id;
      this.$axios({
        method: "post",
        url: this.HOSTS + "/goods/info",
        data: {
          product_id: id
        }
      })
        .then(res => {
          if (res.data.code == "2416181248") {
            alert(res.data.message);
            this.$router.push({ path: "/home" });
          }
          if (res.data.code == 0) {
            this.goodsData = res.data.result;
            console.log(res.data.message);
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    addCart: function() {
      let id = this.goodsData.id;
      this.$axios({
        method: "post",
        url: this.HOSTS + "/cart/addToCart",
        data: {
          product_id: id
        }
      })
        .then(res => {
          if (res.data.code == "2416050176") {
            alert(res.data.message);
            this.$router.push({ path: "/member/login" });
          }
          if (res.data.code == "2416181248") {
            alert(res.data.message);
          }
          if (res.data.code == 0) {
            alert(res.data.message);
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    toCart: function() {
      this.$router.push({ path: "/goods/cart" });
    },
  },
  watch: {
    //监听
  },
  mounted: function() {
    this.getGoods();
    //渲染之前调用
    let winbox  = window.innerWidth;
    if(winbox >500){
      winbox =500
    }
    let imgW = winbox * 0.95;
    let imgH = winbox * 0.95 * 0.6;
    let bntH = (winbox * 0.95 * 0.5 * 0.282).toFixed(0);
    this.goodsimg = this.goodsimg + "height:" + imgH + "px;";
    this.goodsimg = this.goodsimg + "width:100%;";
    this.btnl = this.btnl + "height:" + bntH + "px;";
    this.btnr = this.btnr + "height:" + bntH + "px;";
    this.btnl = this.btnl + "line-height:" + bntH + "px;";
    this.btnr = this.btnr + "line-height:" + bntH + "px;";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.b {
  border: 1px solid rgba(13, 231, 166, 0.61);
}
.box {
  width: 95%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.goodsimg {
  width: 100%;
  position: relative;
}

.abox999 {
  position: absolute;
  z-index: 999;
  top: 0;
}
.abox900 {
  position: absolute;
  z-index: 900;
  top: 0;
}
.goodsinfo {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
}
.title {
  flex: 1;
  background: hsla(98, 88%, 47%, 0.534);
}
.info {
  flex: 2;
}
.parameter {
  width: 100%;
  height: auto;
  margin-top: 10px;
}
.btnBox {
  width: 50%;
  float: left;
  color: #fff;
}
.btnimg {
  width: 100%;
  background: url(../../assets/goods/btn01.png);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}
.btnimg2 {
  width: 100%;
  background: url(../../assets/goods/btn02.png);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}

.goodsconten {
  float: left;
  width: 100%;
  height: 150px;
}
.shop-box {
  height: 40px;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  background: #fff;
  font-size: 16px;
  border-bottom: 0.5px solid #dddddd;
  border-top: 0.5px solid #dddddd;
}
.shop-box .all {
  flex: 1;
  line-height: 40px;
  text-align: center;
}
</style>