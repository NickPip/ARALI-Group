export type Author = {
  name: string;
  image: string;
  designation: string;
};

export interface Blog {
  _id: number;
  mainImage: string;
  title: string | { en: string; ge: string };
  metadata: string | { en: string; ge: string };
  category?: string;
  date?: string;
  location: string | { en: string; ge: string };
  duration?: string;
  roadLength?: string;
  materials?: string[];
  equipment?: string[];
  achievements?: string[];
  path?: string;
}
