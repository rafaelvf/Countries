import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav';
import Paginado from "./components/Paginado";
import activitiesForm from './components/Activities';
import CountryDetail from './components/CountryDetail';
import Container from "./components/Container";

function App() {
  return (  
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/countries" component={Nav} />
      <Route path="/activity" component={Nav} />
      <Route exact path="/countries" component={Container} />
      <Route exact path="/activity" component={activitiesForm} />
      <Route exact path="/countries/:ID" component={CountryDetail} /> {/* aqui va a tocar usar render en vez de component*/}
      <Route>404 Not Found!</Route>
    </div>    
  );
}

export default App;
