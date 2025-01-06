import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoadingScreen from './components/loading/LoadingScreen';

const AppContent = lazy(() => import('./AppContent'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <AppContent />
      </Suspense>
    </BrowserRouter>
  );
}