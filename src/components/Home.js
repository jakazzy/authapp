import React from 'react'
import { Link } from 'react-router-dom';

const Home =()=>  {
return (
    <div>
        <nav className="navbar">
            <ul>
                <li className="link-button"><Link to="/signin">Log In</Link ></li>
                <li className="link-button right"><Link to="/signup">SignUp</Link ></li>
            </ul>
        </nav>
        <section>
            <h3  data-testid="titleText" id="Homepage-text" className="title-text">Customer Success Portal</h3>
        </section>
    </div>   
)

}

export default Home

