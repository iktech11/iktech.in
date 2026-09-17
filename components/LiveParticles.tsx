'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  alphaSpeed: number;
  color: string;
  twinkle: boolean;
}

export default function LiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color palette: Classic Blue, Ice Blue, Pure White, Silver Gray
    const colors = [
      'rgba(255, 255, 255,',     // Pure White
      'rgba(96, 165, 250,',     // Light Classic Blue
      'rgba(59, 130, 246,',     // Classic Blue
      'rgba(191, 219, 254,',    // Ice Silver
      'rgba(147, 197, 253,',    // Soft Sky Blue
    ];

    // Create 90 tiny shiny particles
    const count = Math.min(100, Math.floor((width * height) / 14000));
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const baseAlpha = Math.random() * 0.7 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22, // Very tiny smooth movement
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.8 + 0.6, // Very tiny size (0.6px to 2.4px)
        baseAlpha: baseAlpha,
        alpha: baseAlpha,
        alphaSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkle: Math.random() > 0.3,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render each shiny particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Tiny floating movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Twinkling shimmer effect
        if (p.twinkle) {
          p.alpha += p.alphaSpeed;
          if (p.alpha > 0.95 || p.alpha < 0.15) {
            p.alphaSpeed = -p.alphaSpeed;
          }
        }

        // Draw soft glow aura for larger particles
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color} ${(p.alpha * 0.25).toFixed(3)})`;
          ctx.fill();
        }

        // Draw core tiny star particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha.toFixed(3)})`;
        ctx.fill();
      }

      // Subtle delicate connection lines between very close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 70) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 70) * 0.08;
            ctx.strokeStyle = `rgba(147, 197, 253, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full opacity-90"
    />
  );
}
