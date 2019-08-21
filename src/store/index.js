

// 1 引入管理员
import reducer from "./reducer";
// 2 引入 仓库的生成器
import { createStore } from "redux";

// 3 把仓库和管理员一并都暴露出去
export default createStore(reducer);