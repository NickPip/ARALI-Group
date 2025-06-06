import type { CollectionConfig } from "payload";

const ProjectDetails: CollectionConfig = {
  slug: "project-details",
  labels: { singular: "Project Detail", plural: "Project Details" },
  access: { read: () => true },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "location", "status"],
  },
  fields: [
    { name: "title", type: "text", required: true, localized: true },
    { name: "executor", type: "text", required: true, localized: true },
    { name: "location", type: "text", required: true, localized: true },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Road Construction", value: "road-construction" },
        { label: "Civil Construction", value: "civil-construction" },
        { label: "Concrete Production", value: "concrete-production" },
        { label: "Quarries", value: "quarries" },
        { label: "Gas Filling Station", value: "gas-station" },
        { label: "Energy", value: "energy" },
      ],
      localized: true,
    },
    {
      name: "status",
      type: "select",
      options: ["ongoing", "completed"],
      required: true,
    },
    { name: "coverImage", type: "upload", relationTo: "media", required: true },
    { name: "intro", type: "textarea", required: true, localized: true },
    { name: "details", type: "textarea", required: true, localized: true },
    { name: "section1", type: "textarea", required: true, localized: true },
    { name: "section2", type: "textarea", required: true, localized: true },
    { name: "section3", type: "textarea", required: true, localized: true },
    { name: "section4", type: "textarea", required: true, localized: true },
    { name: "section5", type: "textarea", required: true, localized: true },
    {
      name: "gallery",
      type: "array",
      fields: [{ name: "image", type: "upload", relationTo: "media" }],
    },
    {
      name: "videos",
      type: "array",
      fields: [
        { name: "videoUrl", type: "text", required: true },
        {
          name: "youtubeId",
          type: "text",
          admin: {
            description:
              "Paste only the 11-character YouTube video ID (e.g., dQw4w9WgXcQ) for best reliability.",
          },
        },
        { name: "title", type: "text" },
        {
          name: "thumbnail",
          type: "upload",
          relationTo: "media",
          admin: {
            description: "Optional: Upload a custom thumbnail for this video.",
          },
        },
      ],
    },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "position", type: "number", defaultValue: 0 },
    { name: "completionDate", type: "date" },
    { name: "client", type: "text", localized: true },
    { name: "projectValue", type: "text", localized: true },
    { name: "duration", type: "text", localized: true },
  ],
};

export default ProjectDetails;
