import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { FiSearch } from "react-icons/fi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Fade } from "@material-ui/core";
import { MdAddCircle } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import upload from "../images.jpg/upload.svg";
import form from "../images.jpg/form.png";
import ReactDOM from 'react-dom';
import { motion} from "framer-motion";

const useStyles = makeStyles({
 

  page: {
    backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #266D70 100% )",
    height: "50rem",
    marginRight: "-0.5rem",
    marginLeft: "-1rem",
    marginTop: "-5rem",
    paddingBottom: "8rem",
  },
 
  drop: {
    color: "blue",
    marginRight: 15,
    fontSize: 30,
  },
  menu: {
    marginTop: 40,
    marginLeft: -80,
    fontFamily: "Poppins, sans-serif",
  },
  item: {
    marginRight: 20,
    fontSize: 25,
    color: "#03989E",
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
    width: "20%",
    float: "right",
    marginBottom: "-6rem",
    marginTop: "20rem",
    marginRight: "-1rem",
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
    paddingBottom: "2rem",
  },
  option: {
    color: "black",
  },
  
 
});
function Dons({ onSuccess }, props) {
  
  const history = useHistory();
  const classes = useStyles();
  /*Dropping menu*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEll, setAnchorEll] = React.useState(null);
  const [anchorElll, setAnchorElll] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEll);
  const open2 = Boolean(anchorElll);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEll(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorElll(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEll(null);
  };
  const handleClose2 = () => {
    setAnchorElll(null);
  };
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
      <h1 className={classes.title}>Faire un don  <FaHandHoldingHeart/></h1>
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
        <label className={classes.label}>Etat:</label>
          <select className={classes.etat}>
            <option>Neuf</option>
            <option> Bon etat</option>
            <option> Etat moyen</option>
            <option> Reconditionné</option>
          </select>
          
           <label className={classes.ville}>Wilaya:</label>
          <select className={classes.alger}>
            <option > Alger </option>
          </select>
          </div>
          <div className={classes.inputLabel}>
        <label className={classes.label}>Description:</label>
          <input className={classes.informations} type="message"  />
          
          </div>
      
        <div >
          <form className={classes.inputLabel} method="post" action="#" id="#" onSubmit={onSubmit}>
            <label className={classes.label}>Inserez une photo: </label>
            <input className={classes.file}
              type ="file"
              onChange={onInputChange}
              multiple
            />
          </form>
          
      
       <button type="submit"  className={classes.button}> Ajouter </button>
        </div>
        
      </div>
        {/* framer-motion animation */}{" "}
        <motion.div
           initial={{y:0 }}
           animate={{ opacity: 5, y:100}}
          transition={{ repeat: Infinity, duration: 2}}
        >
            <div>
      <img  className={classes.pic} src={upload} alt="Background picture" /> 
      </div>
      </motion.div>{" "}
        {/* framer-motion animation */}
    </div>
  );
}

export default Dons;
