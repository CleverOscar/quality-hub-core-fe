import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import NavBar from "./components/NavBar";

import "./global/index.scss";

function App() {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <div className="App">
      <NavBar loggedin={loggedin} setLoggedin={setLoggedin} />
      <Switch>
        <Route exact path="/" render={props => <LandingPage {...props} />} />
        <Route
          path="/signin"
          render={props => (
            <SignInForm
              {...props}
              loggedin={loggedin}
              setLoggedin={setLoggedin}
            />
          )}
        />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;