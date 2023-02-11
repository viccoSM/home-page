import React from 'react';

const CardArticle = ({item}) => (
  <div className='w-full space-y-4'>
    <img className='object-cover rounded-xl' src={item.image} alt=""/>
    <h2 className='font-bold text-xl'>
      {item.title}
    </h2>
    <p className='text-gray-500'>
      <b>{item.author} | {item.published_at}</b>
    </p>
  </div>
);

export default CardArticle;