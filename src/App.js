import React from 'react';
import './App.css';
import {HomePage} from "./pages/homepage/HomePage";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
      <Switch>
         <Route  path='/hats' component={HatsPage}/>
         <Route exact path='/' component={HomePage}/>
      </Switch>
  );
}

export default App;

export const HatsPage = () => {
  return (
      <div>
        <h1>HatsComponents</h1>
      </div>
  )

}
