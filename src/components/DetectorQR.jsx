import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import QrReader from 'jsqr';

const DetectorQR = () => {
    const webcamRef = useRef(null);
    const [scannedData, setScannedData] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            capture();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const image = new Image();

        image.onload = function () {
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;
            context.drawImage(this, 0, 0);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const qrCode = QrReader(imageData.data, canvas.width, canvas.height);
            if (qrCode) {
                setScannedData(qrCode.data);
            }
        };

        image.src = imageSrc;
    };

    return (
        <div>
            <h1>Lector de Códigos QR</h1>
            <div style={{ width: 400, height: 400 }}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{
                        width: 400,
                        height: 400,
                        facingMode: 'environment',
                    }}
                />
            </div>
            <div>
                {scannedData ? (
                    <div>
                        <h2>Dato Escaneado:</h2>
                        <p>{scannedData}</p>
                    </div>
                ) : (
                    <p>Escaneando...</p>
                )}
            </div>
        </div>
    );
};

export default DetectorQR;
