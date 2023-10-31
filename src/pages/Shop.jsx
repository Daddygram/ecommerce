import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/newcollections/NewCollections'
import NewsLetter from '../components/newsletter/NewsLetter'

const Shop = () => {
  return (
    <div className='main-container'>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop