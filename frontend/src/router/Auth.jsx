import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { Navigate, useLocation } from 'react-router-dom';


export const Auth = ({ children }) => {
    const {isLoggedIn} = useContext(UserContext);
    const location = useLocation();

    return (
        isLoggedIn ? <>{children}</> : <Navigate to={{
        pathname: '/login',
        state: {from: location},
    }} />
    )
}