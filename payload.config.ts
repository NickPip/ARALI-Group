// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const Hero = {
  slug: "hero",
  label: "Hero Section",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "slides",
      label: "Slides",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          type: "text",
          required: true,
          localized: true,
        },
        {
          name: "description",
          type: "textarea",
          localized: true,
        },
        {
          name: "buttonText",
          type: "text",
          localized: true,
        },
        {
          name: "link",
          type: "text",
        },
        {
          name: "category",
          type: "text",
          required: true,
          localized: true,
        },
      ],
    },
  ],
};

const FunFact = {
  slug: "fun-fact",
  label: "Fun Fact",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "completedProjects",
      type: "number",
      required: true,
      label: "Completed Projects",
    },
    {
      name: "partnerCompanies",
      type: "number",
      required: true,
      label: "Partner Companies",
    },
    {
      name: "ongoingProjects",
      type: "number",
      required: true,
      label: "Ongoing Projects",
    },
  ],
};

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  globals: [Hero, FunFact],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  localization: {
    locales: ["en", "ge"],
    defaultLocale: "en",
  },
});
