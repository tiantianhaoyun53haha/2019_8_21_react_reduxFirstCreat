import React, { Component, Fragment } from 'react';
// 1 App 要接收 store中的数据
import {  connect } from "react-redux";

// 加组件
class AddBtn extends Component{
  render(){
    return (
      <button onClick={this.props.numAdd}>+</button>
    )
  }
}
// 减组件
class SubtractBtn extends Component{
  render(){
    return (
      <button  onClick={this.props.Subtract}>-</button>
    )
  }
}



class App extends Component {
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
  return{
    // 组件中要使用的属性名:仓库的数据
    num123:state.num,
    date:state.date

  }
}
// 3 映射对象 负责将事件映射到属性中
// dispatch 派发的意思
const mapPropsToDispatch=(dispatch)=>{
  return{
    numAdd:()=>{
      // 开始派发行为
      dispatch({
        value:1,
        type:"num_add"
      })
    },
    Subtract:()=>{
      dispatch({
        value:1,
        type:"num_Subtract"
      })
    }

  }
}

// 2 表示接收数据 
export default connect(mapPropsToState,mapPropsToDispatch)(App);