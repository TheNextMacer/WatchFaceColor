import WatchFaceColor from './components/WatchFaceColor';
import { Watch } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold">Apple Watch Farbfinder</h1>
        </header>
        <WatchFaceColor />
      </div>
    </div>
  );
}

export default App;
