import React, { Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import LoginApp from './LoginForm'


class Login extends Component{
    constructor(props){
        super(props)
        
        this.state ={
                username: "",
                password: "",
                userLoggedIn: false
            }
        }
    
  render(){
    if (this.state.userLoggedIn){
        return <Redirect to="/dashboard"/>
    }
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
                    
                <LoginApp/>
                <div className="create-account-text">
                    <Link to="/signup">Don't have an account? Create a new account</Link>
                </div>
            </div>
        </section>
        
        
    </div>


    )
  }

}
export default Login;