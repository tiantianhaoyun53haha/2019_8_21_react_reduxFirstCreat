// 1 引入要合并的管理员
import fruitReducer from "./fruitReducer";

// 2 引入一个合并的 函数,由它负责合并
import { combineReducers } from "redux";

// 3 合并并导出
export default combineReducers({fruitReducer});