import React from 'react';
import { Layout } from '../Layout/index';
import { Hero } from '../component/organisms/Hero/index';
import { Projects } from '../component/organisms/Projects/index';
import { Technologies } from '../component/organisms/Technologies/index';
const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Technologies />
        <Projects />
      </Layout>

    </>
  );
};

export default Home;