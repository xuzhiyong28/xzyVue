import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChildrenCompents from '@/components/ChildrenCompents'
import DemoComponents1 from '@/components/DemoComponents1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children : [
        //http://localhost:8080/#/demo1
        //meta为路由原数据 可以用在全局路由拦截时做判断
        {path : 'demo1', component : DemoComponents1 , meta : {needLogin : true}}
      ]
    },
    {
      path : '/children',
      name : 'ChildrenCompents',
      component : ChildrenCompents
    }
  ]
})
