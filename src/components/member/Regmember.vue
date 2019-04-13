<template>
  <div>
    <div class="loginbox">
      <div class="title">
        <span style="margin-left:10px">注册账号</span>
        <span v-on:click="CloseWin()" class="r" style="margin-left:10px;margin-right:10px">X</span>
      </div>
      <ul class="ulcen">
        <li class="libor">
          <span class="litxt">手机号码：</span>
          <input class="liinput" v-model="mobile">
        </li>
        <li class="libor">
          <span class="litxt">验证码：</span>
          <input class="liinput" style="width:50%;" v-model="smscode">
          <button
            style="border:none;border-left:1px solid #0889B3;width:24%;float: right;"
            class="btn"
            v-on:click="countDown"
          >{{content}}</button>
        </li>
        <li class="libor">
          <span class="litxt">输入密码：</span>
          <input class="liinput" v-model="password">
        </li>
        <li class="libor">
          <span class="litxt">确认密码：</span>
          <input class="liinput" v-model="renPsd">
        </li>
        <li class="libor">
          <span class="litxt">邀请码：</span>
          <input class="liinput" v-model="InvCode">
        </li>
        <li class="libor" style="border:none;text-align:center;margin-top:20px;margin-bottom:15px;">
          <button class="btn" v-on:click="Regber()">立即注册</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regmember",
  data() {
    return {
      mobile: "",
      password: "",
      renPsd: "",
      smscode: "",
      InvCode: "",
      lginfo: "",
      content: "发送短信",
      totalTime: 59,
      canClick: true //添加canClick
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    CloseWin: function() {
      this.$router.push({ path: "/member/login" });
    },
    countDown: function() {
      if (!this.canClick) return; //改动的是这两行代码
      this.getSMS();
      this.canClick = false;
      this.content = this.totalTime + "s重发";
      let clock = window.setInterval(() => {
        this.totalTime--;
        this.content = this.totalTime + "s重发";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.content = "发送短信";
          this.totalTime = 59;
          this.canClick = true; //这里重新开启
        }
      }, 1000);
    },
    getSMS: function() {
      if ((this.canClick = true)) {
        let mobile = this.mobile;
        this.$axios({
          method: "post",
          url: this.HOSTS + "/member/sendSmscode",
          data: {
            mobile: mobile,
            sms_type: 1
          }
        })
          .then(res => {
            if (res.data.code == "2416050177") {
              //手机号码格式不正确
              alert(res.data.message);
            }
            if (res.data.code == "2416115712") {
              //验证码不正确
              alert(res.data.message);
            }
            if (res.data.code == 0) {
              //成功
              alert(res.data.message);
            }
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    Regber: function() {
      let mob = this.mobile;
      let psd = this.$md5(this.password);
      let ren = this.$md5(this.renPsd);
      let code = this.smscode;
      if (mob == "") {
        alert("请输入正确手机号");
        return false;
      }
      if (this.password == "" || this.renPsd == "") {
        alert("请输入密码");
        return false;
      }
      if (psd != ren) {
        alert("密码输入不一致");
        return false;
      }
      this.$axios({
        method: "post",
        url: this.HOSTS + "/member/signup",
        data: {
          mobile: mob,
          password: psd,
          smscode: code,
          invite_code: this.InvCode
        }
      })
        .then(res => {
          if (res.data.code == "2416050178") {
            alert(res.data.message);
          }
          if (res.data.code == 0) {
            alert(res.data.message);
            this.Loging();
          }
          console.log(psd);
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
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

<style scoped>
.title {
  width: 100%;
  height: 25px;
  line-height: 25px;
  background: rgba(12, 67, 91, 0.8);
}
.loginbox {
  height: auto;
  width: 300px;
  border: 1px solid #0889b3;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
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
</style>
