import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function UserProfile() {
    const { user, logout } = useContext(AuthContext);

    if (!user) {
        return <p>No user logged in</p>;
    }

    return (
        <div>
            <h2>Welcome, {user}</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default UserProfile;