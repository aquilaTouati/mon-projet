import React from "react";
import { makeStyles } from "@material-ui/core";
import {MdLocationPin} from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
const useStyles = makeStyles({
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
    height: "100%",
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
    width: "50%",
    margin: "3rem",
    border: "20px solid #ffff",
    boxShadow: "20px 15px 35px rgba(0, 0, 0, 0.8)",
    backgroundColor: "white",
    borderRadius: 10,
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
  row:{
    display:"flex",
    flexDirection:"row",
  },
  prix:{
    marginLeft:"5rem"

  },
  
  icon:{
    marginRight:"1rem"
  }
});

const Post = ({ post /*setCurrentId*/ }) => {
  // const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.box}>
     
      <div className={classes.inboxx}>
        <img
          src
          className={classes.article}
          src={post.selectedFile}
          alt= "file selection"
        />
        <div className={classes.imageOverlay}></div>
      </div>
      <div className={classes.text}>
        <p className={classes.productName}>{post.nom}</p>
        <div className={classes.row}>
        <p className={classes.place}>
          <MdLocationPin />
          {post.wilaya}
        </p>
        <p className={classes.prix}>
        <AiOutlineDollarCircle/>
          {post.prix }
        </p>
        </div>
      </div>
    </div>
    
    // <Card className={classes.card}>
    //   <CardMedia
    //     image={
    //       post.selectedFile ||
    //       "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
    //     }
    //     title={post.title}
    //   />
    //   <div className={classes.overlay}>
    //     <Typography variant="h6">{post.creator}</Typography>
    //     <Typography variant="body2">
    //       {moment(post.createdAt).fromNow()}
    //     </Typography>
    //   </div>
    //   <div className={classes.overlay2}>
    //     <Button
    //       style={{ color: "red" }}
    //       size="small"
    //       onClick={() => setCurrentId(post._id)}
    //     ></Button>
    //   </div>
    //   <div className={classes.details}>
    //     <Typography variant="body2" color="textSecondary" component="h2">
    //       {post.tags.map((tag) => `#${tag} `)}
    //     </Typography>
    //   </div>
    //   <Typography
    //     className={classes.title}
    //     gutterBottom
    //     variant="h5"
    //     component="h2"
    //   >
    //     {post.title}
    //   </Typography>
    //   <CardContent>
    //     <Typography variant="body2" color="textSecondary" component="p">
    //       {post.message}
    //     </Typography>
    //   </CardContent>
    //   <CardActions className={classes.cardActions}>
    //     <Button
    //       size="small"
    //       color="primary"
    //       onClick={() => dispatch(likePost(post._id))}
    //     >
    //       {" "}
    //       Like {post.likeCount}{" "}
    //     </Button>
    //     <Button
    //       size="small"
    //       color="primary"
    //       onClick={() => dispatch(deletePost(post._id))}
    //     >
    //       {" "}
    //       Delete
    //     </Button>
    //   </CardActions>
    // </Card>
  );
};

export default Post;
