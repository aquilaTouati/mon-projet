import React, { useEffect } from "react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { GoSearch} from "react-icons/go";
import { RiRecycleLine} from "react-icons/ri";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import matériel from "../images.jpg/Matériel médical.png";
const useStyles = makeStyles({

  div:{
    display: "flex",
    flexDirection: "row",
    color:"white"

  },
  
 
  page:{
    backgroundImage: "linear-gradient(-15deg,#1B969B 0%, #1B969B 100% )",
    marginTop:"-0.5rem",
    marginRight:"-0.5rem",
    marginLeft:"-0.5rem",
    paddingBottom:"5rem",
  },
  box:{
  width:"45%",
  marginLeft:"9rem"
  },
  box1:{
    width:"45%",
    marginTop:"8rem",
    marginLeft:"9rem"
  },
  h:{
    fontSize:"25px"
  },
  i:{
    fontSize: "37px",
    paddingRight: "1rem",
    color: "#325769",
    marginLeft:"-3rem",
  },
  materiel:{
    position:"absolute",
    marginTop:"-35rem",
    marginLeft:"53rem",
    width:"85%"
  },
  p:{
    opacity: "0.7",
    fontSize: "19px",
  },
 

});

function EspacePro() {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.page}>
    
    <div className="content">
      <div className={classes.div} >
        <div className={classes.box1} >
          <h1 className={classes.h}> <GoSearch className={classes.i}/>Vous avez besoin d'un equipement médical?</h1>
          <p className={classes.p}>
            Faites votre recherche sur le site et trouvez toutes les catégories des matériaux médicaux. Achetez, louez, ou bénéficiez d'un don selon vos besoins.
          </p>
        </div>
      </div>
     
      <div className={classes.div} >
    
        <div  className={classes.box}>
          <h2 className={classes.h}><RiRecycleLine className={classes.i}/>Vous n'avez plus besoin de votre fauteuil roulant? ou tout autre équipement médical durable?</h2>
          <p className={classes.p}>
          Donner une nouvelle vie à du matériel inutilisé, neuf, ou destiné à être jeté à ceux qui n'auraient pas les moyens de s'équiper autrement. 
          </p>
        </div>
        {/* <img className={classes.image3} src={help} alt="Background picture" /> */}
      </div>
      <div className={classes.div} >
      {/* <img className={classes.image1} src={annonce} alt="Background picture" /> */}
        <div  className={classes.box} >
          <h3 className={classes.h}><MdOutlineAttachMoney className={classes.i}/>Vous voulez vous sentir utile tout en gagnant de l'argent?</h3>
          <p className={classes.p}>
            Vendez ou louez votre matériel. Cela vous permetra de réaliser des économies et surtout éviter de vous encombrer avec un fauteuil roulant ou un lit médicalisé non utilisé par exemple.
          </p>
        </div>
       
      </div>
      </div>
    
        <img className="materiel"  data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" src={matériel} alt="Background " /> 
    </div>
   
  );
}
export default EspacePro;
