import React, { Component} from 'react';
import { Link, Redirect } from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
                username: "",
                password: "",
                userLoggedIn: false
            }
        }
    


handleChange=(e) =>{
    this.setState({
        [e.target.id] : e.target.value
    })
}

handleSubmit =(e)=>{
    e.preventDefault();
    const { username, password} = this.state;
    if (username ==="jida" && password === "123"){
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
                    
                <form onSubmit={this.handleSubmit} className="section-form">
                    <div className="form-input text">
                        <input type="text" id="username" placeholder="username" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input text">
                        <input type="password" id="password" placeholder="password" onChange={this.handleChange}/>
                    </div>
                    <div className="submit-btn btn-margin">
                        <button type="submit"> login</button>
                    </div>
                    <div className="recover-password-text">
                        <a href="SignUp.html">forgotten password?</a>
                    </div>    
                </form>
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