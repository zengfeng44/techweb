<template>
  <div class="maxwin t-fff">
    <div class="bigbox">
      <div class="box-one" v-for="item in AmData" :key="item.id" style="margin-bottom:10px">
        <div class="box-l" style="flex:0.5;"></div>
        <div class="box-two-r gbk">
          <div class="box-main-r rim">
            <div class="box-main-c" style="flex:2">
              <div class="box-min t-r">desc:</div>
              <div class="box-min t-r">create_time:</div>
              <div class="box-min t-r">cash_money:</div>
              <div class="box-min t-r">change_type:</div>
              <div class="box-min t-r">balance_pools:</div>
              <div class="box-min t-r">total_pools:</div>
              <div class="box-min t-r">digital_money:</div>
              <div class="box-min t-r">dynamic_money:</div>
              <div class="box-min t-r">future_money:</div>
              <div class="box-min t-r">product_money:</div>
            </div>
            <div class="box-main-c" style="flex:6">
              <div class="box-min t1em t-n">{{item.desc}}</div>
              <div class="box-min t1em">{{item.create_time}}</div>
              <div class="box-min t1em">{{item.cash_money}}</div>
              <div class="box-min t1em">{{item.change_type}}</div>
              <div class="box-min t1em">{{item.balance_pools}}</div>
              <div class="box-min t1em">{{item.total_pools}}</div>
              <div class="box-min t1em">{{item.digital_money}}</div>
              <div class="box-min t1em">{{item.dynamic_money}}</div>
              <div class="box-min t1em">{{item.future_money}}</div>
              <div class="box-min t1em">{{item.product_money}}</div>
            </div>
          </div>
        </div>
        <div class="box-r" style="flex:0.5;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "amounts",
  data() {
    return {
      AmData:"",
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getAmounts: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/account/accountlogList",
        data: {}
      })
        .then(res => {
          if (res.data.code == 0) {
              this.AmData=res.data.result.data
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
    this.getAmounts();
  }
};
</script>

<style scoped>
.t-fff{
  color:#fff;
}
</style>