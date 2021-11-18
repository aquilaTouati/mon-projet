import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Fade } from "@material-ui/core";
import { MdAddCircle } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import form from "../images.jpg/form.png";
import ReactDOM from "react-dom";

const useStyles = makeStyles({
  page: {
    backgroundImage: "linear-gradient(-15deg, #2CA4A8 20%, #0E2F5B 100% )",
    height: "50rem",
    marginRight: "-0.5rem",
    marginLeft: "-1rem",
    marginTop:"-7rem",
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
    marginLeft: "30rem",

    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
    paddingLeft: "5rem",
    position: "absolute",
    marginTop: "5rem",
    borderRadius: "10%",
    backgroundColor: "white",
  },
  label: {
    fontSize: 25,

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
    fontSize: 25,
  },

  alger: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid black",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    width: "30.7%",
    marginLeft: "1rem",
  },

  informations: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid black",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    marginLeft: "1rem",
    width: "58%",
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
    borderBottom: "2px solid black",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    marginLeft: "1rem",
    width: "20%",
  },
  nom: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid black",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    marginLeft: "3rem",
    width: "40%",
  },
  categorie: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid black",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
    marginLeft: "1rem",
    width: "41%",
  },
  prix: {
    border: "none",
    background: "none",
    outline: "none",
    borderBottom: "2px solid black",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",

    marginLeft: "4rem",
    width: "41%",
  },

  file: {
    fontSize: 15,
    // marginLeft: 35,
    width: "40%",
    marginLeft: "4em",
    marginTop: 8,
  },
  button: {
    marginLeft: "10em",
    marginBottom: "2rem",
    fontSize: 20,
    backgroundColor: "#1A9B9F ",
    borderRadius: "10px",
    fontFamily: "Poppins, sans-serif",
    transition: "ease-out 0.4s",
    border: "none",
    width: "25%",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "inset 170px 0 0 0 #0E2F5B",
      color: "white",
    },
  },
});
function Location({ onSuccess }) {
  const history = useHistory();
  const classes = useStyles();

  /*Picture-uploader*/
  const [files, setFiles] = useState([]);
  const onInputChange = (e) => {
    setFiles(e.target.files);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("files=", files);

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    axios
      .post("http://localhost:5000/users", data)
      .then((response) => {
        toast.success("Upload Success");
        onSuccess(response.data);
      })
      .catch((e) => {
        toast.error("Upload Error");
      });
  };

  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Mettre un article en location <FaHandHoldingMedical />
        </h1>
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
            action="#"
            id="#"
            onSubmit={onSubmit}
          >
            <label className={classes.label}>Inserez une photo: </label>
            <input
              className={classes.file}
              type="file"
              onChange={onInputChange}
              multiple
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
