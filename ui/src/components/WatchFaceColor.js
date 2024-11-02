import React, { useState } from 'react';
import ColorChooser from './ColorChooser';
import MatchingColorPresenter from './MatchingColorPresenter';

const WatchFaceColor = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const predefinedColors = [
        { name: 'Weiß', hex: '#FFFFFF' },
        { name: 'Rot', hex: '#D91D2A' },
        { name: 'Orange', hex: '#FF6410' },
        { name: 'Aprikose', hex: '#FC7450' },
        { name: 'Pfirsich', hex: '#E57E5E' },
        { name: 'Hellorange', hex: '#FF9500' },
        { name: 'Gelb', hex: '#E9CC0B' },
        { name: 'Pollen', hex: '#FFD25B' },
        { name: 'Blitzlicht', hex: '#F7EC00' },
        { name: 'Blitz', hex: '#E1F322' },
        { name: 'Grün', hex: '#8DE328' },
        { name: 'Minze', hex: '#AEEC9D' },
        { name: 'Türkis', hex: '#9ED5CC' },
        { name: 'Hellblau', hex: '#6AC5DD' },
        { name: 'Blau', hex: '#1AB5FC' },
        { name: 'Königsblau', hex: '#63AEEE' },
        { name: 'Lilac', hex: '#C1D8FD' },
        { name: 'Nebelblau', hex: '#B3B8A7' },
        { name: 'Azur', hex: '#879AA1' },
        { name: 'Kobaltblau', hex: '#477E9D' },
        { name: 'Dunkelteal', hex: '#357393' },
        { name: 'Denimblau', hex: '#5B83A8' },
        { name: 'Mitternachtsblau', hex: '#6084BF' },
        { name: 'Ozeanblau', hex: '#7388C7' },
        { name: 'Lila', hex: '#997CF7' },
        { name: 'Ultraviolett', hex: '#7157BE' },
        { name: 'Lavendel', hex: '#B29AA6' },
        { name: 'Sandrosa', hex: '#FFC2A9' },
        { name: 'Hellrosa', hex: '#F4B0AA' },
        { name: 'Vintage-Rose', hex: '#F4ACA5' },
        { name: 'Pink', hex: '#FF5964' },
        { name: 'Elektrorosa', hex: '#FF4E51' },
        { name: 'Rosenrot', hex: '#B92946' },
        { name: 'Kamellie', hex: '#C94544' },
        { name: 'Flamingo', hex: '#D3836A' },
        { name: 'Walnuss', hex: '#B08664' },
        { name: 'Stein', hex: '#AF9980' },
        { name: 'Antikweiß', hex: '#D4B694' },
        { name: 'Weichweiß', hex: '#DDD1BB' },
        { name: 'Kiesel', hex: '#AD9D8E' },
        { name: 'Kakao', hex: '#9B8E8C' },
        { name: 'Dunkeloliv', hex: '#8C8C76' }
    ];

    return (
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Linke Spalte */}
            <div className="bg-gray-800/30 backdrop-filter backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Farbe auswählen</h2>
                <ColorChooser onColorSelect={setSelectedColor} />
            </div>

            {/* Rechte Spalte */}
            <div className="bg-gray-800/30 backdrop-filter backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Passende Farben</h2>
                <MatchingColorPresenter
                    selectedColor={selectedColor}
                    predefinedColors={predefinedColors}
                />
            </div>
        </div>
    );
};

export default WatchFaceColor; 