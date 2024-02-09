import { BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { FaNode } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import {
  IoLogoCss3,
  IoLogoDocker,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoPython,
  IoLogoReact,
} from 'react-icons/io5';
import {
  SiExpress,
  SiGit,
  SiGraphql,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
} from 'react-icons/si';

interface Props {
  tool: string;
}

export default function ToolIcon({ tool }: Props) {
  const iconTool: Record<string, React.ElementType> = {
    HTML: IoLogoHtml5,
    CSS: IoLogoCss3,
    JavaScript: IoLogoJavascript,
    TypeScript: BiLogoTypescript,
    Python: IoLogoPython,
    React: IoLogoReact,
    Tailwind: SiTailwindcss,
    Node: FaNode,
    MongoDB: SiMongodb,
    TanStack: SiReactquery,
    Express: SiExpress,
    Moongoose: SiMongoose,
    NextJS: SiNextdotjs,
    NestJS: SiNestjs,
    Docker: IoLogoDocker,
    GraphQL: SiGraphql,
    PostgreSQL: BiLogoPostgresql,
    MySQL: GrMysql,
    Git: SiGit
  };

  const Icon = ({ tool }: Props) => {
    const IconTool = iconTool[tool];

    return (
      <IconTool
        title={tool}
        size={20}
        color="#ffb73b"
      />
    );
  };

  return <span>{iconTool[tool] ? <Icon tool={tool} /> : tool}</span>;
}
