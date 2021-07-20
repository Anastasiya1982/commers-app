import React from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/Header/Header";
import SighIn from "./pages/signhInPage/SignInPage";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";


class App extends React.Component {

   unsubscribeFromAuth=null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
               if(userAuth){
                   const userRef=await createUserProfileDocument(userAuth)
                 userRef.onSnapshot(snapShot => {
                   this.props.setCurrentUser({
                             id:snapShot.id,
                             ...snapShot.data()
                     });
                 });
               }
               this.props.setCurrentUser({userAuth});
            }
        )
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SighIn}/>
                    <Route exact path='/' component={HomePage}/>
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);


