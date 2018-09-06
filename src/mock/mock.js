const Mock = require('mockjs');
const Random = Mock.Random;
// mock一组数据
const getNewIndexData = function () {
  let json = require('./new-index.json');
  return json;
}
Mock.mock('/news/index', /post|get/i, getNewIndexData);
