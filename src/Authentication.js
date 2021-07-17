import React, { useEffect, useState } from "react";
import firebaseConfig from "./firebase.js";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  loading: {
    color: "#03045e",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 900,
    fontSize: "50px",
    height: "100vh",
  },
}));

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return <Box className={classes.loading}>Just a moment...</Box>;
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
