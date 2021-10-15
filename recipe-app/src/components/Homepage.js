import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ()=> {
    return(<div className="home">
        
        <div className="homepage">
            <div>
                <h2>All The Recipes You Need In One Place</h2>
                <p>Recipe App has recipes from all around the world</p>
                <Link to="/login" className="login-btn btn">Start Now</Link>
            </div>
            <div>
                <img className="home-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyF9tCPrWhuDiuBaf1QBKSQ9WKLMmtbf4a7A&usqp=CAU" alt="Recipes"/>
            </div>
        </div>
    </div>);
}

export default Homepage;