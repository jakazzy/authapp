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
        const  { errors, touched, isSubmitting } = this.props;
        const token =localStorage.getItem("token");
        if (token !== null){
        return <Redirect to="/dashboard"/>
    }
        return (
            <div>
                <Form className="section-form">
                    <div className="form-input text">
                        <Field type="text" name="username" placeholder="username" />
                        { touched.username && errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className="form-input text">
                        <Field type="password" name="password" placeholder="password" />
                        { touched.password && errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="submit-btn btn-margin">
                        <button disabled={isSubmitting} type="submit"> login</button>
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
    validationSchema: Yup.object().shape({
        username: Yup.string().required("username required"),
        password: Yup.string().min(8, "8 characters or more required").required("password required")
    }),

    handleSubmit(values, { resetForm, setErrors, setSubmitting}){
        setTimeout(() =>{
            const { username, password} = values;
            const name = localStorage.getItem("username");
            const pwd = localStorage.getItem("password");
        if (username === name && password === pwd){
            localStorage.setItem("token", "aujhet376524f");
            resetForm() 
        }else{
            setErrors({username: "username does not exist. Create an account"})
        }
        setSubmitting(false)
        },2000)
        console.log(values)
    }

})(LoginForm)

export default LoginApp
