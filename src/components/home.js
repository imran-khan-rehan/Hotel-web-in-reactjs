import React from 'react'
import './home.css'
import image1 from '../assets/img_2.jpg.webp'
import Imagewithdetail from './imagewithdetail.js'
import Headingwithborder from './headingwithborder.js'
export default function home() {
  const price = 600.0223;
  return (
    <>
    
      <div className='homecontainer'>
        <Headingwithborder content={"Our Room"}/>
        <div className='homecollection'>
          <Imagewithdetail image={image1} price={price} name={"standard room"} />
          <Imagewithdetail image={image1} price={price} name={"standard room"} />
          <Imagewithdetail image={image1} price={price} name={"standard room"} />
          <Imagewithdetail image={image1} price={price} name={"standard room"} />
          <Imagewithdetail image={image1} price={price} name={"standard room"} />
          <Imagewithdetail image={image1} price={price} name={"standard room"} />
        </div>
      </div>
    </>
  )
}
