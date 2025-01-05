import { type BackgroundImageProps } from './types';

export default function BackgroundImage({ url, opacity = 0.1 }: BackgroundImageProps) {
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('${url}')`,
          opacity
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E2328] via-transparent to-[#1E2328]" />
    </>
  );
}