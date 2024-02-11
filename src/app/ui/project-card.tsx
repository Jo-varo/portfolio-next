import React from 'react';
import { Project } from '../types';
import ToolIcon from './tool-icon';
import ButtonShine from './project-button-shine';
import { FiGithub } from 'react-icons/fi';
import { TbWorld } from 'react-icons/tb';

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const { name, description, links, tools, image, imageDescription } = project;

  return (
    <article
      className="rounded-lg overflow-hidden border border-gray-800 hover:border-gray-600 transition-[colors,shadow] animate-blurred-fade-in shadow-md hover:shadow-gray-800 bg-black"
      style={{ animationDelay: `${index * 300 + 450}ms` }}
    >
      <img
        src={image}
        alt={imageDescription}
        className="aspect-video w-full bg-green-800 block border-b border-gray-800"
      />
      <div className="px-2 md:px-4">
        <div className="my-2">
          <h3 className="text-center font-bold text-xl text-orange-200">
            {name}
          </h3>
          <p className="text-gray-300 font-lato">{description}</p>
        </div>
        <footer className="project-footer flex items-center justify-between border-t border-gray-600 py-2 gap-1">
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
      </div>
    </article>
  );
}
