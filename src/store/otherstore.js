const permission = {
  state : {
    card : '350582',
    phone : '18055635141'
  },
  mutations : {
    updatePhone(state,val){
      state.phone = val
    }
  },
  actions : {
    syncUpdatePhone({ commit, state }, value){
      commit('updatePhone',value);
    }
  }
}
export default permission;
