import React from 'react';
import Ratings from "@/components/Ratings";

const CardEditor = ({item, type}) => {
  return (
    <div className='w-full h-full'>
      {type === 'editor' && (
        <div className="flex justify-center space-x-2 h-[50px] z-20 relative">
          <img className='w-[62px] h-[62px] rounded-full object-cover' src={item.product.image} alt=""/>
          <div>
            <p className='font-bold'>{item.editor}</p>
            <p className='text-gray-500'>{item.role}</p>
          </div>
        </div>
      )}
      <div className="border rounded-lg w-full h-full z-10 relative bg-white">
        <img className='w-full h-[250px] object-fill' src={item.product.image} alt=""/>
        <div className="p-2 space-y-2">
          <div className='flex space-x-2 items-center'>
            <p>{Math.round(item.product.rating)}</p>
            <span className='flex'>
              <Ratings rating={item.product.rating}/>
            </span>
            <p className='text-gray-500'>(7)</p>
          </div>
          <h3 className='text-xl font-bold'>{item.product.name}</h3>
          <p>{item.product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardEditor;