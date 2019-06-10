import React, { Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import LoginApp from './LoginForm'


class Login extends Component{
    constructor(props){
        super(props)
        const token =localStorage.getItem("token");
        
        let userLoggedIn = true;
        if(token === null){
            userLoggedIn =false
        }

        this.state ={
                username: "",
                password: "",
                userLoggedIn: false
            }
        }
    
    handleChange=(e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        const { username, password} = this.state;
        const name = localStorage.getItem("username");
        const pwd = localStorage.getItem("password");
        if (username === name && password === pwd){
            localStorage.setItem("token", "aujhet376524f");
            this.setState({
                userLoggedIn : true
            })
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