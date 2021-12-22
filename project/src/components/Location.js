import React, { useState, useEffect} from "react";
import { useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { makeStyles } from "@material-ui/core";
import { createPost, updatePost } from "../actions/posts";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";


const useStyles = makeStyles({
  page: {
    backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #266D70 100% )",
    height: "50rem",
    marginRight: "-0.5rem",
    marginLeft: "-1rem",
    marginTop: "-5rem",
    paddingBottom: "8rem",
  },
  searchBox: {
    position: "absolute",
    marginTop: "3.2rem",
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
    paddingBottom:"3rem",
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
    width: "50%",
    float: "right",
    marginBottom: "-6rem",
    marginTop: "8rem",
    marginRight: "-4rem",
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
    marginLeft: "10em",
    marginTop: 8,
  },
  button: {
    marginLeft: "4.5em",
    marginTop: "1.5rem",
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
      boxShadow: "inset 399px 0 0 0 #0E2F5B",
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

const Location = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    nom: "",
    catégorie: "",
    prix: "",
    etat: "",
    wilaya: "",
    description: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  // const clear = () => {
  //   setCurrentId(0);
  //   setPostData({
  //     nom: "",
  //     catégorie: "",
  //     prix: "",
  //     etat: "",
  //     wilaya: "",
  //     description: "",
  //     selectedFile: "",
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      history.push('/Posts');
    } else {
      dispatch(updatePost(currentId, postData));
    }
  };

  return (
    <div className={classes.page}>
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
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        {/* <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}
        <div className={classes.container}>
          <h1 className={classes.title}>
            Mettre un article en location <FaHandHoldingMedical />
          </h1>
          <div className={classes.inputLabel}>
            <label className={classes.label}>Nom du matériel: </label>
            <input
              name="nom"
              value={postData.nom}
              className={classes.nom}
              onChange={(e) =>
                setPostData({ ...postData, nom: e.target.value })
              }
              type="name"
            />
          </div>
          <div className={classes.inputLabel}>
            <label className={classes.label}>Choisir la catégorie: </label>
            <select
              name="catégorie"
              className={classes.categorie}
              value={postData.catégorie}
              onChange={(e) =>
                setPostData({ ...postData, catégorie: e.target.value })
              }
            >
              <option className={classes.option}> Matériel Médical</option>
              <option className={classes.option}> Matériel Professionel</option>
              <option className={classes.option}>
                {" "}
                Produit d'incontinence
              </option>
            </select>
          </div>
          <div className={classes.inputLabel}>
            <label className={classes.label}>Prix/semaine: </label>
            <input
              name="prix"
              className={classes.prix}
              type=""
              placeholder="En Dinars"
              value={postData.prix}
              onChange={(e) =>
                setPostData({ ...postData, prix: e.target.value })
              }
            />
          </div>

          <div className={classes.inputLabel}>
            <label className={classes.label}>Etat:</label>
            <select
              name="etat"
              className={classes.etat}
              value={postData.etat}
              onChange={(e) =>
                setPostData({ ...postData, etat: e.target.value })
              }
            >
              <option className={classes.option}>Neuf</option>
              <option className={classes.option}> Bon etat</option>
              <option className={classes.option}> Etat moyen</option>
              <option className={classes.option}> Reconditionné</option>
            </select>

            <label  name="wilaya"
               className={classes.ville}>Wilaya:</label>
            <select
            className={classes.alger}
            value={postData.wilaya}
            onChange={(e) =>
              setPostData({ ...postData, wilaya: e.target.value })
            }
            >
              <option> Djelfa</option>
              <option> Alger </option>
              <option>Constantine</option>
              <option> Tizi Ouzou</option>
              <option> Bejaia </option>
              <option> Oran</option>
              <option> Tlemcen</option>
              <option> Blida</option>
              <option> Tipaza</option>
              <option> Msila</option>
              <option> Setif</option>

            </select>
          </div>
          <div className={classes.inputLabel}>
            <label className={classes.label}>Description:</label>
            <input
            required
              name="description"
              className={classes.informations}
              value={postData.description}
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
              type="message"
            />
          </div>
          <label className={classes.label}>Inserez une photo: </label>
          <FileBase
            className={classes.file}
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
          <button type="submit" className={classes.button} >
            {" "}
            Ajouter{" "}
          </button>
         

        </div>
      </form>
    </div>
  );
};

export default Location;
