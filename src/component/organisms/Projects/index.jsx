import React from 'react';
import { projects } from '../../../data/index';
import { Card } from '../../molecules/Card/index';

export const Projects = () => {
  return (
    <main className="container mx-auto max-width pt-10 mb-20 mt-20">
      <section>
        <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize text-center">
          Projects
        </h1>
        <p className="text-xl text-dark-content md:text-1xl xl:text-2xl py-2 text-center">
          Things I&apos;ve built so far
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projects.map(
              ({
                title,
                image,
                description,
                techstack,
                previewLink,
                githubLink,
              }) => (
                <Card
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
};