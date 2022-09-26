import React, { useEffect } from 'react';
import Banner from '../components/banner';

const Home = ({ dimensions }) => {
  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, [dimensions.width, dimensions.height]);

  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
