import React from 'react';
import './App.css';
import {HomePage} from "./pages/homepage/HomePage";
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shoppage/ShopPage";

function App() {
  return (
      <Switch>
         <Route  path='/shop' component={ShopPage}/>
         <Route exact path='/' component={HomePage}/>
      </Switch>
  );
}

export default App;


