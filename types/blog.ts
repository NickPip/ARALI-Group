export type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  _id: number;
  mainImage: string;
  title: string;
  metadata: string;
  category?: string;
  date?: string;
  location?: string;
  duration?: string;
  roadLength?: string;
  materials?: string[];
  equipment?: string[];
  achievements?: string[];
};
