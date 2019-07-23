import React from 'react';
import './App.css';
import { Switch , Route } from "react-router-dom";



import HomePage from './component/directory';
import ShopPage from './component/pages/shop-page'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
      </div>

  );
}

export default App;
