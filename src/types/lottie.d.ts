declare module '@lottiefiles/dotlottie-web' {
  export class DotLottie {
    constructor(options: {
      autoplay?: boolean;
      loop?: boolean;
      canvas: HTMLCanvasElement;
      src: string;
    });

    addEventListener(event: string, callback: () => void): void;
    destroy(): void;
  }
} 