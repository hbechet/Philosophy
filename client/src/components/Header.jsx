import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.css';

export const Header = () => {
    return (
        <header className="header">
            <nav className="navbar container">
                <Link className="nav-logo" to="/"><img className="logo" src="Philosophy-logo.png" alt="logo"></img></Link>
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/philosophers">Philosophers</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/schools">Schools of Thought</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}
