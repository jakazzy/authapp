import React from 'react'
import { Link } from 'react-router-dom';

const Home =()=>  {
return (
    <div>
        <nav class="navbar">
            <ul>
                <li class="link-button"><Link to="/signin">Log In</Link ></li>
                <li class="link-button right"><Link to="/signup">SignUp</Link ></li>
            </ul>
        </nav>
        <section>
            <h3 id="Homepage-text" class="title-text">Customer Success Portal</h3>
        </section>
    </div>   
)

}

export default Home

