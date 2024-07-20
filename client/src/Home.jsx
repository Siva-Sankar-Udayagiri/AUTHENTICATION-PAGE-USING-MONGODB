import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import your CSS file

function Home() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }
    const navigateToRegister = () => {
        navigate('/register');
    }

    return (
        <div className="container">
            <h1>AUTHENTICATION PAGE USING MONGODB</h1>
            <div className="button-wrapper">
                <button onClick={navigateToLogin}>Login</button>
                <button onClick={navigateToRegister}>SignIn</button>
            </div>
        </div>
    );
}

export default Home;


