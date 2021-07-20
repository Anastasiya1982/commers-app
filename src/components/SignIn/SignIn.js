import React from 'react';
import './SignIn.scss';
import FormInput from "../FormInput/FormInput";
import CustomButton from "../customButton/customButton";

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }
    onHandleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        return(
            <div className='sign-in'>
                 <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

              <form onSubmit={this.handleSubmit}>
                  <FormInput name='email'
                             type='text'
                             value={this.state.email}
                             handleChange={this.onHandleChange}
                             label='email'
                             required/>
                  <FormInput name='password'
                             type='password'
                             value={this.state.password}
                             handleChange={this.onHandleChange}
                             label='password'
                             required/>
                             <div className='buttons'>
                                 <CustomButton type='submit'>Sign in </CustomButton>
                                 <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign it with Google </CustomButton>
                             </div>

              </form>

            </div>
        )
    }
}
export default SignIn;
