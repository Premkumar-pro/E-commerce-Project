import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../items/Item'; // Make sure the path and name match the actual file

export const Popular = () => {
  return (
    <div className='Popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular_item'>
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};
