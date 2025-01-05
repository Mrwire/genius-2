import { Player } from '@lottiefiles/react-lottie-player';

export default function Logo() {
  return (
    <a href="/" className="relative group">
      <img 
        src="https://jzarqkgallfcoormlljw.supabase.co/storage/v1/object/sign/image/logo/geniusaddistrict.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9sb2dvL2dlbml1c2FkZGlzdHJpY3QucG5nIiwiaWF0IjoxNzM1OTUzNzE1LCJleHAiOjE3Njc0ODk3MTV9.TxOt62EMYRWji9lLTjzYiK5pGjMTzkLq-oTaePQ1PFs&t=2025-01-04T01%3A21%3A54.785Z"
        alt="Genius Logo"
        className="h-20 w-auto filter brightness-0 invert transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
      />
    </a>
  );
}