import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/loading/LoadingScreen';

// Lazy load des pages
const HomePage = lazy(() => import('./pages/HomePage'));
const MPSPage = lazy(() => import('./pages/MPSPage'));
const LabrigadPage = lazy(() => import('./pages/LabrigadPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mps" element={<MPSPage />} />
          <Route path="/labrigad" element={<LabrigadPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}