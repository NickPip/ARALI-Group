import type { CollectionConfig } from "payload";

const Inprogress: CollectionConfig = {
  slug: "inprogress",
  labels: { singular: "In Progress Project", plural: "In Progress Projects" },
  access: { read: () => true },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "image", "location"],
  },
  fields: [
    { name: "title", type: "text", required: true, localized: true },
    { name: "description", type: "textarea", localized: true },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "location", type: "text", required: true, localized: true },
  ],
};

export default Inprogress;
