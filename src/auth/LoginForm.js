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
                <Form className="section-form">
                    <div className="form-input text">
                        <Field type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-input text">
                        <Field type="password" name="password" placeholder="password" />
                    </div>
                    <div className="submit-btn btn-margin">
                        <button type="submit"> login</button>
                    </div>
                    <div className="recover-password-text">
                        <a href="SignUp.html">forgotten password?</a>
                    </div>    
                </Form>
            </div>
        )
    }
}

const LoginApp = withFormik({
    mapPropsToValues(){
        return{
            username:"",
            password:""
        }
    },

    handleSubmit(values, { resetForm, setSubmitting}){
        console.log(values)
    }

})(LoginForm)

export default LoginApp
