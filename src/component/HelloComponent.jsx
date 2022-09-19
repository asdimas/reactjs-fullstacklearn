import React from "react";
import "./HelloComponent.css";
// penulisan function javascript versi lama
// function HelloComponent(){
//   return <p>Hello functional component</p>
// }

// penulisan function javascript versi ES6
// stateless component
const HelloComponent = () => {
  return <p className="text-p">Hello functional component</p>;
};

export default HelloComponent;
