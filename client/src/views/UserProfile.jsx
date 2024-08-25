import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (() => {
        navigate('/login');
    })

    if (!user) {
        return (
            <div className='container content'>
                <div className='content'>
                    <h2>No user logged in... sorry :/</h2>
                    <button className='btn btn-primary mt-3' onClick={handleLogin}>Login</button>
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='content'>
                <h2>Welcome, {user}.</h2>
                <button className='btn btn-secondary mt-3' onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default UserProfile;