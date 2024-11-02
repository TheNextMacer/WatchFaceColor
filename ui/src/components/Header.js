import { Watch } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 py-3 sm:py-4 px-4 sm:px-6 mb-4 sm:mb-6 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg shadow-md">
                    <Watch size={24} className="text-white" />
                </div>
                <div className="text-center sm:text-left">
                    <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 text-transparent bg-clip-text">
                        Apple Watch Farbfinder
                    </h1>
                    <p className="text-xs sm:text-sm text-gray-400">
                        Finden Sie die perfekte Farbe für Ihr Zifferblatt
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header; 