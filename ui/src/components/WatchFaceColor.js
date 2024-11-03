import React, { useState } from 'react';
import ColorChooser from './ColorChooser';
import MatchingColorPresenter from './MatchingColorPresenter';

const WatchFaceColor = () => {
    const [selectedColor, setSelectedColor] = useState(null);

    const predefinedColors = [
        { name: 'Autumn 2024 - 1', hex: '#fff1de' },
        { name: 'Autumn 2024 - 2', hex: '#ffc7a5' },
        { name: 'Autumn 2024 - 3', hex: '#b19a83' },
        { name: 'Autumn 2024 - 4', hex: '#dca875' },
        { name: 'Autumn 2024 - 5', hex: '#a39489' },
        { name: 'Autumn 2024 - 6', hex: '#56847c' },
        { name: 'Autumn 2024 - 7', hex: '#804c69' },

        { name: 'Spring 2024 - 1', hex: '#9ba9b2' },
        { name: 'Spring 2024 - 2', hex: '#ffb834' },
        { name: 'Spring 2024 - 3', hex: '#edf0c6' },
        { name: 'Spring 2024 - 4', hex: '#3d5c80' },
        { name: 'Spring 2024 - 5', hex: '#ff6a77' },
        { name: 'Spring 2024 - 6', hex: '#c3254e' },

        { name: 'Autumn 2023 - 1', hex: '#ffcdb8' },
        { name: 'Autumn 2023 - 2', hex: '#bc1a30' },
        { name: 'Autumn 2023 - 3', hex: '#7d6c5b' },
        { name: 'Autumn 2023 - 4', hex: '#7f3b4a' },
        { name: 'Autumn 2023 - 5', hex: '#60798e' },
        { name: 'Autumn 2023 - 6', hex: '#ff905b' },
        { name: 'Autumn 2023 - 7', hex: '#737e5a' },

        { name: 'Spring 2023 - 1', hex: '#d1ebf5' },
        { name: 'Spring 2023 - 2', hex: '#baaeb8' },
        { name: 'Spring 2023 - 3', hex: '#c1f07b' },

        { name: 'Autumn 2022 - 1', hex: '#e41f3b' },
        { name: 'Autumn 2022 - 2', hex: '#9ba391' },
        { name: 'Autumn 2022 - 3', hex: '#8e6875' },
        { name: 'Autumn 2022 - 4', hex: '#657180' },
        { name: 'Autumn 2022 - 5', hex: '#5f708a' },
        { name: 'Autumn 2022 - 6', hex: '#ffbf52' },

        { name: 'Spring 2022 - 1', hex: '#8fb1c9' },
        { name: 'Spring 2022 - 2', hex: '#59d26b' },
        { name: 'Spring 2022 - 3', hex: '#6f8f6c' },
        { name: 'Spring 2022 - 4', hex: '#ff5a48' },
        { name: 'Spring 2022 - 5', hex: '#ff6b8b' },

        { name: 'Autumn 2021 - 1', hex: '#716f8d' },
        { name: 'Autumn 2021 - 2', hex: '#815668' },
        { name: 'Autumn 2021 - 3', hex: '#5b8549' },
        { name: 'Autumn 2021 - 4', hex: '#e6c5a4' },
        { name: 'Autumn 2021 - 5', hex: '#bc112f' },
        { name: 'Autumn 2021 - 6', hex: '#4a778b' },

        { name: 'Summer 2021 - 1', hex: '#ff4c36' },
        { name: 'Summer 2021 - 2', hex: '#dce1dd' },
        { name: 'Summer 2021 - 3', hex: '#6d5f3f' },

        { name: 'Spring 2021 - 1', hex: '#ffa100' },
        { name: 'Spring 2021 - 2', hex: '#c1dfa3' },
        { name: 'Spring 2021 - 3', hex: '#40578c' },
        { name: 'Spring 2021 - 4', hex: '#f6f1d7' },
        { name: 'Spring 2021 - 5', hex: '#4e7378' },

        { name: 'Autumn 2020 - 1', hex: '#ef4f48' },
        { name: 'Autumn 2020 - 2', hex: '#5c7299' },
        { name: 'Autumn 2020 - 3', hex: '#729b9d' },
        { name: 'Autumn 2020 - 4', hex: '#fe8850' },
        { name: 'Autumn 2020 - 5', hex: '#ffe3b7' },
        { name: 'Autumn 2020 - 6', hex: '#636e59' },
        { name: 'Autumn 2020 - 7', hex: '#93434c' },

        { name: 'Summer 2020 - 1', hex: '#d4f2dc' },
        { name: 'Summer 2020 - 2', hex: '#566b94' },
        { name: 'Summer 2020 - 3', hex: '#826f60' },

        { name: 'Spring 2020 - 1', hex: '#6b8a81' },
        { name: 'Spring 2020 - 2', hex: '#1785b8' },
        { name: 'Spring 2020 - 3', hex: '#ffb18c' },
        { name: 'Spring 2020 - 4', hex: '#ff3a3a' },

        { name: 'Winter 2019 - 1', hex: '#d5f2bd' },
        { name: 'Winter 2019 - 2', hex: '#e02a5f' },
        { name: 'Winter 2019 - 3', hex: '#8b7f58' },

        { name: 'Autumn 2019 - 1', hex: '#ff6848' },
        { name: 'Autumn 2019 - 2', hex: '#ffeb7d' },
        { name: 'Autumn 2019 - 3', hex: '#5d7d65' },
        { name: 'Autumn 2019 - 4', hex: '#b78f5f' },

        // New Summer 2019 Colors
        { name: 'Summer 2019 - 1', hex: '#ffde44' },
        { name: 'Summer 2019 - 2', hex: '#f44a7e' },

        // New Spring 2019 Colors
        { name: 'Spring 2019 - 1', hex: '#ff8542' },
        { name: 'Spring 2019 - 2', hex: '#84e98c' },
        { name: 'Spring 2019 - 3', hex: '#95c5e8' },
        { name: 'Spring 2019 - 4', hex: '#b6a4e1' },
        { name: 'Spring 2019 - 5', hex: '#5777bf' },

        // New Winter 2018 Colors
        { name: 'Winter 2018 - 1', hex: '#f6f4ba' },
        { name: 'Winter 2018 - 2', hex: '#007f9e' },
        { name: 'Winter 2018 - 3', hex: '#fd1e58' },

        // New Autumn 2018 Colors
        { name: 'Autumn 2018 - 1', hex: '#669797' },
        { name: 'Autumn 2018 - 2', hex: '#1f4e74' },
        { name: 'Autumn 2018 - 3', hex: '#5863a4' },
        { name: 'Autumn 2018 - 4', hex: '#8686a5' },

        // New Spring 2018 Colors
        { name: 'Spring 2018 - 1', hex: '#e57e5e' },
        { name: 'Spring 2018 - 2', hex: '#f7ec00' },
        { name: 'Spring 2018 - 3', hex: '#5b83a8' },

        // New Winter 2017 Color
        { name: 'Winter 2017 - 1', hex: '#357393' },

        // New Autumn 2017 Colors
        { name: 'Autumn 2017 - 1', hex: '#e1f323' },
        { name: 'Autumn 2017 - 2', hex: '#3080a0' },
        { name: 'Autumn 2017 - 3', hex: '#7157be' },
        { name: 'Autumn 2017 - 4', hex: '#ffc2a9' },
        { name: 'Autumn 2017 - 5', hex: '#ff4e51' },
        { name: 'Autumn 2017 - 6', hex: '#b92946' },
        { name: 'Autumn 2017 - 7', hex: '#e0d1b8' },

        // New Summer 2017 Colors
        { name: 'Summer 2017 - 1', hex: '#ffd25b' },
        { name: 'Summer 2017 - 2', hex: '#b3b8a7' },
        { name: 'Summer 2017 - 3', hex: '#d3836a' },

        // New Spring 2017 Colors
        { name: 'Spring 2017 - 1', hex: '#879aa1' },
        { name: 'Spring 2017 - 2', hex: '#c94544' },
        { name: 'Spring 2017 - 3', hex: '#ad9d8e' },

        // New Autumn 2016 Colors
        { name: 'Autumn 2016 - 1', hex: '#7388c7' },
        { name: 'Autumn 2016 - 2', hex: '#9b8e8c' },

        // New Spring 2016 Colors
        { name: 'Spring 2016 - 1', hex: '#fc7450' },
        { name: 'Spring 2016 - 2', hex: '#e9cc0d' },
        { name: 'Spring 2016 - 3', hex: '#aeec9d' },
        { name: 'Spring 2016 - 4', hex: '#63aeee' },
        { name: 'Spring 2016 - 5', hex: '#f4b0aa' },

        // New Autumn 2015 Colors
        { name: 'Autumn 2015 - 1', hex: '#a52518' },
        { name: 'Autumn 2015 - 2', hex: '#ff6411' },
        { name: 'Autumn 2015 - 3', hex: '#9ed5cc' },
        { name: 'Autumn 2015 - 4', hex: '#6ac5dd' },
        { name: 'Autumn 2015 - 5', hex: '#454d76' },
        { name: 'Autumn 2015 - 6', hex: '#b29aa6' },
        { name: 'Autumn 2015 - 7', hex: '#f4aca5' },

        // New Spring 2015 Colors
        { name: 'Spring 2015 - 1', hex: '#ffffff' },
        { name: 'Spring 2015 - 2', hex: '#8ce329' },
        { name: 'Spring 2015 - 3', hex: '#19b5fc' },
        { name: 'Spring 2015 - 4', hex: '#ff5964' },
        { name: 'Spring 2015 - 5', hex: '#997cf7' },
        { name: 'Spring 2015 - 6', hex: '#ff9500' },
        { name: 'Spring 2015 - 7', hex: '#bd9162' },
    ];

    return (
        <div className="relative z-10 grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="bg-gray-800/30 backdrop-filter backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Select Desired Color</h2>
                <ColorChooser onColorSelect={setSelectedColor} />
            </div>

            {/* Right Column */}
            <div className="bg-gray-800/30 backdrop-filter backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Matching Watch Face Colors</h2>
                <MatchingColorPresenter
                    selectedColor={selectedColor}
                    predefinedColors={predefinedColors}
                />
            </div>
        </div>
    );
};

export default WatchFaceColor; 