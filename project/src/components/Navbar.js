import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiFillHome, AiFillLinkedin } from "react-icons/ai";
import { RiQuestionnaireFill } from "react-icons/ri";
import { GiPerson } from "react-icons/gi";
import { FaUserNurse, FaTwitterSquare, FaStethoscope } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import "../styles.css/design.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "../images.jpg/Copharma.png";
const useStyles = makeStyles({
  shape: {
    position: "absolute",
    marginLeft: "-3rem",
    marginTop: "-0.5rem",
    marginRight: "0.5rem",
  },
  nav: {
    textDecoration: "none",
    transition: "0.1s",
    paddingBottom: "1rem",
    marginLeft: 30,
    color: "white",
    fontSize: 18,

    "&:hover": {
      cursor: "pointer",
      borderBottom: "solid white",
    },
  },

  searchBox: {
    position: "absolute",
    marginTop: "-0.8rem",
    left: "40rem",
    transform: "translate(-50%,-50%)",
    background: "#2C4D5B",
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
    color: "black",
    lineHeight: 3,
  },
  navs: {
    marginLeft: "55rem",
  },

  navbar: {
    //     boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

    // backgroundImage: "linear-gradient(-45deg, #BACAD9 20%, #2C4D5B 100%)",
    // backgroundImage: "linear-gradient(-45deg, #BACAD9 20%, #2C4D5B 100%)",
    // height:"50rem",
    marginTop: "1.5rem",

    position: "absolute",
  },

  loupe: {
    position: "absolute",
  },
  logo: {
    width: "20%",
    marginTop: "-5rem",
    position: "absolute",
  },
});


function Nav() {
 
  // const history = useHistory();
  const classes = useStyles();
  const [navbar, setNavbar] = useState(false);
  const [searchFilter, setSearchFilter] = useState([]);
  const [data, setData] = useState([]);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  // const changeNav =()=>{
  //   console.log(window.scrollY)
  //   if(window.scrollY >= 680){
  //     setNavbar(true)
  //   }else{
  //     setNavbar(false)
  //   }
  // }
  // window.addEventListener('scroll', changeNav)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        console.log(response.data);
        setData(response.data.data);
        setSearchFilter(response.data.data);
        setLoading(false);
      } catch (error) {
        // setLoading2(false);
        setError(false);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const results = searchFilter.filter((response) =>
      response.nom.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);
  console.log(data);

  const onChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div>
      <header>
        <nav
          /*className={classes.navbar}*/ className={
            navbar ? "navbar active" : "navbar"
          }
        >
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>
          <div className={classes.navs}>
            <Link to="/" className={classes.nav}>
              Acceuil
              <AiFillHome />{" "}
            </Link>
            <Link to="/Particuliers" className={classes.nav}>
              Particuliers <GiPerson />
            </Link>
            <Link to="/EspacePro" className={classes.nav} >
              Espace pro <FaUserNurse />
            </Link>
            <Link to="/Apropos" className={classes.nav}>
              A propos de nous <RiQuestionnaireFill />{" "}
            </Link>

            

           
          </div>
          <div className={classes.searchBox}>
            <input
              value={result}
              onChange={onChange}
              className={classes.searchTxt}
              type="text"
              name=""
              placeholder="Recherche par produit"
            />
            {data.map((r, i) => (
              <ul key={i}>
                <li>{r.nom}</li>
              </ul>
            ))}
            <Link className={classes.searchBtn}>
              <BsSearch className={classes.loupe} />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
