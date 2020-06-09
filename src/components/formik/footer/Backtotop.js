import React from "react";
import "react-jsx-html-comments";

import "./backtotop.css";

class Backtotop extends React.Component {
  render() {
    return (
      <div>
        <react-comment>Back to top</react-comment>
        <div id="back-to-top" class="">
          <svg viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          </svg>
        </div>
        <react-comment>Back to top</react-comment>
      </div>
    );
  }
}

export default Backtotop;
