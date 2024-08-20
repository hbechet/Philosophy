// Action.jsx
import React from "react";
import '../styles/styles.css';
import useRedirection from '../hooks/useRedirection';

export const Action = ({ text, path, delay }) => {
    const { redirect, isRedirecting } = useRedirection(path, delay);

    const handleClick = () => {
        if (!isRedirecting) {
          // Realizar acciones adicionales si es necesario antes de la redirección
          redirect();
        }
    };

    return (
        <button className="btn btn-primary" onClick={handleClick} disabled={isRedirecting}>{text}</button>
    );
};
