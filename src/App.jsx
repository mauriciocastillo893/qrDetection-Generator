import React, { useState } from "react";
import GenerateQR from "./components/GenerateQR";

function App() {
  const [inputValue, setInputValue] = useState(0)

  return (  
    <>
      <button onClick={()=>{(inputValue!==1) ? setInputValue(1) : setInputValue(0)}}>Mostrar Generador de QR</button>
        <div>
          {(inputValue===1) ? <GenerateQR/> : ""}
          <p></p>
        </div>
      <button>Mostrar Detector de QR</button>
        <div>
        
        <p></p>
        </div>
      <button>Enviar QR por e-mail</button>
        <div>
        
        <p></p>
      </div>

    </>
  );
}

export default App;