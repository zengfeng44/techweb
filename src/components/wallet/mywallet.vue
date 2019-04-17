<template>
  <div class="maxwin">
    <div class="spacebox">&nbsp;</div>
    <div class="amountbox" :style="amountSTY">
      <img class="img" src="../../assets/money/money02.png" width="100%">
      <div class="amtxt1 txt" :style="absbox1">
        现金账户
        <br>
       {{myData.cash_money}}
      </div>
      <div class="amtxt2 txt" :style="absbox1">
        动态奖金
        <br>
         {{myData.product_money}}
      </div>
      <div class="amtxt3 txt" :style="absbox1">
        商城积分
        <br>
        {{myData.product_money}}
      </div>
      <div class="amtxt4 txt" :style="absbox1">
        科技积分
        <br>
        {{myData.digital_money}}
      </div>
    </div>

    <div class="spacebox" style="margin-bottom: 10px;">&nbsp;</div>

    <div class="spacebox">&nbsp;</div>
    <!--菜单START-->
    <div>
      <img src="../../assets/bottom03.png" width="100%">
    </div>
    <div class="menubox">
      <ul>
        <li class="cur" :style="menutxt">
          <span>充值</span>
        </li>
        <li class="cur" :style="menutxt">
          <span>提现</span>
        </li>
        <router-link to="/goods/cart" class="cur" tag="li" :style="menutxt">
          <span>转账</span>
        </router-link>
        <router-link to="/wallet/amounts" class="cur" tag="li" :style="menutxt">
          <span>明细</span>
        </router-link>
      </ul>
    </div>
    <div>
      <img src="../../assets/bottom03.png" width="100%">
    </div>
    <!--菜单END-->
    <div class="databox">
      <img src="../../assets/money/money01.png" width="100%">
    </div>
	<div>
      <img src="../../assets/bottom01.png" width="100%">
    </div>
    <div ><img src="../../assets/money/money03.png" width="100%"/></div>
  </div>
</template>

<script>
export default {
  name: "mywallet",
  data() {
    return {
      absbox1: "",
      absbox2: "",
      amountSTY: "",
      menutxt: "",
      myData: ""
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getWallet: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/account/info"
      })
        .then(res => {
          if (res.data.code == 0) {
            this.myData = res.data.result;
          }
          console.log(this.myData);
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
    this.getWallet();
    let imgW = window.innerWidth;
    if (imgW>500){
      imgW=500
    }
    let imgH = (imgW * 0.5733).toFixed(0);
    let txt = (imgW * 0.5733 * 0.279).toFixed(0);
    let txtH = ((imgW * 0.5733 * 0.279) / 2).toFixed(0);
    let liH = (imgW * 0.115).toFixed(0);
    this.absbox2 = txtH + "---" + txt;
    this.amountSTY = this.amountSTY + "height:" + imgH + "px;";
    this.absbox1 = this.absbox1 + "min-height:" + txt + "px;";
    this.absbox1 = this.absbox1 + "line-height:" + txtH + "px;";
    this.menutxt = this.menutxt + "height:" + liH + "px;";
    this.menutxt = this.menutxt + "line-height:" + liH + "px;";
  }
};
</script>

<style scoped>
.databox {
  width: 100%;
}
.amountbox {
  width: 100%;
  position: relative;
}
.amountbox .img {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
}
.amountbox .amtxt1 {
  width: 33%;
  position: absolute;
  top: 0;
  left: 23%;
  z-index: 999;
  text-align: center;
}
.amountbox .amtxt2 {
  width: 33%;
  position: absolute;
  top: 48.84%;
  left: 2%;
  z-index: 999;
  text-align: center;
}
.amountbox .amtxt3 {
  width: 23%;
  position: absolute;
  top: 77%;
  left: 32%;
  z-index: 999;
  text-align: center;
}
.amountbox .amtxt4 {
  width: 22%;
  position: absolute;
  top: 85%;
  left: 66%;
  z-index: 999;
  text-align: center;
}

.spacebox {
  height: 15px;
  width: 100%;
}
.menubox {
}
.menubox ul {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.menubox ul li {
  flex: 0 1 100%;
  background-image: url(../../assets/bnt01.png);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
}
.menubox ul li span {
  color: #fff;
  text-shadow: 0px 0px 10px #15f5ff;
}
.menubox ul li:hover {
  color: rgba(88, 200, 238, 1);
  text-shadow: 0px 0px 10px #15f5ff;
}
</style>
