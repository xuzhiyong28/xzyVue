import Router from './index'

/****
 * 路由拦截 - 全局前置守卫
 */
Router.beforeEach((to , from , next) => {
  console.log('before_to=' + JSON.stringify(to));
  console.log('before_from=' + JSON.stringify(from));
  //next() - 下一步  next(false) --中断  next("/xxx")--跳转到另外一个视图
  next();
})

/****
 * 路由拦截 - 全局后置守卫
 */
Router.afterEach((to,from) => {
  console.log('after_to=' + JSON.stringify(to));
  console.log('after_from=' + JSON.stringify(from));
})
