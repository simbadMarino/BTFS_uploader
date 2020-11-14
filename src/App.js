import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";
var cors = require('cors');
//app.use(cors());
const axios = require("axios");

function sayHello() {
  alert('You clicked me!');
}

async function getNodeID() {
	const response = await axios.post("http://localhost:5001/api/v1/id")

console.log(`{response.data.all.length} Node ID data retrieved`)
}

function App() {
  return (
    <div className="container" style={{ width: "auto" }}>
      <div className="my-2">
        <h3>BTFS Uploader</h3>
        <h4>Simple, Free & decentralized</h4>
      </div>

      <UploadFiles />
      <button onClick={getNodeID}>Default</button>
    </div>
  );
}

export default App;
