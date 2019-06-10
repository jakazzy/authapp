import React, { Component} from 'react'
import FormikApp from './SignUpForm'
import { Link } from 'react-router-dom';



class Signup extends Component{
   
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
                <FormikApp/>
                <div className="create-account-text">
                    <Link to="/signin"> Have an existing account? sign in</Link>
                </div>
            </div>
        </section>
        
        
    </div>
    )
  }

}
export default Signup;