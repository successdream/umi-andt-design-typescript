import { Outlet, Navigate } from 'umi'

const Auth = () => {
    const isLogin = localStorage.getItem('isLogin');
    if(Number(isLogin)) {
        return <Outlet/>
    } else {
        return <Navigate to="/login" />
    }
}
export default Auth;