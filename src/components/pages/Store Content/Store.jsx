import React from 'react'
import Products from './Products'
import Footer from '../../footer'
import FeaturedProducts from './FeaturedProducts'
import Header from "../../header"
import './Store.css'


function Store() {

  return (
    <div>
      <Header/>
        <FeaturedProducts/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Store