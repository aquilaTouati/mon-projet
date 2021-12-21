import React, { useState, useEffect }from "react";
import { makeStyles, Button, Menu, MenuItem, Fade } from "@material-ui/core";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { MdAddCircle, MdPerson } from "react-icons/md";
import { RiAccountCircleFill, RiNotification2Line } from "react-icons/ri";
import { AiOutlineCaretDown } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import logo from "../images.jpg/Copharma.png";
import * as constants from "../constants";
const useStyles = makeStyles({
  navbar: {
    marginTop: "2rem",
  },
  btn: {
    width: "20%",
    padding: "1rem",
    paddingBottom: "0.5rem",
    marginLeft: "1rem",
    maringTop: "4rem",
    borderRight: "2.5px solid grey",
    color: "white",
    transition: "color 0.5s linear",
    fontFamily: "Poppins, sans-serif",
    fontSize: 17,
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
    },
  },

  searchBox: {
    position: "absolute",
    marginTop: "-0.7rem",
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
  drop: {
    color: "blue",
    marginRight: 15,
    fontSize: 30,
  },
  menu: {
    marginTop: 40,
    marginLeft: -80,
    fontFamily: "Poppins, sans-serif",
  },
  item: {
    marginRight: 20,
    fontSize: 25,
    color: "#03989E",
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

  notif: {
    marginRight: "2rem",
    fontSize: "30px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  acc: {
    fontSize: "30px",
    marginRight: "2rem",
    marginLeft: "1rem",
    "&:hover": {
      cursor: "pointer",
    },
  },

  logo: {
    width: "20%",
    marginTop: "-5.2rem",
    position: "absolute",
  },
  options: {
    marginLeft: "20rem",
  },
  fleche: {
    marginLeft: "0.5rem",
  },
  menu2: {
    marginTop: "3rem",
    marginLeft: "-3rem",
  },
});

const Header = () =>  {
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  
 
  console.log(user);
  // const [user,setUser]= useState()
  const logout = () => {
    dispatch({ type: constants.LOGOUT });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  /*Dropping menu*/
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEll, setAnchorEll] = React.useState(null);
  const [anchorElll, setAnchorElll] = React.useState(null);
  const [anchorEllll, setAnchorEllll] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEll);
  const open2 = Boolean(anchorElll);
  const open3 = Boolean(anchorEllll);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEll(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorElll(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorEllll(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose1 = () => {
    setAnchorEll(null);
  };
  const handleClose2 = () => {
    setAnchorElll(null);
  };
  const handleClose3 = () => {
    setAnchorEllll(null);
  };
  return (
    <div>
      <div className={classes.navbar}>
        <header>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>

          <div className={classes.options}>
            {/* Vente */}
            <span
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className={classes.btn}
              variant="outlined"
              size="large"
            >
              Vente
              <AiOutlineCaretDown className={classes.fleche} />{" "}
            </span>

            <Menu
              className={classes.menu}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem
                className={classes.buy}
                onClick={handleClose}
                onClick={() => {
                  history.push(`/Form`);
                }}
              >
                {" "}
                <MdAddCircle className={classes.item} />
                Vendre un article
              </MenuItem>
              <MenuItem className={classes.buy} onClick={handleClose}>
                {" "}
                <MdAddCircle className={classes.item} /> Acheter un article
              </MenuItem>
            </Menu>
            {/* Vente */}

            {/* Location */}
            <span
              className={classes.btn}
              variant="outlined"
              size="large"
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick1}
              className={classes.btn}
              variant="outlined"
              size="large"
            >
              Location
              <AiOutlineCaretDown className={classes.fleche} />
            </span>
            <Menu
              className={classes.menu}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEll}
              open={open1}
              onClose={handleClose1}
              TransitionComponent={Fade}
            >
              <MenuItem
                className={classes.buy}
                onClick={handleClose1}
                onClick={() => {
                  history.push(`/Location`);
                }}
              >
                {" "}
                <MdAddCircle className={classes.item} />
                Mettre un article en location
              </MenuItem>
              <MenuItem
                className={classes.buy}
                onClick={handleClose1}
                onClick={() => {
                  history.push(`/Location`);
                }}
              >
                {" "}
                <MdAddCircle className={classes.item} /> Louer un produit
              </MenuItem>
            </Menu>
            {/* Location */}

            {/* Don */}
            <span
              className={classes.btn}
              variant="outlined"
              size="large"
              className={classes.btn}
              variant="outlined"
              size="large"
              id="fade-button"
              aria-controls="fade-menu"
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
              className={classes.btn}
              variant="outlined"
              size="large"
            >
              Dons
              <AiOutlineCaretDown className={classes.fleche} />
            </span>
            <Menu
              className={classes.menu}
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorElll}
              open={open2}
              onClose={handleClose2}
              TransitionComponent={Fade}
            >
              <MenuItem
                className={classes.buy}
                onClick={handleClose2}
                onClick={() => {
                  history.push(`/Dons`);
                }}
              >
                {" "}
                <MdAddCircle className={classes.item} />
                Faire un don
              </MenuItem>
              <MenuItem className={classes.buy} onClick={handleClose2}>
                {" "}
                <MdAddCircle className={classes.item} /> Chercher un don
              </MenuItem>
            </Menu>
            {/* Don */}

            {/* <div className={classes.searchBox}>
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
            </div> */}
            <div className={classes.icons}>
              <span
                variant="outlined"
                size="large"
                id="fade-button"
                aria-controls="fade-menu"
                aria-haspopup="true"
                aria-expanded={open3 ? "true" : undefined}
                onClick={handleClick3}
                variant="outlined"
                size="large"
                className={classes.acc}
              >
                {" "}
                <RiAccountCircleFill />
                <AiOutlineCaretDown />{" "}
              </span>
              <Menu
                className={classes.menu2}
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEllll}
                open={open3}
                onClose={handleClose3}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose3}>
                  {" "}
                  <MdPerson className={classes.item} /> Mon compte
                </MenuItem>

        <div >
        {user?.result ? (
          <div className={classes.profile}>
           {/* <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar> */}
            {/* <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography> */}
            <MenuItem onClick={handleClose3} onClick={logout}>

          <GoSignOut className={classes.item} /> Déconnexion
           
                </MenuItem>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </div>

               
              </Menu>
              <span className={classes.notif}>
                {" "}
                <RiNotification2Line />{" "}
              </span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
