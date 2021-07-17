import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import firebaseConfig from "../firebase";
import LoginArt from "../assets/imageedit_1_2628399089.png";

const useStyles = makeStyles((theme) => ({
  loginWrap: {
    display: "flex",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  imageWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#caf0f8",
    color: "#03045e",
  },
  paperWelcome: {
    textAlign: "center",
    marginTop: "50px",
    fontWeight: 600,
    fontFamily: "Comfortaa",
  },
  loginImage: {
    width: "100%",
  },
  paper: {
    margin: theme.spacing(8),
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  paperH1: {
    color: "#212529",
    textAlign: "center",
    fontWeight: 500,
    fontFamily: "Comfortaa",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#03045e",
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#03045e",
    },
    textTransform: "none",
    fontFamily: "Comfortaa",
  },
  signupWrap: {
    marginTop: 30,
  },
  signup: {
    color: "#212529",
    "&:hover": {
      textDecoration: "none",
      color: "#03045e",
    },
  },
}));

export default function SignUp({ history }) {
  const classes = useStyles();

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/Movie-Diary");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className={classes.loginWrap}>
      <div className={classes.imageWrap}>
        <Typography variant="h4" className={classes.paperWelcome}>
          Get Started!
        </Typography>
        <img src={LoginArt} alt="" className={classes.loginImage} />
      </div>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.paperH1}>
          Sign up
        </Typography>
        <form onSubmit={handleSignUp} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label={
                  <span style={{ fontFamily: "Comfortaa" }}>First Name</span>
                }
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label={
                  <span style={{ fontFamily: "Comfortaa" }}>Last Name</span>
                }
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label={
                  <span style={{ fontFamily: "Comfortaa" }}>Email Address</span>
                }
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label={
                  <span style={{ fontFamily: "Comfortaa" }}>Password</span>
                }
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item className={classes.signupWrap}>
              <Link to="login" variant="body2" className={classes.signup}>
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
