export interface Project {
  id: number;
  name: {
    'en': string;
    'es': string;
  };
  createdAt: Date;
  updatedAt: Date;
  description: {
    'en': string;
    'es': string;
  };
  imageDescription: string;
  image: string;
  links?: {
    repo?: string;
    live?: string;
  };
  tools?: string[];
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
