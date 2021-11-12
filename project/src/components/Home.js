import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { AiFillHome, AiFillLinkedin } from "react-icons/ai";
import { RiQuestionnaireFill} from "react-icons/ri";
import { GiPerson } from "react-icons/gi";
import "../styles.css/home.css";
import { FaUserNurse,FaTwitterSquare,FaStethoscope } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import design from "../images.jpg/mainbackground.png";
import wavee from "../images.jpg/waveee.svg";
import wave from "../images.jpg/wave.svg";
import femaledoc from "../images.jpg/femaledoc.png";
import team from "../images.jpg/team.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BsFacebook, BsInstagram} from "react-icons/bs";

 




const useStyles = makeStyles({
  pic: {
    height: 800,
    marginLeft: "-12rem",
    marginTop:"3rem",
    
    position:"relative",
  },

  login: {
    marginTop:30,
    textDecoration: "none",
    color: "white",
    marginLeft: "-9rem",
    backgroundColor: "#099399",
    borderRadius: 30,
    padding: 10,
    position:"relative",
    marginTop:"5.4rem",
    fontSize: 17,
    float: "right",
    transition: '0.1s',
    "&:hover": {
      cursor: "pointer",
      transform: "skew(30deg)",
    },
  },

  signup: {
    marginTop:30,
    textDecoration: "none",
    outline: "black",
    color: "white",
    marginRight: "13rem",
    backgroundColor: "#8893A2",
    borderRadius: 30,
    padding: 12,
    fontSize: 17,
    position:"relative",
    marginTop:"5.4rem",
    transition: '0.1s',
    float: "right",
    "&:hover": {
      cursor: "pointer",
      transform: "skew(30deg)",
    },
  },
  main: {
    display: "flex",
    alignContent: "center",
  },
  paragraph: {
    fontSize:20,
    position:"relative",
    marginLeft: "-8rem",
    color:"white"
  },
  footer:{
backgroundColor:"#2C4D5B",
marginBottom:"-5rem",
marginLeft:"-5rem",
marginRight:"-0.5rem",
paddingTop:"6rem",

  },
apropos:{
//   width:"35%",
  fontSize:"20px",
  marginTop:"1rem",
  marginLeft:"5rem",

},
 
  doctors:{
    width:"60%",
    height:"35rem",
    marginLeft:"45rem",
    marginTop:"4rem",
   
  
    
  },
  paragraph2:{
    width:"30%",
    marginLeft:"10rem",
    marginTop:"10rem",
    fontSize:30,
  },
  main: {
    display: "flex",
    alignContent: "center",
  },
  
  // nav: {
    
  //   paddingBottom:"1.5rem",
  //   textDecoration: "none",
  //   transition: "0.1s",
  //   marginLeft: 50,
  //   color: "white",
  //   fontSize: 18,
  //   "&:hover": {
  //     cursor: "pointer",
  //   borderBottom: "solid #2C4D5B",
  //   color:"#2C4D5B",
  //   },
  // },
  nav: {
    textDecoration:'none',
    transition: "0.1s",
    paddingBottom:"1rem",
    marginLeft: 30,
    color: "white",
    position:"relative",
    fontSize: 18,
    "&:hover": {
      cursor: "pointer",
      borderBottom:'solid white',
    },
  },
  idea:{
    width:"50%",
    marginLeft:"10em",
    marginTop:"-10em",
  },
  searchBox: {
    position: "absolute",
    marginTop:"-0.5rem",
    left: 1200,
    transform: "translate(-50%,-50%)",
    background: "#2C4D5B",
    borderRadius: 40,
    paddingLeft: 40,
    paddingRight: 40,
    transition: "0.1s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor:'#BACAD9',
      
    },
  },
  searchBtn: {
    color: "white",
    float: "right",
    wdith: 40,
    height: 40,
    borderRadius: 50,
    background: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize:30,
  },
  searchTxt: {
    border: "none",
    background: "none",
    outline: "none",
    float: "left",
    padding: 0,
    color: "black",
    lineHeight: 3,
  },
 
  // title:{
  //   marginTop:150,
  //   marginLeft:-230,
  //   fontSize:40,
  //   color:"black",
  // },
  social:{
    marginLeft:"15rem",
    wordSpacing:"5em",
    fontSize:"29px",
    marginTop:"-4rem",
    color:"#BACAD9",
    
  },
  
  story:{
  display: "flex",
    flexDirection: "row",
    // backgroundImage: "linear-gradient(-45deg, #BACAD9 40%, #2C4D5B 100%)",
  },

  prohealth:{
    position:"absolute",
    marginLeft:"10rem",

  },
  professionels:{
    display: "flex",
    flexDirection: "row",
    backgroundColor:"#8BAAAB",
    marginLeft:"-1rem",
    marginRight:"-3rem",
    marginTop:"5rem",
   
  },
  
navbar:{
//     boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
   
// backgroundImage: "linear-gradient(-45deg, #BACAD9 20%, #2C4D5B 100%)",
// backgroundImage: "linear-gradient(-45deg, #BACAD9 20%, #2C4D5B 100%)",
// height:"50rem",
   marginTop:"1.5rem",
    
  
  position:"fixed",
    
  },
  shape:{
    position:"absolute",
    marginLeft:"-3rem",
    marginTop:"-1rem",
  

  },
 titrePro:{
   marginLeft:"15rem",
   marginTop:"3rem",

 },
  
  title: {
    marginTop: 150,
    marginLeft: "-8rem",
    fontSize: 40,
    color:'white',
    position:"relative",
  },
  equip:{
    opacity:"0.9",
    height:"50%",
marginTop:'-5rem',
  marginLeft:'-0.5rem',
  width:"101%",
  },
  div:{
    marginTop:"-57rem",
    position:"absolute",
    marginLeft:"20rem",
  },
  wave:{
    marginLeft:"-1rem",
    marginRight:"-0.5rem",
    marginTop:"-7rem",
  },
  title2:{
    textAlign:"center",
    fontSize:"50px",
  },
  team:{
    width:"40%",
    marginBottom:"-3rem",
    marginLeft:"15rem",
    transform:"translateX(-100%)",
    opacity:0,
    transition:"transform 0.6s ease-in-out",
    "&:active": {
      translateX:"0%",
     opacity:1,
    },
  },
 
  loupe:{
    position:"absolute",
  },
  subparagraph:{
    width:"5%",
  },
  details:{
    marginTop:"5rem",
  },
  icon:{
fontSize:"30px",
paddingRight:"1rem",
color:"#2C4D5B",
  }

});

function Home() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <header>
      <img className={classes.shape} src={wavee} alt="Background picture" />
      <nav className={classes.navbar}>
          <Link to='/' className={classes.nav}>
            Acceuil <AiFillHome /> </Link>
          
          <Link className={classes.nav}>
            A propos de nous <RiQuestionnaireFill /> </Link>
         
          <Link className={classes.nav}>
            
            Particuliers <GiPerson /></Link>
        
          <Link className={classes.nav} >
            Professionels de la santé  <FaUserNurse />
            </Link>
          <div className={classes.searchBox}>
            <input
              className={classes.searchTxt}
              type="text"
              name=""
              placeholder="Recherche par produit"
            />
            <Link className={classes.searchBtn} >
              <BsSearch className={classes.loupe} />
              </Link>
          </div>
      </nav>
      </header>
      <div className={classes.main}>
        <img className={classes.pic} src={design} alt="Background picture" />
        <div>
        <h1 className={classes.title}>Cherchez et trouvez tous <br/> les équipements médicaux<br/>   nécessaires en un seul clic.</h1>
        <p className={classes.paragraph}>
          Ce site vous aide a acheter, vendre,<br/> donner, et louer des matériaux médicaux <br/>neufs ou reconditionnés.
        </p>
        <a className={classes.login} href="Login">
          <BiLogIn /> Se connecter
        </a>

        <a className={classes.signup} href="Inscription">
          <MdPersonAddAlt1 /> S'inscrire
        </a> 
        </div>
      </div>
      <section  id="professionels" className={classes.professionels}>
      <div className={classes.prohealth}>
      <h2 className={classes.titrePro}>Bientôt disponible sur notre site.</h2>
      <div className={classes.details}>
 <h3> <FaStethoscope className={classes.icon}/> Equipements et materiaux medicaux professionels</h3>
 <p className="classes.subparagraph">Commandez tout l'équipement médical dont vous avez besoin. <br/> Idéal pour les cabinets, cliniques et hôpitaux; vous pouvez trouver  <br/> des matériaux  neufs ou en bon état vendu par des professionels.</p>
 <h4><FaUserNurse className={classes.icon}/>Selon vos besoins et spécialités</h4>
 <p className="classes.subparagraph">Les gammes de matériaux vont de la médecine généraliste <br/>  au diagnostic spécialisé</p>
 </div>
 </div>
      <img className={classes.doctors} src={femaledoc} alt="Background picture" /> 
      
      </section> 
        <h2 className={classes.title2}> A propos de nous  </h2> 
       <section id="apropos" className={classes.story} >
      <p className={classes.apropos}>
        {" "}
        Face aux conséquences dramatiques de la crise sanitaire ainsi que les
        derniers incendies qu’a connu le pays, des centaines de personnes sont
        décédées a cause du manque de matériaux médicaux et paramédicaux.<br/> Nous
        avons donc décidé de créer ce site qui a pour but de garantir aux
        patients ainsi que les professionnels de la santé un accès facile et
        rapide aux dispositifs médicaux essentiels.<br/> De plus, nous essayons de
        favoriser un système d’entraide en vous permettant de donner une seconde
        vie a vos matériaux usagés ou neufs, en les vendant, les louant, ou même
        aussi en les donnant. Ca peut être un fauteuil roulant, un appareil
        auditif, un stéthoscope ou tout autre équipement médical durable.{" "}
      </p>
      
      <img className={classes.team} src={team} alt="Background picture" /> 
      
      </section> 
      
      
    
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

export default Home;
