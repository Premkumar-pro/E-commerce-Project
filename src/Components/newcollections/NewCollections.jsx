import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../items/Item';


export const NewCollections = () => {
  return (
    <div class="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i) => {
                return (
                    <Item
                        key={i}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                )
            })}

        </div>
    </div>
  )
}
