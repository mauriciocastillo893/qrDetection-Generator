import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import domtoimage from 'dom-to-image';

const GenerateQR = () => {
    const [inputData, setInputData] = useState('');
    const [lastInputData, setLastInputData] = useState('');
    const [generatedData, setGeneratedData] = useState('');
    const qrCodeRef = useRef(null);

    const handleInputChange = (e) => {
        setInputData(e.target.value);
        if (!e.target.value || lastInputData !== e.target.value) {
            setGeneratedData('');
        }
    };

    const generateQRCode = () => {
        setGeneratedData(inputData);
        setLastInputData(inputData);

        const node = qrCodeRef.current;
        domtoimage.toJpeg(node, { bgcolor: '#ffffff' })
            .then(function (dataUrl) {
                const link = document.createElement('a');
                link.download = 'qrCode.jpeg';
                link.href = dataUrl;
                link.click();
            });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Generador de Códigos QR</h1>
            <div style={{ marginBottom: '20px' }}>
                <input type="text" value={inputData} onChange={handleInputChange} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div ref={qrCodeRef} style={{ position: 'relative', width: '200px', height: '200px', padding: '20px', backgroundColor: '#ffffff', border: '1px solid #000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {generatedData ? (
                        <>
                            <QRCode value={generatedData} size={160} />
                            <p style={{ margin: '10px 0 0', textAlign: 'center' }}>{generatedData}</p>
                        </>
                    ) : (
                        <QRCode value={''} size={160} />
                    )}
                </div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <button onClick={generateQRCode}>Generate and Download</button>
            </div>
        </div>
    );
};

export default GenerateQR;
