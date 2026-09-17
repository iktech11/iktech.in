'use client';

import React, { useEffect, useRef } from 'react';

export default function WavyHalftoneMesh() {
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

    let time = 0;

    // Halftone grid density
    const step = 7; // Distance between dots in pixels

    // Color interpolator along the horizontal curve
    // Electric Blue -> Violet Purple -> Magenta Pink -> Coral Red
    const getWaveColor = (ratio: number, alpha: number) => {
      // ratio: 0.0 to 1.0 from left to right
      let r = 0, g = 0, b = 0;
      if (ratio < 0.35) {
        // Blue to Purple
        const localT = ratio / 0.35;
        r = Math.round(37 + (139 - 37) * localT);
        g = Math.round(99 + (92 - 99) * localT);
        b = Math.round(235 + (246 - 235) * localT);
      } else if (ratio < 0.7) {
        // Purple to Magenta
        const localT = (ratio - 0.35) / 0.35;
        r = Math.round(139 + (236 - 139) * localT);
        g = Math.round(92 + (72 - 92) * localT);
        b = Math.round(246 + (153 - 246) * localT);
      } else {
        // Magenta to Coral Red
        const localT = (ratio - 0.7) / 0.3;
        r = Math.round(236 + (255 - 236) * localT);
        g = Math.round(72 + (80 - 72) * localT);
        b = Math.round(153 + (70 - 153) * localT);
      }
      return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
    };

    const render = () => {
      time += 0.012; // Smooth continuous undulating speed

      ctx.clearRect(0, 0, width, height);

      // Deep dark background
      ctx.fillStyle = '#060810';
      ctx.fillRect(0, 0, width, height);

      // Define 2 flowing ribbon waves
      // Wave 1: Main sweeping diagonal S-curve
      const wave1Y = (x: number) => {
        const nx = x / width;
        return (
          height * 0.48 +
          Math.sin(nx * 3.2 - time * 0.8) * (height * 0.22) +
          Math.cos(nx * 2.1 + time * 0.5) * (height * 0.12)
        );
      };

      const wave1Thickness = (x: number) => {
        const nx = x / width;
        return (
          height * 0.32 +
          Math.sin(nx * 4.5 + time * 0.6) * (height * 0.08)
        );
      };

      // Wave 2: Secondary deeper undulating ribbon
      const wave2Y = (x: number) => {
        const nx = x / width;
        return (
          height * 0.68 +
          Math.sin(nx * 2.8 + time * 0.7) * (height * 0.18) +
          Math.cos(nx * 3.6 - time * 0.4) * (height * 0.09)
        );
      };

      const wave2Thickness = (x: number) => {
        const nx = x / width;
        return (
          height * 0.26 +
          Math.cos(nx * 3.8 + time * 0.5) * (height * 0.06)
        );
      };

      // Draw subtle luminous ribbon boundary strokes for added glow
      ctx.save();
      ctx.lineWidth = 1.5;
      
      // Wave 1 top edge glowing line
      ctx.beginPath();
      for (let x = 0; x <= width; x += 15) {
        const y = wave1Y(x) - wave1Thickness(x) * 0.5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const gradLine1 = ctx.createLinearGradient(0, 0, width, 0);
      gradLine1.addColorStop(0.1, 'rgba(59, 130, 246, 0.4)');
      gradLine1.addColorStop(0.5, 'rgba(168, 85, 247, 0.45)');
      gradLine1.addColorStop(0.9, 'rgba(244, 63, 94, 0.4)');
      ctx.strokeStyle = gradLine1;
      ctx.stroke();

      // Wave 1 bottom edge glowing line
      ctx.beginPath();
      for (let x = 0; x <= width; x += 15) {
        const y = wave1Y(x) + wave1Thickness(x) * 0.5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.25)';
      ctx.stroke();
      ctx.restore();

      // Render the halftone dot matrix
      for (let x = 0; x < width; x += step) {
        const nx = x / width;

        const cy1 = wave1Y(x);
        const th1 = wave1Thickness(x);
        const top1 = cy1 - th1 * 0.5;
        const bot1 = cy1 + th1 * 0.5;

        const cy2 = wave2Y(x);
        const th2 = wave2Thickness(x);
        const top2 = cy2 - th2 * 0.5;
        const bot2 = cy2 + th2 * 0.5;

        for (let y = 0; y < height; y += step) {
          let dotRadius = 0;
          let alpha = 0;

          // Check inside Wave 1
          if (y >= top1 && y <= bot1) {
            const distFromCenter = Math.abs(y - cy1) / (th1 * 0.5); // 0 at center, 1 at edge
            // Halftone intensity curve: dense at peak/center, fading into fine dots at border
            const intensity = Math.pow(1 - distFromCenter, 1.4);
            if (intensity > 0.05) {
              dotRadius = Math.max(0.6, intensity * 2.6);
              alpha = Math.max(0.12, intensity * 0.95);
            }
          }

          // Check inside Wave 2 (composite)
          if (y >= top2 && y <= bot2) {
            const distFromCenter = Math.abs(y - cy2) / (th2 * 0.5);
            const intensity = Math.pow(1 - distFromCenter, 1.3);
            if (intensity > 0.05) {
              const r2 = Math.max(0.6, intensity * 2.2);
              const a2 = Math.max(0.1, intensity * 0.75);
              if (r2 > dotRadius) {
                dotRadius = r2;
                alpha = Math.max(alpha, a2);
              }
            }
          }

          // Ambient faint background halftone texture outside curves
          if (dotRadius === 0) {
            // Very fine subtle grid dots across the background
            if ((x % (step * 2) === 0) && (y % (step * 2) === 0)) {
              dotRadius = 0.6;
              alpha = 0.07;
            }
          }

          if (dotRadius > 0 && alpha > 0.02) {
            ctx.beginPath();
            ctx.arc(x, y, dotRadius, 0, Math.PI * 2);

            if (alpha > 0.1) {
              ctx.fillStyle = getWaveColor(nx, alpha);
            } else {
              ctx.fillStyle = `rgba(148, 163, 184, ${alpha.toFixed(3)})`;
            }

            ctx.fill();
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
      className="fixed inset-0 pointer-events-none z-[0] w-full h-full"
    />
  );
}
