import React from 'react'
import Products from './Products'
import Footer from '../../footer'
import FeaturedProducts from './FeaturedProducts'
import './Store.css'

function Store() {

  return (
    <div>
        <FeaturedProducts/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Store