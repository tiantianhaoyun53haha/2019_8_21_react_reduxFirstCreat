// 需要的是常量，所以需要导入常量文件
import { NUM_ADD,NUM_SUBSTRACT } from "../actionTypes";
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