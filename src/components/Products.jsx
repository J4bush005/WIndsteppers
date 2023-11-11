import React from 'react'
import Card from './Card'

const Products = ({type}) => {
    const shirts =[
        {
            id: 1,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Shirt",
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

    const sweats =[
        {
            id: 1,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Sweatshirt",
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
        <div className="">
            <h1>{type} Shirts</h1>
            <div className="col d-flex">
                {shirts.map(shirt=>(
                    <Card item={shirt} key={shirt.id}/>
                ))}
            </div>
        </div>
        <div className="">
            <h1>{type} Sweats</h1>
            <div className="col d-flex">
                {sweats.map(sweat=>(
                    <Card item={sweat} key={sweat.id}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products