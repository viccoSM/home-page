import React from 'react';
import Link from "next/link";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import CardArticle from "@/components/CardArticle";

const LatestArticle = (props) => {
  const articles = useSelector((state) => state.stateHome.data["latest articles"])
  return (
    <div className='lg:container mx-auto py-6 space-y-6'>
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <h3 className='font-bold text-lg'>
            Latest Article
          </h3>
          <p className='text-gray-500'>So you can make better purchase decision</p>
        </div>
        <Link className='text-pink-500 flex items-center' href='/'>
          See More
          <FontAwesomeIcon icon={faChevronRight} className='ml-3'/>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-7">
        {articles.map((item, idx) => (
          <CardArticle key={idx} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default LatestArticle;