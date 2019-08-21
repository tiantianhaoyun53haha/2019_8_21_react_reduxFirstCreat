import React, { Component, Fragment } from 'react';


// 1引入react的路由和它里面的一些组件
import { HashRouter as Router, Link, Route }from "react-router-dom"

// 创建组件
const Home = () => <div>首页</div>
const User = () => <div>用户</div>
const About = () => <div>关于</div>
// 用类创建根组件
class App extends Component {

  render() {
    return (
      <Fragment>
        <div className="main">
          {/* // 监听路由变化的盒子 */}
          <Router>
          {/* // 导航栏 */}
          <nav>]
          <Link to="/">首页</Link>
          <Link to="/User">用户</Link>
          <Link to="/About">关于</Link>
          </nav>
          <section>
          {/* // 将路由和组件创建连接 */}
          <Route path="/" exact component={Home}/>
          <Route path="/User" exact component={User}/>
          <Route path="/About" exact component={About}/>
          
          </section>
          
          
          </Router>
        </div>

      </Fragment>
    );
  }
}

export default App;