import React, { Component} from 'react';
import { Link } from 'react-router-dom';


class Login extends Component{
state ={

}
  render(){
    return(

    <div className="container">
        <section className="customer-success-container">
            <h2 className="portal-title title-text">Customer Success Portal</h2>
        </section>

        <section className="login-container">
            <div className="wrapper">
                <h2 className="login-title title-text">
                    Login to access dashboard
                </h2>
                    
                <form className="section-form">
                    <div className="form-input text">
                        <input type="text" id="username" placeholder="username"/>
                    </div>
                    <div className="form-input text">
                        <input type="password" id="password" placeholder="password"/>
                    </div>
                    <div className="submit-btn btn-margin">
                        <button type="submit"><b> login</b></button>
                    </div>
                    <div className="recover-password-text">
                        <a href="SignUp.html">forgotten password?</a>
                    </div>    
                </form>
                <div className="create-account-text">
                    <Link to="/signup.html">Don't have an account? Create a new account</Link>
                </div>
            </div>
        </section>
        
        
    </div>


    )
  }

}
export default Login;