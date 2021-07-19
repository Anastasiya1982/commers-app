import React from 'react';
import './App.css';
import {HomePage} from "./pages/homepage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/' component={HomePage}/>
            </Switch>
        </div>
    );
}

export default App;


