<template>
  <div class="maxwin">
    <div style="margin-top:10px;margin-bottom: 10px;">
      <img src="../../assets/bottom01.png" width="100%">
    </div>
    <div v-for="(item,index) in listData.data">
      <div class="orderbox" :style="absbackimg">
        <div class="abstitle" :style="abstitle">
          <span>{{item.name}}</span>
          <br>
          <span>订单号:{{item.order_sn}}</span>
          <br>
          <span>时间:{{item.create_time}}</span>
        </div>
        <div class="absimg" :style="absimg">
          <swiper :options="swiperOption">
            <swiper-slide
              class="swiper-container"
              style="background:none;text-align: center;"
              v-for="goods in item.products"
              :key="goods.id"
            >
              <div>{{goods.product_name}}X{{goods.product_nums}}</div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="absprice" :style="absprice">
          <div v-if="item.pay_status == 0">待付款</div>
          <div v-else="item.pay_status == 1">
            <span v-if="item.shipping_status==0">待发货</span>
            <span v-else-if="item.shipping_status==1">已发货</span>
            <span v-else="item.shipping_status==2">已完成</span>
          </div>
        </div>
        <router-link
          :to="{name:'Order',params:{id:item.order_id}}"
          tag="div"
          class="absstate cur"
          :style="absstate"
        >
          <span>查看订单</span>
        </router-link>
        <div class="absinfo" :style="absinfo">
          <span>共计：{{item.total_amount}}元{{index+1}}</span>
        </div>
      </div>
      <div style="margin-top:10px;margin-bottom: 10px;">
        <img src="../../assets/bottom01.png" width="100%">
      </div>
    </div>
    <div class="appbtn cur hover" @click="loadMore()" v-if="current_page<last_page">查看更多</div>
    <div class="appbtn cur hover"  v-else="current_page=last_page">没有更多数据</div>
  </div>
</template>

<script>
export default {
  name: "waitOrder",
  data() {
    return {
      absbackimg: "",
      abstitle: "",
      absprice: "",
      absstate: "",
      absinfo: "",
      absimg: "",
      listData: "",
      pages: 1,
      current_page: "",
      last_page: "",
      //swiper start
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, //用户操作后是否禁止自动循环
          delay: 5000 //自自动循环时间
        }, //可选选项，自动滑动
        speed: 2000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
        loop: false, //循环切换
        grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        // setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
        scrollbar: ".swiper-scrollbar",
        mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
        observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
          //type : 'progressbar', //分页器形状
          clickable: true //点击分页器的指示点分页器会控制Swiper切换
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
      //swiper end
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getOrder: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/order/list",
        data: {
          ship_status:0
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.listData = res.data.result;
             this.current_page = res.data.result.current_page;
            this.last_page = res.data.result.last_page;
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadMore: function() {
      this.pages += 1;
      this.$axios({
        method: "post",
        url: this.HOSTS + "/order/list",
        data: {
          page: this.pages,
          ship_status:0
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.current_page = res.data.result.current_page;
            this.last_page = res.data.result.last_page;
            this.listData.data = this.listData.data.concat(
              res.data.result.data
            );
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
    let winBox = window.innerWidth;
    if (winBox > 500) {
      winBox = 500;
    }
    this.absbackimg = this.absbackimg + "height:" + winBox * 0.7366 + "px;";
    this.abstitle = this.abstitle + "height:" + winBox * 0.144 + "px;";
    this.absprice = this.absprice + "height:" + winBox * 0.055 + "px;";
    this.absstate = this.absstate + "height:" + winBox * 0.055 + "px;";
    this.absimg = this.absimg + "height:" + winBox * 0.256 + "px;";
    this.absinfo = this.absinfo + "height:" + winBox * 0.08 + "px;";

    this.abstitle =
      this.abstitle +
      "line-height:" +
      ((winBox * 0.144) / 3).toFixed(0) +
      "px;";
    this.absprice =
      this.absprice + "line-height:" + (winBox * 0.055).toFixed(0) + "px;";
    this.absstate =
      this.absstate + "line-height:" + (winBox * 0.055).toFixed(0) + "px;";
    this.absinfo =
      this.absinfo + "line-height:" + (winBox * 0.08).toFixed(0) + "px;";

    // 		this.abstitle	=	this.abstitle	+ 'font-size:' + (winBox * 0.144/3*0.4).toFixed(0) + 'px;'
    // 		this.absprice	=	this.absprice	+ 'font-size:' + (winBox * 0.055*0.4).toFixed(0) + 'px;'
    // 		this.absstate	=	this.absstate	+ 'font-size:' + (winBox * 0.055*0.4).toFixed(0) + 'px;'
    // 		this.absinfo	=	this.absinfo	+ 'font-size:' + (winBox * 0.08*0.4).toFixed(0) + 'px;'
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.orderbox {
  width: 100%;
  position: relative;
  background-image: url(../../assets/order/back01.png);
  background-size: 100%;
  background-repeat: no-repeat;
  color: #15f5ff;
  text-align: center;
}
.abstitle {
  position: absolute;
  top: 2.17%;
  left: 25%;
  /* border: 1px solid #0889B3; */
  width: 49%;
  /* height:54px; */
}
.absprice {
  position: absolute;
  bottom: 25%;
  left: 15%;
  /* border: 1px solid #0889B3; */
  width: 25%;
  /* height: 22px; */
}
.absstate {
  position: absolute;
  bottom: 25%;
  left: 61%;
  /* border: 1px solid #0889B3; */
  width: 25%;
  /* height: 22px; */
}
.absimg {
  position: absolute;
  top: 29.69%;
  left: 24%;
  border: 1px solid #0889b3;
  border-radius: 10px;
  width: 53%;
  /* height:96px; */
}
.absinfo {
  position: absolute;
  top: 85.08%;
  left: 29%;
  /* border: 1px solid #0889B3; */
  width: 41%;
  /* height:30px; */
}
</style>
