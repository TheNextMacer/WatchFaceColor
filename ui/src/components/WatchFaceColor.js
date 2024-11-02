import React, { useState } from 'react';
import ColorChooser from './ColorChooser';
import MatchingColorPresenter from './MatchingColorPresenter';

const WatchFaceColor = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const predefinedColors = [
        /*         { name: 'Weiß', hex: '#FFFFFF' },
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
                { name: 'Dunkeloliv', hex: '#8C8C76' }, */


        { name: 'Herbst 2024 - 1', hex: '#fff1de' },
        { name: 'Herbst 2024 - 2', hex: '#ffc7a5' },
        { name: 'Herbst 2024 - 3', hex: '#b19a83' },
        { name: 'Herbst 2024 - 4', hex: '#dca875' },
        { name: 'Herbst 2024 - 5', hex: '#a39489' },
        { name: 'Herbst 2024 - 6', hex: '#56847c' },
        { name: 'Herbst 2024 - 7', hex: '#804c69' },

        { name: 'Frühling 2024 - 1', hex: '#9ba9b2' },
        { name: 'Frühling 2024 - 2', hex: '#ffb834' },
        { name: 'Frühling 2024 - 3', hex: '#edf0c6' },
        { name: 'Frühling 2024 - 4', hex: '#3d5c80' },
        { name: 'Frühling 2024 - 5', hex: '#ff6a77' },
        { name: 'Frühling 2024 - 6', hex: '#c3254e' },

        { name: 'Herbst 2023 - 1', hex: '#ffcdb8' },
        { name: 'Herbst 2023 - 2', hex: '#bc1a30' },
        { name: 'Herbst 2023 - 3', hex: '#7d6c5b' },
        { name: 'Herbst 2023 - 4', hex: '#7f3b4a' },
        { name: 'Herbst 2023 - 5', hex: '#60798e' },
        { name: 'Herbst 2023 - 6', hex: '#ff905b' },
        { name: 'Herbst 2023 - 7', hex: '#737e5a' },

        { name: 'Frühling 2023 - 1', hex: '#d1ebf5' },
        { name: 'Frühling 2023 - 2', hex: '#baaeb8' },
        { name: 'Frühling 2023 - 3', hex: '#c1f07b' },

        { name: 'Herbst 2022 - 1', hex: '#e41f3b' },
        { name: 'Herbst 2022 - 2', hex: '#9ba391' },
        { name: 'Herbst 2022 - 3', hex: '#8e6875' },
        { name: 'Herbst 2022 - 4', hex: '#657180' },
        { name: 'Herbst 2022 - 5', hex: '#5f708a' },
        { name: 'Herbst 2022 - 6', hex: '#ffbf52' },

        { name: 'Frühling 2022 - 1', hex: '#8fb1c9' },
        { name: 'Frühling 2022 - 2', hex: '#59d26b' },
        { name: 'Frühling 2022 - 3', hex: '#6f8f6c' },
        { name: 'Frühling 2022 - 4', hex: '#ff5a48' },
        { name: 'Frühling 2022 - 5', hex: '#ff6b8b' },

        { name: 'Herbst 2021 - 1', hex: '#716f8d' },
        { name: 'Herbst 2021 - 2', hex: '#815668' },
        { name: 'Herbst 2021 - 3', hex: '#5b8549' },
        { name: 'Herbst 2021 - 4', hex: '#e6c5a4' },
        { name: 'Herbst 2021 - 5', hex: '#bc112f' },
        { name: 'Herbst 2021 - 6', hex: '#4a778b' },

        { name: 'Sommer 2021 - 1', hex: '#ff4c36' },
        { name: 'Sommer 2021 - 2', hex: '#dce1dd' },
        { name: 'Sommer 2021 - 3', hex: '#6d5f3f' },

        { name: 'Frühling 2021 - 1', hex: '#ffa100' },
        { name: 'Frühling 2021 - 2', hex: '#c1dfa3' },
        { name: 'Frühling 2021 - 3', hex: '#40578c' },
        { name: 'Frühling 2021 - 4', hex: '#f6f1d7' },
        { name: 'Frühling 2021 - 5', hex: '#4e7378' },

        { name: 'Herbst 2020 - 1', hex: '#ef4f48' },
        { name: 'Herbst 2020 - 2', hex: '#5c7299' },
        { name: 'Herbst 2020 - 3', hex: '#729b9d' },
        { name: 'Herbst 2020 - 4', hex: '#fe8850' },
        { name: 'Herbst 2020 - 5', hex: '#ffe3b7' },
        { name: 'Herbst 2020 - 6', hex: '#636e59' },
        { name: 'Herbst 2020 - 7', hex: '#93434c' },

        { name: 'Sommer 2020 - 1', hex: '#d4f2dc' },
        { name: 'Sommer 2020 - 2', hex: '#566b94' },
        { name: 'Sommer 2020 - 3', hex: '#826f60' },

        { name: 'Frühling 2020 - 1', hex: '#6b8a81' },
        { name: 'Frühling 2020 - 2', hex: '#1785b8' },
        { name: 'Frühling 2020 - 3', hex: '#ffb18c' },
        { name: 'Frühling 2020 - 4', hex: '#ff3a3a' },

        { name: 'Winter 2019 - 1', hex: '#d5f2bd' },
        { name: 'Winter 2019 - 2', hex: '#e02a5f' },
        { name: 'Winter 2019 - 3', hex: '#8b7f58' },

        { name: 'Herbst 2019 - 1', hex: '#ff6848' },
        { name: 'Herbst 2019 - 2', hex: '#ffeb7d' },
        { name: 'Herbst 2019 - 3', hex: '#5d7d65' },
        { name: 'Herbst 2019 - 4', hex: '#b78f5f' },

        // Neue Sommer 2019 Farben
        { name: 'Sommer 2019 - 1', hex: '#ffde44' },
        { name: 'Sommer 2019 - 2', hex: '#f44a7e' },

        // Neue Frühling 2019 Farben
        { name: 'Frühling 2019 - 1', hex: '#ff8542' },
        { name: 'Frühling 2019 - 2', hex: '#84e98c' },
        { name: 'Frühling 2019 - 3', hex: '#95c5e8' },
        { name: 'Frühling 2019 - 4', hex: '#b6a4e1' },
        { name: 'Frühling 2019 - 5', hex: '#5777bf' },

        // Neue Winter 2018 Farben
        { name: 'Winter 2018 - 1', hex: '#f6f4ba' },
        { name: 'Winter 2018 - 2', hex: '#007f9e' },
        { name: 'Winter 2018 - 3', hex: '#fd1e58' },

        // Neue Herbst 2018 Farben
        { name: 'Herbst 2018 - 1', hex: '#669797' },
        { name: 'Herbst 2018 - 2', hex: '#1f4e74' },
        { name: 'Herbst 2018 - 3', hex: '#5863a4' },
        { name: 'Herbst 2018 - 4', hex: '#8686a5' },

        // Neue Frühling 2018 Farben
        { name: 'Frühling 2018 - 1', hex: '#e57e5e' },
        { name: 'Frühling 2018 - 2', hex: '#f7ec00' },
        { name: 'Frühling 2018 - 3', hex: '#5b83a8' },

        // Neue Winter 2017 Farbe
        { name: 'Winter 2017 - 1', hex: '#357393' },

        // Neue Herbst 2017 Farben
        { name: 'Herbst 2017 - 1', hex: '#e1f323' },
        { name: 'Herbst 2017 - 2', hex: '#3080a0' },
        { name: 'Herbst 2017 - 3', hex: '#7157be' },
        { name: 'Herbst 2017 - 4', hex: '#ffc2a9' },
        { name: 'Herbst 2017 - 5', hex: '#ff4e51' },
        { name: 'Herbst 2017 - 6', hex: '#b92946' },
        { name: 'Herbst 2017 - 7', hex: '#e0d1b8' },

        // Neue Sommer 2017 Farben
        { name: 'Sommer 2017 - 1', hex: '#ffd25b' },
        { name: 'Sommer 2017 - 2', hex: '#b3b8a7' },
        { name: 'Sommer 2017 - 3', hex: '#d3836a' },

        // Neue Frühling 2017 Farben
        { name: 'Frühling 2017 - 1', hex: '#879aa1' },
        { name: 'Frühling 2017 - 2', hex: '#c94544' },
        { name: 'Frühling 2017 - 3', hex: '#ad9d8e' },

        // Neue Herbst 2016 Farben
        { name: 'Herbst 2016 - 1', hex: '#7388c7' },
        { name: 'Herbst 2016 - 2', hex: '#9b8e8c' },

        // Neue Frühling 2016 Farben
        { name: 'Frühling 2016 - 1', hex: '#fc7450' },
        { name: 'Frühling 2016 - 2', hex: '#e9cc0d' },
        { name: 'Frühling 2016 - 3', hex: '#aeec9d' },
        { name: 'Frühling 2016 - 4', hex: '#63aeee' },
        { name: 'Frühling 2016 - 5', hex: '#f4b0aa' },

        // Neue Herbst 2015 Farben
        { name: 'Herbst 2015 - 1', hex: '#a52518' },
        { name: 'Herbst 2015 - 2', hex: '#ff6411' },
        { name: 'Herbst 2015 - 3', hex: '#9ed5cc' },
        { name: 'Herbst 2015 - 4', hex: '#6ac5dd' },
        { name: 'Herbst 2015 - 5', hex: '#454d76' },
        { name: 'Herbst 2015 - 6', hex: '#b29aa6' },
        { name: 'Herbst 2015 - 7', hex: '#f4aca5' },

        // Neue Frühling 2015 Farben
        { name: 'Frühling 2015 - 1', hex: '#ffffff' },
        { name: 'Frühling 2015 - 2', hex: '#8ce329' },
        { name: 'Frühling 2015 - 3', hex: '#19b5fc' },
        { name: 'Frühling 2015 - 4', hex: '#ff5964' },
        { name: 'Frühling 2015 - 5', hex: '#997cf7' },
        { name: 'Frühling 2015 - 6', hex: '#ff9500' },
        { name: 'Frühling 2015 - 7', hex: '#bd9162' },
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