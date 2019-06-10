import React, { Component } from 'react'
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
   
    
//     handleChange=(e) =>{
//         this.setState({
//         [e.target.name] : e.target.value
//     })
// }

//     handleSubmit =(e)=>{
//     e.preventDefault();
//     console.log(this.state);
// }
    render() {
        const   { values, errors} = this.props;
        return (
            <div>
                <Form className="section-form">
                    <div className="form-input text">
                        <Field type="text" name="username" placeholder="username" />
                        { errors.username && <p>{errors.username}</p>}
                    </div>
                    <div className="form-input text">
                        <Field type="email" name="email" placeholder="email" />
                        { errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-input text">
                        <Field type="password" name="password" placeholder="password" />
                    </div>
                    <div className="submit-btn btn-margin">
                        <button type="submit">login</button>
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
        username: Yup.string().required(),
        email: Yup.string().email().matches(/^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@kudobuzz.com$/g).required(),
        password: Yup.string().min(8).required()
    }),
    handleSubmit(values){
        console.log(values)
    }
})(SignUpForm)

export default FormikApp
