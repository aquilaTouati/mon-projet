import React from "react";
import { MdPersonAddAlt1, MdOutlineArrowForwardIos } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { FaUserNurse, FaStethoscope, FaExchangeAlt } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import design from "../images.jpg/mainbackground.png";
import propic from "../images.jpg/propic.png";
import team from "../images.jpg/team.png";
import "../styles.css/design.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import shape2 from "../images.jpg/shape2.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import trait2 from "../images.jpg/trait2.png";

const useStyles = makeStyles({
  shape: {
    marginLeft: "-0.5rem",
    marginTop: "-0.5rem",
    marginRight: "-0.5rem",
  },
  pic: {
    height: 800,
    marginLeft: "-12rem",
    marginTop: "-31rem",

    position: "relative",
  },

  login: {
    marginTop: 30,
    textDecoration: "none",
    color: "white",
    marginLeft: "-9rem",
    backgroundColor: "#099399",
    borderRadius: 30,
    padding: 10,
    position: "relative",
    marginTop: "5.4rem",
    fontSize: 17,
    float: "right",
    transition: "0.1s",
    "&:hover": {
      cursor: "pointer",
      transform: "skew(30deg)",
    },
  },

  signup: {
    marginTop: 30,
    textDecoration: "none",
    outline: "black",
    color: "white",
    marginRight: "13rem",
    backgroundColor: "#8893A2",
    borderRadius: 30,
    padding: 12,
    fontSize: 17,
    position: "relative",
    marginTop: "5.4rem",
    transition: "0.1s",
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
    fontSize: 20,
    position: "relative",
    marginLeft: "-8rem",
    color: "white",
  },

  
  paragraph2: {
    width: "30%",
    marginLeft: "10rem",
    marginTop: "10rem",
    fontSize: 30,
  },
  main: {
    display: "flex",
    alignContent: "center",
  },


  

  title: {
    marginTop: "-25rem",
    marginLeft: "-8rem",
    fontSize: 40,
    color: "white",
    position: "relative",
  },

  div: {
    marginTop: "-57rem",
    position: "absolute",
    marginLeft: "20rem",
  },
 


  arrow: {
    marginBottom: "-0.2rem",
  },
  h:{
    fontSize:"20px"
  },

  
});

function Home() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <img className={classes.shape} src={shape2} alt="Background picture" />
      <div className={classes.main}>
        <img className={classes.pic} src={design} alt="Background picture" />

        <div>
          {/* framer-motion animation */}{" "}
          <motion.h1
            initial={{ x: 100 }}
            animate={{ opacity: 5, x: 0 }}
            transition={{ /*repeat: Infinity,*/ duration: 1 }}
          >
            <h1 className={classes.title}>
              Cherchez et trouvez tous <br /> les équipements médicaux
              <br /> nécessaires en un seul clic.
            </h1>
          </motion.h1>{" "}
          {/* framer-motion animation */}
          <p className={classes.paragraph}>
            Copharma vous aidera a acheter, vendre,
            <br /> donner, et louer des matériaux médicaux <br />
            neufs ou reconditionnés.
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
