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
 
  apropos: {
    width:"35%",
    fontSize: "20px",
    marginTop: "13rem",
    marginLeft: "5rem",
  },
 
  story: {
    display: "flex",
    flexDirection: "row",
     backgroundImage: "linear-gradient(-45deg, #C4CCD6 20%, #9099C4 100%)",
     marginLeft: "-0.5rem",
    paddingRight: "1rem",
    width:"100%",
    marginTop: "-0.5rem",
    paddingBottom:"15rem",
  },

  team: {
    width: "40%",
    marginTop: "12rem",
    marginLeft: "15rem",
 
  },

  
});

function Apropos() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <section id="apropos" className={classes.story}>
        <p className={classes.apropos} data-aos="fade-right">
          {" "}
          Face aux conséquences dramatiques de la crise sanitaire ainsi que les
          derniers incendies qu’a connu le pays, des centaines de personnes sont
          décédées a cause du manque de matériaux médicaux et paramédicaux.
          <br />
          <br /> Nous avons donc décidé de créer ce site qui a pour but de
          garantir aux patients ainsi que les professionnels de la santé un
          accès facile et rapide aux dispositifs médicaux essentiels.
          <br />
          <br /> De plus, nous essayons de favoriser un système d’entraide en
          vous permettant de donner une seconde vie a vos matériaux usagés ou
          neufs, en les vendant, les louant, ou même aussi en les donnant. Ca
          peut être un fauteuil roulant, un appareil auditif, un stéthoscope ou
          tout autre équipement médical durable.{" "}
        </p>

        <img className={classes.team} src={team} alt="Background picture"  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"  />
      </section>
    </div>
  );
}

export default Apropos;
