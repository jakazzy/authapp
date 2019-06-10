import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component{
  constructor(props){
      super(props)
      localStorage.removeItem("token");
  } 
render(){
    return(
        <div>
            <h2 className="title-text">You are currently Logged out</h2>
            <Link to="/signin">Login to access dashboard</Link>
        </div>
        )
        }
    }

export default Logout