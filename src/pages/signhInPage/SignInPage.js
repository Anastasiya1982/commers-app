import React from 'react';
import './SignhInPage.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from "../../components/SignUp/SignUp";

const  SighInPage=()=>{
    return(
        <div className='sign-in-and-register'>
          <SignIn/>
          <SignUp/>
        </div>
    )
}
export default SighInPage;
