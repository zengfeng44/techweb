<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  max-width: 500px;
 
  margin-left:auto;
  margin-right:auto;
    background-image: url(assets/background.png);
  background-repeat:repeat;
  background-attachment: fixed;
}
html{
  max-width: 500px;
  height:100%;
  margin-left:auto;
  margin-right:auto;
}
.l {
  float: left;
}
.r {
  float: right;
}
.txt {
  color: rgba(88, 200, 238, 1);
  text-shadow: 0px 0px 10px #15f5ff;
  font-size: 14px;
}
#app {
  list-style: none;
  max-width: 500px;
  height:100%;
  margin-left:auto;
  margin-right:auto;
 
}
#app,
ul,
li,
a {
  list-style: none;
}
@-webkit-keyframes pi {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes pi2 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(45deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  75% {
    -webkit-transform: rotate(-45deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}
@-webkit-keyframes pi3 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(-90deg);
  }
  50% {
    -webkit-transform: rotate(-180deg);
  }
  75% {
    -webkit-transform: rotate(-270deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
@-webkit-keyframes pi4 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(-60deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  75% {
    -webkit-transform: rotate(60deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}
@-webkit-keyframes t1 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-webkit-keyframes t2 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(90deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
  }
}
@-webkit-keyframes t3 {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(-90deg);
  }
  50% {
    -webkit-transform: rotate(-180deg);
  }
  75% {
    -webkit-transform: rotate(-270deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
  }
}
.anic1 {
  -webkit-animation: t1 20s linear infinite;
}
.anic2 {
  -webkit-animation: t2 12s linear infinite;
}
.anic3 {
  -webkit-animation: t3 20s linear infinite;
}
.anic4 {
  -webkit-animation: t3 6s linear infinite;
}
.anic5 {
  -webkit-animation: t1 6s linear infinite;
}
.anic6 {
  -webkit-animation: t1 60s linear infinite;
}
.anic7 {
  -webkit-animation: t1 3s linear infinite;
}
.anic8 {
  -webkit-animation: t3 60s linear infinite;
}
.anic9 {
  -webkit-animation: t1 90s linear infinite;
}
.anic10 {
  -webkit-animation: t3 90s linear infinite;
}
.ani {
  -webkit-animation: pi 6s linear infinite;
}
.ani-2 {
  -webkit-animation: pi2 6s linear infinite;
}
.ani3 {
  -webkit-animation: pi3 6s linear infinite;
}
.ani4 {
  -webkit-animation: pi4 6s linear infinite;
}

.shadow {
  font-size: 8px;
  color: rgba(18, 18, 30, 0.5);
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 0);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, rgba(18, 18, 30, 0.1)),
    color-stop(0.4, rgba(18, 18, 30, 0.1)),
    color-stop(0.5, rgba(27, 230, 255, 0.8)),
    color-stop(0.6, rgba(18, 18, 30, 0.1)),
    color-stop(0.2, rgba(18, 18, 30, 0.1))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: animate 1s infinite;
}
@-webkit-keyframes animate {
  from {
    background-position: -100px;
  }
  to {
    background-position: 100px;
  }
}
@keyframes animate {
  from {
    background-position: -100px;
  }
  to {
    background-position: 100px;
  }
}
.appwb{background: rgba(72, 166, 191, 0.4);}
.appgb{background: rgba(12, 67, 91, 0.3);}
.appbk{border: 1px solid #0889b3;}
.apptxt{color: #15f5ff;}
.bigbox {
  width: 100%;
}
.box-one {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
}
.box-two-r {
  flex: 9;
  height: auto;
  display: flex;
  flex-direction: row;
}
.box-two-c {
  flex: 9;
  height: auto;
  display: flex;
  flex-direction: column;
}
.box-main-r {
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}
.box-main-c {
  flex: 1;
  height: auto;
  display: flex;
  flex-direction: column;
}
.box-min {
  flex: 1;
}
.box-min-2 {
  flex: 1;
}
.box-l {
  flex: 0.5;
  height: auto;
  max-width:15px;

}
.box-r {
  flex: 0.5;
  height: auto;
  max-width:15px;
}
.rim {
  border: 1px solid #0889b3;
}
.gbk{
    
    background: rgba(12, 67, 91, 0.3);
}
.wbk{
  background: rgba(72, 166, 191, 0.4);
}
.c {
  text-align: center;
}
.t-r {
  text-align: right;
}
.t-l{
  text-align: left;
}
.t-n{
  overflow: hidden; /*自动隐藏文字*/
  text-overflow: ellipsis;/*文字隐藏后添加省略号*/
  white-space: nowrap;/*强制不换行*/
}
.t-c{
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.t2em{
  text-indent: 2em;
}
.t1em{
  text-indent: 1em;
}
.maxwin{
  max-width: 500px;
  margin-left:auto;
  margin-right:auto;
}
.cur{
  cursor:pointer;
}
.hover{
  background: rgba(8, 189, 250, 0.34);
  
}
.hover:hover{
   background: rgba(8, 189, 250, 0.64);
}
.act:active{
  background: rgba(8, 189, 250, 0.64);
}
.appbtn{
  height:35px;
  line-height:35px;
  width:100%;
  text-align: center;
  color:#fff;
  font-size:16px;
}
</style>
