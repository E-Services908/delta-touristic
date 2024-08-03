// IconBar.js
import React from 'react';
import './IconBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHotel, faRectangleList, faUtensils, faShoppingCart, faTree, faHospital, faMuseum, faUmbrellaBeach, faTint, faBinoculars, faShip } from '@fortawesome/free-solid-svg-icons';

function IconBar({ setSearchCategory }) {
  const categories = [
    { id: 'SearchAll', icon: faHouse, text: 'Where to?' },
    { id: 'Hotels', icon: faHotel, text: 'Stay somewhere great' },
    { id: 'Hospitals', icon: faHospital, text: 'Stay Safe and Healthy' },
    { id: 'Supermarkets', icon: faRectangleList, text: 'Do something fun' },
    { id: 'Museum', icon: faMuseum, text: 'Museum' },
    { id: 'Restaurants', icon: faUtensils, text: 'Find places to eat' },
    { id: 'Parks', icon: faTree, text: 'Explore places to Enjoy' },
    { id: 'Malls', icon: faShoppingCart, text: 'Wear Thing You Want' },
    { id: 'Cruise', icon: faShip, text: 'Cruise' },
    { id: 'Beach', icon: faUmbrellaBeach, text: 'Beach' },
    { id: 'Falls', icon: faTint, text: 'Falls' },
    { id: 'Safari', icon: faBinoculars, text: 'Safari' },
  ];
  return (
    <div className="icon-bar">
      {categories.map((category) => (
        <div
          key={category.id}
          className="icon"
          onClick={() => setSearchCategory(category.id)} // Pass the category id, not text
        >
          <FontAwesomeIcon icon={category.icon} />
          <span className={`icon-${category.id}`} />
          <span className="icon-text">{category.id}</span>
        </div>
      ))}
    </div>
  );
}

export default IconBar;
