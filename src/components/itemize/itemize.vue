<template>
  <div class="maxwin">
    <div class="item-box">
		<div><img src="../../assets/itemize-top.png" width="100%"></div>
      <div class="list-box" v-for="(item,index) in listData">
        <div class="list-goods">{{item.category_name}}</div>
        <div v-if="(index+1)%2 ==1">
          <img class="l" src="../../assets/itemize-01.png" height="12px" width="80%"/>
          <span class="txt">{{item.category_name}}</span>
        </div>
        <div v-else="(index+1)%2==0">
          <img class="r" src="../../assets/itemize-02.png" height="12px" width="80%"/>
          <span class="r txt">{{item.category_name}}</span>
        </div>
      </div>
      <div>
        <img class="r" src="../../assets/itemize-04.png" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemize",
  data() {
    return {
      listData: ""
    };
  },
  computed: {
    //计算属性
  },
  methods: {
    //子函数
    getList: function() {
      this.$axios({
        method: "post",
        url: this.HOSTS + "/category/products",
        data: {}
      })
        .then(res => {
          if (res.data.code == 0) {
            this.listData = res.data.result;
            console.log(this.listData);
          }
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
    this.getList();
  }
};
</script>

<style scoped>
.item-box {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.list-box {
  flex: 1;
  /* border: 1px solid #15F5FF; */
  flex-grow: 1;
}
.list-goods {
  height: 125px;
  width: 100%;
  border: 1px solid #15F5FF; 
}
</style>
