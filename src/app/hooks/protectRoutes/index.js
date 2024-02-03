import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../auth';

export const ProtectRoutes = () => {
    const { cookies } = useAuth();
    console.log(cookies, 'cookies in auth')

    return cookies.token ? <Outlet/> : <Navigate to='/login' exact />
};
