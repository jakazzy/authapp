import React, { Component} from 'react';


class Signup extends Component{
    state ={
        username: "",
        email: "",
        password: ""
    }
    

    handleChange=(e) =>{
        this.setState({
        [e.target.id] : e.target.value
    })
}

    handleSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state);
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
                    Create an account
                </h2>
                    
                <form onSubmit={this.handleSubmit} className="section-form">
                    <div className="form-input text">
                        <input type="text" id="username" placeholder="username" onChange={this.handleChange} />
                    </div>
                    <div className="form-input text">
                        <input type="email" id="email" placeholder="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input text">
                        <input type="password" id="password" placeholder="password" onChange={this.handleChange}/>
                    </div>
                    <div className="submit-btn btn-margin">
                        <button type="submit">login</button>
                    </div>   
                </form>
                <div className="create-account-text">
                    <a href="/signup.html"> Have an existing account? sign in</a>
                </div>
            </div>
        </section>
        
        
    </div>


    )
  }

}
export default Signup;