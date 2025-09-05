export interface Project {
    id: number;
    title: string;
    description: string[];
    results: string[] | undefined;
    conclusion: string;
    images: string[];
  }

export interface Thumbnail {
  id: number;
  title: string;
  description: string;
  image: string;
}