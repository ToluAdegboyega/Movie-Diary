import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Movies from "./components/Movies";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./assets/App.css";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Authentication";

function App() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path="/Movie-Diary" component={Movies} />
        <Route exact path="/Movie-Diary/login" component={Login} />
        <Route exact path="/Movie-Diary/signup" component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
