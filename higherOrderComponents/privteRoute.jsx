import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


function PrivateRoute({component: Component, role, ...rest}) {
    
    const {isAuth, user} = useContext(AuthContext)
    console.log("...private route..")

    return (

        <Route 
            {...rest}
            render = {routeProps => {
                if(isAuth) {
                    if(role.includes(user.role))
                        return <Component {...routeProps} />
                    else
                        return <Redirect to="/home" />
                }
                else
                    return <Redirect to={{ pathname: "/login", state: {from: routeProps.location} }} />
            }}
        />
    )

}

export default PrivateRoute