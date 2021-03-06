import React, { Component, Fragment } from 'react';
// 1 App 要接收 store中的数据
import {  connect } from "react-redux";
// 2.引入actions中的常量
// 不用引入常量了，因为已经封装到action器里面了
// import {NUM_ADD,NUM_SUBSTRACT} from "./store/actionTypes"
//  3.引入action生成器
import {numAdd,numSubstract,numInit} from "./store/actionCreator"
// 加组件
class AddBtn extends Component{
  render(){
    return (
      <button onClick={this.props.numAdd}>+</button>
    )
  }
}
// 在App.js  生命周期中开始使用 

// 减组件
class SubtractBtn extends Component{
  render(){
    return (
      <button  onClick={this.props.Subtract}>-</button>
    )
  }
}



class App extends Component {
  componentDidMount() {
    // 发送请求 初始化数据
    this.props.numInit()
  }
  render() {
    return (
      <div>
        <AddBtn {...this.props}/>
        <span> 数量:{this.props.num123} </span>
        <SubtractBtn  {...this.props}/>
        <div>日期：{this.props.date}</div>
     
      </div>
    );
  }
}

// 3 定义一个字典对象 映射对象
const mapPropsToState=(state)=>{
  console.log(state)
  return{
    // 组件中要使用的属性名:仓库的数据
    num123:state.fruitReducer.num,
    date:state.fruitReducer.date

  }
}
// 3 映射对象 负责将事件映射到属性中
// dispatch 派发的意思
const mapPropsToDispatch=(dispatch)=>{
  return{
    numAdd:()=>{
      // 开始派发行为
      // numAdd()调用添加数据的函数
      dispatch(numAdd())
    },
    Subtract:()=>{
      dispatch(numSubstract())
    },
    numInit:()=>{
      dispatch(numInit());
    }

  }
}

// 2 表示接收数据 
export default connect(mapPropsToState,mapPropsToDispatch)(App);