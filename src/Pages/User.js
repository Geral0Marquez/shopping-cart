import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
    
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userName", "");
        navigate("/login");
    }

    return (
        <div className="login-container">
            <div className="main-container">
                <div className="login user-info">
                    <img src="img/user.png" alt="" className="user-avatar" />
                    <b>{localStorage.getItem("userName")}</b>
                    <button onClick={logout} className="submit-button-user">
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;