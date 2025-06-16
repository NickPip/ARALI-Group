"use client";

import { useEffect, useState, use } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiX } from "react-icons/fi";

interface ProjectDetail {
  id: string;
  title: string;
  videos: Array<{
    url: string;
    videoUrl?: string;
    youtubeId?: string;
    title: string;
    thumbnail?: string | { url: string };
  }>;
}

function getYoutubeVideoId(url: string): string | null {
  if (!url) return null;
  // Match various YouTube URL formats
  const regExp =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function getYoutubeThumbnail(url: string): string {
  const videoId = getYoutubeVideoId(url);
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "/images/placeholder-video.jpg";
}

export default function ProjectVideosPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { t, i18n } = useTranslation();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api/project-details?where[slug][equals]=${slug}&locale=${i18n.language}`,
        );
        const data = await response.json();
        if (data.docs && data.docs.length > 0) {
          setProject(data.docs[0]);
        }
      } catch (error) {
        console.error("Error fetching project videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug, i18n.language]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Top gradient overlay for header visibility */}
      {isVideoOpen &&
      selectedVideo !== null &&
      project.videos[selectedVideo] ? (
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
            aria-label="Close video"
          >
            <FiX size={32} />
          </button>
          <div
            className="relative flex h-auto w-[100vw] max-w-5xl items-center justify-center sm:h-[75vh] sm:w-[90vw]"
            style={{ maxWidth: "100vw" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${
                  project.videos[selectedVideo].youtubeId?.trim() ||
                  getYoutubeVideoId(
                    project.videos[selectedVideo].videoUrl ||
                      project.videos[selectedVideo].url,
                  )
                }?autoplay=1&controls=0&rel=0`}
                title={project.videos[selectedVideo].title || "Video player"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full rounded-b-lg"
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <>
          <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
          <div className="container mx-auto px-4 py-8 pt-32">
            <Link
              href={`/projects/${slug}`}
              className="mb-8 inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <FiArrowLeft className="mr-2" />
              {t("common.back")}
            </Link>

            <h1 className="mb-8 text-3xl font-bold text-gray-800 dark:text-white">
              {t("blogSix.videoGalleryTitle", "Video Gallery")}
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => {
                    setSelectedVideo(index);
                    setIsVideoOpen(true);
                  }}
                >
                  <Image
                    src={
                      video.thumbnail &&
                      typeof video.thumbnail === "object" &&
                      "url" in video.thumbnail
                        ? video.thumbnail.url
                        : typeof video.thumbnail === "string" && video.thumbnail
                          ? video.thumbnail
                          : getYoutubeThumbnail(video.videoUrl || video.url)
                    }
                    alt={
                      video.title
                        ? `${project.title} - ${video.title} - Video thumbnail`
                        : `${project.title} - Video thumbnail`
                    }
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
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
