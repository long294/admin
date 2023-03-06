import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Layout from './pages/Layout';
function App() {
  return <Router>
    <div className="App">
      <Link to="/login">登录</Link>
      <Link to="/home"  >首页</Link>
      {/*配置路由组件 */}
      <Routes>
        <Route to="/login" component={Login}></Route>
        <Route to="/login" component={Layout}></Route>
        {/* 配置404组件 */}
      </Routes>
    </div>

</Router>
}

export default App;
