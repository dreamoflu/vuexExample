import  * as type from './mutataions_type'

const mutations = {
  [type.CHANGE_QUESTION_LIST](state,data){
    state.myTestNum+= data
  },
  [type.REDUCE_NUM](state,data){
    state.myTestNum-= data
  }
};
export  default mutations
