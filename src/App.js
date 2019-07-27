import React from 'react';
import './App.css';
import { Switch , Route } from "react-router-dom";



import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up'
import HomePage from './component/directory';
import ShopPage from './component/pages/shop-page'
import  Header from './component/header/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route  path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
      </div>

  );
}

export default App;
