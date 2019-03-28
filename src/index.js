import React from "react";
import ReactDOM from "react-dom";

const element = (
  <div>
    <h1>Hola, soy Jhurgen</h1>
    <p>Soy un ingeniero Frontend</p>
  </div>
);
const container = document.getElementById("app");

// ReactDOM.render( Qué renderizamos, Dónde?)
ReactDOM.render(element, container);
