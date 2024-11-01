import React, { useRef, useState, useEffect } from 'react';
import { Upload, Image as ImageIcon } from 'lucide-react';

const ColorChooser = ({ onColorSelect }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [image, setImage] = useState(null);
    const [hoveredColor, setHoveredColor] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const canvasRef = useRef(null);
    const zoomCanvasRef = useRef(null);
    const fileInputRef = useRef(null);

    const ZOOM_FACTOR = 4;
    const ZOOM_SIZE = 120;

    useEffect(() => {
        if (image && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
        }
    }, [image]);

    useEffect(() => {
        if (imageUrl && zoomCanvasRef.current && canvasRef.current) {
            const zoomCanvas = zoomCanvasRef.current;
            const mainCanvas = canvasRef.current;
            const zoomCtx = zoomCanvas.getContext('2d');
            const mainCtx = mainCanvas.getContext('2d');

            // Setze Zoom-Canvas-Größe
            zoomCanvas.width = ZOOM_SIZE;
            zoomCanvas.height = ZOOM_SIZE;

            // Berechne die tatsächliche Position auf dem Hauptcanvas
            const rect = mainCanvas.getBoundingClientRect();
            const scaleX = mainCanvas.width / rect.width;
            const scaleY = mainCanvas.height / rect.height;
            const x = (mousePosition.x - rect.left) * scaleX;
            const y = (mousePosition.y - rect.top) * scaleY;

            // Zeichne den gezoomten Bereich
            zoomCtx.imageSmoothingEnabled = false;
            const zoomSize = ZOOM_SIZE / ZOOM_FACTOR;
            const sourceX = Math.max(0, Math.min(x - zoomSize / 2, mainCanvas.width - zoomSize));
            const sourceY = Math.max(0, Math.min(y - zoomSize / 2, mainCanvas.height - zoomSize));

            zoomCtx.drawImage(
                mainCanvas,
                sourceX, sourceY, zoomSize, zoomSize,
                0, 0, ZOOM_SIZE, ZOOM_SIZE
            );

            // Zeichne Fadenkreuz
            zoomCtx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
            zoomCtx.lineWidth = 1;
            zoomCtx.beginPath();
            zoomCtx.moveTo(ZOOM_SIZE / 2, 0);
            zoomCtx.lineTo(ZOOM_SIZE / 2, ZOOM_SIZE);
            zoomCtx.moveTo(0, ZOOM_SIZE / 2);
            zoomCtx.lineTo(ZOOM_SIZE, ZOOM_SIZE / 2);
            zoomCtx.stroke();

            // Hole die Farbe unter dem Fadenkreuz
            const pixel = mainCtx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
            const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
            setHoveredColor(color);
        }
    }, [mousePosition, imageUrl]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            setImageUrl(e.target.result);
            const img = new Image();
            img.onload = () => {
                setImage(img);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleCanvasClick = () => {
        if (hoveredColor) {
            onColorSelect(hoveredColor);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-col items-center gap-3">
                <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                />
                <button
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm"
                >
                    <Upload size={16} />
                    Bild hochladen
                </button>
            </div>

            {!imageUrl && (
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-600 rounded-lg">
                    <ImageIcon size={32} className="text-gray-500 mb-3" />
                    <p className="text-sm text-gray-400 text-center">
                        Laden Sie ein Bild hoch, um eine Farbe auszuwählen
                    </p>
                </div>
            )}

            {imageUrl && (
                <div className="relative rounded-lg overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        onMouseMove={handleMouseMove}
                        onClick={handleCanvasClick}
                        className="max-w-full max-h-[calc(100vh-300px)] cursor-crosshair object-contain"
                    />
                    {imageUrl && (
                        <div
                            className="absolute rounded-lg overflow-hidden shadow-lg"
                            style={{
                                left: mousePosition.x - ZOOM_SIZE * 1.5 + 5,
                                top: mousePosition.y - ZOOM_SIZE * 1.5 + 5,
                                width: ZOOM_SIZE,
                                height: ZOOM_SIZE
                            }}
                        >
                            <canvas
                                ref={zoomCanvasRef}
                                width={ZOOM_SIZE}
                                height={ZOOM_SIZE}
                                className="border-2 border-white rounded-lg"
                            />
                        </div>
                    )}
                    <p className="mt-2 text-xs text-gray-400 text-center">
                        Bewegen Sie die Maus und klicken Sie, um eine Farbe auszuwählen
                    </p>
                </div>
            )}
        </div>
    );
};

export default ColorChooser; 