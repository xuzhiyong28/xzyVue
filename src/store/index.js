import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
    }
  },
  /***
   * gettting相当于vue的计算属性，可以对值进行再次计算
   */
  getters : {
    getMyArray : state => {
        return state.myArray.filter(obj => obj.text);
    }
  }
});

export default store;
