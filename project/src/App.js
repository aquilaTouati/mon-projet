
import React from "react";
//  import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Register from './components/Register';
import Home from './components/Home';
import Inscription from './components/Inscription';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  return (
    
    <div>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Inscription">
            <Inscription />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
