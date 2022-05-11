import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../providers/UserProvider';
import { Navigate, useLocation } from 'react-router-dom';


export const Auth = ({ children }) => {
    const {isLoggedIn, setIsLoggedIn} = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    //認証が必要なviewがロードされたら走る
    useEffect(() => {
        setLoading(false);
        if (sessionStorage.getItem("session") === "sessionID") {
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
          }
          setLoading(true);
    }, []);

    return (
        (isLoggedIn || loading) ? <>{children}</> : <Navigate to={{
        pathname: '/login',
        state: {from: location},
    }} />
    )
}