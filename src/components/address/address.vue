<template>
  <div class=maxwin>
    <div class="box">
      <div class="globabox">
        <div class="globamain" v-for="item in MyData" :key="item.id">
          <div class="glb-l gta">
            <div class="globamin"></div>
            <div class="globamin">
              <input
                type="radio"
                :name="item.member_id"
                :checked="item.is_default==1"
                @change="getEdit(item.id)"
              >
            </div>
            <div class="globamin">{{single}}</div>
          </div>
          <div class="glb-r">
            <div class="globamin">{{item.consignee}} {{item.mobile}}</div>
            <div class="globamin">{{item.province+item.city+item.district}}</div>
            <div class="globamin">{{item.address}}</div>
          </div>
          <div class="glb-l gta">
            <div class="globamin"></div>
            <div class="globamin" @click="getDel(item.id)">删除</div>
            <div class="globamin"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="addbox gtback" @click="toAdd()">新增地址</div>
  </div>
</template>

<script>
export default {
  name: "MyAddress",
  data() {
    return {
      MyData: "",
      single: ""
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getAddress: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/address/index",
        data: {}
      })
        .then(res => {
          if (res.data.code == 0) {
            this.MyData = res.data.result;
            console.log(res.data.message);
          }
          console.log(res.data.result);
        })
        .catch(error => {
          console.log(error);
        });
    },
    toAdd: function() {
      this.$router.push({ path: "/address/add" });
    },
    getEdit: function(id) {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/address/edit",
        data: {
          address_id: id,
          is_default: 1
        }
      })
        .then(res => {
          if (res.data.code == 0) {
            console.log(res.data.message);
          }
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getDel: function(id) {
      if (confirm("是否要删除该地址")) {
        this.$axios({
          method: "post",
          url: this.HOSTS + "/address/del",
          data: {
            address_id: id
          }
        })
          .then(res => {
            if (res.data.code == 0) {
              this.getAddress();
              console.log(res.data.message);
            }
            console.log(res);
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
    this.getAddress();
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 100%;
  height: auto;
  color: #fff;
}
.box ul {
  border: 1px solid #fff;
  width: 100%;
  height: 150px;
  margin-bottom: 5px;
}
.box li {
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
}
.addbox {
  height: 30px;
  width: 100%;
  text-align: center;
  color: #fff;
  line-height: 30px;
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
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.globamin {
  flex: 1;
  width: 90%;
  height: 30px;
  line-height: 30px;
}
.gta {
  text-align: center;
}
.gtc {
  color: #fff;
}
.gbb {
  border-bottom: 1px solid #fff;
}
.gb {
  border: 1px solid #fff;
}
.gtback {
  background: rgba(72, 166, 191, 0.4);
}
</style>