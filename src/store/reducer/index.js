import {NUM_ADD,NUM_SUBSTRACT} from "../actionTypes"
// 1 定义默认数据
const defaultState = {
    num: 101,
    date:"2019年8月12日 10：11:09"

  }
  // 2 对外暴露出去  暴露一个函数 函数很重要 crud 的操作 都会通过这个函数来实现
  export default (state=defaultState,action)=>{
    // state = 默认数据
    // action 后期要对数据做 编辑的时候使用
    // 必须要返回 state

    // 行为的判断,注意是判断行为
    if(action.type==="NUM_ADD"){
      // 1.深拷贝
      let newState=JSON.parse(JSON.stringify(state));
      newState.num +=action.value;
      // 把新的数据return出去
    return newState;

    }else if(action.type==="NUM_SUBSTRACT"){
      let newState=JSON.parse(JSON.stringify(state));
      newState.num -=action.value;
      // 把新的数据return出去
    return newState;
    }
    return state;
  }