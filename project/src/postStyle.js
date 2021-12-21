import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  keyPost:{
      width:"30%",
      marginLeft:"3rem",
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
  icons: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: -30,
    marginRight: 20,
    color: "white",
  },

  materiel: {
    backgroundColor: "white",
    marginTop: 140,
    marginLeft: 50,
    fontFamily: "Poppins, sans-serif",
    fontSize: 25,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#DDECED",
    },
  },
  spans: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  page: {
    backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #266D70 100% )",
    height: "250rem",
    marginRight: "-0.5rem",
    marginLeft: "-1rem",
    marginTop: "-5rem",
    
  },

  pro: {
    color: "#03989E",
    marginRight: 15,
    fontSize: 35,
  },
  med: {
    color: "#737373",
    fontSize: 45,
    marginRight: 15,
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

  content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "wrap",
    marginTop: "40px",
  },

  box: {
    width: "40%",
    marginLeft: "5rem",
    border: "20px solid #ffff",
    boxShadow: "20px 15px 35px rgba(0, 0, 0, 0.8)",
    backgroundColor: "white",
    borderRadius: "5%",
    transition: "0.8s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)" /*Zoom*/,
    },
  },
  article: {
    position: "relative",
    top: "0",
    left: "0",
    width: "100%",
    height: "300px",
    objectFit: "cover",
  },
  iboxx: {
    position: "relative",
    width: "100%",
    height: "300px",
  },
  productName: {
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: "0.5px solid grey",
    paddingBottom: "1rem",
  },
  place: {
    textAlign: "center",
  },
  iconItem: {
    display: "flex",
    alignContent: "row",
    width: "100%",
    paddingRight: "14rem",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#D9E8E8",
    },
  },
  minicon: {
    width: "6%",
    height: "2%",
    marginLeft: "1rem",
  },
  borderBottom: {
    borderBottom: "1px solid white",
    marginTop: "10rem",
    width: "86%",
    marginLeft: "8rem",
  },
  menu2: {
    width: "30%",
    marginTop: "3.7rem",
    marginLeft: "-3.5rem",
  },
  menu3: {
    width: "40%",
    marginTop: "3.7rem",
    marginLeft: "-2.5rem",
  },
  menu4: {
    width: "40%",
    marginTop: "3.7rem",
    marginLeft: "-0.7rem",
  },
  general: {
    marginTop: "7rem",
    position: "absolute",
    fontSize: "25px",
    color: "white",
    marginLeft: "8rem",
  },
  all: {
    color: "white",
    opacity: 0.7,
    fontSize: "18px",
    marginLeft: "8rem",
  },
  posts:{
    display:"flex",
    flexDirection:"row",
    marginLeft:"60rem",
    maxWidth:"20%"
  
  },
  // materialsMenu:{
  //   maxWidth:"20%",
  //   marginLeft:"10rem"
  // },
  progress:{
    marginTop:"10rem"
  }

}));