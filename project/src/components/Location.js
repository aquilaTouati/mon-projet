import React from "react";
import { makeStyles } from "@material-ui/core";
import { FiSearch } from "react-icons/fi";
import { FaHandHoldingMedical } from "react-icons/fa";


const useStyles = makeStyles({
  page: {
    backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #266D70 100% )",
    height: "50rem",
    marginRight: "-0.5rem",
    marginLeft: "-1rem",
    marginTop: "-5rem",
    paddingBottom: "8rem",
  },

  searchBox: {
    position: "absolute",
    marginTop: "-0.7rem",
    left: 1000,
    transform: "translate(-50%,-50%)",
    background: "#CAE5E6",
    borderRadius: 15,
    height: 40,
    paddingLeft: 90,
    paddingRight: 10,
    transition: "0.1s",

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#BACAD9",
    },
  },
  loupe: {
    color: "#618E8F",
    float: "right",
    marginLeft: 20,
    wdith: 40,
    height: 40,
    fontSize: 30,
    background: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchTxt: {
    border: "none",
    background: "none",
    outline: "none",
    float: "left",
    padding: 0,
    color: "white",
    lineHeight: 3,
    color: " black",
  },

  buy: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#BACAD9",
    },
  },
  icons: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: -30,
    marginRight: 20,
    color: "white",
  },

  container: {
    marginLeft: "27rem",
    color: "white",
    // boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
    paddingLeft: "7rem",
    paddingRight: "7rem",
    position: "absolute",
    marginTop: "10rem",
    borderRadius: 10,
    backgroundColor: "rgb(0,0,0,0.3)",
  },
  label: {
    fontSize: "20px",

    // display: "block",
  },

  inputLabel: {
    display: "flex",
    flexDirection: "row",

    marginBottom: 30,
  },
  // label2:{
  //   marginLeft:70,
  //   fontSize: 25,
  // },
  ville: {
    marginLeft: "2rem",
    fontSize: "20px",
  },

  alger: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid white",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    width: "34%",
    color: "white",
    marginLeft: "1rem",
  },

  informations: {
    border: "none",
    // background: "none",
    outline: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    marginLeft: "1rem",
    width: "63%",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    borderRadius: 5,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#BACAD9",
      border: "none",
    },
  },

  pic: {
    width: "50%",
    float: "right",
    marginBottom: "-6rem",
    marginTop: "8rem",
    marginRight: "-4rem",
  },
  etat: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid white",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    marginLeft: "1rem",
    width: "20%",
    color: "white",
  },
  nom: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid white",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    marginLeft: "1rem",
    width: "51%",
    color: "white",
  },
  categorie: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid white",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    marginLeft: "1rem",
    color: "white",
    width: "47%",
  },
  prix: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid white",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    color: "white",
    marginLeft: "1rem",
    width: "54%",
  },

  file: {
    fontSize: 15,
    // marginLeft: 35,
    width: "50%",
    marginLeft: "5em",
    marginTop: 8,
  },
  button: {
    marginLeft: "4.5em",
    marginBottom: "2rem",
    fontSize: 20,
    backgroundColor: "#1A9B9F ",
    borderRadius: "10px",
    fontFamily: "Poppins, sans-serif",
    transition: "ease-out 0.4s",
    border: "none",
    width: "65%",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "inset 371px 0 0 0 #0E2F5B",
      color: "white",
    },
  },
  title: {
    paddingBottom: "0.5rem",
  },
  option: {
    color: "black",
  },
});
function Location() {
  const classes = useStyles();


  return (
    <div className={classes.page}>
        <div className={classes.searchBox}>
              <input
                className={classes.searchTxt}
                type="text"
                name=""
                placeholder="Recherche par produit"
                
                
               
              />
             
              <a className={classes.loupe} href="posts">
                <FiSearch />
              </a>
            </div>
      <div className={classes.container}>
      <div>
      
      </div>
        <h1 className={classes.title}>
          Mettre un article en location <FaHandHoldingMedical />
        </h1>
        <p className={classes.title}></p>
        <div className={classes.inputLabel}>
          <label className={classes.label}>Nom du matériel:</label>
          <input className={classes.nom} type="name" />
        </div>
        <div className={classes.inputLabel}>
          <label className={classes.label}>Choisir la catégorie:</label>
          <select className={classes.categorie}>
            <option> Matériel Médical</option>
            <option> Matériel Professionel</option>
            <option> Produit d'incontinence</option>
          </select>
        </div>

        <div className={classes.inputLabel}>
          <label className={classes.label}>Prix du matériel:</label>
          <input className={classes.prix} type="" placeholder="Da/semaine" />
        </div>

        <div className={classes.inputLabel}>
          <label className={classes.label}>Etat:</label>
          <select className={classes.etat}>
            <option>Neuf</option>
            <option> Bon etat</option>
            <option> Etat moyen</option>
            <option> Reconditionné</option>
          </select>

          <label className={classes.ville}>Wilaya:</label>
          <select className={classes.alger}>
            <option> Alger </option>
          </select>
        </div>
        <div className={classes.inputLabel}>
          <label className={classes.label}>Description:</label>
          <input className={classes.informations} type="message" />
        </div>

        <div>
          <form
            className={classes.inputLabel}
            method="post"
            
          >
            <label className={classes.label}>Inserez une photo: </label>
            <input
              className={classes.file}
              type="file"
            
            />
          </form>

          <button type="submit" className={classes.button}>
            {" "}
            Ajouter{" "}
          </button>
        </div>
      </div>

      {/* <img src className={classes.pic} src={form} alt="Background picture" />  */}
    </div>
  );
}

export default Location;
