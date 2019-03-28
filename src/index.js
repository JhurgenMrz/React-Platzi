import React from "react";
import ReactDOM from "react-dom";
import Badge from "./components/Badge";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

const container = document.getElementById("app");

// ReactDOM.render( Qué renderizamos, Dónde?)
ReactDOM.render(
  <Badge
    firstName="Jhurgen"
    lastName="Maraza"
    jopTittle="Frontend Enginner"
    twitter="Jmaraza"
    avatar="https://www.gravatar.com/avatar?d=identicon"
  />,
  container
);
