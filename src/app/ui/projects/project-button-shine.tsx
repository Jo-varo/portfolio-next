interface Props {
  children: React.ReactNode;
  href: string;
}

const ProjectButtonShine = ({ children, href }: Props) => {
  return (
    <a
      className="inline-flex h-10 animate-background-shine items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-gray-400 transition-[colors,shadow] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 gap-[0.1rem] shadow-md hover:shadow-zinc-700"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default ProjectButtonShine;
