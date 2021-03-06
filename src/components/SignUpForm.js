import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom';
import { withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'

class SignUpForm extends Component { 
    constructor(props){
        super(props)
    
        this.state ={
            username: "",
            email: "",
            password: ""
        }
    }
 
    render() {
        const   { errors, touched, isSubmitting} = this.props;
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
                        <Field type="email" name="email" placeholder="email" />
                        { touched.email && errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-input text">
                        <Field type="password" name="password" placeholder="password" />
                        { touched.password && errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="submit-btn btn-margin">
                        <button disabled={isSubmitting} type="submit">signup</button>
                    </div>   
                </Form>
            </div>
        )
    }
}

const FormikApp = withFormik({
    mapPropsToValues(){
        return{
            username:"username",
            email: "name@kudobuzz.com",
            password:""
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required("username required"),
        email: Yup.string().email("email not valid")
        .matches(/^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@kudobuzz.com$/g,"email format should be Kat@kudobuzz.com")
        .required("email required"),
        password: Yup.string().min(8, "8 characters or more required").required("password required")
    }),
    handleSubmit(values, { resetForm, setSubmitting}){
        setTimeout(()=>{
            localStorage.setItem("username", values.username);
            localStorage.setItem("email", values.email);
            localStorage.setItem("password", values.password);
            localStorage.setItem("token", "aujhet376524f");
            resetForm()
        },2000)
        setSubmitting(false)
        console.log(values)
    }
})(SignUpForm)

export default FormikApp
