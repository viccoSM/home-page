import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useSelector} from "react-redux";
import CardReview from "@/components/CardReview";

const LatestReview = (props) => {
  const reviews = useSelector((state) => state.stateHome.data["latest review"])
  return (
    <div className='lg:container mx-auto py-6 space-y-6'>
      <div className="space-y-1 w-full">
        <h3 className='font-bold text-lg'>
          Latest Article
        </h3>
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex justify-between">
            <p className='text-gray-500'>So you can make better purchase decision</p>
            <Link className='text-pink-500 flex items-center' href='/'>
              See More
              <FontAwesomeIcon icon={faChevronRight} className='ml-3'/>
            </Link>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 space-x-14'>
        {reviews.map((item, idx) => (
          <CardReview key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LatestReview;