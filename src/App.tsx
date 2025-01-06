import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MPSPage from './pages/MPSPage';
import LabrigadPage from './pages/LabrigadPage';
import ErrorPage from './pages/ErrorPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mps" element={<MPSPage />} />
      <Route path="/labrigad" element={<LabrigadPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}