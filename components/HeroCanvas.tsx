"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type HeroCanvasProps = {
  className?: string;
};

const palettes = [
  ["#111b18", "#24351e", "#6f7e49"],
  ["#172925", "#2c5b4a", "#9e8b5a"],
  ["#06253b", "#0b7895", "#8bd8e9"],
  ["#241a14", "#8c6842", "#dcc197"],
  ["#07131f", "#0b5d7e", "#37c5dd"],
];

export function HeroCanvas({ className }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return undefined;
    }

    let width = 0;
    let height = 0;
    let time = 0;
    let animationFrame = 0;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawBand = (
      y: number,
      amplitude: number,
      color: string,
      alpha: number,
      phase: number,
      thickness: number,
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width + 28; x += 28) {
        const wave =
          Math.sin(x * 0.005 + phase + time * 0.002) * amplitude +
          Math.sin(x * 0.013 + phase * 0.7) * amplitude * 0.34;
        ctx.lineTo(x, y + wave);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.fill();
      ctx.globalAlpha = alpha * 0.55;
      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      ctx.stroke();
      ctx.globalAlpha = 1;
    };

    const drawReeds = () => {
      ctx.save();
      ctx.globalAlpha = 0.24;
      ctx.strokeStyle = "#d8c185";
      ctx.lineWidth = 1;

      for (let index = 0; index < 88; index += 1) {
        const x = (index * 53 + time * 0.018) % (width + 90) - 45;
        const base = height * (0.7 + ((index * 17) % 28) / 100);
        const tall = 36 + ((index * 23) % 90);
        const lean = Math.sin(time * 0.001 + index) * 14;
        ctx.beginPath();
        ctx.moveTo(x, base);
        ctx.quadraticCurveTo(
          x + lean * 0.35,
          base - tall * 0.48,
          x + lean,
          base - tall,
        );
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawReefLines = () => {
      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.strokeStyle = "#b8f4ef";
      ctx.lineWidth = 1;

      for (let index = 0; index < 18; index += 1) {
        const y = height * 0.24 + index * 18 + Math.sin(time * 0.001 + index) * 5;
        ctx.beginPath();

        for (let x = 0; x <= width; x += 22) {
          const wave = Math.sin(x * 0.018 + index * 0.7 + time * 0.002) * 7;

          if (x === 0) {
            ctx.moveTo(x, y + wave);
          } else {
            ctx.lineTo(x, y + wave);
          }
        }

        ctx.stroke();
      }

      ctx.restore();
    };

    const drawParticles = () => {
      ctx.save();
      ctx.globalAlpha = 0.18;
      ctx.fillStyle = "#f5dfad";

      for (let index = 0; index < 64; index += 1) {
        const x = (index * 97 + time * 0.012) % width;
        const y = height * (0.12 + ((index * 29) % 72) / 100);
        const size = 1 + ((index * 11) % 16) / 10;
        ctx.fillRect(x, y, size, size);
      }

      ctx.restore();
    };

    const drawHero = () => {
      if (!reduceMotion) {
        time += 16;
      }

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, palettes[0][0]);
      gradient.addColorStop(0.25, palettes[1][0]);
      gradient.addColorStop(0.48, palettes[2][0]);
      gradient.addColorStop(0.72, palettes[3][0]);
      gradient.addColorStop(1, palettes[4][0]);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      drawReefLines();
      drawBand(height * 0.48, 34, "#244831", 0.42, 0.4, 1.2);
      drawBand(height * 0.56, 48, "#0d5f80", 0.3, 1.6, 1.1);
      drawBand(height * 0.66, 54, "#8a6742", 0.32, 2.1, 1);
      drawBand(height * 0.75, 36, "#182719", 0.56, 2.8, 1.4);
      drawReeds();
      drawParticles();

      if (!reduceMotion) {
        animationFrame = requestAnimationFrame(drawHero);
      }
    };

    resizeCanvas();
    drawHero();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
