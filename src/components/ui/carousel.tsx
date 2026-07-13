"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();
  const isActive = current === index;

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = e.clientX - (r.left + r.width / 2);
    yRef.current = e.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => { xRef.current = 0; yRef.current = 0; };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d] flex-shrink-0 w-full">
      <li
        ref={slideRef}
        className="relative w-full h-full text-center text-white cursor-pointer list-none"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isActive ? "scale(1) rotateX(0deg)" : "scale(0.96) rotateX(6deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-surface"
          style={{
            transform: isActive
              ? "translate3d(calc(var(--x) / 35), calc(var(--y) / 35), 0)"
              : "none",
            transition: isActive ? "none" : "transform 0.3s ease",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isActive ? 1 : 0.45 }}
            alt={slide.title}
            src={slide.src}
            loading="eager"
            decoding="sync"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`} />
        </div>

        <div
          className={`relative h-full flex flex-col items-center justify-end pb-10 px-6 transition-opacity duration-500 ${
            isActive ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-white drop-shadow-lg mb-4">
            {slide.title}
          </h3>
          <a
            href="#contacto"
            className="px-6 py-2.5 rounded-full bg-primary text-dark text-sm font-bold hover:bg-primary-dark transition-colors duration-200 shadow-lg"
          >
            {slide.button}
          </a>
        </div>
      </li>
    </div>
  );
};

const CarouselControl = ({ type, title, handleClick }: { type: string; title: string; handleClick: () => void }) => (
  <button
    className={`w-11 h-11 flex items-center justify-center mx-2 bg-white/10 border border-white/20 rounded-full hover:bg-primary/20 hover:border-primary/60 hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
    aria-label={title}
  >
    <IconArrowNarrowRight className="text-white" size={20} />
  </button>
);

export function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);
  const id = useId();

  const prev = () => setCurrent((c) => (c - 1 < 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1 === slides.length ? 0 : c + 1));

  return (
    <div className="w-full max-w-2xl mx-auto" aria-labelledby={`carousel-heading-${id}`}>
      {/* Slide viewport */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl">
        <ul
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)`, width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={(i) => { if (current !== i) setCurrent(i); }}
            />
          ))}
        </ul>
      </div>

      {/* Controls + dots */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <CarouselControl type="previous" title="Proyecto anterior" handleClick={prev} />

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        <CarouselControl type="next" title="Proyecto siguiente" handleClick={next} />
      </div>
    </div>
  );
}
