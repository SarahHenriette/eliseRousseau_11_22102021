import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/index.css';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import Apropos from './pages/Apropos';
import Logement from './pages/Logement';
import Error from './pages/Error';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ficheLogement">
          <FicheLogement />
        </Route>
        <Route path="/aPropos">
          <Apropos />
        </Route>
        <Route path="/logement/:title" component={Logement}/>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
