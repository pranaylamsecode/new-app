import React, { useState } from "react";
import useScanDetection from "use-scan-detection";
import "./App.css";
const App = () => {
  const [barcodeScan, setBarcodeScan] = useState("No Barcode Scanned");
  useScanDetection({
    onComplete: setBarcodeScan,
    minLength: 3,
  });

  return (
    <>
      <div className="App" style={{ padding: "5rem 10rem" }}>
        <p>
          {" "}
          Barcode: <span style={{ color: "red" }}> {barcodeScan}</span>
          <select value={barcodeScan} onChange={this.handleChange}>
            <option value={barcodeScan}>{barcodeScan}</option>
          </select>
        </p>
      </div>
    </>
  );
};

export default App;
