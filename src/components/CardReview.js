import React, {useState} from 'react';
import Ratings from "@/components/Ratings";

const CardReview = ({item}) => {
  const [limitStr, setLimitStr] = useState(100)
  return (
    <div className='flex flex-col'>
      <div className='border border-gray-300 p-4 rounded-xl space-y-4 relative z-10'>
        <div className="flex border-b border-b-gray-300 space-x-3 pb-5">
          <img className='w-[62px] h-[62px] rounded-full object-cover' src={item.product.image} alt=""/>
          <div>
            <h3 className='font-bold text-lg'>{item.product.name}</h3>
            <p className='text-gray-500'>{item.product.desc}</p>
          </div>
        </div>
        <div className="flex">
          <Ratings rating={item.star}/>
        </div>
        <p>{item.comment.length > limitStr
          ? (
            <span>{item.comment.substring(0, limitStr)}... <span className='text-pink-500 cursor-pointer' onClick={() => setLimitStr(item.comment.length)}>Read More</span></span>
          )
          : (
            <span>{item.comment} <span className='text-pink-500 cursor-pointer' onClick={() => setLimitStr(100)}>Read a Little</span></span>
          )
        }</p>
      </div>
      <div className="w-full flex items-center flex-col relative z-20 top-[-16px] space-y-3">
        <img className='w-[52px] h-[52px] rounded-full object-cover' src={item.product.image} alt=""/>
        <p className='font-bold'>
          {item.user}
        </p>
        <p className='text-gray-500'>
          {item.profile.map((item) => item + ' ')}
        </p>
      </div>
    </div>
  );
}

export default CardReview;