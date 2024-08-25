import React, { createContext, useState } from 'react';

// Crear el contexto
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("haritz");

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
