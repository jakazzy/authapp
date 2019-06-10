import React, { Component } from 'react'
import { withFormik, Form, Field} from 'formik'
import { Yup } from 'yup'

class SignUpForm extends Component {

    state ={
        username: "",
        email: "",
        password: ""
    }
    

    handleChange=(e) =>{
        this.setState({
        [e.target.name] : e.target.value
    })
}

    handleSubmit =(e)=>{
    e.preventDefault();
    console.log(this.state);
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="section-form">
                    <div className="form-input text">
                        <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
                    </div>
                    <div className="form-input text">
                        <input type="email" name="email" placeholder="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input text">
                        <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                    </div>
                    <div className="submit-btn btn-margin">
                        <button type="submit">login</button>
                    </div>   
                </form>
            </div>
        )
    }
}

export default SignUpForm
