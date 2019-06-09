import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component{
   
render(){
    return(
        <div>
            <h2>You are currently Logged out</h2>
            <Link to="/">Login to access dashboard</Link>
        </div>
        )
        }
    }

export default Logout