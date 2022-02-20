import React from "react";
import Page1 from './Page1'
import logo from './assets/images/eden_logo.png'
import "./App.css";

function App() {
  return (
    <div className="root-div">
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div><img src={logo} /></div>
        <div><h3 style={{ marginLeft: "6px", textAlign: "center", fontFamily: "inter", fontSize: "35px" }}>Eden</h3></div>
      </div>
      <Page1 />
    </div>
  );
}

export default App;