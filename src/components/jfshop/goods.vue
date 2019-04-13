<template>
  <div>
		<!----------------banner分界线----------------- ..-->
			<div class="banner">
				<div class="nfl-img">
					<swiper :options="swiperOption">
					<swiper-slide class="swiper-container" style='background:none;text-align: center;'><img src="../../assets/banner/banner01.png" width="100%"/></swiper-slide>
					<swiper-slide class="swiper-container" style='background:none;text-align: center'><img src="../../assets/banner/banner01.png" width="100%"/></swiper-slide>
					<swiper-slide class="swiper-container" style='background:none;text-align: center'><img src="../../assets/banner/banner01.png" width="100%"/></swiper-slide>
					<swiper-slide class="swiper-container" style='background:none;text-align: center'><img src="../../assets/banner/banner01.png" width="100%"/></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
					<!--<div class="swiper-button-prev" slot="button-prev"></div>-->
					<!--<div class="swiper-button-next" slot="button-next"></div>-->
					</swiper>
				</div>
			</div>
			<!----------------banner分界线----------------- ..-->
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
			goldsitem:[
					{name:"繁龙酒庄酒（木盒）",url:"www.baidu.com",oldprice:'698.00',newprice:'498.00',addjf:498,info:'新品',sell:99999},
					{name:"繁龙酒庄酒（竹盒）",url:"www.baidu.com",oldprice:'698.00',newprice:'498.00',addjf:498,info:'新品',sell:99999},
					{name:"小金刚鸿运",url:"www.baidu.com",oldprice:'698.00',newprice:'498.00',addjf:498,info:'新品',sell:99999},
					{name:"小金刚黑金",url:"www.baidu.com",oldprice:'698.00',newprice:'498.00',addjf:498,info:'新品',sell:99999},
					{name:"小金刚黑金",url:"www.baidu.com",oldprice:'698.00',newprice:'498.00',addjf:498,info:'新品',sell:99999},
					{name:"小金刚黑金",url:"www.baidu.com",oldprice:'698.00',newprice:'498.00',addjf:498,info:'新品',sell:99999},
					{name:"小金刚黑金",url:"www.baidu.com",oldprice:'698.00',newprice:'498.00',addjf:498,info:'新品',sell:99999},
					{name:"小金刚黑金",url:"www.baidu.com",oldprice:'698.00',newprice:'498.00',addjf:498,info:'新品',sell:99999},
				],
				//swiper start
				swiperOption: {
					autoplay : {
						disableOnInteraction: false, //用户操作后是否禁止自动循环
						delay: 3000 //自自动循环时间
					}, //可选选项，自动滑动
					speed: 2000, //切换速度，即slider自动滑动开始到结束的时间（单位ms）
					loop:true, //循环切换
					grabCursor: true, //设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
						// setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
					autoHeight: true,   //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。   
					scrollbar: '.swiper-scrollbar',
					mousewheelControl: true, //设置为true时，能使用鼠标滚轮控制slide滑动
					observeParents: true, //当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper
					pagination: {
						 el: '.swiper-pagination',
						 // type : 'progressbar', //分页器形状
						 clickable :true, //点击分页器的指示点分页器会控制Swiper切换
					},
					navigation: {
						 nextEl: '.swiper-button-next',
						 prevEl: '.swiper-button-prev',
					},
				},
				//swiper end
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
	.swiper-container {
		  width: 100%;
		  height: auto;
		}
	.golds{
		display: flex;
		flex-direction:row;
		justify-content:space-around;
		flex-wrap:wrap;
		
	}
	.golds-box{
		flex:0 1 100%;
		display: flex;
		max-width:800px;
		min-width:310px;
		margin-top:5px;
		padding-top:5px;
		padding-bottom:5px;
	}
	.golds-box .img-box{
		flex: 1.5;
		text-align: center;
	}
	.img-box img{
		margin:5px;
		height:130px;
		width:130px;
	}
	.golds-box .conten-box{
		flex: 2;
		display: flex;
		flex-direction: column;

	}
	.conten-box .item{
		flex: 5;
		line-height:24px;
	}
	.conten-box .item .info{
		margin-right:10px;
		float:right;
	}
	.item span{
		color:#C0C0C0;
	}
	
</style>
