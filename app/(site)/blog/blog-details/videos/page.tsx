"use client";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiX,
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import { toast } from "react-hot-toast";

const VideoGalleryPage = () => {
  const { t } = useTranslation();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [videoQuality, setVideoQuality] = useState("auto");
  const videoRef = useRef<HTMLIFrameElement>(null);

  const videoData = {
    thumbnail: "/images/blog/coverProject.png",
    youtubeId: "K1E2qySKtF0",
  };

  const handleVideoError = () => {
    setIsLoading(false);
    toast.error("Failed to load video. Please try again later.");
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      const message = isPlaying ? "pauseVideo" : "playVideo";
      videoRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: message }),
        "*",
      );
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const message = isMuted ? "unMute" : "mute";
      videoRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: message }),
        "*",
      );
      setIsMuted(!isMuted);
    }
  };

  const changePlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "setPlaybackRate",
          args: [rate],
        }),
        "*",
      );
      setPlaybackRate(rate);
    }
  };

  const changeQuality = (quality: string) => {
    if (videoRef.current) {
      videoRef.current.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "setPlaybackQuality",
          args: [quality],
        }),
        "*",
      );
      setVideoQuality(quality);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top gradient overlay for header visibility */}
      {isVideoOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/95 sm:bg-black/90"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            className="absolute right-2 top-2 p-2 text-white hover:text-gray-300 sm:right-4 sm:top-4 sm:p-0"
            style={{ zIndex: 10 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <FiX size={32} />
          </button>
          <div
            className="relative flex h-auto w-[100vw] max-w-5xl items-center justify-center sm:h-[75vh] sm:w-[90vw]"
            style={{ maxWidth: "100vw" }}
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
              </div>
            )}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                ref={videoRef}
                src={`https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1&enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}&controls=0&rel=0`}
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full rounded-b-lg"
                onLoad={handleVideoLoad}
                onError={handleVideoError}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-black/50 p-4 text-white">
              <div className="flex items-center space-x-4">
                <button onClick={togglePlay} className="hover:text-gray-300">
                  {isPlaying ? <FiPause size={24} /> : <FiPlay size={24} />}
                </button>
                <button onClick={toggleMute} className="hover:text-gray-300">
                  {isMuted ? <FiVolumeX size={24} /> : <FiVolume2 size={24} />}
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <select
                  value={playbackRate}
                  onChange={(e) => changePlaybackRate(Number(e.target.value))}
                  className="bg-transparent text-white"
                >
                  <option value={0.5}>0.5x</option>
                  <option value={1}>1x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>
                <select
                  value={videoQuality}
                  onChange={(e) => changeQuality(e.target.value)}
                  className="bg-transparent text-white"
                >
                  <option value="auto">Auto</option>
                  <option value="hd1080">1080p</option>
                  <option value="hd720">720p</option>
                  <option value="large">480p</option>
                  <option value="medium">360p</option>
                  <option value="small">240p</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <>
          <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
          <div className="container mx-auto px-4 py-8 pt-32">
            <Link
              href="/blog/blog-details"
              className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FiArrowLeft className="mr-2" />
              {t("common.back")}
            </Link>

            <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
              {t("blogTwo.videoGalleryTitle", "Video Gallery")}
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setIsVideoOpen(true)}
              >
                <Image
                  src={videoData.thumbnail}
                  alt="Video thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-black/50 p-4">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoGalleryPage;
