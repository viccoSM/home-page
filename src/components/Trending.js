import React from 'react';
import {useSelector} from "react-redux";
import CardEditor from "@/components/CardEditor";

const Trending = (props) => {
  const editors = useSelector((state) => state.stateHome.data["editor's choice"])
  return (
    <div className='lg:container mx-auto py-6'>
      <div className="space-y-1">
        <h3 className='font-bold text-lg'>
          Trending this week
        </h3>
        <p className='text-gray-500'>See our weekly most reviewed products</p>
      </div>
      <div className="py-4 flex justify-between gap-6">
        {editors?.map((item, idx) => (
          <CardEditor key={idx} item={item} type='popular'/>
        ))}
      </div>
    </div>
  );
}
export default Trending;