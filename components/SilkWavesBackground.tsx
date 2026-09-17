'use client';

import React, { useEffect, useRef } from 'react';

export default function SilkWavesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    let scrollY = 0;
    let targetScrollY = 0;

    const handleResize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let time = 0;

    // Silk ribbon definitions optimized for mobile & desktop
    const ribbons = [
      {
        baseY: 0.35,
        amplitude: 0.18,
        freq: 1.8,
        speed: 0.0022,
        thickness: 150,
        colors: [
          { stop: 0, color: 'rgba(37, 99, 235, 0)' },
          { stop: 0.25, color: 'rgba(59, 130, 246, 0.45)' },
          { stop: 0.5, color: 'rgba(168, 85, 247, 0.7)' },
          { stop: 0.75, color: 'rgba(217, 70, 239, 0.55)' },
          { stop: 1, color: 'rgba(147, 51, 234, 0)' },
        ],
        highlight: 'rgba(224, 231, 255, 0.85)',
        phase: 0,
      },
      {
        baseY: 0.52,
        amplitude: 0.22,
        freq: 1.4,
        speed: 0.003,
        thickness: 200,
        colors: [
          { stop: 0, color: 'rgba(139, 92, 246, 0)' },
          { stop: 0.3, color: 'rgba(147, 51, 234, 0.6)' },
          { stop: 0.55, color: 'rgba(56, 189, 248, 0.8)' },
          { stop: 0.8, color: 'rgba(30, 64, 175, 0.5)' },
          { stop: 1, color: 'rgba(2, 132, 199, 0)' },
        ],
        highlight: 'rgba(255, 255, 255, 0.95)',
        phase: 2.2,
      },
      {
        baseY: 0.68,
        amplitude: 0.16,
        freq: 2.1,
        speed: 0.0018,
        thickness: 160,
        colors: [
          { stop: 0, color: 'rgba(14, 165, 233, 0)' },
          { stop: 0.2, color: 'rgba(56, 189, 248, 0.5)' },
          { stop: 0.5, color: 'rgba(126, 34, 206, 0.65)' },
          { stop: 0.85, color: 'rgba(236, 72, 153, 0.45)' },
          { stop: 1, color: 'rgba(236, 72, 153, 0)' },
        ],
        highlight: 'rgba(199, 210, 254, 0.75)',
        phase: 4.1,
      },
      {
        baseY: 0.22,
        amplitude: 0.12,
        freq: 2.4,
        speed: 0.0016,
        thickness: 110,
        colors: [
          { stop: 0, color: 'rgba(59, 130, 246, 0)' },
          { stop: 0.4, color: 'rgba(96, 165, 250, 0.4)' },
          { stop: 0.7, color: 'rgba(192, 132, 252, 0.45)' },
          { stop: 1, color: 'rgba(147, 51, 234, 0)' },
        ],
        highlight: 'rgba(240, 249, 255, 0.7)',
        phase: 1.5,
      },
    ];

    const render = () => {
      time += 1;
      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Deep Midnight Obsidian Base
      ctx.fillStyle = '#04060d';
      ctx.fillRect(0, 0, width, height);

      // Background ambient depth glows
      const bgGrad1 = ctx.createRadialGradient(
        width * 0.75, height * 0.35, 10,
        width * 0.75, height * 0.35, width * 0.5
      );
      bgGrad1.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
      bgGrad1.addColorStop(0.6, 'rgba(147, 51, 234, 0.05)');
      bgGrad1.addColorStop(1, 'rgba(4, 6, 13, 0)');
      ctx.fillStyle = bgGrad1;
      ctx.fillRect(0, 0, width, height);

      const bgGrad2 = ctx.createRadialGradient(
        width * 0.25, height * 0.7, 10,
        width * 0.25, height * 0.7, width * 0.45
      );
      bgGrad2.addColorStop(0, 'rgba(192, 132, 252, 0.1)');
      bgGrad2.addColorStop(1, 'rgba(4, 6, 13, 0)');
      ctx.fillStyle = bgGrad2;
      ctx.fillRect(0, 0, width, height);

      // Draw each shiny silk wave ribbon
      ribbons.forEach((ribbon, rIdx) => {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        const isMobile = width < 768;
        const pointsCount = isMobile ? 26 : 40;
        const step = width / (pointsCount - 1);
        const topPoints: { x: number; y: number }[] = [];
        const botPoints: { x: number; y: number }[] = [];
        const midPoints: { x: number; y: number }[] = [];

        const scrollOffset = (scrollY * 0.07) * (rIdx % 2 === 0 ? 1 : -0.6);

        for (let i = 0; i < pointsCount; i++) {
          const x = i * step;
          const nx = i / (pointsCount - 1);

          // Very slow, smooth organic wave calculation
          const t = time * ribbon.speed + ribbon.phase;
          const wave =
            Math.sin(nx * ribbon.freq * Math.PI * 2 + t) * (height * ribbon.amplitude) +
            Math.cos(nx * (ribbon.freq * 0.6) * Math.PI * 2 - t * 0.8) * (height * ribbon.amplitude * 0.4) +
            Math.sin(nx * 4.8 + t * 1.4) * 15;

          const cy = height * ribbon.baseY + wave + (scrollOffset % height);
          const thick =
            (isMobile ? ribbon.thickness * 0.75 : ribbon.thickness) *
            (0.75 + 0.35 * Math.sin(nx * Math.PI * 3 + t * 0.7));

          topPoints.push({ x, y: cy - thick * 0.5 });
          midPoints.push({ x, y: cy });
          botPoints.push({ x, y: cy + thick * 0.5 });
        }

        // Draw the main satin/oil paint ribbon body
        ctx.beginPath();
        ctx.moveTo(topPoints[0].x, topPoints[0].y);

        for (let i = 1; i < topPoints.length - 1; i++) {
          const xc = (topPoints[i].x + topPoints[i + 1].x) / 2;
          const yc = (topPoints[i].y + topPoints[i + 1].y) / 2;
          ctx.quadraticCurveTo(topPoints[i].x, topPoints[i].y, xc, yc);
        }
        ctx.lineTo(topPoints[topPoints.length - 1].x, topPoints[topPoints.length - 1].y);

        ctx.lineTo(botPoints[botPoints.length - 1].x, botPoints[botPoints.length - 1].y);
        for (let i = botPoints.length - 2; i > 0; i--) {
          const xc = (botPoints[i].x + botPoints[i - 1].x) / 2;
          const yc = (botPoints[i].y + botPoints[i - 1].y) / 2;
          ctx.quadraticCurveTo(botPoints[i].x, botPoints[i].y, xc, yc);
        }
        ctx.lineTo(botPoints[0].x, botPoints[0].y);
        ctx.closePath();

        const ribbonGrad = ctx.createLinearGradient(0, height * (ribbon.baseY - 0.2), width, height * (ribbon.baseY + 0.3));
        ribbon.colors.forEach((c) => {
          ribbonGrad.addColorStop(c.stop, c.color);
        });
        ctx.fillStyle = ribbonGrad;
        ctx.fill();

        // Highlight ridge
        ctx.beginPath();
        ctx.moveTo(midPoints[0].x, midPoints[0].y - 6);
        for (let i = 1; i < midPoints.length - 1; i++) {
          const xc = (midPoints[i].x + midPoints[i + 1].x) / 2;
          const yc = (midPoints[i].y + midPoints[i + 1].y) / 2 - 6;
          ctx.quadraticCurveTo(midPoints[i].x, midPoints[i].y - 6, xc, yc);
        }
        ctx.lineTo(midPoints[midPoints.length - 1].x, midPoints[midPoints.length - 1].y - 6);
        
        ctx.lineWidth = isMobile ? 1.8 : 2.5;
        ctx.strokeStyle = ribbon.highlight;
        ctx.shadowColor = ribbon.highlight;
        ctx.shadowBlur = isMobile ? 8 : 12;
        ctx.stroke();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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
