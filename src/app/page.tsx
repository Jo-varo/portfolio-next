import Link from 'next/link';
import ProjectList from './ui/projects/project-list';
import TitleShine from './ui/title';
import text from '../text.json';

export default function HomePage() {
  return (
    <main>
      <h1 className="text-center mt-5 mb-0 md:my-12">
        <TitleShine>{text.en.pages.home.title}</TitleShine>
      </h1>
      <ProjectList />
      <div className="flex justify-end mt-2 -mb-7 text-lg text-black">
        <Link href="/projects" className="bold underline">
          Go to projects
        </Link>
      </div>
    </main>
  );
}
