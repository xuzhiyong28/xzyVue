const Mock = require('mockjs');
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function () {
  let articles = [
    {'id' : '1' , 'title' : '许志勇'}
  ];
  return {
    articles : articles
  }
}
Mock.mock('/news/index', /post|get/i, produceNewsData);
