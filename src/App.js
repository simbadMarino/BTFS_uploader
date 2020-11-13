import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadFiles from "./components/upload-files.component";

function App() {
  return (
    <div className="container" style={{ width: "auto" }}>
      <div className="my-2">
        <h3>BTFS Uploader</h3>
        <h4>Simple, Free & decentralized</h4>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;
