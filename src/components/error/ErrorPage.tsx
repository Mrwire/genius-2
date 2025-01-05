import SplineScene from './SplineScene';
import ErrorContent from './ErrorContent';

export default function ErrorPage() {
  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SplineScene />
      </div>
      <ErrorContent />
    </main>
  );
}