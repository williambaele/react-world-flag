import React from 'react';
import Countries from '../components/Countries';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div class="container h-screen mx-auto">
      <Navigation/>
      <Countries/>

    </div>
  );
};

export default Home;
