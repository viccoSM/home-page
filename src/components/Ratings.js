import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Ratings = ({rating, countStar = 5}) => {
  return [...Array(countStar).keys()].map((item) => (
    <FontAwesomeIcon key={item} icon={faStar} className={item < Math.round(rating) ? 'text-pink-500' : 'text-gray-500' } />
  ))
};

export default Ratings;