import React from 'react'
import './imagewithdetail.css'
export default function Imagewithdetail({image,price,name="imran"}) {
  return (
    <div className='container'>
      <div className='image'>
      <img src={image} alt='room image'></img>
      </div>
      <div className='detail'>
      <span id='name'>{name}</span>
      <span id='price'>$ {price.toFixed(2)} / per night</span>
      </div>
    </div>
  )
}
