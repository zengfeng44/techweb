<template>
  <div>
    <div class="loginbox">
      <div class="title">
        <span style="margin-left:10px">会员登录</span>
        <span v-on:click="CloseWin()" class="r cur c" style="width:25px;">X</span>
      </div>
      <ul class="ulcen">
        <li class="libor">
          <span class="litxt">手机号码:</span>
          <input class="liinput" minlength="11" maxlength="11"  v-model="mobile">
        </li>
        <li class="libor">
          <span class="litxt">登录密码:</span>
          <input class="liinput" v-model="password">
        </li>
        <li class="libor">
          <span class="litxt">验证码:</span>
          <input class="liinput" v-model="RndCode" style="width:50%;">
          <button
            style="border:none;border-left:1px solid #0889B3;width:24%;float: right;"
            class="btn cur" @click="getRND()"
          >{{RndCode}}</button>
        </li>
        <li class="libor" style="border:none;text-align:center;margin-top:20px">
          <button class="btn cur" v-on:click="Loging()">登录</button>
        </li>
      </ul>
      <ul style="margin-top:15px">
        <li class="lireg" style="red"></li>
        <li class="lireg">
          <router-link class="cur" to="/member/forgot">忘记密码</router-link>/
          <router-link class="cur" to="/member/Regmember">免费注册</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {
      mobile: "13812341234",
      password: "123123",
      check: "",
      lginfo: "",
      RndCode:''
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getRND:function(){
        let nMax	= 9999;
				let nMin	= 1000;
				let LongN	= nMax-nMin;
        let RndNum=	Number(nMin)+Math.round(Math.random()*LongN);
        this.RndCode  = RndNum;
    },
    CloseWin: function() {
      this.gCmd.Pages = 0;
      this.$router.push({ path: "/home" });
    },
    RemPswd: function() {
      if (this.check == "√") {
        this.check = "";
      } else {
        this.check = "√";
      }
    },
    Loging: function() {
      let mob = this.mobile;
      let psd = this.$md5(this.password);
      this.$axios({
        method: "post",
        url: this.HOSTS + "/member/signin",
        data: {
          mobile: mob,
          password: psd
        }
      })
        .then(res => {
          if (res.data.code == "2416050179") {
            alert(res.data.message);
          }
          if(res.data.code=="2416050185"){
            alert(res.data.message);
          }
          if(res.data.code=="2416115712"){
            alert(res.data.message);
          }
          if (res.data.code == 0) {
            //alert(res.data.message)
            this.gCmd.Pages = 3;
            this.$router.push({ path: "/member" });
          }
          console.log(psd);
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
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
    }
  },
  watch: {
    //监听
  },
  mounted: function() {
    //渲染之前调用
    this.getRND()
  },
  created() {}
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 25px;
  line-height: 25px;
  background: rgba(12, 67, 91, 0.8);
}
.loginbox {
  height: 235px;
  width: 300px;
  border: 1px solid #0889b3;
  margin-left: auto;
  margin-right: auto;
  color: #15f5ff;
  background: rgba(12, 67, 91, 0.3);
}
.ulcen {
}
.libor {
  border: 1px solid #0889b3;
  height: 30px;
  line-height: 30px;
  width: 80%;
  margin: auto;
  margin-top: 10px;
}
.litxt {
  margin-left: 5px;
}
.liinput {
  height: 100%;
  width: 70%;
  border: 1px solid #0889b3;
  /* font-size: 16px; */
  color: #15f5ff;
  outline-width: 0px;
  border: 1px solid rgba(30, 130, 166, 0);
  background: none;
  -webkit-appearance: none;
  -webkit-user-select: text;
  outline-color: transparent;
}
.btn {
  color: #15f5ff;
  width: 50%;
  height: 100%;
  border: 1px solid rgba(30, 130, 166, 0.5);
  background: rgba(72, 166, 191, 0.4);
  /* background: none; */
  -webkit-appearance: none;
  -webkit-user-select: text;
  outline-color: transparent;
}
.btn:hover {
  border: 1px solid rgba(30, 130, 166, 1);
  background: rgba(72, 166, 191, 1);
  color: #15f5ff;
}
.lireg {
  float: left;
  width: 50%;
  height: 22px;
  text-align: center;
}
.check {
  color: #15f5ff;
  height: 12px;
  width: 12px;
  border: 1px solid #0889b3;
  line-height: 10px;
  font-size: 8px;
  background: none;
  -webkit-appearance: none;
  -webkit-user-select: text;
  outline-color: transparent;
}
</style>
