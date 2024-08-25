// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, role }) {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/" />;
    }

    // Decode the token to check the role
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    if (decodedToken.role !== role) {
        return <Navigate to="/" />;
    }

    return children;
}

export default PrivateRoute;
