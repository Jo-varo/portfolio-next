import Link from 'next/link';
import ProjectList from './ui/project-list';
import TitleShine from './ui/title';

export default function Home() {
  return (
    <>
      <h1 className="text-center mt-5">
        <TitleShine>Portafolio de Jovaro</TitleShine>
      </h1>

      <div className="flex justify-between mt-10 text-lg">
        <span>List of Projects</span>
        <Link href="/projects" className="bold underline">
          Go to projects
        </Link>
      </div>
      <ProjectList />
    </>
  );
}
