import React, { Component } from 'react'
import { withFormik, Form, Field} from 'formik'
import { Yup } from 'yup'

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
        const   { values, handleChange, handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit} className="section-form">
                    <div className="form-input text">
                        <input type="text" name="username" placeholder="username" onChange={handleChange} value={values.username} />
                    </div>
                    <div className="form-input text">
                        <input type="email" name="email" placeholder="email" onChange={handleChange} value={values.email} />
                    </div>
                    <div className="form-input text">
                        <input type="password" name="password" placeholder="password" onChange={handleChange}/>
                    </div>
                    <div className="submit-btn btn-margin">
                        <button type="submit">login</button>
                    </div>   
                </form>
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

    handleSubmit(values){
        console.log(values)
    }
})(SignUpForm)

export default FormikApp
