import React, { useState } from "react";
import GenerateQR from "./components/GenerateQR";
import DetectorQr from "./components/DetectorQR";

function App() {
  const [inputValue, setInputValue] = useState(0)

  return (  
    <>
      <button onClick={()=>{(inputValue!==1) ? setInputValue(1) : setInputValue(0)}}>Mostrar Generador de QR</button>
        <div>
          {(inputValue===1) ? <GenerateQR/> : ""}
          <p></p>
        </div>
      <button onClick={()=>{(inputValue!==2) ? setInputValue(2) : setInputValue(0)}}>Mostrar Detector de QR</button>
        <div>
        {(inputValue===2) ? <DetectorQr/> : ""}
        
        <p></p>
        </div>

    </>
  );
}

export default App;