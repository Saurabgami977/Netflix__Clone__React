import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
    });
    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
            <Switch>
              <Route path="/profile" exact>
                <ProfileScreen />
              </Route>
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
