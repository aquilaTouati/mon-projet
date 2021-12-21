import React from "react";
import { FiMapPin} from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { FaStethoscope } from "react-icons/fa";
import { MdWheelchairPickup, MdAddCircle } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import { BsFillDropletFill } from "react-icons/bs";
import { Menu, MenuItem, Fade, Button, makeStyles } from "@material-ui/core";
import icon1 from "../images.jpg/icons8-microbe.png";
import icon2 from "../images.jpg/tensiometre.png";
import icon3 from "../images.jpg/sleep.png";
import icon4 from "../images.jpg/firstaid.png";
import icon5 from "../images.jpg/bienetre.png";
import icon6 from "../images.jpg/complements.png";
import icon7 from "../images.jpg/wheelchair.png";
import icon8 from "../images.jpg/pillow.png";
import icon9 from "../images.jpg/icon9.png";
import icon10 from "../images.jpg/icon10.png";
import icon11 from "../images.jpg/icon11.png";
import icon12 from "../images.jpg/icon12.png";
import icon13 from "../images.jpg/icon13.png";
import icon14 from "../images.jpg/icon14.png";
import icon15 from "../images.jpg/icon15.png";
import icon16 from "../images.jpg/icon16.png";
import data from "../data.json";

const useStyles = makeStyles({ 
 
  icons: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: -30,
    marginRight: 20,
    color: "white",
  },


  materiel: {
    backgroundColor: "white",
    marginTop: 140,
    marginLeft: 50,
    fontFamily: "Poppins, sans-serif",
    fontSize: 25,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#DDECED",
    },
  },
  spans: {
    display: "flex",
    justifyContent: "space-evenly",
    
  },
 
  page: {
    
    backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #266D70 100% )",
    height: "100%",
    marginRight: "-0.5rem",
    marginLeft: "-1rem",
    marginTop:"-5rem",
  },
  
  pro: {
    color: "#03989E",
    marginRight: 15,
    fontSize: 35,
  },
  med: {
    color: "#737373",
    fontSize: 45,
    marginRight: 15,
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
 
  content:{
    display:"flex",
    justifyContent:"center",
    flexWrap:"wrap",
    marginTop:"40px",
  },
 
  box:{
    width:"20%",
    margin:"3rem",
    border:"20px solid #ffff",
    boxShadow:'20px 15px 35px rgba(0, 0, 0, 0.8)',
    backgroundColor:"white",
    borderRadius:'5%',
    transition:"0.8s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      transform:'scale(1.1)', /*Zoom*/
    },


  },
  article:{
  position:"relative",
  top:"0",
  left:"0",
  width:"100%",
  height:"300px",
  objectFit:"cover",
 
  },
  iboxx:{
    position:"relative",
    width:"100%",
    height:'300px',
  },
  productName:{
    textAlign:"center",
    fontWeight:"bold",
    borderBottom:"0.5px solid grey",
    paddingBottom:'1rem',
  },
  place:{
    textAlign:'center',
  },
  iconItem:{
    display:"flex",
    alignContent:"row",
    width:"100%",
    paddingRight:"14rem",
    "&:hover":{
      cursor:"pointer",
      backgroundColor:"#D9E8E8",
      
    },
  },
  minicon:{
  width:"6%",
  height:"2%",
  marginLeft:"1rem",
  },
  borderBottom:{
    borderBottom:"1px solid white",
    marginTop:"10rem",
    width:"86%",
    marginLeft:'8rem',
  },
  menu2:{
    width:"30%",
    marginTop:"3.7rem",
    marginLeft:"-3.5rem",
    
  },
  menu3:{
    width:"40%",
    marginTop:"3.7rem",
    marginLeft:"-2.5rem",
  },
  menu4:{
    width:"40%",
    marginTop:"3.7rem",
    marginLeft:"-0.7rem",
  },
  general:{
    marginTop: "7rem",
    position:"absolute",
    fontSize:"25px",
    color:'white',
    marginLeft:'8rem',
  },
  all:{
    color:"white",
    opacity:0.7,
    fontSize:"18px",
    marginLeft:"8rem",
  },
 
});
function Profile() {
  const history = useHistory();
  const classes = useStyles();
  const productsList = useSelector((state)=> state.productsList);
  console.log(typeof(productsList));

  /*Dropping menu*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEll, setAnchorEll] = React.useState(null);
  const [anchorElll, setAnchorElll] = React.useState(null);
 
  const open3 = Boolean(anchorEl);
  const open4 = Boolean(anchorEll);
  const open5 = Boolean(anchorElll);
 
  const handleClick3 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick4 = (event) => {
    setAnchorEll(event.currentTarget);
  };
  const handleClick5 = (event) => {
    setAnchorElll(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorEl(null);
  };
  const handleClose4 = () => {
    setAnchorEll(null);
  };
  const handleClose5 = () => {
    setAnchorElll(null);
  };

  
  return (
    <div className={classes.page}>
     
      <main>
        {/* Categories start here */}
        <div className={classes.spans}>
          <Button   
              variant="outlined"
              size="large"
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open3 ? "true" : undefined}
              onClick={handleClick3}
              variant="outlined"
              size="large" className={classes.materiel} variant="outlined" size="large">
            <MdWheelchairPickup className={classes.med} /> Matériel médical
          </Button>
          <Menu
              className={classes.menu2}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open3}
              onClose={handleClose3}
              TransitionComponent={Fade}
            >
            <div className={classes.iconItem}> {/* Icon and item */}
            <img className={classes.minicon} src={icon1}  alt="Covid"/> 
            <MenuItem className={classes.item2}  onClick={handleClose3}>
                Covid 19
              </MenuItem>
            </div>
            <div className={classes.iconItem}> {/* Icon and item */}
            <img className={classes.minicon} src={icon2}  alt="Mesure"/> 
              <MenuItem className={classes.item2} onClick={handleClose3}>
                {" "}
                 Appareils de mesure
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon3}  alt="Sleep"/>
              <MenuItem className={classes.item2} onClick={handleClose3}>
                {" "}
                 Accesoires pour apnées du sommeil
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon4}  alt="Pharma"/>
              <MenuItem className={classes.item2} onClick={handleClose3}>
                {" "}
                Trousse de pharmacie
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon5}  alt="Bien etre"/>
              <MenuItem className={classes.buy} onClick={handleClose3}>
                {" "}
                 Bien etre
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon6}  alt="Complements alimentaires"/>
              <MenuItem className={classes.buy} onClick={handleClose3}>
                {" "}
                 Complements alimentaires
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon7}  alt="Chaises et cannes"/>
              <MenuItem className={classes.buy} onClick={handleClose3}>
                {" "}
                Cannes et chaises roulantes
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon8}  alt="Coussins"/>
              <MenuItem className={classes.buy} onClick={handleClose3}>
                {" "}
                 Coussins et assises spécifiques
              </MenuItem>
              </div>
            </Menu>
          
          <Button variant="outlined"
              size="large"
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open4 ? "true" : undefined}
              onClick={handleClick4}
              variant="outlined"
              size="large" className={classes.materiel} variant="outlined" size="large" className={classes.materiel} variant="outlined" size="large">
            <FaStethoscope className={classes.pro} />
            Matériel professionel
          </Button>
          <Menu
              className={classes.menu3}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEll}
              open={open4}
              onClose={handleClose4}
              TransitionComponent={Fade}
            >

               <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon9}  alt="Equipements"/>
              <MenuItem className={classes.buy} onClick={handleClose4}> 
                {" "}
                 Equipements medicaux
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon10}  alt="Soins"/>
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                 Soins et pensements
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon11}  alt="Diagnostique"/>
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                 Diagnostique et autocontrol
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon12}  alt="Diagnostique"/>
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                 Hygiène et désinfection
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon13}  alt="Diagnostique"/>
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                 Consommables
              </MenuItem>
              </div>
             
            </Menu>
          <Button variant="outlined"
              size="large"
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open5 ? "true" : undefined}
              onClick={handleClick5}
              variant="outlined"
              size="large"  className={classes.materiel} variant="outlined" size="large">
            <BsFillDropletFill className={classes.drop} />
            Produits d'incontinence
          </Button>
          <Menu
              className={classes.menu4}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorElll}
              open={open5}
              onClose={handleClose5}
              TransitionComponent={Fade}
            >
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon16}  alt="Diagnostique"/>
              <MenuItem className={classes.buy} onClick={handleClose5}>
                {" "}
                Hygiène et soins du corps
              </MenuItem>
              </div>
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon15}  alt="Diagnostique"/>
              <MenuItem className={classes.buy} onClick={handleClose5}>
                {" "}
                 Alèses jetables
              </MenuItem>
              </div>
            
              <div className={classes.iconItem}> {/* Icon and item */}
              <img className={classes.minicon} src={icon14}  alt="Diagnostique"/>
              <MenuItem className={classes.buy} onClick={handleClose5}>
                {" "}
                 Couches adultes/enfants
              </MenuItem>
              </div>
              
             
            </Menu>
        </div>
        {/* Categories end here */}
        <h1 className={classes.general}> Tous les matériaux </h1>
        {/* separation */}
        <div className={classes.borderBottom}>
        <div> </div>
        </div>
         {/* separation */}
        <p className={classes.all}>Disponible à l’achat, à la location, ou au don; découvrez toutes les catégories des matériaux médicaux qui peuvent améliorer votre quotidien. </p>
        <section className={classes.materialsMenu}>
          <div className={classes.content}>
            
            {productsList?.map( (e)=>
            
            {
              
             return (
              <div className={classes.box}>
              {/* change through data */}
           <div className={classes.inboxx}>
            <img
              src
              className={classes.article}
              src={e.picture}
              alt="Oxygene"
            />
             <div className={classes.imageOverlay}>
             
             </div> 
          </div>
          <div className={classes.text}>
            <p className={classes.productName}>{e.name}</p>
            <p className={classes. place}><FiMapPin/>{e.localisation}</p>
          </div>
        </div>
             )
            }
            )
            }
          
                  {/* fin data  */}
            </div>
           
        </section>
      </main>
    </div>
  );
}

export default Profile;
