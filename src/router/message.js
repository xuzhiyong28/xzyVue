import Router from './index'

/****
 * 路由拦截 - 全局前置守卫
 */
Router.beforeEach((to , from , next) => {
  console.log('to=' + JSON.stringify(to));
  console.log('from=' + JSON.stringify(from));
  //next() - 下一步  next(false) --中断  next("/xxx")--跳转到另外一个视图
  next();
})
