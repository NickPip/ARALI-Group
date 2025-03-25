"use client";

import { useState, useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";

const slides = [
  {
    image: "/images/blog/truck-1-arali.png",
    title: "Leading the Way in Road Construction",
    description:
      "With over 20 years of experience and more than 12,000 km of roads built and rehabilitated, Arali stands as a leader in Georgia's infrastructure development. Our projects combine speed, quality, and European-standard technology.",
    buttonText: "Explore Our Road Projects",
  },
  {
    image: "/images/blog/feature4.jpg",
    title: "Transforming Ideas Into Iconic Structures",
    description:
      "From the initial sketches to the final finishing touches, our expert team ensures every project is completed on time, within budget, and above expectations—combining modern technology with trusted craftsmanship.",
    buttonText: "Learn more",
  },
  {
    image: "/images/features/slider.png",
    title: "Leading the Way in Mining Infrastructure",
    description:
      "We offer comprehensive mining services including mine management, production, infrastructure construction, maintenance, and contract mining. Our highly-skilled professionals are equipped to handle the most complex ventures with efficiency and precision.",
    buttonText: "Learn more about our Mining markets",
  },
  {
    image: "/images/blog/truck-1-arali.png",

    title: "MINING MARKETS",
    description:
      "Kiewit specializes in mine management, production, infrastructure construction, maintenance and contract mining ventures, offering some of the most highly-skilled and experienced professionals in the industry.",
    buttonText: "Learn more about our Mining markets",
  },
];

const categories = [
  "Roadwork",
  "Development",
  "Concrete",
  "Quarries",
  "Gas",
  "Energy",
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });

  // Auto-slide: only run interval when NOT paused.
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // Update slider indicator position on slide change
  useEffect(() => {
    const currentButton = buttonsRef.current[currentSlide];
    const container = containerRef.current;
    if (currentButton && container) {
      const span = currentButton.querySelector("span");
      if (span) {
        const containerRect = container.getBoundingClientRect();
        const spanRect = span.getBoundingClientRect();
        setSliderStyle({
          width: spanRect.width,
          left: spanRect.left - containerRect.left,
        });
      }
    }
  }, [currentSlide]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      const currentButton = buttonsRef.current[currentSlide];
      const container = containerRef.current;
      if (currentButton && container) {
        const span = currentButton.querySelector("span");
        const containerRect = container.getBoundingClientRect();
        const spanRect = span.getBoundingClientRect();
        setSliderStyle({
          width: spanRect.width,
          left: spanRect.left - containerRect.left,
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  const handleCategoryClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={`${index}-${currentSlide === index ? "active" : "inactive"}`}
            className={`absolute inset-0 bg-[length:120%] bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentSlide === index
                ? "animate-backgroundZoom opacity-100"
                : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${slide.image}')`,
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
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 text-white md:px-16">
        <div className="mx-auto w-full max-w-screen-xl">
          <h1
            key={currentSlide} // this forces re-render per slide
            className="text-14xl animate-slideDown translate-y-[-20px] font-bold uppercase 
             leading-tight tracking-wider opacity-0 md:text-5xl 
             lg:text-9xl"
          >
            {slides[currentSlide].title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            {slides[currentSlide].description}
          </p>

          <button className="mt-10 rounded-md bg-primary px-24 py-1 font-semibold text-white  hover:bg-primary/80 lg:text-2xl">
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>

      {/* Pause Button */}
      <div className="absolute bottom-4 right-4 z-50 flex items-center justify-center">
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className="border-1 relative flex h-16 w-16 items-center 
                     justify-center rounded-full border-white bg-transparent
                     transition-colors hover:bg-white hover:text-black"
          aria-label="Pause/Play Slideshow"
        >
          {isPaused ? (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Play Icon */}
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Pause Icon */}
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Section with Sliding Indicator */}
      {/* Navigation Section with Sliding Indicator */}
      <div className="absolute bottom-10 z-20 w-full">
        <div className="flex justify-center py-10">
          <div
            ref={containerRef}
            className="relative flex space-x-12 text-xl uppercase text-white md:text-4xl"
          >
            {/* 3) Use `sliderStyle.top` and remove the old `top-[-8px]` class */}

            {categories.map((category, index) => (
              <button
                key={index}
                ref={(el) => (buttonsRef.current[index] = el)}
                onClick={() => handleCategoryClick(index)}
                className="relative cursor-pointer px-1 py-8 text-white transition-all"
                style={{
                  transition: "font-variation-settings 0.5s ease",
                  fontVariationSettings:
                    currentSlide === index ? "'wght' 700" : "'wght' 50",
                }}
              >
                <span>{category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
