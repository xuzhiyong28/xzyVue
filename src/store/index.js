import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//可以使用this.$store.state.name获取
//有可以使用mapState辅助函数
const store = new Vuex.Store({
  state : {
    name : 'xuzhiyong',
    age : 27,
    myArray : [
      { 'id' : '1', 'text' : 'msg1'},
      { 'id' : '1', 'text' : 'msg1'}
    ]
  },
  /***
   * mutations 是vuex专门用来修改state值的方法
   * 例如 this.$store.commit('方法', '值')
   */
  mutations : {
    //默认state是第一次参数，但实际调用的时候不用传入
    //this.$store.commit('updateName' , 'xuzhiyong2')
    updateName(state,val){
      state.name = val;
    },
    updateAge(state,newAge){
      state.age += newAge;
    }
  },
  /***
   * gettting相当于vue的计算属性，可以对值进行再次计算
   * 使用方法 this.$store.getters.getMyArray
   */
  getters : {
    getMyArray : state => {
        return state.myArray.filter(obj => obj.text);
    }
  },
  //actions使用来操作mutations的顺便可以加一些自己的逻辑
  //actions在vue中可以this.$store.dispatch('syncUploadAge',10)来用
  actions : {
    syncUploadAge({ commit, state }, count){
      console.log('====开始updateName===');
      commit('updateAge',count);
    }
  }
});

export default store;
