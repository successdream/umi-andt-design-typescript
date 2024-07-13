
import { history } from "umi"
const Login = () => {
    const handleLogin = () => {
        localStorage.setItem('isLogin', '1')
        history.push({
            pathname: '/',
          
        })
    }
    return (
        <div>
            <div>我是login页面</div>
            <button onClick={ handleLogin }>登录</button>
        </div>
    )
}

export default Login;