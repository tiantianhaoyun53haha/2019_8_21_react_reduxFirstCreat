// 需要的是常量，所以需要导入常量文件
import { NUM_ADD,NUM_SUBSTRACT,NUM_INIT } from "../actionTypes";

// 引入异步axios
import Axios from "axios";


/**
 * 数量增加的action
 */
export const numAdd = () => {
  return {
    value: 1,
    type: NUM_ADD
  }
  
}
export const numSubstract = () => {
    return {
      value: 1,
      type: NUM_SUBSTRACT
    }
    
  }


//   新增一个异步action
export const numInit=()=>{
    return (dispatch)=>{
      Axios.get("https://easy-mock.com/mock/5cff5f447806440acf2c6856/baseList/").
      then(res=>{
        dispatch({
          type:NUM_INIT,
          value:res.data.nums
        })
      })
    }
  }