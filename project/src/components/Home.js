import React from "react";
import { Button } from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import "../design.css";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GiPerson } from "react-icons/gi";
import { FaUserNurse } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import arriereplan from "../images.jpg/arriereplan.png";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    width: 200,
    padding: 50,
    height: 50,
    border: "solid",
    borderRadius: 10,
    color: "white",
    transition: "ease-out 3s",
    marginLeft: 70,
    marginTop: 300,
    transition: "color 0.5s linear",
    fontFamily: "Philosopher, sans-serif",
    fontSize: 19,
    fontWeight: "bold",
    float: "right",
    "&:hover": {
      cursor: "pointer",
      color: "white",
      backgroundColor: "#2F4F4F",
      borderColor: "#E6E6FA",
      backgroundColor: "#9370DB",
    },
  },

  icon: {
    position: "absolute",
    fontSize: "50",
    color: "white",
    marginLeft: 50,
    marginRight: 50,
    transition: "ease-out 3s",
    transition: "color 0.1s linear",

    "&:hover": {
      cursor: "pointer",
      transform: "skew(10deg)",
    },
  },
  pic: {
    height: 900,
    marginLeft: -200,
  },

  login: {
    marginTop:30,
    textDecoration: "none",
    color: "white",
    marginLeft: 40,
    backgroundColor: "#099399",
    borderRadius: 30,
    padding: 10,
    fontSize: 15,
    float: "right",
    transition: '0.1s',
    "&:hover": {
      cursor: "pointer",
      transform: "skew(30deg)",
    },
  },

  signup: {
    marginTop:30,
    textDecoration: "none",
    outline: "black",
    color: "white",
    marginLeft: -150,
    backgroundColor: "#8893A2",
    borderRadius: 30,
    padding: 12,
    fontSize: 15,
    borderColor: "white",
    transition: '0.1s',
    float: "right",
    "&:hover": {
      cursor: "pointer",
      transform: "skew(30deg)",
    },
  },
  main: {
    display: "flex",
    alignContent: "center",
  },
  paragraph: {
    marginLeft:-220,
    fontSize:20,
    
  },
  nav: {
    textDecoration: "underline",
    transition: "1s",
    marginLeft: 30,
    color: "black",
    fontSize: 18,
    "&:hover": {
      cursor: "pointer",
    },
  },
  searchBox: {
    position: "absolute",
    top: 30,
    left: 1200,
    transform: "translate(-50%,-50%)",
    background: "#2C4D5B",
    height: 40,
    borderRadius: 40,
    paddingLeft: 40,
    paddingRight: 40,
    transition: "0.1s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor:'#BACAD9',
    },
  },
  searchBtn: {
    color: "white",
    float: "right",
    wdith: 40,
    height: 40,
    borderRadius: 50,
    background: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize:30,
  },
  searchTxt: {
    border: "none",
    background: "none",
    outline: "none",
    float: "left",
    padding: 0,
    color: "white",
    lineHeight: 3,
  },
  navBar:{
    display: "flex",
    alignContent: "center",
  },
  title:{
    marginTop:150,
    marginLeft:-230,
    fontSize:40,
  }
});

function Home() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <nav>
        
          <a className={classes.nav} href="Home">
            <AiFillHome /> Acceuil
          </a>
          <a className={classes.nav} href="#">
            <RiQuestionnaireFill /> A propos de nous
          </a>
          <a className={classes.nav} href="#">
            <GiPerson />
            Particuliers
          </a>
          <a className={classes.nav} href="#">
            <FaUserNurse /> Professionels de la santé
          </a>
          <div className={classes.searchBox}>
            <input
              className={classes.searchTxt}
              type="text"
              name=""
              placeholder="Recherche par produit"
            />
            <a className={classes.searchBtn} href="#">
              <BsSearch />
            </a>
          </div>
      </nav>

      {/* <Button className={classes.btn} variant="outlined" size="large">
        Matériel d'incontinence
      </Button>
      <Button className={classes.btn} variant="outlined" size="large">
        Matériel professionel
      </Button>
      <Button className={classes.btn} variant="outlined" size="large">
        Matériel medical
      </Button> */}

      <div className={classes.main}>
        <img className={classes.pic} src={arriereplan} alt="girl" />
        <div>
        <h1 className={classes.title}>Cherchez et trouvez tous <br/> les équipements médicaux<br/>   nécessaires en un seul clic.</h1>
        <p className={classes.paragraph}>
          Ce site vous aide a acheter, vendre,<br/> donner, et louer des matériaux médicaux <br/>neufs ou reconditionnés.
        </p>
        <a className={classes.login} href="Login">
          <BiLogIn /> Se connecter
        </a>

        <a className={classes.signup} href="Inscription">
          <MdPersonAddAlt1 /> S'inscrire
        </a> 
        </div>
      </div>
    </div>
  );
}

export default Home;
