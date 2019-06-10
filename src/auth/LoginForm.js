import React, { Component} from 'react'
import { Redirect } from 'react-router-dom'
import { withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'


class LoginForm extends Component {
    constructor(props){
        super(props)
    
        this.state ={
            username: "",
            email: "",
            password: ""
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="section-form">
                    <div className="form-input text">
                        <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                    </div>
                    <div className="form-input text">
                        <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                    </div>
                    <div className="submit-btn btn-margin">
                        <button type="submit"> login</button>
                    </div>
                    <div className="recover-password-text">
                        <a href="SignUp.html">forgotten password?</a>
                    </div>    
                </form>
            </div>
        )
    }
}

const LoginApp = withFormik({})(LoginForm)

export default LoginApp
