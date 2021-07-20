import React from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth }  from '../../firebase/firebase.utils';
import {connect} from "react-redux";


const Header=({ currentUser })=>{
    return(
        <div className='header'>
            <Link  className ='logo-container' to='/'>
                   <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link  className='option' to='/shop'>SHOP</Link>
                <Link  className='option' to='/contacts'>CONTACTS</Link>
                {currentUser
                    ? <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>
                    : <Link  className='option' to='/signIn'>SIGNIN</Link>
                }
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);
