import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signin, signup } from '../actions/auth';
import { AUTH } from '../constants';
import useStyles from '../authStyle';
import '../styles.css/auth.css'
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj; 
//the optional operator will not throw an error if we don't have access to the res object 
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      //it sends a new object that contains the result and the token

      history.push('/Posts');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className={classes.page}>
    <Container className={classes.container}>
      <Paper className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Inscription' : 'Se connecter' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid className={classes.inputs} >
            { isSignup && (
            <>
              
              <Input name="firstName" label="Prénom" handleChange={handleChange} autoFocus half />
              <div className={classes.nom}>
              <Input name="lastName" label="Nom" handleChange={handleChange} half />
              </div>
            </>
            )}
            <div className={classes.email}>
            <Input  name="email" label="Adresse E-mail" handleChange={handleChange} type="email" />
            </div>
            <Input name="password" label="Mot de passe" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            <div className={classes.confirm}>
            { isSignup && <Input name="confirmPassword" label="Confirmer" handleChange={handleChange} type="password" /> }
            </div>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Inscription' : 'Connexion' }
          </Button>
          <GoogleLogin
            clientId="415867653171-f3fgb1nfbvhtlkj84sv99c5qegnr1l8k.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                Se connecter avec google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} >
                { isSignup ? 'Vous avez déjà un compte? Connectez vous' : "Vous n'avez pas de compte? Inscrivez vous" }
              </Button>
             
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </div>
  );
};

export default SignUp;