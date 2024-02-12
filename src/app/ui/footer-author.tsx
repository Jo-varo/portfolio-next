import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import text from '../../text.json'

export default function AuthorFooter() {
  return (
    <div className="w-full text-center py-3 flex gap-2 items-center justify-center">
      <span className="mr-1">{text.english.footer.devBy}</span>
      <BadgeLink href="https://github.com/Jo-varo">
        <AiFillGithub className="text-xl" />
        Jo-Varo
      </BadgeLink>
      <BadgeLink href="https://www.linkedin.com/in/jovaro/">
        <AiFillLinkedin className="text-xl" />
        Jorge Vargas
      </BadgeLink>
    </div>
  );
}

interface BadgeLinkProps {
  href: string;
  children: React.ReactNode;
}

const BadgeLink = ({ href, children }: BadgeLinkProps) => {
  return (
    <a
      className="inline-block rounded-md px-2 py-1 text-black bg-[#d3d3d3] transition-colors duration-300 hover:bg-[#353535] hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-50 focus:ring-offset-2 focus:ring-offset-gray-500"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center gap-1">{children}</div>
    </a>
  );
};
