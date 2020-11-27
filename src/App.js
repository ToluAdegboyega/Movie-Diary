import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movies from './components/Movies';
import  './assets/App.css';

function App() {
  return (
    <Router>
       <div className='movieWrapper' >
        <Route exact path="/Movie-Crud" component={Movies} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export  default App;



