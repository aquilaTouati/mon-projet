import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    page: {
   
        fontFamily: "Poppins, sans-serif",
        backgroundImage: "linear-gradient(-15deg, #C0D3D4 10%, #266D70 100% )",
         height: "70rem",
        marginRight: "-0.5rem",
        marginLeft: "-1rem",
        marginTop:"-0.5rem",
        
      },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),

  },


  container:{
paddingTop:"5rem",
width:"35%"


  },

  inputs:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between"

  },

  email:{
marginBottom:"1rem",
marginTop:"1rem",

  },
  nom:{
marginTop:"1rem"
  },
  confirm:{
marginTop:"1rem"
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));