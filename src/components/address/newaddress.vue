<template>
  <div class="maxwin">
    <div class="box">
      <div class="globabox">
        <div class="globamain">
          <div class="glb-l gta"></div>
          <div class="glb-r">
            <div class="globamin">
              收货人
              <input class="glb-input" tyle="input" v-model="consignee">
            </div>
            <div class="globamin">
              手机号码
              <input class="glb-input" tyle="input" v-model="mobile">
            </div>
            <div class="globamin">
              邮政编码
              <input class="glb-input" tyle="input" v-model="zipcode">
            </div>
            <div class="globamin">
              选择省份
              <select name=""  v-model="province" @change="getCity">
                <option :value="item.id" v-for="item in proData">{{item.name}}</option>
              </select>
              ID:{{test}}
            </div>
            <div class="globamin">
              选择城市
              <select name="" v-model="city" @change="getdrt">
                <option :value="item.id" v-for="item in cityData">{{item.name}}</option>
              </select>
            </div>
            <div class="globamin">
              选择地区
              <select name="" v-model="district">
                <option :value="item.id" v-for="item in drtData">{{item.name}}</option>
              </select>
            </div>
            <div class="globamin">
              详细地址
              <input class="glb-input" tyle="input" v-model="address">
            </div>
          </div>
          <div class="glb-l"></div>
        </div>
      </div>
    </div>
    <div class="addbox gtback" @click="addAddress()">保存地址</div>
  </div>
</template>

<script>
export default {
  name: "newaddress",
  data() {
    return {
      consignee: "",
      province: "",
      city: "",
      district: "",
      address: "",
      zipcode: "",
      mobile: "",
      is_default: "",
      proData: "",
      cityData: "",
      drtData:'',
      test:"",
    }
  },
  methods: {
    //子函数
    toWin: function() {
      this.$router.push({ path: "/address/index" });
    },
    addAddress: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/address/add",
        data: {
          consignee: this.consignee,
          mobile: this.mobile,
          zipcode: this.zipcode,
          province: this.province,
          city: this.city,
          district: this.district,
          address: this.address,
          is_default:1
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            alert(res.data.message);
            this.toWin();
            console.log(res.data.message);
          }
          if (res.data.code == "2416050183" || res.data.code == "2415984640" || res.data.code=='2416050184') {
            alert(res.data.message);
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getParent: function() {
      this.cityData=''
      this.drtData =''
      this.$axios({
        method: "post",
        url: this.HOSTS + "/region/list",
        data: {}
      })
        .then(res => {
          if (res.data.code == 0) {
            this.proData = res.data.result;
            console.log(res.data.message);
          }
          console.log(this.proData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getCity: function() {
      this.drtData =''
      this.$axios({
        method: "post",
        url: this.HOSTS + "/region/list",
        data: {
          parent_id :this.province
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.cityData = res.data.result;
            console.log(res.data.message);
          }
          console.log(this.cityData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getdrt:function(){

      this.$axios({
        method: "post",
        url: this.HOSTS + "/region/list",
        data: {
          parent_id :this.city
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            this.drtData = res.data.result;
            console.log(res.data.message);
          }
          console.log(this.drtData);
        })
        .catch(error => {
          console.log(error);
        });
    }

  },
  mounted: function() {
    this.getParent();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  height: auto;
  color: #fff;
}
.globabox {
  margin-bottom: 10px;
  width: 100%;
}
.globamain {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(12, 67, 91, 0.3);
}
.glb-l {
  flex: 1;
  align-items: stretch;
}
.glb-r {
  flex: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.globamin {
  flex: 1;
  width: 90%;
  height: 40px;
  line-height: 40px;
}
.glb-input {
  height: 30px;
  width: 70%;
  line-height: 30px;
  /* font-size: 16px; */
  color: #15f5ff;
  outline-width: 0px;
  border: 1px solid rgba(30, 130, 166, 1);
  background: none;
  -webkit-appearance: none;
  -webkit-user-select: text;
  outline-color: transparent;
}
.addbox {
  height: 30px;
  width: 100%;
  text-align: center;
  color: #fff;
  line-height: 30px;
}
.gtback {
  background: rgba(72, 166, 191, 0.4);
}
</style>