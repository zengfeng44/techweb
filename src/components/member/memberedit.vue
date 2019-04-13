<template>
  <div class="maxwin">

      <div class="globabox">
        <div class="minbox3">个人信息</div>
        <div class="globamain">
          <div class="glb-l gta">
            <div class="glb-l-min"></div>
            <div class="glb-l-min" style="border-bottom:none;"></div>
          </div>
          <div class="glb-r">
            <div class="globamin">手机号码：{{myData.mobile}}</div>
            <div class="globamin">会员昵称：{{myData.nickname}}</div>
            <div class="globamin">邀请码：{{myData.invite_code}}</div>
            <div class="globamin">本次IP：{{myData.login_ip}}</div>
            <div class="globamin">上一次IP：{{myData.last_ip}}</div>
            <div class="globamin">登录时间：{{myData.last_time}}</div>
            <div class="globamin" style="border-bottom:none;">注册时间：{{myData.create_time}}</div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'memberedit',
  data () {
    return {
        myData:''
    }
  },
  computed: {
	//计算属性
	},
	methods: {
	//子函数
	},
	watch: {
	//监听
	},
	mounted: function () {
	//渲染之前调用
	},
}
</script>

<style scoped>
    .globabox {
  width: 95%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #0889b3;
  background: rgba(12, 67, 91, 0.3);
  border-radius: 5px;
  color: #15f5ff;
}
.globamain {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background: rgba(12, 67, 91, 0.3);
  text-indent: 2em;
}
.glb-l {
  flex: 1.5;
  display: flex;
  flex-direction: column;
}
.glb-l-min {
  flex: 1;
  width: 100%;
  border-bottom: 1px solid #0889b3;
}
.glb-r {
  flex: 3.5;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.globamin {
  flex: 1;
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #0889b3;
  border-left: 1px solid #0889b3;
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
</style>