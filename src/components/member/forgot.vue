<template>
    <div>	
		
		<div class="loginbox">
			<div class="title">
				<span style="margin-left:10px">忘记密码</span>
				<span v-on:click="CloseWin()"  class="r" style="margin-left:10px;margin-right:10px">X</span>
			</div>
			<ul class="ulcen">
				<li class="libor">
					<span class="litxt">手机号码:</span>
					<input class="liinput" v-model="mobile"></input>
				</li>
				<li class="libor">
					<span class="litxt">新的密码:</span>
					<input class="liinput" v-model="password"></input>
				</li>
				<li class="libor">
					<span class="litxt">确认密码:</span>
					<input class="liinput" v-model="renPsd"></input>
				</li>
				<li class="libor" >
					<span class="litxt">验证码:</span>
					<input class="liinput" style="width:50%;" v-model="smscode"></input>
					<button style="border:none;border-left:1px solid #0889B3;width:24%;float: right;"  class="btn" v-on:click="countDown">{{content}}</button>
				</li>
				<li class="libor" style="border:none;text-align:center;margin-top:20px"><button class="btn" v-on:click="FoterPsd">确定修改</button></li>
			</ul>
			<ul style="margin-top:15px">
				<li class="lireg" style="red" >
								
				</li>
				<li class="lireg">
                    <router-link to="/member/login">登录</router-link>
                    /
                    <router-link to="/member/Regmember">免费注册</router-link>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
export default {
  name: 'forgot',
  data () {
    return {
				mobile:'',
				password:'',
				renPsd:'',
				smscode:'',
				lginfo:'',
				content: '发送短信',
				totalTime: 59,
				canClick: true, //添加canClick
    }
  },
  computed: {
	//计算属性
	},
	methods: {
	//子函数
		CloseWin:function(){
			this.$router.push({path:'/member/login'})
		},
		countDown:function(){
			if (!this.canClick) return  //改动的是这两行代码
			this.getSMS()
			this.canClick = false
			this.content = this.totalTime + 's重发'
			let clock = window.setInterval(() => {
			this.totalTime--
			this.content = this.totalTime + 's重发'
			if (this.totalTime < 0) {
			window.clearInterval(clock)
			this.content = '发送短信'
			this.totalTime = 59
			this.canClick = true  //这里重新开启
			}
			},1000)
		},
		getSMS:function(){
			if(this.canClick=true){
				let mobile = this.mobile
				this.$axios({
					method:'post',
					url:this.HOSTS + '/member/sendSmscode',
					data: {
						mobile:mobile,
						sms_type:2,
					},
				})
				.then(res =>{
						if (res.data.code =="2416050177"){
							//手机号码格式不正确
							alert(res.data.message);
						}
						if(res.data.code == '2416115712'){
							//验证码不正确
							alert(res.data.message);
						}
						if(res.data.code == 0){
							//成功
							alert(res.data.message)
						}
						console.log(res);	
				})
				.catch(error=>{
				console.log(error);
				})
				}
		},
		FoterPsd:function(){
			let mob	=	this.mobile;
			let psd	=	this.$md5(this.password);
			let ren =	this.$md5(this.renPsd);
			let code=	this.smscode;
			if(mob == ''){
				alert('请输入正确手机号')
				return false
			}
			if(this.password=='' ||this.renPsd ==''){
				alert('请输入密码')
				return false
			}
			if(psd != ren){
				alert('密码输入不一致')
				return false
			}
			this.$axios({
				method:'post',
				url:this.HOSTS + '/member/forgetPasswd',
				data: {
					mobile:mob,
					password:psd,
					smscode:code,
				}
			})
			 .then(res =>{
 					if (res.data.code =="2416050178"){
						 alert(res.data.message);
					 }
					if(res.data.code == '2416115712'){
						alert(res.data.message);
					}
					if(res.data.code == 0){
						alert(res.data.message)
						this.$router.push({path:'/login'})
					}
					console.log(res);	
			 })
			.catch(error=>{
			  console.log(error);
			})
		},
	},
	watch: {
	//监听
	},
	mounted: function () {
	//渲染之前调用
	},
	created(){
			
	},
}
</script>

<style scoped>
	.title{
		width:100%;
		height:25px;
		line-height: 25px;
		background: rgba(12,67,91,0.8);
	}
	.loginbox{
		height:275px;
		width: 300px;
		border: 1px solid #0889B3;
		margin-left: auto;
		margin-right: auto;
		color: #15F5FF;
		background: rgba(12,67,91,0.3);
	}
	.ulcen{
	}
	.libor{
		border: 1px solid #0889B3;
		height: 30px;line-height: 30px;width: 80%;
		margin:auto;
		margin-top:10px;
	}
	.litxt{
		margin-left: 5px;
	}
	.liinput{
		height:100%;
		width: 70%;
		border: 1px solid #0889B3;
		/* font-size: 16px; */
		color: #15F5FF;
		outline-width: 0px ;
		border:1px solid rgba(30,130,166,0) ;
		background: none;
		-webkit-appearance: none ;
		-webkit-user-select: text ;
		outline-color: transparent ; 
	}
	.btn{
		color: #15F5FF;
		width: 50%;
		height: 100%;
		border:1px solid rgba(30,130,166,0.5) ;
		background: rgba(72,166,191,0.4);
		/* background: none; */
		-webkit-appearance: none ;
		-webkit-user-select: text ;
		outline-color: transparent ; 
	}
	.btn:hover{
		border:1px solid rgba(30,130,166,1) ;
		background: rgba(72,166,191,1);
		color: #15F5FF
	}
	.lireg{
		float: left;
		width: 50%;
		height:22px;
		text-align: center;
	}
</style>
