import React from 'react';
import CardEditor from "@/components/CardEditor";
import {useSelector} from "react-redux";

const ProductPopular = (props) => {
  const editors = useSelector((state) => state.stateHome.data["editor's choice"])
  return (
    <div className='w-full bg-[#FDDAE0] py-8'>
      <div className='lg:container mx-auto grid grid-cols-5 space-x-8 items-center'>
        <div className='space-y-6 flex flex-col col-span-2'>
          <h2 className='text-2xl font-bold'>
            Looking for products that are just simply perfect for you
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam atque consequatur
            expedita
            in
            modi officia perspiciatis quam saepe. Accusamus alias, dolorem enim eveniet ipsam qui quia sapiente
            unde.</p>
          <button className="bg-[#DC294F] text-white px-5 py-3 self-end">
            See My Matches
          </button>
        </div>

        <div className='flex space-x-6 justify-between col-span-3'>
          {editors?.filter((item, idx) => idx < 3).map((item, idx) => (
            <CardEditor key={idx} item={item} type='product'/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPopular;