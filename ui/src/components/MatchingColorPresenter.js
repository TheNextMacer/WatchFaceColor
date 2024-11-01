import React, { useEffect, useState } from 'react';
import { CheckCircle, Palette } from 'lucide-react';

const MatchingColorPresenter = ({ selectedColor, predefinedColors }) => {
    const [matchingColors, setMatchingColors] = useState([]);
    const isInitialState = !selectedColor;

    const rgbToLab = (r, g, b) => {
        // Konvertiere RGB zu XYZ
        r = r / 255;
        g = g / 255;
        b = b / 255;

        r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

        r = r * 100;
        g = g * 100;
        b = b * 100;

        const x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        const y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        const z = r * 0.0193 + g * 0.1192 + b * 0.9505;

        // Konvertiere XYZ zu Lab
        const xn = 95.047;
        const yn = 100.000;
        const zn = 108.883;

        const fx = x / xn > 0.008856 ? Math.pow(x / xn, 1 / 3) : (7.787 * x / xn) + 16 / 116;
        const fy = y / yn > 0.008856 ? Math.pow(y / yn, 1 / 3) : (7.787 * y / yn) + 16 / 116;
        const fz = z / zn > 0.008856 ? Math.pow(z / zn, 1 / 3) : (7.787 * z / zn) + 16 / 116;

        const L = (116 * fy) - 16;
        const a = 500 * (fx - fy);
        const b_value = 200 * (fy - fz);

        return [L, a, b_value];
    };

    const calculateColorDistance = (color1, color2) => {
        // Extrahiere RGB-Werte aus dem ersten Farbstring
        const rgb1 = color1.match(/\d+/g).map(Number);

        // Konvertiere Hex zu RGB für die zweite Farbe
        const rgb2 = hexToRgb(color2);

        // Konvertiere beide Farben zu Lab
        const lab1 = rgbToLab(rgb1[0], rgb1[1], rgb1[2]);
        const lab2 = rgbToLab(rgb2[0], rgb2[1], rgb2[2]);

        // Berechne Delta E (CIE76)
        return Math.sqrt(
            Math.pow(lab1[0] - lab2[0], 2) +
            Math.pow(lab1[1] - lab2[1], 2) +
            Math.pow(lab1[2] - lab2[2], 2)
        );
    };

    const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ];
    };

    useEffect(() => {
        if (selectedColor) {
            try {
                const sortedColors = [...predefinedColors]
                    .map(color => ({
                        ...color,
                        distance: calculateColorDistance(selectedColor, color.hex)
                    }))
                    .sort((a, b) => a.distance - b.distance)
                    .slice(0, 5);

                setMatchingColors(sortedColors);
            } catch (error) {
                console.error("Error calculating matching colors:", error);
            }
        }
    }, [selectedColor, predefinedColors]);

    return (
        <div>
            <div className="mb-4">
                <h3 className="text-base font-semibold mb-2">Ausgewählte Farbe</h3>
                <div className="flex items-center gap-3">
                    <div
                        className="w-8 h-8 rounded-full border-2 border-white"
                        style={{ backgroundColor: selectedColor || 'rgb(128, 128, 128)' }}
                    />
                    {isInitialState && (
                        <span className="text-sm text-gray-400 italic">
                            Keine Farbe ausgewählt
                        </span>
                    )}
                </div>
            </div>

            <div>
                <h3 className="text-base font-semibold mb-3">
                    {isInitialState ? "Verfügbare Farben" : "Ähnlichste Farben"}
                </h3>
                {isInitialState ? (
                    <div className="flex items-center justify-center p-6 border-2 border-dashed border-gray-600 rounded-lg">
                        <div className="text-center">
                            <Palette size={32} className="mx-auto text-gray-500 mb-3" />
                            <p className="text-sm text-gray-400">
                                Wählen Sie eine Farbe aus dem Bild aus
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {matchingColors.map((color, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 rounded-lg p-3 flex flex-col items-center"
                            >
                                <div
                                    className="w-12 h-12 rounded-full border-2 border-white mb-2 relative"
                                    style={{ backgroundColor: color.hex }}
                                >
                                    {index === 0 && (
                                        <CheckCircle className="absolute -top-1 -right-1 text-green-500 bg-gray-800 rounded-full w-4 h-4" />
                                    )}
                                </div>
                                <span className="text-sm font-medium">{color.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MatchingColorPresenter; 