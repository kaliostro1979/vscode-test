import React from 'react';
import HeartIcon from './../../icons/HeartIcon';
import BagIcon from './../../icons/BagIcon';

const ShoppingPlaceholder = () => {
    return (
      <div className="ShoppingPlaceholder">
        <ul className="ShoppingPlaceholderList">
          <li className="ShoppingPlaceholderIcon">
            <HeartIcon />
          </li>
          <li className="ShoppingPlaceholderIcon">
            <BagIcon />
          </li>
        </ul>
      </div>
    )    
};

export default ShoppingPlaceholder;