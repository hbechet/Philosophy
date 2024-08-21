import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

export const Header = () => {
    return (
        <header className="header">
            <nav className="navbar container">
                <Link to="/"><img className="logo" src="Philosophy-logo.png" alt="logo"></img></Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/philosophers">Philosophers</Link></li>
                    <li><Link to="/schools">Schools of Thought</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}
