import type { CollectionConfig } from "payload";

const Completed: CollectionConfig = {
  slug: "completed",
  labels: { singular: "Completed Project", plural: "Completed Projects" },
  access: { read: () => true },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "image", "location"],
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Remove any leading slashes and 'completed/' prefix from slug
        if (data.slug) {
          data.slug = data.slug.replace(/^\/+/, "").replace(/^completed\//, "");
        }
        return data;
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true, localized: true },
    { name: "description", type: "textarea", localized: true },
    { name: "image", type: "upload", relationTo: "media" },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description:
          "Enter the slug without any slashes (e.g., 'test-project-2')",
      },
    },
    { name: "location", type: "text", required: true, localized: true },
  ],
};

export default Completed;
