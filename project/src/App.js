import React, { useState } from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import Location from "./components/Location";
import { ToastContainer } from "react-toastify";
import Dons from "./components/Dons";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EspacePro from "./components/EspacePro";
import Apropos from "./components/Apropos";
import Particuliers from "./components/Particuliers";
import "./index.css";
import Posts from "./components/posts/Posts";
import Form from "./components/Form";
function App() {
  // const [productsList, setProductsList] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  // const [products, setProducts] = useState(Data);
  // const onSuccess = (savedSelectedFile) => {
  //   setSelectedFile(savedSelectedFile);
  // };

  const [currentId, setCurrentId] = useState(0);
  // const dispatch = useDispatch();
  
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [currentId, dispatch]);

  return (
    <div>
      <Router>
        {/* <Switch> */}
        <Route exact path="/">
          <Navbar /*setProducts={setProducts} products={Data}*/ />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

       

        <Route exact path="/Posts">
          <Header searchTerm={searchTerm}  setSearchTerm={setSearchTerm} />
        </Route>

        <Route exact path="/Posts">
          <Posts searchTerm={searchTerm} setCurrentId={setCurrentId} selectedFile={selectedFile} />
        </Route>

        <Route exact path="/Form">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
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
          <Navbar />
        </Route>
        <Route exact path="/Particuliers">
          <Particuliers />
        </Route>
        
        <Route exact path="/Auth">
          <Navbar />
        </Route>
        <Route exact path="/Auth">
          <Auth />
        </Route>
        <Route exact path="/Materiel">
          <Header />
        </Route>
        <Route exact path="/Profile">
          <Header />
        </Route>
        <Route exact path="/Profile">
          <Profile /*productsList={productsList}*/ />
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
        
        <Route exact path="/Location">
          <Location />
        </Route>
        <ToastContainer />

        {/* </Switch> */}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
