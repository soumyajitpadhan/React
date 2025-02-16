import React from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const navigate = useNavigate();

    const { login, handleLogin } = useContext(AuthContext);

    function handleNavigate(path) {
        if (login) {
            navigate(path)
        }
    }

    return (
        <div style={{ margin: "0px" }}>
            <nav style={{ display: "flex", justifyContent: "flex-end", gap: "30px", backgroundColor: "cyan", padding: "10px" }}>

                {/* <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About Us</Link>
                <Link to={'/contact'}>Contact Us</Link> */}

                <button
                    onClick={handleLogin}
                    style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: "15px" }}>
                    {login ? "Logout" : "Login"}
                </button>
                {/* <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: "15px" }} onClick={() => navigate('/')}>Home</button> */}
                <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: "15px" }} onClick={() => handleNavigate('/about')}>About Us</button>
                <button style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: "15px" }} onClick={() => handleNavigate('/contact')}>Contact Us</button>
            </nav>
        </div>
    )
}

export default Navbar