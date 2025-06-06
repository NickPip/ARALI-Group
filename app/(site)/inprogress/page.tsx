"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BlogItem from "@/components/Blog/BlogItem";

interface CompletedProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    url: string;
  };
  slug: string;
  completionDate: string;
  location: string;
  client: string;
  projectValue: string;
  duration: string;
}

export default function CompletedPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [completedProjects, setCompletedProjects] = useState<
    CompletedProject[]
  >([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchInprogressProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api/inprogress?locale=${i18n.language}&limit=12&sort=position`,
        );
        const data = await response.json();
        setCompletedProjects(data.docs);
      } catch (error) {
        console.error("Error fetching in progress projects:", error);
      }
    };
    fetchInprogressProjects();
  }, [i18n.language]);

  const filteredProjects = completedProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      {/* Header Background Overlay - Always visible for header items */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
      <div className="container mx-auto flex flex-col items-center px-4 pb-12 pt-32">
        <h1 className="mb-2 text-center text-5xl font-extrabold tracking-tight text-black">
          {t("inprogress.title", "In Progress Projects")}
        </h1>
        <p className="mb-8 max-w-2xl text-center text-lg text-black">
          {t(
            "inprogress.description",
            "View our ongoing projects and achievements.",
          )}
        </p>
        {/* Margin between header and content */}
        <div className="my-8 flex w-full justify-center">
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder={t(
                "inprogress.searchPlaceholder",
                "Search projects...",
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {/* Results Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-16 flex flex-col items-center">
            <svg
              className="mb-4 h-16 w-16 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35"
              />
            </svg>
            <p className="text-xl text-gray-500">
              {t("inprogress.noResults", "No in progress projects found.")}
            </p>
          </div>
        ) : (
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="rounded-2xl bg-white shadow-lg transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900"
              >
                <BlogItem
                  blog={{
                    _id: parseInt(project.id),
                    mainImage: project.image.url,
                    title: project.title,
                    metadata: project.description,
                    location: project.location,
                    path: `/inprogress/${project.slug}`,
                  }}
                  index={index}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
