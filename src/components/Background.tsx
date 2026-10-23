import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation (lerp) for the mouse follower light
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (containerRef.current) {
        containerRef.current.style.setProperty('--mouse-x', `${currentX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${currentY}px`);
      }
      
      // 3D Parallax effect on the stars (they move slightly opposite to the mouse)
      if (starsRef.current) {
        const moveX = (currentX - window.innerWidth / 2) * -0.03;
        const moveY = (currentY - window.innerHeight / 2) * -0.03;
        starsRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Generate random twinkling stars once
  const stars = React.useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5, // 0.5px to 3px
      x: Math.random() * 120 - 10, // -10vw to 110vw to allow overflow during parallax
      y: Math.random() * 120 - 10,
      baseOpacity: Math.random() * 0.4 + 0.1,
      animDuration: Math.random() * 3 + 2, // 2s to 5s twinkle
    }));
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none -z-50 bg-[#030305]"
      style={{
        // Interactive Mouse Spotlight
        backgroundImage: `radial-gradient(circle 800px at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.05) 40%, rgba(0,0,0,0) 80%)`
      }}
    >
      
      {/* Deep Space Atmosphere Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030305]/50 to-[#000000]" />

      {/* Interactive 3D Parallax Stars */}
      <div ref={starsRef} className="absolute inset-0 w-full h-full will-change-transform">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}vw`,
              top: `${star.y}vh`,
              opacity: star.baseOpacity,
              backgroundColor: '#ffffff',
              boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)` // Glowing effect
            }}
            animate={{ 
              opacity: [star.baseOpacity, star.baseOpacity + 0.5, star.baseOpacity],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: star.animDuration, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2 // Random start delay
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default Background;
