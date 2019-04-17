<template>
  <div class="maxwin txtcolor">
    <div v-for="(item,index) in goodsData.products">
      <div class="bigbox" v-if="(index+1)%2==1">
        <div>
          <img src="../../assets/bottom03.png" width="100%">
        </div>
        <div class="box-one">
          <div class="box-l"></div>
          <div class="box-two-r">
            <div class="box-main-r rim" style="flex:2;height:120px">
              <div class="box-main-c" style="flex:2">
                <div class="box-min" style="flex:2">{{index}}</div>
                <div class="box-min c">{{item.product_name}}</div>
              </div>
              <div class="box-main-c">
                <div class="box-min"></div>
                <div class="box-min">
                  单价:
                  <br>
                  {{item.price}}
                </div>
                <div class="box-min">数量:{{item.product_nums}}</div>
              </div>
            </div>
            <div class="box-main-c c">
              <div class="box-min"></div>
              <div class="box-min">
                <div>
                  <img src="../../assets/order/back02.png" width="80%">
                </div>
              </div>
              <div class="box-min"></div>
            </div>
          </div>
          <div class="box-r"></div>
        </div>
      </div>

      <div class="bigbox" v-if="(index+1)%2==0">
        <div>
          <img src="../../assets/bottom03.png" width="100%">
        </div>
        <div class="box-one">
          <div class="box-l"></div>
          <div class="box-two-r">
            <div class="box-main-c c">
              <div class="box-min"></div>
              <div class="box-min">
                <div>
                  <img src="../../assets/order/back03.png" width="80%">
                </div>
              </div>
              <div class="box-min"></div>
            </div>
            <div class="box-main-r rim" style="flex:2;height:120px">
              <div class="box-main-c">
                <div class="box-min"></div>
                <div class="box-min">
                  单价:
                  <br>
                  {{item.price}}
                </div>
                <div class="box-min">数量:{{item.product_nums}}</div>
              </div>
              <div class="box-main-c" style="flex:2">
                <div class="box-min" style="flex:2">{{index}}</div>
                <div class="box-min">{{item.product_name}}</div>
              </div>
            </div>
          </div>
          <div class="box-r"></div>
        </div>
      </div>
    </div>
    <div>
      <img src="../../assets/bottom03.png" width="100%">
    </div>

    <div class="bigbox">
      <div class="box-one">
        <div class="box-l"></div>
        <div class="box-two-r">
          <div class="box-main-r rim" style="flex:2;height:160px">
            <div class="box-main-c">
              <div class="box-min t-r">订单号：</div>
              <div class="box-min t-r">订单时间：</div>
              <div class="box-min t-r">收货人：</div>
              <div class="box-min t-r">地址：</div>
              <div class="box-min t-r"></div>
              <div class="box-min t-r">订单状态：</div>
              <div class="box-min t-r">备注：</div>
            </div>
            <div class="box-main-c" style="flex:2">
              <div class="box-min">{{goodsData.order_sn}}</div>
              <div class="box-min">{{goodsData.create_time}}</div>
              <div class="box-min t-n">{{goodsData.consignee}} {{goodsData.mobile}}</div>
              <div class="box-min t-n">{{goodsData.province}}{{goodsData.city}}{{goodsData.district}}</div>
              <div class="box-min">{{goodsData.address}}</div>
              <div class="box-min">
                <div v-if="goodsData.pay_status == 0">待付款</div>
                <div v-else="goodsData.pay_status == 1">
                  <span v-if="goodsData.shipping_status==0">待发货</span>
                  <span v-else-if="goodsData.shipping_status==1">已发货</span>
                  <span v-else="goodsData.shipping_status==2">已完成</span>
                </div>
              </div>
              <div class="box-min">{{goodsData.member_note}}</div>
            </div>
          </div>
          <div class="box-main-c c" style="flex:1">
            <div class="box-min"></div>
            <div class="box-min">
              <div>
                <img src="../../assets/order/back04.png" width="80%">
              </div>
            </div>
            <div class="box-min"><div v-if="goodsData.pay_status==0" class="cur hover" @click="delOrder(goodsData.id)">册除订单{{goodsData.id}}</div></div>
          </div>
        </div>
        <div class="box-r"></div>
      </div>
    </div>

    <div class="bigbox">
      <div class="box-one">
        <div class="box-l"></div>
        <div class="box-two-r">
          <div class="box-main-c" style="height:120px"></div>
          <div class="box-main-c" style="height:120px">
            <div class="box-min"></div>
            <div class="box-min rim t-c"><span style="color:red;font-size:16px">总价:{{goodsData.total_amount}}</span></div>
            <div class="box-min"></div>
          </div>
          <div class="box-main-c c">
            <div class="box-min-2"></div>
            <div class="box-min-2">
              <div>
                <img src="../../assets/order/smt01.png" width="80%">
              </div>
            </div>
            <div class="box-min-2"></div>
          </div>
        </div>
        <div class="box-r"></div>
      </div>
    </div>

    <div>
      <img src="../../assets/bottom03.png" width="100%">
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      goodsData: "",
      prolength: ""
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    delOrder:function(id){
       this.$axios({
        method: "post",
        url: this.HOSTS + "/order/del",
        data: {
          order_id:id
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            alert(res.data.message);
            window.history.go(-1);
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getOrder: function() {
      let id = this.$route.params.id;
      this.$axios({
        method: "post",
        url: this.HOSTS + "/order/info",
        data: {
          order_id: id
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.goodsData = res.data.result;
            this.prolength = this.goodsData.products.length;
            console.log(this.goodsData.products.length);
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
    //渲染之前调用
    this.getOrder();
  }
};
</script>

<style scoped>
.maxw {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  color: #15f5ff;
}
.txtcolor {
  color: #fff;
}
</style>