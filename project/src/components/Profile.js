import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "../styles.css/profile.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { IoMdArrowRoundBack} from "react-icons/io";
import { AiOutlineCaretDown} from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Link } from "react-router-dom";
import { FiSearch} from "react-icons/fi";
import { FaStethoscope } from "react-icons/fa";
import { MdWheelchairPickup } from "react-icons/md";
import { BsFillDropletFill} from "react-icons/bs";


const useStyles = makeStyles({
  btn: {
    width: 200,
    padding: 10,
    height: 40,
  
  borderLeft:'1px',
    marginLeft: 50,
    marginTop: 35,
    color: "white",
    transition: "ease-out 3s",
    transition: "color 0.5s linear",
    fontFamily: "Poppins, sans-serif",
    fontSize: 17,
    fontWeight: "bold",
    "&:hover": {
      menu:{},
      cursor: "pointer",
      color: "black",
      borderColor: "#234547",
      borderBottom:'solid white',
    },
  },
  icons: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: -30,
    marginRight: 20,
    color:"white",
 
  },

  notif: {
    
    marginRight: 35,
    fontSize: 30,
  },
  acc: {
    fontSize: 30,
    marginRight: 20,
  },
  materiel: {
    marginTop: 140,
    marginLeft: 50,
    fontFamily: "Poppins, sans-serif",
    fontSize: 25,
    "&:hover": {
      cursor: "pointer",
     backgroundColor:"#DDECED",
    },
  },
  spans: {
    
    display: "flex",
    justifyContent: "center",
  },
  navbar: {
  backgroundColor: "#618E8F",
  paddingTop:20,
   marginTop:-10,
   paddingBottom:20,
   marginLeft:-10,
   marginRight:-10,
   borderBottom:'solid #3A5657'
  },
  back:{
  fontFamily: "Poppins, sans-serif", 
  color: "white",
  fontSize:17,
  marginLeft:15,
  "&:hover": {
    cursor: "pointer",
    backgroundColor:"#476E70",
    borderRadius:50,
    paddingTop:10,
    paddingBottom:10,
    paddingRight:10,
  
  },
  },
  searchBox: {
    position: "absolute",
    top: 30,
    left: 1000,
    transform: "translate(-50%,-50%)",
    background: "#CAE5E6",
    borderRadius:15,
    height: 40,
    paddingLeft: 90,
   paddingRight: 10,
    transition: "0.1s",
    
    "&:hover": {
      cursor: "pointer",
      backgroundColor:'#BACAD9',
      
    },
  },
  loupe: {
    color: "#618E8F",
    float: "right",
    marginLeft:20,
    wdith: 40,
    height: 40,
    fontSize:30,
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
    color:" black",
  },
  drop:{
    color:'blue',
    marginRight:15,
    fontSize:30,
  },
  pro:{
color:'#03989E',
marginRight:15,
fontSize:35,
  },
  med:{
    color:"#737373",
    fontSize:45,
    marginRight:15,

  },
menu:{
  display:"none",
  position:"absolute",
  backgroundColor:"red",
  minWidth:"158px",
zIndex:1,
"&:hover": {
  cursor: "pointer",
  backgroundColor:'#BACAD9',
},
},

  
  



});
function Profile() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <div className={classes.navbar}>
        <header>
        <span className={classes.back} onClick={() => {history.goBack();}}><IoMdArrowRoundBack/> Précédent</span>
        
          <span className={classes.btn} variant="outlined" size="large">
            Vente<AiOutlineCaretDown />
          </span>
         <div className={classes.menu}>
          <Link to="#">Acheter un article</Link>
          <Link to="#">Vendre un article</Link>
          </div>
          
          
          <span className={classes.btn} variant="outlined" size="large">
            Location<AiOutlineCaretDown />
          </span>
          
          <span className={classes.btn} variant="outlined" size="large">
            Dons<AiOutlineCaretDown />
          </span>
          <div className={classes.searchBox}>
            <input
              className={classes.searchTxt}
              type="text"
              name=""
              placeholder="Recherche par produit"
            />
            <a className={classes.loupe} href="#">
              <FiSearch/>
              </a>
          </div>
          <div className={classes.icons}>
            <span className={classes.acc}>
              {" "}
              <RiAccountCircleFill  /><AiOutlineCaretDown />{" "}
            </span>
            <span className={classes.notif}>
              {" "}
              <RiNotification2Line />{" "}
            </span>
          </div>
        </header>
      </div>
      <main>
        <div className={classes.spans}>
          <Button className={classes.materiel} variant="outlined" size="large">
          <MdWheelchairPickup className={classes.med} /> Matériel médical
          </Button>
          <Button className={classes.materiel} variant="outlined" size="large">
          <FaStethoscope className={classes.pro}  />Matériel professionel
          </Button>
          <Button className={classes.materiel} variant="outlined" size="large">
          <BsFillDropletFill className={classes.drop} />Produits d'incontinence
          </Button>
         
        </div>
      </main>
    </div>
  );
}

export default Profile;
