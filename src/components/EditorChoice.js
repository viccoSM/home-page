import React from 'react';
import {useSelector} from "react-redux";
import CardEditor from "@/components/CardEditor";

const EditorChoice = () => {
  const editors = useSelector((state) => state.stateHome.data["editor's choice"])
  return (
    <div className='lg:container mx-auto py-6'>
      <div className="space-y-1">
        <h3 className='font-bold text-lg'>
          Editor's Choice
        </h3>
        <p className='text-gray-500'>Curated with love</p>
      </div>
      <div className="py-4 flex justify-between gap-6">
        {editors?.map((item, idx) => (
          <CardEditor key={idx} item={item} type='editor'/>
        ))}
      </div>
    </div>
  );
}

export default EditorChoice;