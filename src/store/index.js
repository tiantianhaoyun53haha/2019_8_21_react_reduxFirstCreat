
// 1 引入管理员
import reducer from "./reducer";
// 2 引入 仓库的生成器 5 引入 中间件的加载器
import { createStore,applyMiddleware } from "redux";
// 4 引入 redux的中间件 reduxThunk 让支持异步action
import  reduxThunk from "redux-thunk";

// 3 把仓库和管理员一并都暴露出去
// export default createStore(reducer);
// 5 全部都暴露出去
export default createStore(reducer,applyMiddleware(reduxThunk));