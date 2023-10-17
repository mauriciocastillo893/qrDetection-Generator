import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const GenerateQR = () => {
    const [inputData, setInputData] = useState('');
    const [lastInputData, setLastInputData] = useState('')
    const [generatedData, setGeneratedData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        if (!e.target.value || lastInputData !== e.target.value) {
            setGeneratedData('');
        }
    };

    const generateQRCode = () => {
        setGeneratedData(inputData);
        setLastInputData(setLastInputData)
    };

    return (
        <div>
            <h1>Generador de Códigos QR</h1>
            <div>
                <input type="text" value={inputData} onChange={handleInputChange} />
            </div>
            <div style={{ marginTop: '20px' }}>
                {generatedData ? <QRCode value={generatedData} /> : <QRCode value={''} />}
            </div>
            <div>
                <button onClick={generateQRCode}>Generate</button>
            </div>
        </div>
    );
};

export default GenerateQR;
