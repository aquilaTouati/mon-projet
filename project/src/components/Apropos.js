import React from "react";
import { makeStyles } from "@material-ui/core";
import team from "../images.jpg/team.png";
import "../styles.css/design.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";

const useStyles = makeStyles({
 
  apropos: {
    width:"80%",
    fontSize: "20px",
    marginTop: "10rem",
    marginLeft: "5rem",
    paddingTop:"2rem",
  },
 
  story: {
    display: "flex",
    flexDirection: "row",
    backgroundImage: "linear-gradient(-15deg,#1B969B 0%, #1B969B 100% )",
     marginLeft: "-0.5rem",
    paddingRight: "1rem",
    width:"100%",
    marginTop: "-0.5rem",
    paddingBottom:"15rem",
    backgroundColor:"white",
    
  },
  container:{
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    backgroundColor:"white",
    width:"50%",
    marginLeft: "26rem",
    borderRadius:10,
    paddingBottom:"2rem",
    opacity:"0.5",
  },

  team: {
    width: "40%",
    marginTop: "12rem",
    marginLeft: "25rem",
 
  },

  
});

function Apropos() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={classes.story}>
      <section id="apropos" >
      <div className={classes.container}>
        <p className={classes.apropos} data-aos="fade-right">
          {" "}
          Face aux conséquences dramatiques de la crise sanitaire ainsi que les
          derniers incendies qu’a connu le pays, des centaines de personnes sont
          décédées a cause du manque de matériaux médicaux et paramédicaux.
          
           Nous avons donc décidé de créer ce site qui a pour but de
          garantir aux patients ainsi que les professionnels de la santé un
          accès facile et rapide aux dispositifs médicaux essentiels.
          <br />
          <br /> De plus, nous essayons de favoriser un système d’entraide en
          vous permettant de donner une seconde vie a vos matériaux usagés ou
          neufs, en les vendant, les louant, ou même aussi en les donnant. Ca
          peut être un fauteuil roulant, un appareil auditif, un stéthoscope ou
          tout autre équipement médical durable.{" "}
        </p>

        </div>
      </section>
    </div>
  );
}

export default Apropos;
