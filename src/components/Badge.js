import React from "react";
import confLogo from "../images/badge-header.SVG";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Log de la conferencia" />
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Jhurgen <br />
            Maraza
          </h1>
        </div>
        <div>
          <p>Frontend Engineer</p>
          <p>@Jmaraza</p>
        </div>
        <div>#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
