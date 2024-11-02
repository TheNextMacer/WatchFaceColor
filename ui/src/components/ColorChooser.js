import React, { useRef, useState, useEffect } from 'react';
import { Upload, Image as ImageIcon, Droplet } from 'lucide-react';

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
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
        }
    }, [image]);

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
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });

        // Hole die Farbe unter dem Cursor
        const ctx = canvas.getContext('2d');
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const pixel = ctx.getImageData(
            Math.floor(x * scaleX),
            Math.floor(y * scaleY),
            1,
            1
        ).data;
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
                Bild hochladen
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