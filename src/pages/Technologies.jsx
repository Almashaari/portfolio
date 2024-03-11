import React from 'react';
import { Layout } from '../Layout/index';
import {
  bootstrap,
  codeigniter,
  css,
  express,
  git,
  github,
  html,
  javascript,
  nextjs,
  nodejs,
  npm,
  php,
  postman,
  react,
  tailwind,
  vscode,
  vuejs,
} from '../assets/images';

const Technologies = () => {
  return (
    <Layout>
      <main >
        <section>
          <h1 >
            my tech stack
          </h1>
          <p >
            Technologies I&apos;ve been working with recently
          </p>
        </section>
        <section >
          <img src={html} title="HTML" alt="HTML" />
          <img src={css} title="CSS" alt="CSS" />
          <img src={javascript} title="JavaScript" alt="Javascript" />
          <img src={react} title="React" alt="React" />
          <img src={nextjs} title="Next.js" alt="Next.js" />
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
          <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
          <img src={vuejs} title="Vue.js" alt="Vue.js" />
          <img src={nodejs} title="Node.js" alt="Node.js" />
          <img src={express} title="Express.js" alt="Express.js" />
          <img src={php} title="PHP" alt="PHP" />
          <img src={codeigniter} title="Codeigniter" alt="Codeigniter" />
        </section>
        <section>
          <h1 >
            tools
          </h1>
        </section>
        <section >
          <img
            src={vscode}
            title="Visual Studio Code"
            alt="Visual Studio Code"
          />
          <img src={git} title="Git" alt="Git" />
          <img src={github} title="Github" alt="Github" />
          <img src={npm} title="NPM" alt="NPM" />
          <img src={postman} title="Postman" alt="Postman" />
        </section>
      </main>
    </Layout>
  );
};

export default Technologies;