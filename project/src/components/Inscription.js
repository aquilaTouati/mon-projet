import { useEffect, useState } from "react";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import trait from "../images.jpg/trait.png";
import { BsSearch, BsFacebook, BsInstagram } from "react-icons/bs";
import "../styles.css/profile.css";
import { MdWavingHand } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { AiFillHome, AiFillLinkedin } from "react-icons/ai";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GiPerson } from "react-icons/gi";
import { FaUserNurse, FaTwitterSquare } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  page: {
   
    fontFamily: "Poppins, sans-serif",
    backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #266D70 100% )",
     height: "50rem",
    marginRight: "-0.5rem",
    marginLeft: "-1rem",
    marginTop:"-0.5rem",
    
  },

  avatar: {
    width: "15%",
    marginLeft: "20rem",
  },
  container: {
    
    width: "50%",
    // float: "right",
     marginTop: "11rem",
  //  boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",
    // marginRight: "35rem",
    borderRadius: 10,
    //  backgroundColor: "white",
     position:"absolute",
     marginLeft:"25rem",
      backgroundColor: "white",
  
    
  },
  input: {
    border:"none",
    background:"none",
    outline:"none",

    borderBottom:"2px solid black",
    fontFamily: "Poppins, sans-serif",
    fontSize: "15px",
  
  },
  inputDiv: {
    marginBottom: "1.7rem",
   
    
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    marginLeft: "6rem",
    marginTop:"2rem",
  },
  title: {
    marginLeft: "9rem",
  },
  button: {
    marginLeft: "10.5em",
    marginBottom: "2rem",
    fontSize: 20,
    backgroundColor: "#BACAD9 ",
    borderRadius: "10px",
    fontFamily: "Poppins, sans-serif",
    transition: "ease-out 0.8s",
    border: "none",
    width: "45%",
    color: "black",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "inset 440px 0 0 0 #2C4D5B",
      color: "white",
    },
  },
  i: {
    marginLeft: "1rem",
    color: "#2C4D5B",
  },

  nameFname: {
    display: "flex",
    flexDirection: "row",
  },
  name:{
    fontWeight:"bold",
  },
  radio:{
    fontWeight:"bold",
    paddingBottom:"1rem" ,
  },
  professionel:{
    marginLeft:"17.5rem",
    
  },
  inscription:{
    display:"flex",
    flexDirection:"column",
    marginLeft:"-2.7rem",
    
  },
  trait:{
    marginTop:"-3rem",
    marginLeft:"3rem",
    width:"40%",
    position:"absolute",

  }

});

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
    <div className={classes.page}>
      <Formik
        initialValues={{ name: "", username: "", email: "", password: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(50).required(),
          username: Yup.string().required(),
          email: Yup.string().email().required(),
        })}
        onSubmit={async (values, { setSubmitting }, ) => {
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
            <div>
              <form>
                {errors.email && touched.email && <div> {errors.email} </div>}
                {errors.name && touched.name && <div> {errors.name} </div>}
                {errors.username && touched.username && (
                  <div> {errors.username} </div>
                )}
                {errors.password && touched.password && (
                  <div> {errors.password} </div>
                )}

                <div className={classes.container}>
                  <div className={classes.signupContainer}>
               
                    <div className={classes.inscription}>
                      
                    <h2 className={classes.title}>
                      Inscription   </h2>
                    <img className={classes.trait} src={trait} alt="Avatar" /> 
                    </div>
                    <div className={classes.inputDiv}>
                      <div className={classes.nameFname}>
                        <div className={classes.inputs}>
                          <label className={classes.name}> Nom </label>
                          <input
                            className={classes.input}
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            placeholder="Insérez votre nom"
                          />
                        </div>

                        <div className={classes.inputs}>
                          <label className={classes.name}> Prénom </label>
                          <input
                            className={classes.input}
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            placeholder="Insérez votre prénom"
                          />
                        </div>
                      </div>
                      <div className={classes.nameFname}>
                        <div className={classes.inputs}>
                          <label className={classes.name}> E-mail </label>
                          <input
                            className={classes.input}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Insérez votre email"
                          />
                        </div>
                        <div className={classes.inputs}>
                          <label className={classes.name}>
                            Confirmation{" "}
                          </label>
                          <input
                            className={classes.input}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Confirmez votre email"
                          />
                        </div>
                      </div>
                      <div className={classes.nameFname}>
                        <div className={classes.inputs}>
                          <label className={classes.name}>
                            {" "}
                            Mot de passe{" "}
                          </label>
                          <input
                            className={classes.input}
                            name="password"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                        </div>
                        <div className={classes.inputs}>
                          <label className={classes.name}>Wilaya</label>
                          <select className={classes.alger}  className={classes.input}>
                            <option className={classes.option}> Alger </option>
                          </select>
                        </div>
                      </div>

                      <div className={classes.inputs}>
                        <label className={classes.radio}>Je suis</label>
                        <div className={classes.nameFname}>
                          <label for="Particulier">Particulier</label>
                          <input 
                            type="radio"
                            id="Particulier"
                            name="option"
                            value="Particulier"
                          />

                          <label for="Professionel" className={classes.professionel} >Professionel</label>
                          <input
                            type="radio"
                            id="Professionel"
                            name="option"
                            value="Professionel"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={classes.button} type="submit">
                  {" "}
                  Confirmer{" "}
                </button>
                </div>

              
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default Inscription;
