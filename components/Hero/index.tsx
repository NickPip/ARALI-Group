"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

export default function HeroCarousel() {
  const { t } = useTranslation();

  const slides = useMemo(
    () => [
      {
        image: "/images/blog/gzebi.png",
        title: t("carousel.slide1.title"),
        description: t("carousel.slide1.description"),
        buttonText: t("carousel.slide1.buttonText"),
        link: "/road-construction",
      },
      {
        image: "/images/blog/solar.png",
        title: t("carousel.slide2.title"),
        description: t("carousel.slide2.description"),
        buttonText: t("carousel.slide2.buttonText"),
        link: "/solar",
      },
      {
        image: "/images/blog/concrete.png",
        title: t("carousel.slide3.title"),
        description: t("carousel.slide3.description"),
        buttonText: t("carousel.slide3.buttonText"),
        link: "/concrete-production",
      },
      {
        image: "/images/blog/truck-1-arali.png",
        title: t("carousel.slide4.title"),
        description: t("carousel.slide4.description"),
        buttonText: t("carousel.slide4.buttonText"),
        link: "/quarries",
      },
      {
        image: "/images/blog/gas.png",
        title: t("carousel.slide5.title"),
        description: t("carousel.slide5.description"),
        buttonText: t("carousel.slide5.buttonText"),
        link: "/gas-station",
      },
      {
        image: "/images/features/slider.png",
        title: t("carousel.slide6.title"),
        description: t("carousel.slide6.description"),
        buttonText: t("carousel.slide6.buttonText"),
        link: "/buildings",
      },
    ],
    [t],
  );

  const categories = [
    t("menu.roadConstruction"),
    t("menu.energy"),
    t("menu.concreteProduction"),
    t("menu.quarries"),
    t("menu.gasFillingStation"),
    t("menu.civilConstruction"),
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isPaused, currentSlide, slides.length]);

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

  useEffect(() => {
    const handleResize = () => {
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
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  const handleCategoryClick = (index: number) => {
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
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 text-white sm:px-10 lg:px-50">
        <div className="mx-auto w-full max-w-screen-xl">
          <h1
            key={currentSlide}
            className="animate-slideDown translate-y-[-20px] text-4xl font-bold uppercase leading-tight tracking-wide opacity-0 sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-9xl"
          >
            {slides[currentSlide].title}
          </h1>

          <p
            key={currentSlide + "-p"}
            className="animate-slideInRightSlow mt-6 max-w-3xl text-sm leading-relaxed text-white/80 md:text-sm"
          >
            {slides[currentSlide].description}
          </p>

          <Link href={slides[currentSlide].link}>
            <button
              key={currentSlide + "-button"}
              className="animate-slideInRightDelay lg:text-1xl mt-10 rounded-md bg-primary px-12 py-1 font-thin text-white opacity-0 hover:bg-primary/80"
            >
              {slides[currentSlide].buttonText}
            </button>
          </Link>
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
            <svg
              className="h-8 w-8 text-white transition-colors duration-300 group-hover:text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg
              className="h-8 w-8 text-white transition-colors duration-300 group-hover:text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </button>
      </div>

      {/* Category Tabs */}
      <div className="absolute bottom-10 z-20 w-full">
        <div className="flex justify-center py-10">
          <div className="flex w-full justify-center" ref={containerRef}>
            {categories.map((category, index) => (
              <button
                key={`cat-${index}`}
                ref={(el) => (buttonsRef.current[index] = el)}
                onClick={() => handleCategoryClick(index)}
                className={`relative cursor-pointer px-4 py-8 text-sm text-white opacity-0 transition-all md:text-base animate-fade-right-delay-${index + 1}
                before:absolute before:right-0 before:top-1/2 before:h-8 before:w-px before:-translate-y-1/2 before:bg-white/30
                ${index === categories.length - 1 ? "before:hidden" : ""}
                ${index === 0 ? "pl-0" : ""}
              `}
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
