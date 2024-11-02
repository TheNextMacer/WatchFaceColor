import WatchFaceColor from './components/WatchFaceColor';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <Header />
        <WatchFaceColor />
        <footer className="text-center mt-4 sm:mt-8 py-3 sm:py-4 text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Apple Watch Farbfinder. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
