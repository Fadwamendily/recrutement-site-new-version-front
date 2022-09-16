import React from 'react'
import { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

function PublicRoute({ component: Component, restricted, ...rest }) {

    const { isauth, user } = useContext(AuthContext)

    return (
        <Route {...rest} render={props => (
            isauth && restricted ?
             user.role === 'ESN'?
                <Redirect to="/esnProfil" /> : user.role=== 'Freelancer'?
                <Redirect to="/cv" />:
                <Redirect to="/mesOffre" />
                : <Component {...props} /> //Home
        )} />
    )
}

export default PublicRoute

