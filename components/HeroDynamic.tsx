"use client";
import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface Slide {
  image?: { url: string };
  title: string;
  description?: string;
  buttonText?: string;
  link?: string;
  category?: string;
}

// Static background images in the same order as your slides
const staticImages = [
  "/images/blog/gzebi.png",
  "/images/blog/solar.png",
  "/images/blog/concrete.png",
  "/images/blog/arali-karieri.png",
  "/images/blog/gas.png",
  "/images/features/slider.png",
];

const HeroDynamic: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const { i18n } = useTranslation();
  const locale = i18n.language;

  useEffect(() => {
    console.log("Current locale in HeroDynamic:", locale);
    fetch(`/api/globals/hero?locale=${locale}`)
      .then((res) => res.json())
      .then((data) => setSlides(data.slides || []));
  }, [locale]);

  useEffect(() => {
    if (!isPaused && slides.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  if (!slides.length) return <div>Loading...</div>;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-[length:120%] bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentSlide === index
                ? "animate-backgroundZoom opacity-100"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${staticImages[index]}')`,
              zIndex: currentSlide === index ? 10 : 0,
              animationPlayState:
                currentSlide === index && isPaused ? "paused" : "running",
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 text-white sm:px-10 lg:px-50">
        <div className="mx-auto w-full max-w-screen-xl">
          <h1
            key={currentSlide}
            className="translate-y-[-20px] animate-slideDown text-4xl font-bold uppercase leading-tight tracking-wide opacity-0 sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl"
          >
            {slides[currentSlide].title}
          </h1>

          <p
            key={currentSlide + "-p"}
            className="mt-6 max-w-3xl animate-slideInRightSlow text-sm leading-relaxed text-white/80 md:text-sm"
          >
            {slides[currentSlide].description}
          </p>

          {slides[currentSlide].buttonText && slides[currentSlide].link && (
            <Link href={slides[currentSlide].link}>
              <button
                key={currentSlide + "-button"}
                className="lg:text-1xl mt-10 animate-slideInRightDelay rounded-md bg-primary px-12 py-1 font-thin text-white opacity-0 hover:bg-primary/80"
              >
                {slides[currentSlide].buttonText}
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Pause Button */}
      <div className="absolute bottom-4 right-4 z-50 flex items-center justify-center">
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className="border-1 group relative flex h-16 w-16 items-center justify-center rounded-full border-white bg-transparent transition-colors hover:bg-white"
          aria-label="Pause/Play Slideshow"
        >
          <svg
            key={currentSlide}
            className="pointer-events-none absolute left-0 top-0 h-full w-full -rotate-90 transform"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="white"
              strokeWidth="4"
              fill="transparent"
              strokeDasharray="282.743"
              strokeDashoffset="282.743"
              className={!isPaused ? "animate-progress" : ""}
            />
          </svg>
          {isPaused ? (
            // Play icon
            <svg
              className="h-6 w-6 text-white group-hover:text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="5,3 19,10 5,17" />
            </svg>
          ) : (
            // Pause icon
            <svg
              className="h-6 w-6 text-white group-hover:text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="3" width="4" height="14" />
              <rect x="12" y="3" width="4" height="14" />
            </svg>
          )}
        </button>
      </div>

      {/* Category Tabs */}
      <div className="absolute bottom-10 z-20 w-full">
        <div className="flex justify-center py-10">
          <div className="flex w-full justify-center" ref={containerRef}>
            {slides.map((slide, index) => (
              <button
                key={`cat-${index}`}
                ref={(el: HTMLButtonElement | null) => {
                  buttonsRef.current[index] = el;
                }}
                onClick={() => setCurrentSlide(index)}
                className={`relative cursor-pointer whitespace-nowrap px-2 py-4 text-[10px] text-white transition-all before:absolute before:right-0 before:top-1/2 before:h-6
                  before:w-px before:-translate-y-1/2 before:bg-white/30 sm:px-3 sm:text-xs md:px-4 md:text-sm
                  ${index === slides.length - 1 ? "before:hidden" : ""}
                  ${index === 0 ? "pl-0" : ""}
                `}
                style={{
                  transition: "font-variation-settings 0.5s ease",
                  fontVariationSettings:
                    currentSlide === index ? "'wght' 700" : "'wght' 50",
                }}
              >
                <span>{slide.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDynamic;
