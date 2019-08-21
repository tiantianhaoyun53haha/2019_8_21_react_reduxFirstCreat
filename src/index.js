import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 1 引入仓库
import store from "./store";
// 2 引入 react和redux的连接器 Provider 提供者 
import { Provider } from "react-redux";

// 3 使用store 
ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));