import React from 'react';
import DemoNav from './navigation/DemoNav';
import PhotoNav from './navigation/PhotoNav';

const Page = (props) => {
  console.log('props', props);
  console.log('props.children', props.children);
  return (
    <div>
      <h1>Portfolio</h1>
      <DemoNav />
      <PhotoNav />
      {props.children}
    </div>
  );
};

export default Page;
