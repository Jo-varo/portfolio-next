import React from 'react';
import { Project } from '../types';
import ToolIcon from './tool-icon';
import ProjectButton from './project-button';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const { name, description, links, tools, image, imageDescription } = project;

  return (
    <article
      className="rounded-lg overflow-hidden border border-gray-700 hover:backdrop-contrast-75 animate-blurred-fade-in"
      style={{ animationDelay: `${index * 600 + 450}ms` }}
    >
      <img
        src={image}
        alt={imageDescription}
        className="aspect-video w-full bg-green-800 block"
      />
      <div className="px-4">
        <div className="my-2">
          <h3 className="text-center font-bold text-xl">{name}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
        <footer className="project-footer flex items-center justify-between border-t border-gray-600 py-2">
          <div className="tools flex gap-[0.375rem] grow flex-wrap">
            {tools?.map((tool, i) => (
              <ToolIcon key={i} tool={tool} />
            ))}
          </div>
          {links && (
            <div className="buttons flex gap-2">
              {links.live && <ProjectButton href={links.live} text="demo" />}
              {links.repo && <ProjectButton href={links.repo} text="repo" />}
            </div>
          )}
        </footer>
      </div>
    </article>
  );
}
