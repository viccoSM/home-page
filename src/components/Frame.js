import React from 'react';

const Frame = ({height, text}) => (
  <div className='w-[970px] mx-auto py-4 space-y-5'>
    <div
      className='w-full bg-[#D8D8D8] flex items-center justify-center'
      style={{height}}
    >
      <h1>{text}</h1>
    </div>
  </div>
);

export default Frame;