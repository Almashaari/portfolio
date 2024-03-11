import React from 'react';
import { Layout } from '../Layout/index';
import { Timeline } from '../component/molecules/Timeline/index';
const About = () => {
  return (
    <Layout>
      <main className="container mx-auto max-width pt-10 pb-20 mt-10">
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            about me
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            As a recent graduate holding a Bachelor degree
            in Computer Science Software Engineering from Multimedia University,
            I am deeply passionate about software development and excited to put my
            education and abilities to work on practical projects.
          </p>
        </section>
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            work experience
          </h1><Timeline
            position="Software Engineer Intern"
            company="Colus"
            location="CyberJaya"
            type="Intership"
            duration="Aug 2023 - Nov 2023"
          />
        </section>
        <section className="mt-6">
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            education
          </h1>
          <Timeline
            position="Bachelor degree, Computer Science"
            company="Multimedia University"
            location="CyberJaya"
            type="Full Time"
            duration="Nov 2019 - Nov 2023"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;