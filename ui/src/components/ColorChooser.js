import React, { useRef, useState, useEffect } from 'react';
import { Upload, Droplet } from 'lucide-react';

const ColorChooser = ({ onColorSelect }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [image, setImage] = useState(null);
    const [hoveredColor, setHoveredColor] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (image && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            // Setze Canvas auf Original-Bildgröße
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
        }
    }, [image]);

    const calculateScaledPosition = (clientX, clientY, canvas, rect) => {
        // Berechne das Seitenverhältnis des Bildes
        const imageAspectRatio = canvas.width / canvas.height;
        const containerAspectRatio = rect.width / rect.height;

        let scaledWidth, scaledHeight;
        let offsetX = 0, offsetY = 0;

        // Bestimme die tatsächliche Größe des dargestellten Bildes
        if (imageAspectRatio > containerAspectRatio) {
            // Bild ist breiter als Container
            scaledWidth = rect.width;
            scaledHeight = rect.width / imageAspectRatio;
            offsetY = (rect.height - scaledHeight) / 2;
        } else {
            // Bild ist höher als Container
            scaledHeight = rect.height;
            scaledWidth = rect.height * imageAspectRatio;
            offsetX = (rect.width - scaledWidth) / 2;
        }

        // Berechne die relative Position innerhalb des skalierten Bildes
        const x = clientX - rect.left - offsetX;
        const y = clientY - rect.top - offsetY;

        // Berechne die Position im Original-Bild
        const scaleX = canvas.width / scaledWidth;
        const scaleY = canvas.height / scaledHeight;

        return {
            x: Math.floor(Math.max(0, Math.min(x * scaleX, canvas.width - 1))),
            y: Math.floor(Math.max(0, Math.min(y * scaleY, canvas.height - 1)))
        };
    };

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
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();

        // Berechne die skalierte Position
        const { x, y } = calculateScaledPosition(
            event.clientX,
            event.clientY,
            canvas,
            rect
        );

        setMousePosition({ x, y });

        // Hole die Farbe an der korrekten Position
        const ctx = canvas.getContext('2d');
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
        setHoveredColor(color);
    };

    const handleCanvasClick = () => {
        if (hoveredColor) {
            onColorSelect(hoveredColor);
        }
    };

    return (
        <div className="space-y-6">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                ref={fileInputRef}
            />
            <button
                onClick={() => fileInputRef.current.click()}
                className="flex items-center justify-center w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
            >
                <Upload className="w-5 h-5 mr-2" />
                Select image
            </button>

            <div className="relative w-full rounded-2xl overflow-hidden">
                {!imageUrl ? (
                    <div className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-600 rounded-2xl">
                        <Droplet className="w-12 h-12 text-gray-400 mb-4" />
                        <p className="text-gray-400 text-center">
                            Laden Sie ein Bild hoch, um eine Farbe auszuwählen
                        </p>
                    </div>
                ) : (
                    <div className="relative rounded-2xl overflow-hidden cursor-crosshair">
                        <canvas
                            ref={canvasRef}
                            onMouseMove={handleMouseMove}
                            onClick={handleCanvasClick}
                            style={{
                                maxHeight: '65vh',
                                width: '100%',
                                objectFit: 'contain'
                            }}
                            className="rounded-2xl"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorChooser; 