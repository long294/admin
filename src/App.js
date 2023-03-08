import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Login from './pages/Login/index';
import Layout from './pages/Layout/index';
function App() {
  return (<Router>
    <div className="App">
      {/* <Link to="/login">登录</Link>
      <Link to="/home"  >首页</Link> */}
      {/*配置路由组件 */}
      <Routes>
        <Route   path="/login" element={<Login/>}></Route>
        <Route path="/layout" element={<Layout/>}>首页</Route>
        {/* 配置404组件 */}
      </Routes>
    </div>

</Router>
)
}

export default App;
