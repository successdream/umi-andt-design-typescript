
import { history } from "umi"
const LoginOut = () => {
    const handleLoginOut = () => {
        localStorage.removeItem('isLogin')
        history.push({
            pathname: '/login'
        })

    }

    return (
        <button onClick={ handleLoginOut }>退出登录</button>
    )
}
export default LoginOut