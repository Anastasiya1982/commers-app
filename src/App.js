import React from 'react';
import './App.css';
import {HomePage} from "./pages/homepage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/Header/Header";
import SighIn from "./pages/signhInPage/SignInPage";
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
    constructor() {
        super();
        this.state={
            currentUser:null
        }
    }

   unsubscribeFromAuth=null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
                this.setState({
                    currentUser:user
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


