import { getProjects } from '../../services/data';
import { Project } from '../types';
import ProjectList from '../ui/projects/project-list';

export default async function Projects() {
  const projects: Project[] = await getProjects();
  return (
    <main>
      <ProjectList projects={projects}/>
    </main>
  );
}
