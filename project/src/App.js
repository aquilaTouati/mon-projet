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
import Footer from "./components/Footer";
import EspacePro from "./components/EspacePro";
import Apropos from "./components/Apropos";
import Particuliers from "./components/Particuliers";
import Data from "./data.json";

function App() {
  const [productsList, setProductsList] = useState([]);
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
        <Route exact path="/EspacePro">
          <Navbar />
        </Route>
        <Route exact path="/EspacePro">
          <EspacePro />
        </Route>
        <Route exact path="/Apropos">
          <Navbar />
        </Route>
        <Route exact path="/Apropos">
          <Apropos />
        </Route>
        <Route exact path="/Particuliers">
          <Navbar/>
        </Route>
        <Route exact path="/Particuliers">
          <Particuliers/>
        </Route>
        <Route exact path="/Inscription">
          <Navbar />
        </Route>
        <Route exact path="/Inscription">
          <Inscription />
        </Route>
        <Route exact path="/Connection">
          <Connection />
        </Route>
        <Route exact path="/Materiel">
          <Header />
        </Route>
        <Route exact path="/Profile">
          <Header />
        </Route>
        <Route exact path="/Profile">
          <Profile productsList={productsList} />
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
      <Footer />
    </div>
  );
}

export default App;
