export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-400 mb-8">Page non trouvée</p>
        <a 
          href="/"
          className="
            px-6 py-3
            bg-blue-500 hover:bg-blue-600
            text-white font-semibold
            rounded-full
            transition-colors
          "
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}