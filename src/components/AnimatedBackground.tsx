import { useEffect, useRef } from "react";

type ShapeType = "circle" | "triangle" | "hexagon";
type ThemeMode = "dark" | "light";

interface Shape {
  x: number;
  y: number;
  size: number;
  type: ShapeType;
  colorIndex: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  pulse: number;
  pulseSpeed: number;
  driftSeed: number;
}

interface ThemePalette {
  shapes: string[];
  orb1: string;
  orb2: string;
  line: string;
  base: string;
}

const DARK_PALETTE: ThemePalette = {
  shapes: ["#00d4ff", "#7c3aed", "#06b6d4", "#60a5fa", "#a78bfa"],
  orb1: "rgba(0, 212, 255, 0.06)",
  orb2: "rgba(124, 58, 237, 0.06)",
  line: "rgba(0, 212, 255, 0.08)",
  base: "#0a0a23",
};

const LIGHT_PALETTE: ThemePalette = {
  shapes: ["#0a0a23", "#4a6cf7", "#7c3aed", "#6366f1", "#3b82f6"],
  orb1: "rgba(74, 108, 247, 0.05)",
  orb2: "rgba(224, 231, 255, 0.05)",
  line: "rgba(74, 108, 247, 0.1)",
  base: "#f8fafc",
};

function getThemeMode(): ThemeMode {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getPalette(mode: ThemeMode): ThemePalette {
  return mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
}

function chooseShapeType(): ShapeType {
  const roll = Math.random();

  if (roll < 0.6) return "circle";
  if (roll < 0.8) return "triangle";
  return "hexagon";
}

function createShapes(width: number, height: number, count: number): Shape[] {
  return Array.from({ length: count }, (_, index) => {
    const size = 20 + Math.random() * 60;

    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size,
      type: chooseShapeType(),
      colorIndex: index % 5,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.012,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.003 + Math.random() * 0.008,
      driftSeed: Math.random() * Math.PI * 2,
    };
  });
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const themeRef = useRef<ThemeMode>(getThemeMode());
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!shapesRef.current.length) {
        shapesRef.current = createShapes(width, height, 10);
      }
    };

    const syncTheme = () => {
      themeRef.current = getThemeMode();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };

    const drawRoundedGlow = (
      x: number,
      y: number,
      radius: number,
      innerColor: string,
      outerColor: string
    ) => {
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, innerColor);
      gradient.addColorStop(1, outerColor);
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const drawShape = (shape: Shape, palette: ThemePalette) => {
      const fillColor = palette.shapes[shape.colorIndex % palette.shapes.length];
      const scale = 1 + Math.sin(shape.pulse) * 0.08;
      const size = shape.size * scale;

      context.save();
      context.translate(shape.x, shape.y);
      context.rotate(shape.rotation);
      context.globalAlpha = 0.14 + Math.sin(shape.pulse) * 0.04;
      context.fillStyle = fillColor;
      context.shadowColor = fillColor;
      context.shadowBlur = 22;

      if (shape.type === "circle") {
        context.beginPath();
        context.arc(0, 0, size / 2, 0, Math.PI * 2);
        context.fill();
      }

      if (shape.type === "triangle") {
        context.beginPath();
        context.moveTo(0, -size / 2);
        context.lineTo(-size / 2, size / 2);
        context.lineTo(size / 2, size / 2);
        context.closePath();
        context.fill();
      }

      if (shape.type === "hexagon") {
        context.beginPath();
        for (let step = 0; step < 6; step += 1) {
          const angle = (step / 6) * Math.PI * 2;
          const px = Math.cos(angle) * (size / 2);
          const py = Math.sin(angle) * (size / 2);
          if (step === 0) {
            context.moveTo(px, py);
          } else {
            context.lineTo(px, py);
          }
        }
        context.closePath();
        context.fill();
      }

      context.restore();
    };

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const palette = getPalette(themeRef.current);

      context.clearRect(0, 0, width, height);

      const background = context.createRadialGradient(
        width * 0.5,
        height * 0.25,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.9
      );
      background.addColorStop(0, palette.base);
      background.addColorStop(1, palette.base);
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      const pulse = 0.5 + Math.sin(Date.now() * 0.0005) * 0.5;
      drawRoundedGlow(width * 0.22, height * 0.28, Math.max(width, height) * 0.28, palette.orb1, "transparent");
      drawRoundedGlow(width * 0.8, height * 0.72, Math.max(width, height) * 0.34, palette.orb2, "transparent");
      context.globalAlpha = 0.25 + pulse * 0.05;

      for (let i = 0; i < shapesRef.current.length; i += 1) {
        const shape = shapesRef.current[i];

        shape.pulse += shape.pulseSpeed;
        shape.rotation += shape.rotationSpeed;
        shape.x += shape.vx + Math.cos(shape.pulse + shape.driftSeed) * 0.12;
        shape.y += shape.vy + Math.sin(shape.pulse + shape.driftSeed) * 0.12;

        if (mouseRef.current.active) {
          const dx = shape.x - mouseRef.current.x;
          const dy = shape.y - mouseRef.current.y;
          const distance = Math.max(Math.hypot(dx, dy), 0.001);

          if (distance < 220) {
            const push = ((220 - distance) / 220) * 0.85;
            shape.x += (dx / distance) * push * 1.3;
            shape.y += (dy / distance) * push * 1.3;
          }
        }

        if (shape.x < -90) shape.x = width + 90;
        if (shape.x > width + 90) shape.x = -90;
        if (shape.y < -90) shape.y = height + 90;
        if (shape.y > height + 90) shape.y = -90;

        for (let j = i + 1; j < shapesRef.current.length; j += 1) {
          const other = shapesRef.current[j];
          const dx = other.x - shape.x;
          const dy = other.y - shape.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 200) {
            context.save();
            context.beginPath();
            context.moveTo(shape.x, shape.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = palette.line;
            context.lineWidth = 0.7;
            context.globalAlpha = Math.max(0, 1 - distance / 200) * 0.9;
            context.stroke();
            context.restore();
          }
        }

        drawShape(shape, palette);
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    resize();
    syncTheme();

    const themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("storage", syncTheme);

    animate();

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full select-none"
    />
  );
}