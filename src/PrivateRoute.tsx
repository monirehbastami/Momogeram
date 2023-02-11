import React from 'react';
import { Navigate } from 'react-router-dom';
import { AXIOS } from './config/axios.config';

interface PrivateRouteProps extends React.PropsWithChildren{
    
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({children}:PrivateRouteProps):JSX.Element => {
    const getToken = localStorage.getItem("token")
    if (getToken) {
        AXIOS.defaults.headers.common.Authorization = "Bearer " + getToken;
        return children as JSX.Element;
    }
    return <Navigate to="/login" />;
}

export default PrivateRoute;