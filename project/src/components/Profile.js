import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "../styles.css/profile.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { IoMdArrowRoundBack} from "react-icons/io";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    width: 200,
    padding: 10,
    height: 40,
    // border: "solid",
    borderRadius: 20,
    marginLeft: 15,
    marginTop: 35,
    color: "white",
    transition: "ease-out 3s",
    transition: "color 0.5s linear",
    fontFamily: "Poppins, sans-serif",
    fontSize: 17,
    fontWeight: "bold",
    "&:hover": {
      cursor: "pointer",
      color: "black",
      backgroundColor: "#2F4F4F",
      borderColor: "#E6E6FA",
      backgroundColor: "#D6DEE8",
    },
  },
  icons: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: -40,
    marginRight: 20,
  },
  notif: {
    marginRight: 35,
    fontSize: 30,
  },
  acc: {
    fontSize: 30,
    marginRight: 20,
  },
  materiel: {
    marginTop: 140,
    marginLeft: 50,
    fontFamily: "Poppins, sans-serif",
    fontSize: 25,
  },
  spans: {
    display: "flex",
    justifyContent: "center",
  },
  navbar: {
    backgroundColor: "#32609D",
   marginTop:-20,
   paddingBottom:20,
   marginLeft:-10,
   marginRight:-10,

  
  },
});
function Profile() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <div className={classes.navbar}>
        <header>
        <Button className={classes.btn} onClick={() => {history.goBack();}}><IoMdArrowRoundBack/> Précédent</Button>
          <Button className={classes.btn} variant="outlined" size="large">
            Location
          </Button>
          <Button className={classes.btn} variant="outlined" size="large">
            Vente
          </Button>
          <Button className={classes.btn} variant="outlined" size="large">
            Dons
          </Button>
          <div className={classes.icons}>
            <span className={classes.acc}>
              {" "}
              <RiAccountCircleFill />{" "}
            </span>
            <span className={classes.notif}>
              {" "}
              <RiNotification2Line />{" "}
            </span>
          </div>
        </header>
      </div>
      <main>
        <div className={classes.spans}>
          <Button className={classes.materiel} variant="outlined" size="large">
            Matériel médical
          </Button>
          <Button className={classes.materiel} variant="outlined" size="large">
            Matériel d'incontinence
          </Button>
          <Button className={classes.materiel} variant="outlined" size="large">
            Matériel professionel
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Profile;
