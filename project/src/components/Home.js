import React from "react";
import { Button } from "@material-ui/core";
import "../design.css";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import arriereplan from '../images.jpg/arriereplan.png';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const useStyles = makeStyles({
  btn: {
    width: 200,
    padding:50,
    height: 50,
    border: "solid",
    borderRadius: 10,
    color: "white",
    transition: "ease-out 3s",
    marginLeft: 70,
    marginTop: 300,
    transition: "color 0.5s linear",
    fontFamily: 'Philosopher, sans-serif',
    fontSize: 19,
    fontWeight:'bold',
    float:"right",
    "&:hover": {
      cursor: "pointer",
      color: "white",
      backgroundColor:'#2F4F4F',
      borderColor:"#E6E6FA",
      backgroundColor:"#9370DB",
      
    },
  },

  icon: {
    position:'absolute',
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
  pic:{
    marginTop:-380,
    height:700,
    marginLeft: -200,
  },

  login:{
    textDecoration:'none',
    color:'white',
    marginLeft:40,
    backgroundColor:'black',
    borderRadius:30,
    padding:10,
    fontSize:15,
    "&:hover": {
      cursor: "pointer",
      
    },
  },
  signup:{
    textDecoration:'none',
    outline:'black',
    color:'white',
    marginLeft:40, 
    backgroundColor:'black',
    borderRadius:30,
    padding:10,
    fontSize:15,
    borderColor:'white',
    "&:hover": {
      cursor: "pointer",
      
      
    },
    
  },
  
});

function Home() {
  const history = useHistory();
  const classes = useStyles();
  return (
    
    <div>
<nav className={classes.nav}>
  <a className={classes.login} href="Login"><BiLogIn /> Se connecter</a>
  
  <a  className={classes.signup} href="Inscription"><MdPersonAddAlt1 /> S'inscrire</a>
  
  </nav>

      {/* <span onClick={() => {
                    history.push(`/Login`);
                  }}  className={classes.icon}>
        {" "}
        <BiLogIn /> Se connecter
      </span>
      <span onClick={() => {
                    history.push(`/Inscription`);
                  }} className={classes.icon}>
        {" "}
        <MdPersonAddAlt1 /> S'inscrire
      </span> */}
      <Button className={classes.btn} variant="outlined" size="large">
        Matériel d'incontinence
      </Button>
      <Button className={classes.btn} variant="outlined" size="large">
        Matériel professionel
      </Button>
      <Button className={classes.btn} variant="outlined" size="large">
        Matériel medical
      </Button>

      

      

      
      <img className={classes.pic} src={arriereplan} alt="girl"/>
      
      
      
    </div>
  );
}

export default Home;