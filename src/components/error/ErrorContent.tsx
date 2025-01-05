import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ErrorContent() {
  const navigate = useNavigate();

  return (
    <div className="relative z-10 w-full h-screen flex items-center justify-center">
      <div className="text-center p-8 backdrop-blur-lg bg-black/30 rounded-2xl border border-white/10">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white/80 mb-8">Page not found</p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all duration-300 mx-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Return Home
        </button>
      </div>
    </div>
  );
}