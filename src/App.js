import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
            <Switch>
              <Route path="/" exact>
                <HomeScreen />
              </Route>
            </Switch>
          )}
      </BrowserRouter>
    </div>
  );
}

export default App;
