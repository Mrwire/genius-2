import type { ArrowProps } from './types';

export default function CompanyArrows({ isInView }: { isInView: boolean }) {
  return (
    <>
      {/* Desktop Arrows */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        <Arrow 
          isInView={isInView}
          delay={200}
          angle={15}
          width="25%"
        />
        <Arrow 
          isInView={isInView}
          delay={400}
          width="50%"
        />
        <Arrow 
          isInView={isInView}
          delay={600}
          angle={-15}
          width="75%"
        />
      </div>

      {/* Mobile Arrows */}
      <div className="lg:hidden absolute inset-x-0 pointer-events-none">
        {[200, 400, 600].map((delay) => (
          <div
            key={delay}
            className={`
              absolute left-1/2 h-12 w-px bg-white/30
              transition-all duration-1000
              ${isInView ? 'opacity-100' : 'opacity-0'}
            `}
            style={{ 
              top: `${25 + (delay - 200) / 200 * 25}%`,
              transitionDelay: `${delay}ms`
            }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="w-2 h-2 border-r border-b border-white rotate-45" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Arrow({ isInView, delay, angle = 0, width }: ArrowProps) {
  return (
    <div 
      className={`
        absolute top-[40%] left-[25%]
        h-[2px] bg-white/30
        transition-all duration-1000
        ${isInView ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ 
        width,
        transform: `rotate(${angle}deg)`,
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="w-2 h-2 border-t border-r border-white rotate-45" />
      </div>
    </div>
  );
}