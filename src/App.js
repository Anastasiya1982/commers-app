import React from 'react';
import './App.scss';
import {HomePage} from "./pages/homepage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/Header/Header";
import SighIn from "./pages/signhInPage/SignInPage";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
    constructor() {
        super();
        this.state={
            currentUser:null
        }
    }

   unsubscribeFromAuth=null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
               if(userAuth){
                   const userRef=await createUserProfileDocument(userAuth)
                 userRef.onSnapshot(snapShot => {
                     this.setState({
                         currentUser:{
                             id:snapShot.id,
                             ...snapShot.data()
                         }
                     });
                 });
               }
               this.setState({
                   currentUser:userAuth
               });
            }
        )
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SighIn}/>
                    <Route exact path='/' component={HomePage}/>
                </Switch>
            </div>
        );
    }


}

export default App;


