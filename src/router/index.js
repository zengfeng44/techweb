import Vue from 'vue'
import Router from 'vue-router'
import MainWin from '@/components/MainWin'
import MinWin from '@/components/MinWin'
import LoginWin from '@/components/LoginWin'

import home from '@/components/index/home'
import itemize from '@/components/itemize/itemize'
import jfshop from '@/components/jfshop/jfshop'
import member from '@/components/member/member'
import mywallet from '@/components/wallet/mywallet'
import myteam from '@/components/member/myteam'
import GeneralOrder from '@/components/order/GeneralOrder'
import jfOrder from '@/components/order/jfOrder'
import waitPay from '@/components/order/waitPay'
import Receiving from '@/components/order/Receiving'
import evaluate from '@/components/order/evaluate'
import login	from '@/components/member/login'
import Regmember from '@/components/member/Regmember'
import forgot from '@/components/member/forgot'

import goodsdetails from '@/components/goods/details'
import toCart from '@/components/goods/toCart'
import MyAddress from '@/components/address/address'
import newAddress from '@/components/address/newaddress'
import memberinfo from '@/components/member/memberinfo'
import memberedit from '@/components/member/memberedit'
import Order from '@/components/order/order'
import amounts from '@/components/wallet/amounts'

import waitOrder from '@/components/order/waitOrder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainWin',
      component: MainWin,
      redirect:'/home',
      children:[
        {path:'/home',name:'home',component:home,},
        {path: '/itemize',name: 'itemize',component: itemize},
        {path: '/jfshop',name: 'jfshop',component: jfshop},
        {path: '/member',name: 'member',component: member},
        {path: '/jfOrder',name: 'jfOrder',component: jfOrder},
        {path: '/evaluate',name: 'evaluate',component: evaluate},
      ],
    },{
      path: '/MinWin',
      name: 'MinWin',
      component: MinWin,
      children:[
        {path: '/goods/details:id',name: 'goodsdetails',component: goodsdetails},
        {path: '/goods/cart',name: 'toCart',component: toCart},
        {path: '/address/index',name: 'MyAddress',component: MyAddress},
        {path: '/address/add',name: 'newAddress',component: newAddress},
        {path: '/mywallet',name: 'mywallet',component: mywallet},
        {path: '/order/index',name: 'GeneralOrder',component: GeneralOrder},
        {path: '/order/waitPay',name: 'waitPay',component: waitPay},
        {path: '/order/order:id',name: 'Order',component: Order},
        {path: '/order/Receiving',name: 'Receiving',component: Receiving},
        {path: '/member/info',name: 'memberinfo',component: memberinfo},
        {path: '/member/edit',name: 'memberedit',component: memberedit},
        {path: '/myteam',name: 'myteam',component: myteam},
        {path: '/wallet/amounts',name: 'amounts',component: amounts},
        {path: '/order/waitOrder',name: 'waitOrder',component: waitOrder},

      ],
    },{
      path: '/LoginWin',
      name: 'LoginWin',
      component: LoginWin,
      redirect:'/member/login',
      children:[
        {path: '/member/login',name: 'login',component: login},
        {path: '/member/Regmember',name: 'Regmember',component: Regmember},
        {path: '/member/forgot',name: 'forgot',component: forgot},
      ],
    },
  ]
})
