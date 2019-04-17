<template class="maxwin">
  <div id="appWeb">
      <div class="header maxwin">
				<div class="headbox">
					<!--<Icon class="icon" size="30" type="md-planet" />
					<input type="text" class="inputed" placeholder="Enter something..."/>
					<Icon class="icon" size="30" type="ios-wifi" />-->
				</div>
			</div>	
      <div class="conten">
				<router-view></router-view>
				<div style="height: 60px;width: 100%;"></div>
			</div>
      <div class="navbar maxwin">
				<tmenu></tmenu>
			</div>
     
  </div>
</template>

<script>
  import tmenu from '../components/index/menu_pages.vue'
export default {
  name: 'MainWin',
  data () {
    return {
     
    }
  },
  components:{
		tmenu:tmenu,
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #appWeb {
    margin-left:auto;
    margin-right:auto;
    display: flex;
    flex-direction: column;
	  list-style: none;
  }
	.headbox{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	.icon{
		flex: 1;
		text-align: center;
		line-height: 80px;
		color: rgba(30,130,166,0.6);
		text-shadow:0 0 2px rgba(30,130,166,1);
	}
	.inputed{
		color: #15F5FF;
		margin-top:25px;
		flex: 5;
		height:30px;
		line-height: 30px;
		outline-width: 0px ;
		border:1px solid rgba(30,130,166,0.5) ;
		border-radius: 5px;
		background: none;
		-webkit-appearance: none ;
		-webkit-user-select: text ;
		outline-color: transparent ; 
		box-shadow: 0 0 15px #15F5FF;
	}
  .header{
    position:fixed;
    top:0px;
    height:80px;
    width:100%;
		margin-left: auto;
		margin-right: auto;
    background-image:url(../assets/header.png);
    background-size: auto;
    background-size:100% 100%;
    background-repeat:no-repeat;
    z-index: 99999;
  }
  .conten{
    width:100%;
		height: auto;
		margin-top:80px;
    margin-right: auto;
    margin-left:auto;
  }
  .navbar{
    position:fixed;
    bottom:0px;
    height:60px;
    width:100%;
    border-top:0.5px solid rgba(0,155,125,0.6);
    z-index: 99999;
  }
</style>
