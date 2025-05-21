import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/popular/Popular'
import { Offers } from '../Components/offers/Offers'
import { NewCollections } from '../Components/newcollections/NewCollections'
import { NewsLetter } from '../Components/newsletter/NewsLetter'



export const Shop = () => {
  return (
    <div>
    <Hero />
    <Popular />
    <Offers />
    <NewCollections />
    <NewsLetter />
    {/* <Footer /> */}
    </div>
  )
}

export default Shop