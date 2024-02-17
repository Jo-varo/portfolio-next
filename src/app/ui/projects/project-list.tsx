import type { Project } from '../../types';
import ProjectCard from './project-card';
import { getProjects } from '../../lib/data';

export default async function ProjectList() {
  const projects: Project[] = await getProjects();

  return (
    <section className="rounded-2xl w-full bg-white/[0.06] hover:bg-white/[0.07] transition-colors duration-1000 mt-5 p-2 md:p-5 animate-pulse-fade-in grid grid-cols-[repeat(auto-fill,minmax(330px,_1fr))] gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} index={index} project={project} />
      ))}
    </section>
  );
}
