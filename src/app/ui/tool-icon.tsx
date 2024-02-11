import { BiLogoPostgresql } from 'react-icons/bi';
import { FaNode } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoDocker, IoLogoPython, IoLogoReact } from 'react-icons/io5';
import {
  SiAxios,
  SiCss3,
  SiExpress,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNextdotjs,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

interface Props {
  tool: string;
}

export default function ToolIcon({ tool }: Props) {
  const iconTool: Record<string, React.ElementType> = {
    HTML: SiHtml5,
    CSS: SiCss3,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    Python: IoLogoPython,
    React: IoLogoReact,
    TailwindCSS: SiTailwindcss,
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
    Git: SiGit,
    Axios: SiAxios,
  };

  const Icon = ({ tool }: Props) => {
    const IconTool = iconTool[tool];

    return <IconTool title={tool} className="text-orange-200 text-xl" />;
  };

  return <span>{iconTool[tool] ? <Icon tool={tool} /> : tool}</span>;
}
