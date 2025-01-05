import { forwardRef } from 'react';

interface GroupHeaderProps {
  isIntersecting: boolean;
}

const GroupHeader = forwardRef<HTMLHeadingElement, GroupHeaderProps>(
  function GroupHeader({ isIntersecting }, ref) {
    return (
      <h2 
        ref={ref}
        className={`
          text-[clamp(3rem,5vw,4.5rem)] font-extrabold text-white text-center mb-20
          transition-all duration-700
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        LE GROUPE
      </h2>
    );
  }
);