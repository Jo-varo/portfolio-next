export interface Project {
  id: number;
  name: Description;
  createdAt: Date;
  updatedAt: Date;
  description: Description;
  imageDescription: string;
  image: string;
  links?: Links;
  tools?: string[];
}

interface Description {
  en: string;
  es: string;
}

export interface Links {
  repo?: string;
  live?: string;
}

export interface Tool {
  id: number;
  name: string;
}

export interface User {
  id: number;
  user: string;
  pass: string;
}

export interface ProjectsResponse {
  projects: ProjectResponse[];
}

export interface ProjectResponse {
  id: number;
  name: Description;
  description: Description;
  createdAt: string;
  updatedAt: string;
  image: string;
  imageDescription: string;
  tools: string[];
  links: Links;
}
