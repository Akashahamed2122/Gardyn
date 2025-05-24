import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../components/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation()
    console.log(location)

        if(loading){
        return <Loading></Loading>

    }

      if (user ) {
        return children;
    }
     return <Navigate state={location?.pathname} to="/login" />; 
  
 
};

export default PrivateRoute;