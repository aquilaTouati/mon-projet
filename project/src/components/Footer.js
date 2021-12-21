import { makeStyles } from "@material-ui/core";
import React from 'react';
import { BsFacebook, BsInstagram} from "react-icons/bs";
import {  AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
const useStyles = makeStyles({
    footer:{
        backgroundColor:"#2C4D5B",
        marginBottom:"-5rem",
        marginLeft:"-0.5rem",
        paddingTop:"6rem",
        marginRight:"-0.5rem",
       
        
          },
          social:{
            marginLeft:"7rem",
            wordSpacing:"5em",
            fontSize:"29px",
            marginTop:"-4rem",
            color:"#BACAD9",
            
          },
    copharm:{
      float:"right",
      marginTop:"-2rem",
      color:"#BACAD9",
      fontSize:"15px",
      marginRight:"3rem",
    }
        });


function Footer() {
    const classes = useStyles();
    return (
      <div>
      
 <div className={classes.footer}>
 <footer> 
 <div className={classes.social}>
 <span><BsFacebook className={classes.facebook}/>  </span>
 <span> <BsInstagram />  </span> 
 <span> <AiFillLinkedin/>  </span>  
 <span> <FaTwitterSquare/>  </span>  
 </div>
 <h1 className={classes.copharm}>© 2021 Copharm </h1> 
 </footer>
 </div>
</div>
);
}

export default Footer;