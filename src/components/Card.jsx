import React from 'react'

const Card = ({item}) => {
  return (
    <div className='container-fluid'>
    <div className='row d-flex'>
        <div className="col">
            <img src={item.img} alt="" className='img-fluid' style={{width:"100px"}}/>
        </div>
    </div>
    <div className="">
            <div className="">
                <h2>{item.title}</h2>
                <div className="">
                    <h3>${item.price}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card