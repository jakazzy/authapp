import React, { Component} from 'react';
import avatar from './../images/avatar.svg'
import { Link, Redirect } from 'react-router-dom';


class Dashboard extends Component{
    constructor(props){
        super(props)
        const token =localStorage.getItem("token");
        
        let userLoggedIn = true;
        if(token === null){
            userLoggedIn =false
        }

        this.state ={
            userLoggedIn
        }
    }

  render(){
      if(this.state.userLoggedIn ===false){
          return <Redirect to="/"/>
      }
    return(
        
    <div className="dashboard-container">
        <div className="sidebar">
            <div className="avatar">
                <img src={avatar} alt="account avatar" width="80" height="80"/>
            </div>

            <ul className="dashboard-content text">
                <li className="dashboard-item"><a href="dashboard.htm">Dashboard</a></li>
                <li className="dashboard-item"><a href="account.html">Account</a></li>
                <li className="dashboard-item"><a href="recurring.html">Recurring Revenue</a></li>
                <li className="dashboard-item"> <Link  to="/logout"> Logout</Link></li>
            </ul>
        </div>

        <div className="main">
        <h2 className="dashboard-area-text title-text">Welcome to the customer success dashboard</h2>
            <ul className="cards">
                <li className="card-item">
                    <a className="text" href="reviews.html">Kudobuzz Reviews</a>
                </li>
                <li className="card-item">
                    <a className="text" href="seo.html">Kudobuzz SEO</a>
                </li>
                <li className="card-item">
                    <a className="text" href="channels.html">Kudobuzz Multichannels</a>
                </li>
            </ul>
        </div>
    </div>
    )
  }

}
export default Dashboard;