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

 
  

  doc: {
    marginTop: "7rem",
    width: "60%",
    marginLeft: "35rem",
  },
  paragraph2: {
    width: "30%",
    marginLeft: "10rem",
    marginTop: "10rem",
    fontSize: 30,
  },

  prohealth: {
    position: "absolute",
    marginLeft: "6rem",
    marginTop:"4rem",
  },
  professionels: {
    display: "flex",
    flexDirection: "row",
    backgroundImage: "linear-gradient(-45deg, #008E94 20%, #6EBEC2 100%)",
     marginLeft: "-0.5rem",
    marginRight: "-0.5rem",
    paddingBottom:"10rem",
    marginTop: "-0.5rem",
    // width:"100%",
  },

  titrePro: {
    marginLeft: "3rem",
    position: "absolute",
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

  title2: {
    paddingTop: "5rem",
    width: "20%",
    marginLeft: "40rem",
    fontSize: "35px",

    borderBottom: "3px solid #196794",
  },

  subparagraph: {
    marginLeft: "3rem",
    opacity: "0.7",
    fontSize: "18px",
  },
  details: {
    marginTop: "10rem",
  },
  icon: {
    fontSize: "30px",
    paddingRight: "1rem",
    color: "#0D6C70",
  },

 
  h: {
    fontSize: "20px",
  },
});

function EspacePro() {
  const classes = useStyles();
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section className={classes.professionels}>
        <div className={classes.prohealth}>

          <div className="details" data-aos="fade-right">
            <h2 className={classes.h}>
              {" "}
              <FaStethoscope className={classes.icon} /> Equipements et
              materiaux medicaux professionels
            </h2>
            <p className={classes.subparagraph}>
              Commandez tout l'équipement médical dont vous avez besoin. <br />{" "}
              Idéal pour les cabinets, cliniques et hôpitaux; vous pouvez
              trouver <br /> des matériaux neufs ou en bon état vendu par des
              professionels.
            </p>
            <h3 className={classes.h}>
              <FaUserNurse className={classes.icon} />
              Selon vos besoins et spécialités
            </h3>
            <p className={classes.subparagraph}>
              Les gammes de matériaux vont de la médecine généraliste <br /> au
              diagnostic spécialisé
            </p>
            <h4 className={classes.h}>
              <FaExchangeAlt className={classes.icon} />
              On vous offre la possibilité d'acheter et de vendre
            </h4>
            <p className={classes.subparagraph}>
              Sur notre espace pro, vous pouvez vendre vos matériaux et <br />{" "}
              en trouver d'autres. Achetez tous les dispositifs nécessaires{" "}
              <br /> pour équiper votre cabinet, ou mettez en vente vos anciens
              <br /> équipements.{" "}
            </p>
          </div>
          {/* <button className={classes.discover}>
    Découvrir <MdOutlineArrowForwardIos className={classes.arrow} />{" "}
  </button> */}
        </div>

        <img
          /*className={classes.doc}*/ className="pic"
          src={propic}
          alt="Background picture"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </section>
    </div>
  );
}
export default EspacePro;
