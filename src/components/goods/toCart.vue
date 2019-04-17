<template>
  <div class="maxwin">
    <div class="item-box">
      <div class="item" v-for="item in CartData" :key="item.id">
        <div class="sed-box">
          <input
            class="cur"
            type="checkbox"
            checked="1"
            name="goods"
            :value="item.product_id"
            @change="delGoods(item.product_id)"
          >
        </div>
        <div class="img-box">
          <img :src="item.picture" height="100">
          {{item.product_id}}
        </div>
        <div class="info-box">
          <div class="name-box">
            <span>{{item.product_name}}{{item.product_id}}</span>
          </div>
          <div class="price-box">
            <span>{{item.price}}</span>
            <span></span>
          </div>
          <div class="add-box">
            <button v-on:click="item.product_nums--">-</button>
            <input type="number" min="1" v-model="item.product_nums">
            <button v-on:click="item.product_nums++">+</button>
          </div>
        </div>
      </div>
    </div>

    <div class="shop-box maxwin gbk rim" v-if="shopInfo==0" @click="getShop()">
      <div class="shopping cur hover">立即结算</div>
    </div>
    <div class="pay-box appgb appbk maxwin" v-else="shopInfo==1">
      <div class="pay-win appwb">
        <span style="margin-left:10px">支付结算</span>
        <span class="r cur" @click="shopInfo=0" style="margin-right:10px;margin-left:10px">X</span>
      </div>
      <div class="pay-min">
        <div v-if="shopData.default_address==item.id" v-for="item in shopData.member_address">
          <div class="pay-info">收货人：{{item.consignee}} &nbsp; {{item.mobile}}</div>
          <div
            class="pay-info"
          >地&nbsp;&nbsp;&nbsp;址：{{item.province}}{{item.city}}{{item.district}}{{item.address}}</div>
        </div>
        <div class="pay-info">
          {{shopData.default_address}}
          <router-link to="/address/index" tag="span" class="r cur">地址选择></router-link>
        </div>
        <div class="pay-remarks">
          备注：
          <input type="text" v-model="remarks">
        </div>
        <div class="pay-info" style="border:none">现金币：{{shopData.member_account.cash_money}}</div>
      </div>
      <div class="pay-win temp">
        <span style="color:red">共计：{{shopData.total_amount}}元</span>
      </div>
      <div class="pay-win appbk cur hover c gbk" @click="getPay()">
        <span class="apptxt" style="font-size:16px;height:40px">确认支付</span>
      </div>
    </div>
    <div style="height:40px"></div>
  </div>
</template>

<script>
export default {
  name: "toCart",
  data() {
    return {
      addnum: 1,
      money: 0,
      CartData: "",
      shopData: "",
      shopInfo: 0,
      remarks: "",
      price: 0
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    delGoods: function(id) {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/cart/remove",
        data: {
          product_id: id
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            console.log(res);
          }
          if (res.data.code == 2416181248) {
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
                }
                console.log(res);
              })
              .catch(error => {
                console.log(error);
              });
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },

    getCart: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/cart/index",
        data: {}
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
            this.CartData = res.data.result;
            console.log(res.data.message);
          }
          console.log(this.CartData);
        })
        .catch(error => {
          console.log(error);
        });
    },

    //购物车结算
    getShop: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/cart/checkout",
        data: {}
      })
        .then(res => {
          if (res.data.code == 0) {
            if(res.data.result.member_address==''){
              this.$router.push({ path: "/address/add" });
            }
            this.shopInfo = 1;
            this.shopData = res.data.result;
            if (this.shopData.total_amount < 1) {
              alert("请先选择商品");
              this.shopInfo = 0;
            }
            console.log(this.shopData);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //订单支付
    getPay: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/order/submitOrder",
        data: {
          address_id: this.shopData.default_address
          // order_note: this.remarks
        }
      })
        .then(res => {
          let code = res.data.code;
          if (code == "2416246784") {
            alert(res.data.message);
          }
          if(code=="2416050182"){
            this.$router.push({ path: "/address/index" });
          }
          if (code == "2416312321") {
            alert(res.data.message + "请充值后支付");
            this.$router.push({ path: "/order/index" });
          }
          if (res.data.code == 0) {
            alert("支付成功");
            this.$router.push({ path: "/order/index" });
          }
          console.log(res);
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
    this.getCart();
    //渲染之前调用
  }
};
</script>

<style scoped>
.item {
  height: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: 5px;
  color: #fff;
  background: rgba(12, 67, 91, 0.6);
}
.item .sed-box {
  flex: 0.5;

  line-height: 120px;
  text-align: center;
}
.item .img-box {
  flex: 1.5;
  text-align: center;
}
.img-box img {
  margin-top: 10px;
}
.item .info-box {
  flex: 3;

  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.name-box {
  height: 40px;
  line-height: 40px;
}
.name-box button {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin-right: 10px;
  text-align: center;
  border-radius: 5px;
  border: none;
  background: #dddddd;
}
.price-box {
  height: 30px;
  line-height: 30px;
}
.add-box {
}
.add-box button {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  border: none;
  background: #dddddd;
}
.add-box input {
  width: 60px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #dddddd;
  -webkit-appearance: none;
}
.shop-box {
  height: 40px;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
}
.shopping {
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 40px;
  color: aqua;
}

.shop-box .all {
  flex: 1;
  line-height: 40px;
  text-align: center;
}
.shop-box .allmon {
  flex: 2;
  line-height: 40px;
}
.shop-box .buy {
  flex: 1;
  line-height: 40px;
}
.shop-box .buy button {
  width: 100%;
  height: 100%;
  background: green;
  border: none;
  color: #ffffff;
}
.pay-box {
  height: auto;
  width: 100%;
  bottom: 0;
  position: fixed;
  background-image: url(../../assets/background.png);
  background-repeat: repeat;
  background-size: 100%;
}
.pay-win {
  height: 35px;
  width: 100%;
  line-height: 35px;
  color: #fff;
}
.pay-min {
  height: auto;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.pay-info {
  flex: 1;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #0889b3;
}
.pay-remarks {
  flex: 2;
  border-bottom: 1px solid #0889b3;
}
.temp {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  background: rgba(0, 0, 0, 0.5);
}
input[type="text"] {
  background: none;
  border: 0.5px solid rgba(12, 180, 247, 0.664);
  border-bottom: none;
  width: 100%;
  height: 30px;
  float: right;
  color: #fff;
}
</style>
