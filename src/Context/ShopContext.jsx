
// import React, { createContext, useState } from "react";

// // Create the context
// export const ShopContext = createContext();

// // Create the context provider
// const ShopContextProvider = ({ children }) => {
//   const [all_products, setAllProducts] = useState([]);

//   return (
//     <ShopContext.Provider value={{ all_products, setAllProducts }}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

// src/Context/ShopContext.js



// import React, { createContext, useEffect, useState } from "react";

// export const ShopContext = createContext();

// export const ShopContextProvider = ({ children }) => {
//   const [all_products, setAllProducts] = useState([]);

//   return (
//     <ShopContext.Provider value={{ all_products, setAllProducts }}>
//       {children}
//     </ShopContext.Provider>
//   );
// };
// export default ShopContextProvider;


import React, { createContext, useEffect, useState } from "react";
// import productsData from "../components/Assets/all_product";
  // adjust path accordingly
import all_product from '../Components/Assets/all_product';


export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [all_products, setAllProducts] = useState([]);

  useEffect(() => {
    setAllProducts(all_product);
  }, []);

  return (
    <ShopContext.Provider value={{ all_products, setAllProducts }}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
