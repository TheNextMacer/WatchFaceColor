import WatchFaceColor from './components/WatchFaceColor';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-4 flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <WatchFaceColor />
        </div>
        <footer className="text-center py-4 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Apple Watch Farbfinder. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
      <div className="fixed inset-0 z-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
}

export default App;
