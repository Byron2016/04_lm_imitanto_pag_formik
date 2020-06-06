/*
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import TutorialFormik from "./components/formik";
import Inicial from "./components/inicial";
import TutorialHoja from "./components/hoja_tutorial";
import PruebaHojaRutas from "./components/prueba_router/";

import Nosotros from "./components/hoja_tutorial/nosotros/Nosotros";
import Servicios from "./components/hoja_tutorial/servicios/Servicios";
//import Contacto from "./components/hoja_tutorial/contacto/Contacto";

import * as serviceWorker from "./serviceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Archivo CSS de Bootstrap 4
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"; // Archivo Javascript de Bootstrap 4

const Root = (
  <BrowserRouter>
    {/*
    <PruebaHojaRutas />
    */}     
    <Switch>
      <Route path="/tutoformik" component={TutorialFormik} />
      <Route path="/inicial" component={Inicial} />
      <Route exact path="/tutohoja" component={TutorialHoja} />
      <Route path="/nosotros" component={Nosotros} />
      <Route exact path="/tutohoja/nosotros" component={Nosotros} />
      <Route path="/tutohoja/servicios" component={Servicios} />

      <Redirect from="/" to="/inicial" />
    </Switch>
     
  </BrowserRouter>
);

// ========================================

ReactDOM.render(Root, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
