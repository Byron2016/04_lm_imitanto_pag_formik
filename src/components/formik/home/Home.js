import React from "react";

import Footer from "../footer/Footer"; // Componente Footer (Lo he creado en la Parte 1 de este Tutorial)
//import Backtotop from "../footer/Backtotop";
import { addBackToTop } from "vanilla-back-to-top";
import "react-jsx-html-comments";

const divStyle = {
  height: "200px",
};

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          {/*
          <form>
            <label>Name: </label>
            <input type="text" className="form-control" />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form> 
          */}
          <div style={divStyle}>H</div>
        </div>
        <Footer />
        addBackToTop
      </div>
    );
  }
}

export default Home;
/*
import React from "react";

export default class Home extends React.Component {
  componentDidMount() {
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.innerHTML = "document.write('aaa output by document.write()!')";
    this.instance.appendChild(s);
  }

  render() {
    console.log("hi");
    return <div ref={(el) => (this.instance = el)} />;
  }
}
*/
