<template>
  <div class="maxwin" v-if="LgInfo==1">
    <div class="box-top">
      <div class="l" style="width: 100%;">
        <div class="bk l" style="width: 5%;">&nbsp;</div>
        <div class="img02 l ani-2" :style="imghead" v-on:click="getOut()">
          <!--<img style="border-radius: 50%;text-align: center;margin-top:22%" src="" width="52.5%" />-->
          <div class="ani">退出</div>
        </div>
        <div class="bk" style="width:5%;">&nbsp;</div>
        <div class="bk" style="width:53%;margin-top:10px">
          <div style="width:45%;float: left;">
            <div class="img02-02 img02-03" :style="scimg">
              <div class="brt" :style="collect">{{myData.notice_num}}</div>
            </div>
            <div style="margin-top:8px">
              <img src="../../assets/member/mber-t05.png" width="100%">
            </div>
          </div>
          <div style="width:45%;float: right;">
            <div class="img02-02 img02-04" :style="scimg">
              <div class="brt" :style="collect">{{myData.collect_num}}</div>
            </div>
            <div style="margin-top:8px;">
              <img src="../../assets/member/mber-t06.png" width="100%">
            </div>
          </div>
        </div>
        <div class="box-l-img" style="width:13.5%;float: right;">
          <div style="margin-top:15px">
            <img style="margin-left:-10px" src="../../assets/member/mber-t07.png" width="80%">
          </div>
        </div>
      </div>
      <div class="box-main" style="margin-top:10px">
        <div class="bk l" style="width: 5%;">&nbsp;</div>
        <div class="bk l" style="width: 30%;">
          <img src="../../assets/member/mber-t08.png" width="100%">
        </div>
        <div class="bk l" style="width:51%;">
          <div class="bk l" style="width:20%;text-align: center;">
            <img src="../../assets/member/mber-t10.png" width="100%">

            <img src="../../assets/jfshop-top01.png" width="50%">
          </div>
          <div class="bk l" style="width:10%;">&nbsp;</div>
          <div class="bk l" style="width:60%;margin-top:15px;">
            <img src="../../assets/jfshop-top02.png" width="100%">
          </div>
          <div class="box-vip">
            <div>
              <div class="bk l brt" style="width:100%;text-align: right;">{{lv}}&nbsp;&nbsp;VIP</div>
              <div class="bk l brt" style="width:100%;border-bottom:1px solid #15F5FF;"></div>
            </div>
            <div>
              <div
                class="bk l brt"
                style="width:100%;margin-top:10px;text-align: right;"
              >&nbsp;&nbsp;IP</div>
              <div class="bk l brt" style="width:100%;border-bottom:1px solid #15F5FF;"></div>
            </div>
          </div>
        </div>
        <div class="bk l" style="width: 65%;">
          <img class="l" src="../../assets/member/mber-t11.png" width="100%">
        </div>
      </div>
    </div>
    <!--菜单START-->
    <div>
      <img src="../../assets/bottom03.png" width="100%">
    </div>
    <div class="menubox">
      <ul>
          <router-link to="/mywallet" tag="li" :style="menutxt">
          <span>钱包</span>
         </router-link>
          <router-link to="/member/info" tag="li" :style="menutxt">
          <span>个人信息</span>
         </router-link>
        <router-link to="/goods/cart" tag="li" :style="menutxt">
          <span>购物车</span>
        </router-link>
        <router-link to="/address/index" tag="li" :style="menutxt">
          <span>地址管理</span>
        </router-link>
      </ul>
    </div>
    <div>
      <img src="../../assets/bottom03.png" width="100%">
    </div>
    <!--菜单END-->

    <div class="l" style="width:100%;float: left;">
      <div class="l" style="width:100%;">
        <div class="Rndmenubox">
          <ul style="float: left;">
            <router-link to="/order/index" tag="li" class="minbox1">
              <div class="minbox3">全部订单</div>
              <div class="minbox3-1">{{myData.total_order}}</div>
            </router-link>
            <router-link to="/waitPay" tag="li" class="minbox1">
              <div class="minbox3">待付款</div>
              <div class="minbox3-1">{{myData.unpaid_order}}</div>
            </router-link>
            <router-link to="/Receiving" tag="li" class="minbox1">
              <div class="minbox3">待收货</div>
              <div class="minbox3-1">{{myData.received_order}}</div>
            </router-link>
          </ul>
          <ul style="float: left;">
            <router-link to="/mywallet" tag="li" class="minbox2">
              <div class="minbox3">我的钱包</div>
              <div class="minbox3-1">商城积分：{{Number(myData.cash_money)+5800}}</div>
              <div class="minbox3-1">科技积分：{{Number(myData.cash_money)+1250}}</div>
            </router-link>
            <router-link to="/myteam" tag="li" class="minbox2">
              <div class="minbox3">我的团队</div>
              <div class="minbox3-1">总人数：{{myData.team_num}}</div>
              <div class="minbox3-1">
                总业绩：{{myData.team_num*3800}}
              </div>
            </router-link>
          </ul>

          <!--
          <ul style="float: left;">
            <router-link to="/myteam" tag="li" class="minbox4">
              <div class="minbox3">个人信息</div>
              <div class="minbox4-1">
                <div class="minbox4-1-l"></div>
                <div class="minbox4-1-r">
                  <div class="minbox4-1-r1">&nbsp;手机号码:{{myData.mobile}}</div>
                  <div class="minbox4-1-r1">&nbsp;真实姓名:{{myData.name}}</div>
                  <div class="minbox4-1-r1">&nbsp;登录时间:{{myData.last_time}}</div>
                  <div class="minbox4-1-r1">&nbsp;上一次IP:{{myData.last_ip}}</div>
                  <div class="minbox4-1-r1" style="border:none;">&nbsp;邀请码:{{myData.invite_code}}</div>
                </div>
              </div>
            </router-link>
          </ul>
          -->
        </div>
      </div>
    </div>

    

    <div>
      <img src="../../assets/bottom01.png" width="100%">
    </div>
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
      imgW: 0,
      imgH: 0,
      imghead: "",
      scimg: "",
      collect: "",
      myData: "",
      LgInfo: "",
      menutxt: "",
      lv: ""
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
        url: this.HOSTS + "/member/index"
      })
        .then(res => {
          if (res.data.code == "2416050176") {
            this.LgInfo = 0;
            console.log(res);
            this.$router.push({ path: "/member/login" });
          }
          if (res.data.code == 0) {
            this.LgInfo = 1;
            this.myData = res.data.result;
            this.gCmd.vipData = this.myData;
            this.lv = res.data.result.member_level.level_name;
            console.log(res);
            console.log(this.lv);
          }
        })
        .catch(error => {
          console.log(error);
          this.$router.push({ path: "/member" });
        });
    },
    getOut: function() {
      if (confirm("是否退出登录？")) {
        this.$axios({
          method: "post",
          url: this.HOSTS + "/member/logout"
        })
          .then(res => {
            console.log(res.data.message);
            this.$router.push({ path: "/member/login" });
          })
          .catch(error => {
            console.log(error);
          });
      } else {
      }
    }
  },
  watch: {
    //监听
  },
  mounted: function() {
    //渲染之前调用
    this.getWallet();
    let maxWin  = window.innerWidth;
    if (maxWin >500){
      maxWin =500
    }
    let w = maxWin * 0.235;
    let h = maxWin * 0.235;
    let collW = maxWin * 0.155;
    let txtH = collW * 0.4;
    let liH = (maxWin * 0.115).toFixed(0);
    this.imghead = this.imghead + "height:" + Number(h) + "px;";
    this.imghead = this.imghead + "width:" + Number(w) + "px;";
    this.imghead = this.imghead + "line-height:" + h.toFixed(0) + "px;";
    this.scimg = this.scimg + "width:" + collW + "px;";
    this.scimg = this.scimg + "height:" + collW + "px;";

    this.collect = this.collect + "height:" + txtH.toFixed(0) + "px;";
    this.collect =
      this.collect +
      "margin-top:" +
      (collW * 0.5 - txtH * 0.5).toFixed(0) +
      "px;";
    this.collect = this.collect + "line-height:" + txtH.toFixed(0) + "px;";
    this.collect =
      this.collect + "font-size:" + (txtH * 0.8).toFixed(0) + "px;";

    this.menutxt = this.menutxt + "height:" + liH + "px;";
    this.menutxt = this.menutxt + "line-height:" + liH + "px;";
  }
};
</script>

<style scoped>
.box-top {
  width: 100%;
  height: auto;
  margin-top: 10px;
  position: relative;
}
.box-l-img {
  position: absolute;
  right: 0;
  top: 2%;
}
.box-vip {
  position: relative;
  width: 70%;
  height: auto;
  float: left;
}
.bk {
  /* border: 1px solid #15F5FF; */
  float: left;
}
.img01 {
  height: auto;
  width: 100%;
  z-index: 1;
}
.img02 {
  /* border: 1px solid #15F5FF; */
  width: 23.5%;
  text-align: center;
  background-image: url(../../assets/member/mber-img01.png);
  background-size: 100%;
  background-repeat: no-repeat;
  color: rgba(244, 170, 11, 0.8);
}
.img02-02 {
  border: 1px solid rgba(255, 0, 0, 0);
  text-align: center;
}
.img02-03 {
  /* border: 1px solid #15F5FF; */
  margin-right: auto;
  margin-left: auto;
  background-image: url(../../assets/member/mber-t03.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.img02-04 {
  margin-right: auto;
  margin-left: auto;
  background-image: url(../../assets/member/mber-t04.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.brt {
  /* border: 1px solid #15F5FF; */
  color: rgba(244, 170, 11, 1);
  text-shadow: 0px 0px 10px #15f5ff;
}
.Rndmenubox {
  position: relative;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
}
.Rndmenubox ul {
  display: flex;
  flex-direction: row;
  width: 100%;
  float: left;
  margin-bottom: 10px;
  justify-content: space-around;
}
.minbox1 {
  flex: 1;
  min-height: 60px;
  min-width: 30%;
  border: 1px solid #0889b3;
  background: rgba(12, 67, 91, 0.3);
  border-radius: 5px;
  flex-grow: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.minbox2 {
  flex: 1;
  min-height: 90px;
  min-width: 38%;
  border: 1px solid #0889b3;
  background: rgba(12, 67, 91, 0.3);
  border-radius: 5px;
  flex-grow: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.minbox3 {
  flex: 1;
  min-width: 100%;
  height: 25px;
  line-height: 25px;
  background: rgba(72, 166, 191, 0.4);
  color: #fff;
  text-align: center;
 
}
.minbox3-1 {
  flex: 2;
  min-width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;
}
.minbox4 {
  flex: 1;
  height: 150px;
  min-width: 100%;
  border: 1px solid #0889b3;
  background: rgba(12, 67, 91, 0.3);
  border-radius: 5px;
  flex-grow: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.minbox4-1 {
  flex: 5;
  display: flex;
  flex-direction: row;
}
.minbox4-1-l {
  flex: 1;
  border-right: 1px solid #0889b3;
}
.minbox4-1-r {
  flex: 2;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.minbox4-1-r1 {
  flex: 1;
  height: 30px;
  border-bottom: 1px solid #0889b3;
  text-align: left;
  color: #15f5ff;
  line-height: 22px;
  font-size: 10px;
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
.menubox ul li:active {
  color: rgba(88, 200, 238, 1);
  text-shadow: 0px 0px 10px #15f5ff;
}


</style>
