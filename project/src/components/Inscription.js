import { useEffect, useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import avatar from "../images.jpg/avatar.png";
import phone from "../images.jpg/phone.svg";
import wave from "../images.jpg/wave.png";
import { BsSearch,BsFacebook, BsInstagram } from "react-icons/bs";
import "../styles.css/design.css";
import { MdWavingHand } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { AiFillHome,AiFillLinkedin} from "react-icons/ai";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GiPerson } from "react-icons/gi";
import { FaUserNurse,FaTwitterSquare } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const useStyles=makeStyles({
  page:{
height:100,
fontFamily: "Poppins, sans-serif",
backgroundImage: "linear-gradient(-45deg, #BACAD9 20%, #2C4D5B 100%)",
height:"50rem",
marginRight:"-0.5rem",
marginLeft:"-1rem",

  },
  nav: {
    paddingBottom:"1.5rem",
    textDecoration: "none",
    transition: "0.1s",
    marginLeft: 50,
    color: "black",
    fontSize: 18,
    "&:hover": {
      cursor: "pointer",
    borderBottom: "solid #2C4D5B",
    color:"#2C4D5B",
    },
  },
  searchBox: {
    
    marginTop: "-1rem",
    float: "right",
    marginLeft:"30rem",
    transform: "translate(-50%,-50%)",
    background: "#2C4D5B",
    height: 40,
    borderRadius: 40,
    paddingLeft: 40,
    paddingRight: 40,
    transition: "0.1s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#BACAD9",
      
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
    fontSize: 30,
  },
  searchTxt: {
    border: "none",
    background: "none",
    outline: "none",
    float: "left",
    padding: 0,
    color: "white",
    lineHeight: 3,
  },
  navbar:{
    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
  //  backgroundColor:"white",
    position:"absolute",
    paddingTop:"2rem",
    marginTop:"-0.5rem",
    marginLeft:"-1rem",
    paddingRight:"10rem",
  },
 wave:{
   width:"40%",
   marginLeft:"-0.5rem",
   marginTop:"0.7rem",
   marginBottom:"-0.6rem",
  
   
   
 },
 phone:{
   marginTop:"15rem",
   width:"35%",
   marginLeft:"-35rem",
   position:"absolute",
 },
 avatar:{
   width:"30%",
   marginLeft:"10rem",
 },
 container:{
  width:"30%",
  float:"right",
  marginTop:"7rem",
  boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
  marginRight:"35rem",
  borderRadius:10,
  backgroundColor:"white",
 },
 input:{
   border:"none",
   background:"none",
   outline:"none",
   borderBottom:"2px solid black",
  fontFamily: "Poppins, sans-serif",
  fontSize:"15px",
   "&:hover": {
    marginTop:"0.5rem",
  paddingTop:"0.5rem",
  }
},
 inputDiv:{
   marginBottom:"1.7rem",
   marginLeft:"4rem", 
},
 inputs:{
  display: "flex",
  flexDirection: "column",
  width:"70%",
 }, 
title:{
  marginLeft:"10rem"
},
button:{
  marginLeft: "8.5em",
  marginBottom:"2rem",
  fontSize:20,
  backgroundColor:"#BACAD9 ",
  borderRadius:"10px",
  fontFamily: "Poppins, sans-serif",
  transition:"ease-out 0.8s",
  border:"none",
  width:"25%",
  color:"black",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "inset 170px 0 0 0 #2C4D5B",
    color: "white",
  },

},
i:{
  marginLeft:"1rem",
  color:"#2C4D5B",
},
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


})

function Inscription() {
  const classes = useStyles();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const history = useHistory();
 
  
  
  useEffect(() => {
    const getUsername = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        console.log(response.data);
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        // setLoading2(false);

        setError(false);
      }
    };
    getUsername();
  }, []);
  return (
    <div className={classes.page} >
        <nav > 
          <div className={classes.navbar} >
          <Link to="/" className={classes.nav}>
            <AiFillHome /> Acceuil
          </Link>

          <a href="#apropos" className={classes.nav}>
            <RiQuestionnaireFill /> A propos  </a>
          

          <Link className={classes.nav}>
            <GiPerson />
            Particuliers
          </Link>

          <a href="#professionels" className={classes.nav}>
            <FaUserNurse /> Professionels de la santé
          </a>
          <div className={classes.searchBox}>
            <input
              className={classes.searchTxt}
              type="text" 
              name=""
              placeholder="Recherche par produit"
            />
            <Link className={classes.searchBtn}>
              <BsSearch />
            </Link>
          </div>
          </div>
        </nav> 
      <Formik
        initialValues={{ name: "", username: "", email: "", password: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(50).required(),
          username: Yup.string().required(),
          email: Yup.string().email().required(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await axios.post("http://localhost:5000/users", {
            email: values.email,
            name: values.name,
            username: values.username,
            password: values.password,
          });
          setUsers(response.data.data);
          setSubmitting(false);
          console.log("values=", values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <div >
              <form >
                {errors.email && touched.email && <div> {errors.email} </div>}
                {errors.name && touched.name && <div> {errors.name} </div>}
                {errors.username && touched.username && (
                  <div> {errors.username} </div>
                )}
                {errors.password && touched.password && <div> {errors.password} </div>}
               
                
               <div className={classes.container}>
               <div className={classes.signupContainer}>
               <img className={classes.avatar} src={avatar} alt="Avatar"/>
               <h2 className={classes.title}>Bienvenu<MdWavingHand className={classes.i}/></h2>
               <div className={classes.inputDiv}>
               <div className={classes.i}>
               <i className={classes.faUser}></i>
               </div>
               <div className={classes.inputs}>
                  <label className={classes.name}> Nom: </label>
                <input className={classes.input}
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
               </div>
               </div>
               <div className={classes.inputDiv}>
               <div className={classes.i}>
               <i className={classes.faLock}></i>
               </div>
               <div className={classes.inputs}>
               <label className={classes.name}> Pseudonyme: </label>
                <input  className={classes.input}
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
               </div>
               </div>

               <div className={classes.inputDiv}>
               <div className={classes.i}>
               <i className={classes.faLock}></i>
               </div>
               <div className={classes.inputs}>
               <label className={classes.name}> Email: </label>
                <input  className={classes.input}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  
                />
               </div>
               </div>
               <div className={classes.inputDiv}>
               <div className={classes.i}>
               <i className={classes.faLock}></i>
               </div>
               <div className={classes.inputs}>
              
               <label className={classes.name}> Mot de passe: </label>
                <input  className={classes.input}
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
               </div>
               </div>

               <button className={classes.button}  type="submit" > S'inscrire </button>
               </div>
               
              
            <div >
            </div>
             
              
               
            </div>
             
              </form>
              {/* <div className={classes.footer}>
      <footer> 
      <div className={classes.social}>
      <span><BsFacebook className={classes.facebook}/>  </span>
      
      <span> <BsInstagram />  </span> 
      <span> <AiFillLinkedin/>  </span>  
      <span> <FaTwitterSquare/>  </span>  
      </div>
      </footer>
      </div>  */}
              
            </div>
          );
        }}
      </Formik>
      
      </div>
  )}

export default Inscription;