import React from "react";
import { useState } from "react";
//  import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Register from './components/Register';
import Home from "./components/Home";
import Inscription from "./components/Inscription";
import Connection from "./components/Connection";
import Profile from "./components/Profile";
import Vente from "./components/Vente";
import Location from "./components/Location";
import { Preview } from "./components/Preview";
import { ToastContainer } from "react-toastify";
import Dons from "./components/Dons";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles) => {
    setFiles(savedFiles);
  };

  return (
    <div>
      <Router>
        {/* <Switch> */}
        <Route exact path="/">
          <Navbar />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Inscription">
          <Inscription />
        </Route>
        <Route exact path="/Connection">
          <Connection />
        </Route>
        <Route exact path="/Profile">
          <Header />
        </Route>
        <Route exact path="/Profile">
          <Profile />
        </Route>
        <Route exact path="/Vente">
          <Header />
        </Route>
        <Route exact path="/Dons">
          <Header />
        </Route>
        <Route exact path="/Location">
          <Header />
        </Route>
        
        <Route exact path="/Dons">
          <Dons />
        </Route>
        <Route exact path="/Vente">
          <Vente onSuccess={onSuccess} />
        </Route>
        <Route exact path="/Location">
          <Location />
        </Route>
        <Preview files={files} />
        <ToastContainer />

        {/* </Switch> */}
      </Router>
      {/* Second router */}
    </div>
  );
}

export default App;
