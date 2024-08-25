import React, { createContext, useState } from 'react';

// Create Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
    const [roleContext, setRole] = useState('');

    const login = (userData) => {
        setUser(userData.username);
        setToken(userData.token);
        setRole(userData.role);
    };

    const logout = () => {
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, roleContext, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
