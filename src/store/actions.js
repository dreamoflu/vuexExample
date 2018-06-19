

const actions = { //action中的函数传入多个参数时要使用对象传入  这里的方法可以调用接口
  getData( {commit}, obj ){
    // commit('mutations中的函数名','给mutations函数的传参');


    commit('REDUCE_NUM',obj.num);
  }
};
export  default actions

