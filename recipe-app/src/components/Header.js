import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=> {
    return(<div className="header-nav">
        <div className="header">
        <div className="header-h2">
            <h2>Recipe App</h2>
        </div>
        <div className="header-links">
            <Link to="/home" className="home-btn btn">Home</Link>
            <Link className="add-btn btn">Add New Recipes</Link>
            <Link className="view-btn btn">View All Recipes</Link>
            <Link to="/login" className="login-btn btn">Login</Link>
            <Link to="/signup" className="signup-btn btn">Signup</Link>
            <Link className="logout-btn btn">Logout</Link>
        </div>
        </div>
    </div>);
}

export default Header;