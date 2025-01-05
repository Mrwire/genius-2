export default function GeniusLogo() {
  return (
    <div className="absolute top-8 left-8 z-20">
      <div className="flex items-center gap-4">
        <img 
          src="https://jzarqkgallfcoormlljw.supabase.co/storage/v1/object/sign/image/logo/logo_simplified.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9sb2dvL2xvZ29fc2ltcGxpZmllZC5wbmciLCJpYXQiOjE3MzQ5OTczODYsImV4cCI6MTg5MjY3NzM4Nn0.uEdI6kwOI1XdhSv_9_Z8PRi8TiiIXV3dk94KiDX_AKY&t=2024-12-23T23%3A43%3A07.751Z"
          alt="Genius Logo"
          className="h-12 w-auto filter brightness-0 invert"
        />
        <span className="text-2xl font-bold text-white">GENIUS</span>
      </div>
    </div>
  );
}