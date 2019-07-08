import React from "react";
import ReactDOM from "react-dom";
// this line is new
// we now have some nice styles on our react app
// import "index.scss";
let Intro = (props) => {
    return <h1> Hello there World! </h1>
}
ReactDOM.render( <HelloWorld/ > , document.getElementById("root"));

