import React from "react";
import { BsSearch } from "react-icons/bs";
import "../styles.css/design.css";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GiPerson } from "react-icons/gi";
import { FaUserNurse } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import design from "../images.jpg/design.png";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";

const useStyles = makeStyles({
 
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
    fontSize: 17,
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
    fontSize: 17,
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
        
          <Link to='/' className={classes.nav}>
            <AiFillHome /> Acceuil</Link>
          
          <Link className={classes.nav}>
            <RiQuestionnaireFill /> A propos de nous</Link>
         
          <Link className={classes.nav}>
            <GiPerson />
            Particuliers</Link>
        
          <Link className={classes.nav} >
            <FaUserNurse /> Professionels de la santé
            </Link>
          <div className={classes.searchBox}>
            <input
              className={classes.searchTxt}
              type="text"
              name=""
              placeholder="Recherche par produit"
            />
            <Link className={classes.searchBtn} >
              <BsSearch />
              </Link>
          </div>
      </nav>
      <div className={classes.main}>
        <img className={classes.pic} src={design} alt="Background picture" />
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
