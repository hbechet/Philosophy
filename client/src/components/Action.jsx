// Action.jsx
import React, { useEffect, useState } from "react";
import '../styles/styles.css';
import useRedirection from '../hooks/useRedirection';
import Button from 'react-bootstrap/Button';

export const Action = ({ text, path, delay, type, collection }) => {
    const { redirect, isRedirecting } = useRedirection(path, delay);
    const [buttonClass, setButtonClass] = useState('');

    const handleClick = () => {
        if (!isRedirecting) {
            // Realizar acciones adicionales si es necesario antes de la redirección
            redirect();
        }
    };


    useEffect(() => {
        if (type === 'primary') {
            setButtonClass('btn btn-primary');
        } else {
            setButtonClass('btn btn-warning');
        }
    }, [type]);


    return (
        <Button className={buttonClass} onClick={handleClick} disabled={isRedirecting}>{text}</Button>
    );
};
