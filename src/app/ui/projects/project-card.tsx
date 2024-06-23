import React from 'react';
import { Project } from '../../types';
import ToolIcon from './tool-icon';
import ButtonShine from './project-button-shine';
import { FiGithub } from 'react-icons/fi';
import { TbWorld } from 'react-icons/tb';
import Image from 'next/image';
import ProjectCardText from './project-card-text';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const { name, description, links, tools, image, imageDescription } = project;

  return (
    <article
      className="rounded-lg overflow-hidden border bg-black shadow-md border-gray-800 hover:border-gray-600 transition-[box-shadow,border-color] duration-300 animate-blurred-fade-in hover:shadow-gray-800 h-full flex flex-col justify-between"
      style={{ animationDelay: `${index * 300 + 450}ms` }}
    >
      <div>
        <div className="relative aspect-video w-full bg-[linear-gradient(110deg,#2d2d2d,45%,#5a5a5a,55%,#2d2d2d)] bg-[length:300%_100%] animate-background-shine block border-b border-gray-800">
          <Image
            src={image}
            alt={imageDescription}
            style={{ objectFit: 'cover' }}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          />
        </div>
        <ProjectCardText
          name={name}
          description={description}
          className="px-2 md:px-4"
        />
      </div>
      <footer className="project-footer flex items-center justify-between border-t border-gray-600 py-2 gap-1 mx-2 md:mx-4">
        <div className="tools flex gap-1 md:gap-[0.375rem] grow flex-wrap">
          {tools?.map((tool, i) => (
            <ToolIcon key={i} tool={tool} />
          ))}
        </div>
        {links && (
          <div className="buttons flex gap-2">
            {links.repo && (
              <ButtonShine href={links.repo}>
                Repo
                <FiGithub className="text-[18px]" />
              </ButtonShine>
            )}
            {links.live && (
              <ButtonShine href={links.live}>
                Demo
                <TbWorld className="text-[18px]" />
              </ButtonShine>
            )}
          </div>
        )}
      </footer>
    </article>
  );
}
