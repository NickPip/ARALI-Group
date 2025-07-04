"use client";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/,
  );
  return match ? match[1] : null;
}

const VideoHeroSectionDynamic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const { t } = useTranslation();

  useEffect(() => {
    fetch("/api/globals/video-hero")
      .then((res) => res.json())
      .then((data) => setVideoUrl(data.videoUrl || ""));
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const videoId = getYouTubeId(videoUrl);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "";
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&controls=0`
    : "";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white py-4 md:py-8">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden">
        <div className="animate-blob absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-100 opacity-30 mix-blend-multiply blur-3xl filter"></div>
        <div className="animate-blob animation-delay-2000 absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-100 opacity-30 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="relative mb-6 inline-block text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            <span className="relative text-primary">
              {t("videoHero.title")}
            </span>
            <div className="absolute -bottom-2 left-0 h-0.5 w-0 transform bg-primary transition-all duration-1000 ease-out group-hover:w-full"></div>
          </h2>
          <div className="mx-auto max-w-2xl animate-fade-in text-base text-gray-600 md:text-lg">
            <span className="relative inline-block">
              {t("videoHero.subtitle")}
              <div className="absolute -bottom-1 left-0 h-px w-full scale-x-0 transform bg-primary/30 transition-transform duration-700 ease-out group-hover:scale-x-100"></div>
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative aspect-video transform overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
            {/* Video container with gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-[2px]">
              <div className="absolute inset-0 rounded-2xl bg-white">
                {!isPlaying ? (
                  <div
                    className="group relative h-full w-full cursor-pointer"
                    onClick={handlePlay}
                  >
                    {/* Thumbnail Image from Payload videoUrl */}
                    {thumbnail ? (
                      <img
                        src={thumbnail}
                        alt="Video thumbnail"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        No video
                      </div>
                    )}
                    {/* Custom Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-all duration-300 group-hover:bg-opacity-40">
                      <div className="flex h-20 w-20 transform items-center justify-center rounded-full bg-white bg-opacity-90 transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
                        <div className="ml-1 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-blue-600 border-t-transparent"></div>
                      </div>
                    </div>
                    {/* Video Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h3 className="text-xl font-semibold text-white md:text-2xl">
                        Watch Our Story
                      </h3>
                    </div>
                  </div>
                ) : embedUrl ? (
                  <iframe
                    className="absolute left-0 top-0 h-full w-full rounded-2xl"
                    src={embedUrl}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    No video
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroSectionDynamic;
