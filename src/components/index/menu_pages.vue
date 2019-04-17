<template>
	<div class="menu_size">
		<ul>
			<div v-for="(item,index) in index_menu">
				<li  @click="open_index(index)" class="cur" >
					<Icon  :type="item.type" size="30" class="noact"  :class="{ blue:index==current}" />
					<br/>
					<span class="noact" :class="{ blue:index==current}" >{{item.name}}</span>
					
				</li>
			</div>
		</ul>
        <div class="animation maxwin">
            <div class="center"></div>
            <div class="line"></div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'tmenu',
  data () {
    return {
			current:this.gCmd.Pages,
			index_menu:[
				{type:'ios-home',name:'未来科技',path:'/Home'},
				{type:'ios-apps',name:'全部分类',path:'/itemize'},
				{type:'md-cart',name:'积分商城',path:'/jfshop'},
				{type:'ios-contact',name:'个人中心',path:'/member'},
            ],
            animation:{number:2},
			wav:null,LgInfo:'',
    }
  },
  computed: {
	//计算属性
	},
	methods: {
	//子函数
		open_index:function(index){
			this.gCmd.Pages = index;
			this.current	= index;
			this.$router.push({path:this.index_menu[index].path})
			
		//	this.$router.push({ name: 'header', query: { names: this.index_menu[this.current].name }});
			//console.log(this.index_menu[index].name);
		},
		
	},
	watch: {
	//监听
	},
	mounted: function () {
	//渲染之前调用
		//this.$router.push({path:this.index_menu[0].path})
	},
}
</script>

<style scoped>
        .menu_size{
            width:100%;
            height:100%;
        }
		.menu_size ul{
			display: flex;
			width:100%;
			height:100%;
			justify-content: space-around;
			align-items: center;
			margin-top:3px;
		}
		.menu_size ul li{
            min-width:80px;
            max-width: 100%;
			list-style:none;
			text-align: center;
		}
		.noact{
			color:rgba(88,200,238,0.3);
		}
		.blue{
			color:rgba(88,200,238,1);
			text-shadow:0px 0px 10px #15f5ff;
		}
        .animation{
            position:fixed;
            bottom: 0;
            height:60px;
            width:100%;
            z-index: -999;
            background: #00060e;
            border: 1px solid #00060e;
            background-image:url(../../assets/navbarbackground.png);
			background-size: auto;
			background-size:100% 100%;
			background-repeat:no-repeat;
        }    
        
</style>
