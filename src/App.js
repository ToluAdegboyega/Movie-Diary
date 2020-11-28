import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movies from './components/Movies';
import Login from './components/Login';
import SignUp from './components/SignUp';
import  './assets/App.css';
import  PrivateRoute  from  './PrivateRoute';
import  {AuthProvider}  from  './Authentication';

function App() {
  return (
    <AuthProvider>
      <Router>
       <div className='movieWrapper' >
          <PrivateRoute exact path="/Movie-Diary" component={Movies} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
    </AuthProvider>
  );
}

export  default App;



