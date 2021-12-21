import React from "react";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import action from "../action";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles({
  page: {
    backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #266D70 100% )",
    height: "50rem",
    marginRight: "-0.5rem",
    marginLeft: "-1rem",
    marginTop: "-5rem",
    paddingBottom: "8rem",
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
    marginLeft: "5em",
    marginTop: 8,
  },
  button: {
    marginLeft: "4.5em",
    marginBottom: "2rem",
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
      boxShadow: "inset 371px 0 0 0 #0E2F5B",
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
function Vente({ onSuccess }) {
  const history = useHistory();
  const classes = useStyles();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [etat, setEtat] = useState();
  const [place, setPlace] = useState();
  const [description, setDescription] = useState();
   const productsList = useSelector((state)=> state.productsList);

  const newProducts={
    nom: name,
    etat: etat,
    catégorie: category,
    prix: price,
    wilaya: place,
    description: description
  }; 


  const dispatch = useDispatch();
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
      .post("http://localhost:5000/products", data)
      .then((response) => {
        toast.success("Upload Success");
        onSuccess(response.data);
      })
      .catch((e) => {
        toast.error("Upload Error");
      });
  };
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        console.log(response.data);
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        // setLoading2(false);

        setError(false);
      }
    };
    getProduct();
  }, []);
  return (
    <div>
      <Formik
        initialValues={{
          nom: "",
          catégorie: "",
          prix: "",
          etat: "",
          wilaya: "",
          description: "",
        }}
        validationSchema={Yup.object().shape({
          nom: Yup.string().max(50).required(),
          catégorie: Yup.string().required(),
          prix: Yup.string().required(),
          etat: Yup.string().required(),
          wilaya: Yup.string().required(),
          description: Yup.string().required(),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await axios.post("http://localhost:5000/products", {
            nom: values.nom,
            catégorie: values.catégorie,
            prix: values.prix,
            etat: values.etat,
            wilaya: values.wilaya,
            description: values.description,
          });
          setProducts(response.data.data);
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
            <div className={classes.page}>
              <form>
                {errors.nom && touched.nom && <div> {errors.nom} </div>}
                {errors.catégorie && touched.catégorie && (
                  <div> {errors.catégorie} </div>
                )}
                {errors.prix && touched.prix && <div> {errors.prix} </div>}
                {errors.etat && touched.etat && <div> {errors.etat} </div>}
                {errors.wilaya && touched.wilaya && (
                  <div> {errors.wilaya} </div>
                )}
                <div className={classes.container}>
                  <h1 className={classes.title}>
                    Vendre un article <FaHandHoldingMedical />
                  </h1>
                  <div className={classes.inputLabel}>
                    <label className={classes.label}>Nom du matériel: </label>
                    <input
                    name="nom"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nom}
                      className={classes.nom}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="name"
                    />
                  </div>
                  <div className={classes.inputLabel}>
                    <label className={classes.label}>
                      Choisir la catégorie:{" "}
                    </label>
                    <select
                    name="catégorie"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.catégorie}
                      className={classes.categorie}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option className={classes.option}>
                        {" "}
                        Matériel Médical
                      </option>
                      <option className={classes.option}>
                        {" "}
                        Matériel Professionel
                      </option>
                      <option className={classes.option}>
                        {" "}
                        Produit d'incontinence
                      </option>
                    </select>
                  </div>

                  <div className={classes.inputLabel}>
                    <label className={classes.label}>Prix du matériel: </label>
                    <input name="prix" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.prix}
                      className={classes.prix}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type=""
                      placeholder="En Dinars"
                    />
                  </div>

                  <div className={classes.inputLabel}>
                    <label className={classes.label}>Etat:</label>
                    <select
                    name="etat"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.etat}
                      className={classes.etat}
                      value={etat}
                      onChange={(e) => setEtat(e.target.value)}
                    >
                      <option className={classes.option}>Neuf</option>
                      <option className={classes.option}> Bon etat</option>
                      <option className={classes.option}> Etat moyen</option>
                      <option className={classes.option}> Reconditionné</option>
                    </select>

                    <label className={classes.ville}>Wilaya:</label>
                    <select
                    name="wilaya"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.wilaya}
                      className={classes.alger}
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                    >
                      <option className={classes.option}> Alger </option>
                    </select>
                  </div>
                  <div className={classes.inputLabel}>
                    <label className={classes.label}>Description:</label>
                    <input
                    name="description"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.description}
                      className={classes.informations}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      type="message"
                    />
                  </div>

                  <div>
                    <form
                      className={classes.inputLabel}
                      method="post"
                      action="#"
                      id="#"
                      onSubmit={onSubmit}
                    >
                      <label className={classes.label}>
                        Inserez une photo:{" "}
                      </label>
                      <input
                        className={classes.file}
                        type="file"
                        onChange={onInputChange}
                        multiple
                      />
                    </form>

                    <button
                      // onClick={dispatch(action.addElement(newProducts))}
                      type="submit"
                      className={classes.button}
                    >
                      {" "}
                      Ajouter{" "}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default Vente;
