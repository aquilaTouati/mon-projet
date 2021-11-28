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
import sick from "../images.jpg/sick.png";
import help from "../images.jpg/help.png";
import annonce from "../images.jpg/annonce.png";
const useStyles = makeStyles({
  image: {
    width: "40%",
    marginTop:"3rem",
    marginLeft:"8rem",
    position:"absolute",
  },
  image1:{
      marginLeft:"48rem",
      marginTop:"2rem",
      width: "45%",
      position:"absolute",
  },
  div: {
    display: "flex",
    flexDirection: "row",

  },
  
  paragraph1:{
      marginTop:"10rem",
      marginLeft:"45rem",
      width:"40%"
  },
  paragraph2:{
    marginTop:"8rem",
    marginLeft:"6rem",
    width:"40%"
  },
  paragraph3:{
    marginTop:"9rem",
    width:"40%",
    marginLeft:"5rem",
    paddingBottom:"5rem",
  },
  page:{
    backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #9DA5C8 100% )",
    marginTop:"-0.5rem",
    marginRight:"-0.5rem",
    marginLeft:"-0.5rem",
  }
});

function EspacePro() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <div className={classes.div}>
        <img className={classes.image} src={sick} alt="Background picture" />
        <div className={classes.paragraph1}>
          <h1>Vous ou vos proches avez besoin d'un equipement médical?</h1>
          <p>
            Faites votre recherche sur le site et trouvez toutes les catégories des matériaux médicaux. Vous avez 3 options: Acheter, louer, ou bénéficier d'un don selon vos besoins. Notre but est de vous mettre en relation avec les personnes qui désirent donner une seconde vie a leurs équipements. 
          </p>
        </div>
      </div>
      <div className={classes.div}>
        
        <div className={classes.paragraph2}>
          <h1>Vous voulez vous sentir utile tout en gagnant de l'argent?</h1>
          <p>
            Vendez ou louez votre matériel. Cela vous permetra de réaliser des économies et surtout éviter de vous encombrer avec un fauteuil roulant ou un lit médicalisé non utilisé par exemple.
          </p>
        </div>
        <img className={classes.image1} src={annonce} alt="Background picture" />
      </div>
      <div className={classes.div}>
      <img className={classes.image3} src={help} alt="Background picture" />
        <div className={classes.paragraph3}>
          <h1>Vous n'avez plus besoin de votre fauteuil roulant? de vos béquilles? ou tout autre équipement médical durable?</h1>
          <p>
          Donner une nouvelle vie à du matériel inutilisé, neuf, ou destiné à être jeté à ceux qui n'auraient pas les moyens de s'équiper autrement. 
          </p>
        </div>
       
      </div>
    
    </div>
  );
}
export default EspacePro;
