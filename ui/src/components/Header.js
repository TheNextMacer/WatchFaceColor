import { Watch } from 'lucide-react';

const Header = () => {
    return (
        <header className="relative z-10 mb-4 py-6">
            <div className="flex flex-col items-center justify-center mb-4">
                <div className="flex items-center justify-center mb-4">
                    <Watch className="w-12 h-12 sm:w-16 sm:h-16 mr-4 text-blue-400 animate-pulse" />
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Apple Watch Color Finder
                    </h1>
                </div>
                <p className="text-lg sm:text-xl text-center text-gray-300">
                    Find the perfect color for your watch face
                </p>
            </div>
        </header>
    );
};

export default Header; 