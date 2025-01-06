import { Routes, Route } from 'react-router-dom';
import Header from './components/navigation/Header';
import HomePage from './pages/HomePage';
import ErrorPage from './components/error/ErrorPage';

export default function AppContent() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
} 