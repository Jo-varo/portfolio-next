import { BiLogoPostgresql } from 'react-icons/bi';
import { FaNode } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoDocker, IoLogoPython, IoLogoReact } from 'react-icons/io5';
import {
  SiApollographql,
  SiAxios,
  SiBootstrap,
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
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiZod,
  SiAngular,
  SiDjango,
  SiSequelize
} from 'react-icons/si';

export const iconTool: Record<string, React.ElementType> = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: IoLogoPython,
  React: IoLogoReact,
  TailwindCSS: SiTailwindcss,
  Bootstrap: SiBootstrap,
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
  Zod: SiZod,
  'React Router': SiReactrouter,
  Apollo: SiApollographql,
  Angular: SiAngular,
  Django: SiDjango,
  Sequelize: SiSequelize
};
