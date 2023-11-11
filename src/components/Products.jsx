import React from 'react'
import Card from './Card'

const Products = ({type}) => {
    const data =[
        {
            id: 1,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Uniform",
            isNew: true,
            price: 40
        },

        {
            id: 2,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            isNew: true,
            title: "Sweats",
            price: 40
        },

        {
            id: 3,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Backpack",
            isNew: true,
            price: 40
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Backpack",
            isNew: true,
            price: 40
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Backpack",
            isNew: true,
            price: 40
        },
    ]
  return (
    <div className=''>
        <div className="row">
            <h1>{type} Products</h1>
            <div className="col d-flex">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products