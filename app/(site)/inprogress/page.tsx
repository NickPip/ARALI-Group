"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BlogItem from "@/components/Blog/BlogItem";

interface InProgressProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: {
    url: string;
  };
  slug: string;
  location: string;
}

export default function InProgressPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [inProgressProjects, setInProgressProjects] = useState<
    InProgressProject[]
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
    const fetchInProgressProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}/api/inprogress?locale=${i18n.language}&limit=12&sort=position`,
        );
        const data = await response.json();
        // Clean up slugs by removing leading slashes
        const cleanedProjects = data.docs.map((project: InProgressProject) => ({
          ...project,
          slug: project.slug.replace(/^\/+/, ""),
        }));
        setInProgressProjects(cleanedProjects);
      } catch (error) {
        console.error("Error fetching in progress projects:", error);
      }
    };

    fetchInProgressProjects();
  }, [i18n.language]);

  const filteredProjects = inProgressProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      {/* Header Background Overlay */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-32 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />

      <div className="container mx-auto px-4 pb-12 pt-32">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
          {t("inprogress.title", "In Progress Projects")}
        </h1>

        <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
          {t(
            "inprogress.description",
            "View our ongoing projects and achievements.",
          )}
        </p>

        {/* Search Bar */}
        <div className="mb-12">
          <input
            type="text"
            placeholder={t(
              "inprogress.searchPlaceholder",
              "Search projects...",
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />
        </div>

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
                    metadata: project.subtitle,
                    location: project.location,
                    path: `/projects/${project.slug}`,
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
