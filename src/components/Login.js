import React, { useCallback, useContext } from "react"; // add {useCallback, useContext}
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import firebaseConfig from "../firebase";
import { AuthContext } from "../Authentication";
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
    marginTop: theme.spacing(1),
    fontFamily: "Comfortaa",
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
  remember: {
    color: "#212529",
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

export default function Login({ history }) {
  const classes = useStyles();

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Movie-Diary");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Movie-Diary" />;
  }

  return (
    <div className={classes.loginWrap}>
      <div className={classes.imageWrap}>
        <Typography variant="h4" className={classes.paperWelcome}>
          Welcome back!
        </Typography>
        <img src={LoginArt} alt="" className={classes.loginImage} />
      </div>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.paperH1}>
          Log in
        </Typography>
        <form onSubmit={handleLogin} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={
              <span style={{ fontFamily: "Comfortaa" }}>Email Address</span>
            }
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={<span style={{ fontFamily: "Comfortaa" }}>Password</span>}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<span style={{ fontFamily: "Comfortaa" }}>Remember me</span>}
            className={classes.remember}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              {/*<Link href="#" variant="body2">
                Forgot password?
              </Link>*/}
            </Grid>
            <Grid item className={classes.signupWrap}>
              <Link to="signup" variant="body2" className={classes.signup}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}
