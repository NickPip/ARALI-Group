import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: {
    tokenExpiration: 10800, // 3 hours in seconds
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};
