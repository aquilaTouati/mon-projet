import { makeStyles } from "@material-ui/core";
import { BsFacebook, BsInstagram} from "react-icons/bs";
import {  AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
const useStyles = makeStyles({
    footer:{
        backgroundColor:"#2C4D5B",
        marginBottom:"-5rem",
        marginLeft:"-5rem",
        marginRight:"-0.5rem",
        paddingTop:"6rem",
        
          },
          social:{
            marginLeft:"15rem",
            wordSpacing:"5em",
            fontSize:"29px",
            marginTop:"-4rem",
            color:"#BACAD9",
            
          },
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
 </footer>
 </div>

</div>
);
}

export default Footer;