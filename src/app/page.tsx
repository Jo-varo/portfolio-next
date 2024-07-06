import Link from 'next/link';
import ProjectList from './ui/projects/project-list';
import TitleShine from './ui/title';
import text from '../mocks/text.json';
import { Project } from './types';
import { getProjects } from '../services/data';

export default async function HomePage() {
  const projects: Project[] = await getProjects();

  return (
    <main>
      <h1 className="text-center mt-5 mb-0 md:my-12">
        <TitleShine>{text.en.pages.home.title}</TitleShine>
      </h1>
      <ProjectList projects={projects} />
      <div className="flex justify-end mt-2 -mb-7 text-lg text-black">
        <Link href="/projects" className="bold underline">
          Go to projects
        </Link>
      </div>
    </main>
  );
}
