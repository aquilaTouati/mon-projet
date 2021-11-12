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
import ReactDOM from 'react-dom';

const useStyles = makeStyles({
  btn: {
    width: 200,
    padding: 10,
    height: 40,
paddingBottom:"2.1rem",
    borderLeft: "1px",
    marginLeft: 50,
    marginTop: 35,
    color: "white",
    transition: "color 0.5s linear",
    fontFamily: "Poppins, sans-serif",
    fontSize: 17,
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
      borderColor: "#234547",
      borderBottom: "solid white",
    },
  },
  navbar: {
    paddingTop: 20,
    marginTop: -10,
    paddingBottom: 20,
    marginLeft: -10,
    marginRight: -10,
    
// backgroundImage: "linear-gradient(-15deg, #2CA4A8 30%, #0E2F5B 100%)",
    //  boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
 page:{
  backgroundImage: "linear-gradient(-15deg, #2CA4A8 20%, #0E2F5B 100% )",
  height:"50rem",
  marginRight:"-0.5rem",
  marginLeft:'-1rem',
 },
  back: {
    fontFamily: "Poppins, sans-serif",
    color: "white",
    fontSize: 17,
    marginLeft: 15,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#476E70",
      borderRadius: 50,
      paddingTop: 10,
      paddingBottom: 10,
      paddingRight: 10,
    },
  },
  searchBox: {
    position: "absolute",
    top: 30,
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

  notif: {
    marginRight: 35,
    fontSize: 30,
  },
  acc: {
    fontSize: 30,
    marginRight: 20,
  },
  
  container: {
    marginLeft: "30rem",
  
   boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",
   paddingLeft:"5rem",
   position:"absolute",
   marginTop:"5rem",
   borderRadius:"10%",
   backgroundColor:"white",
   
   
    
  
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
  ville:{
    marginLeft:"2rem",
    fontSize: 25,
  },
 
  alger:{border:"none",
  background:"none",
  outline:"none",
  borderBottom:"2px solid black",
 fontFamily: "Poppins, sans-serif",
 fontSize:"15px",
width:"30.7%",
marginLeft:"1rem",
    
  
  },
 
  informations:{
    border:"none",
   background:"none",
   outline:"none",
   borderBottom:"2px solid black",
  fontFamily: "Poppins, sans-serif",
  fontSize:"15px",
  marginLeft:"1rem",
  width:"58%",
  },
  
  pic:{
   
   width:"50%",
   float:"right",
  marginBottom:"-6rem",
  marginTop:"8rem",
  marginRight:"-4rem",
  },
etat:{
  
  border:"none",
  background:"none",
  outline:"none",
  borderBottom:"2px solid black",
 fontFamily: "Poppins, sans-serif",
 fontSize:"15px",
 marginLeft:"1rem",
 width:"20%",
},
  nom:{
    border:"none",
   background:"none",
   outline:"none",
   borderBottom:"2px solid black",
  fontFamily: "Poppins, sans-serif",
  fontSize:"15px",
  marginLeft:"3rem",
  width:"40%",
    
  },
  categorie:{
    border:"none",
  background:"none",
  outline:"none",
  borderBottom:"2px solid black",
 fontFamily: "Poppins, sans-serif",
 fontSize:"15px",
 marginLeft:"1rem",
 width:"41%",
  },
  prix:{border:"none",
  background:"none",
  outline:"none",
  borderBottom:"2px solid black",
 fontFamily: "Poppins, sans-serif",
 fontSize:"15px",
 
 marginLeft:"4rem",
 width:"41%",
  },

  file:{
   
    fontSize:15,
    // marginLeft: 35,
    width:"40%",
    marginLeft:"4em",
    marginTop:8, 
  
  },
  button:{
    marginLeft: "10em",
    marginBottom:"2rem",
    fontSize:20,
    backgroundColor:"#1A9B9F ",
    borderRadius:"10px",
    fontFamily: "Poppins, sans-serif",
    transition:"ease-out 0.4s",
    border:"none",
    width:"25%",
    color:"white",
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
  
      <div className={classes.navbar}>
        <header>
          <nav>
            <span
              className={classes.back}
              onClick={() => {
                history.goBack();
              }}
            >
              <IoMdArrowRoundBack /> Précédent
            </span>

             {/* Vente */}
             <span
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={classes.btn}
              variant="outlined"
              size="large"
            >
              Vente
              <AiOutlineCaretDown />{" "}
            </span>

            <Menu
              className={classes.menu}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                className={classes.buy}
                onClick={handleClose}
                onClick={() => {
                  history.push(`/Vente`);
                }}
              >
                {" "}
                <MdAddCircle className={classes.item} />
                Vendre un article
              </MenuItem>
              <MenuItem className={classes.buy} onClick={handleClose}>
                {" "}
                <MdAddCircle className={classes.item} /> Acheter un article
              </MenuItem>
            </Menu>
            {/* Vente */}

            {/* Location */}
            <span
              className={classes.btn}
              variant="outlined"
              size="large"
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}
              className={classes.btn}
              variant="outlined"
              size="large"
            >
              Location
              <AiOutlineCaretDown />
            </span>
            <Menu
              className={classes.menu}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEll}
              open={open1}
              onClose={handleClose1}
              TransitionComponent={Fade}
            >
              <MenuItem className={classes.buy} onClick={handleClose1}  onClick={() => {
                  history.push(`/Location`);
                }}>
                {" "}
                <MdAddCircle className={classes.item} />
                Mettre un article en location
              </MenuItem>
              <MenuItem
                className={classes.buy}
                onClick={handleClose1}
                onClick={() => {
                  history.push(`/Location`);
                }}
              >
                {" "}
                <MdAddCircle className={classes.item} /> Louer un produit
              </MenuItem>
            </Menu>
            {/* Location */}

            {/* Don */}
            <span
              className={classes.btn}
              variant="outlined"
              size="large"
              className={classes.btn}
              variant="outlined"
              size="large"
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
              className={classes.btn}
              variant="outlined"
              size="large"
            >
              Dons
              <AiOutlineCaretDown />
            </span>
            <Menu
              className={classes.menu}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorElll}
              open={open2}
              onClose={handleClose2}
              TransitionComponent={Fade}
            >
              <MenuItem
                className={classes.buy}
                onClick={handleClose2}
                onClick={() => {
                  history.push(`/Dons`);
                }}
              >
                {" "}
                <MdAddCircle className={classes.item} />
                Faire un don
              </MenuItem>
              <MenuItem className={classes.buy} onClick={handleClose2}>
                {" "}
                <MdAddCircle className={classes.item} /> Chercher un don
              </MenuItem>
            </Menu>
            {/* Don */}

            <div className={classes.searchBox}>
              <input
                className={classes.searchTxt}
                type="text"
                name=""
                placeholder="Recherche par produit"
              />
              <a className={classes.loupe} href="#">
                <FiSearch />
              </a>
            </div>
            <div className={classes.icons}>
              <span className={classes.acc}>
                {" "}
                <RiAccountCircleFill />
                <AiOutlineCaretDown />{" "}
              </span>
              <span className={classes.notif}>
                {" "}
                <RiNotification2Line />{" "}
              </span>
            </div>
          </nav>
        </header>
      </div>

     
      <div className={classes.container}>
      <h1 className={classes.title}>Mettre un article en location <FaHandHoldingMedical/></h1>
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

      {/* <img src className={classes.pic} src={form} alt="Background picture" />  */}
    </div>
  );
}

export default Location;
