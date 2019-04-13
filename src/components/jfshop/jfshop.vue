<template>
  <div class=maxwin>
		<div class="box">
				<div class="box-left l" style="width:20%;"><img  src="../../assets/jfshop-left01.png" width="100%"/></div>
				<div class="box-right r" style="width:80%">
					<div class="box-top">
						<div style="width:70%;">
							<img class="l" src="../../assets/jfshop-top01.png" height="90px"/>
							<div class="l" style="height: 40px;line-height: 40px;margin-left:10px;border-bottom:0.5px solid #15F5FF;">
								<span class="txt">现金币：999999999</span>
							</div>
							<div class="l" style="height: 40px;line-height: 40px;margin-left:10px;border-bottom:0.5px solid #15F5FF;">
								<span class="txt">积分：99999999</span>
							</div>
						</div>
					</div>
				</div>
				<div class="box-right r" style="width:80%">
					<div class="box-main">
						<img src="../../assets/jfshop-01.png" width="100%"/>
						<div class="goods">
							<goodsdiv></goodsdiv>
						</div>
					</div>
				</div>
		</div>
  </div>
</template>

<script>
	import goodsdiv from '../jfshop/goods.vue'
export default {
  name: 'jfshop',
  data () {
    return {
			winW:'70%',
    }
  },
	components:{
		goodsdiv:goodsdiv,
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
	.jftxt{
		height: 100%;
		margin-left: 10px;
		display: flex;
		flex-direction:column;
	}
	.jftxt span{
		flex: 0 1 100%;
		width:100%;
	}
	.box-main{
		position: relative;
	}
	.box-main img{
		position: relative;
		top: 0;
		z-index: 1;
	}
	.box-main .goods{
		position: absolute;
		top:0;
		z-index: 999;
		/* border: 1px solid #15F5FF; */
		height:90%;
		width: 90%;
		margin-top:5%;
		margin-left:5%;
	}
</style>
