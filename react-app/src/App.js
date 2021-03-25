import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import NavSide from "./components/NavSide";
// import { authenticate } from "./services/auth";

import Splash from "./components/SplashPage";
import Profile from './components/ProfilePage'
import LandingPage from "./components/LandingPage";
import { useDispatch } from "react-redux";
import { restoreUser } from "./store/session";



function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await dispatch(restoreUser())
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>

      {/* <NavBar setAuthenticated={setAuthenticated} /> */}

      <div className='app__body'>

        <NavSide />
        <div className='app__main'>

          <Switch>

            <Route path='/' exact={true}>
              {authenticated && <LandingPage />}
              {!authenticated && (
                <Splash
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
              )}
            </Route>

            <ProtectedRoute path="/profile/:id" exact={true} authenticated={authenticated}>
              <Profile />
            </ProtectedRoute>

            <Route path="/login" exact={true}>
              <LoginForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>

            <Route path="/sign-up" exact={true}>
              <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>

            <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
              <UsersList/>
            </ProtectedRoute>

            <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
              <User />
            </ProtectedRoute>

            {/* <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
              <h1>My Home Page</h1>
            </ProtectedRoute> */}

          </Switch>


        </div>

      </div>


      

    </BrowserRouter>
  );
}

export default App;
