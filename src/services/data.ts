import axios, { AxiosResponse } from 'axios';
import { ProjectsResponse } from '../app/types';
import { API_KEY, API_URL } from '@/config/variables';

export async function getProjects() {
  try {
    const {
      data: { projects },
    }: AxiosResponse<ProjectsResponse> = await axios.get(API_URL, {
      headers: {
        'x-access-key': API_KEY,
        'x-bin-meta': 'false',
      },
    });

    return projects.map((project) => ({
      ...project,
      createdAt: new Date(project.createdAt),
      updatedAt: new Date(project.updatedAt),
    }));
  } catch (error) {
    throw new Error('error at fetching');
  }
}

const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
