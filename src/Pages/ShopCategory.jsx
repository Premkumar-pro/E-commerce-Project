
import React from 'react';
import all_product from '../Components/Assets/all_product';
import Item from '../Components/items/Item';
import './CSS/ShopCategory.css'; // ✅ Match exact file name

// import './CSS/Shopcategory.css';

const Shopcategory = ({ category }) => {
  const filteredProducts = all_product.filter(product => product.category === category);

  return (
    <div className="shop-category">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)}'s Collection</h2>
      <div className="shop-category-products">
        {filteredProducts.map(product => (
          <Item
            key={product.id}
            image={product.image}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Shopcategory;
