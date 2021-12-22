import React from "react";
import { useSelector } from "react-redux";
import Post from "../posts/Post";
import useStyles from "../../postStyle"
import { getPosts } from "../../actions/posts";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { FaStethoscope } from "react-icons/fa";
import { MdWheelchairPickup} from "react-icons/md";
import { BsFillDropletFill } from "react-icons/bs";
import { Menu, MenuItem, Fade, Button, makeStyles, Grid, CircularProgress  } from "@material-ui/core";
import icon1 from "../../images.jpg/icons8-microbe.png";
import icon2 from "../../images.jpg/tensiometre.png";
import icon3 from "../../images.jpg/sleep.png";
import icon4 from "../../images.jpg/firstaid.png";
import icon5 from "../../images.jpg/bienetre.png";
import icon6 from "../../images.jpg/complements.png";
import icon7 from "../../images.jpg/wheelchair.png";
import icon8 from "../../images.jpg/pillow.png";
import icon9 from "../../images.jpg/icon9.png";
import icon10 from "../../images.jpg/icon10.png";
import icon11 from "../../images.jpg/icon11.png";
import icon12 from "../../images.jpg/icon12.png";
import icon13 from "../../images.jpg/icon13.png";
import icon14 from "../../images.jpg/icon14.png";
import icon15 from "../../images.jpg/icon15.png";
import icon16 from "../../images.jpg/icon16.png";




const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

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
      <div className={classes.searchBox}>
              <input
                className={classes.searchTxt}
                type="text"
                name=""
                placeholder="Recherche par produit"
                onChange={(event)=>{
                  setSearchTerm(event.target.value);
                }}
                
               
              />
             
              <a className={classes.loupe} href="#">
                <FiSearch />
              </a>
            </div>
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
            size="large"
            className={classes.materiel}
            variant="outlined"
            size="large"
          >
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
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img className={classes.minicon} src={icon1} alt="Covid" />
              <MenuItem className={classes.item2} onClick={handleClose3}>
                Covid 19
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img className={classes.minicon} src={icon2} alt="Mesure" />
              <MenuItem className={classes.item2} onClick={handleClose3}>
                {" "}
                Appareils de mesure
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img className={classes.minicon} src={icon3} alt="Sleep" />
              <MenuItem className={classes.item2} onClick={handleClose3}>
                {" "}
                Accesoires pour apnées du sommeil
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img className={classes.minicon} src={icon4} alt="Pharma" />
              <MenuItem className={classes.item2} onClick={handleClose3}>
                {" "}
                Trousse de pharmacie
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img className={classes.minicon} src={icon5} alt="Bien etre" />
              <MenuItem className={classes.buy} onClick={handleClose3}>
                {" "}
                Bien etre
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img
                className={classes.minicon}
                src={icon6}
                alt="Complements alimentaires"
              />
              <MenuItem className={classes.buy} onClick={handleClose3}>
                {" "}
                Complements alimentaires
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img
                className={classes.minicon}
                src={icon7}
                alt="Chaises et cannes"
              />
              <MenuItem className={classes.buy} onClick={handleClose3}>
                {" "}
                Cannes et chaises roulantes
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img className={classes.minicon} src={icon8} alt="Coussins" />
              <MenuItem className={classes.buy} onClick={handleClose3}>
                {" "}
                Coussins et assises spécifiques
              </MenuItem>
            </div>
          </Menu>

          <Button
            variant="outlined"
            size="large"
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open4 ? "true" : undefined}
            onClick={handleClick4}
            variant="outlined"
            size="large"
            className={classes.materiel}
            variant="outlined"
            size="large"
            className={classes.materiel}
            variant="outlined"
            size="large"
          >
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
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img className={classes.minicon} src={icon9} alt="Equipements" />
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                Equipements medicaux
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img className={classes.minicon} src={icon10} alt="Soins" />
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                Soins et pensements
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img
                className={classes.minicon}
                src={icon11}
                alt="Diagnostique"
              />
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                Diagnostique et autocontrol
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img
                className={classes.minicon}
                src={icon12}
                alt="Diagnostique"
              />
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                Hygiène et désinfection
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img
                className={classes.minicon}
                src={icon13}
                alt="Diagnostique"
              />
              <MenuItem className={classes.buy} onClick={handleClose4}>
                {" "}
                Consommables
              </MenuItem>
            </div>
          </Menu>
          <Button
            variant="outlined"
            size="large"
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open5 ? "true" : undefined}
            onClick={handleClick5}
            variant="outlined"
            size="large"
            className={classes.materiel}
            variant="outlined"
            size="large"
          >
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
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img
                className={classes.minicon}
                src={icon16}
                alt="Diagnostique"
              />
              <MenuItem className={classes.buy} onClick={handleClose5}>
                {" "}
                Hygiène et soins du corps
              </MenuItem>
            </div>
            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img
                className={classes.minicon}
                src={icon15}
                alt="Diagnostique"
              />
              <MenuItem className={classes.buy} onClick={handleClose5}>
                {" "}
                Alèses jetables
              </MenuItem>
            </div>

            <div className={classes.iconItem}>
              {" "}
              {/* Icon and item */}
              <img
                className={classes.minicon}
                src={icon14}
                alt="Diagnostique"
              />
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
        <p className={classes.all}>
          Disponible à l’achat, à la location, ou au don; découvrez toutes les
          catégories des matériaux médicaux qui peuvent améliorer votre
          quotidien.{" "}
        </p>
        <section className={classes.materialsMenu}>
          <div className={classes.content}>
            {!posts.length ? (
              <CircularProgress className={classes.progress} />
            ) : (
              <Grid className={classes.container} container alignItems="stretch" spacing={3} >
                {posts.filter((val)=>{
                   if (searchTerm == ""){
                    return val
                  }else if (val.nom.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                  }
                }).map((post) => (
                  <Grid key={post._id} /*item xs={12} sm={6} md={6}*/ className={classes.keyPost}>
                    <Post post={post} setCurrentId={setCurrentId} />
                  </Grid>
                ))}
                 
              </Grid>
              
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Posts;
