import React from 'react'
import './Home.css'
import Product from './Product'



function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Hustlers/PC_Hero/1500x600_V3._CB583195623_.jpg' alt=''></img>
            <div className='home_row'>
                <Product id={1} title="The Lean Start Up" image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UF1000,1000_QL80_.jpg" price={19.99} rating={5}/>
                <Product id={2} title="Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal, Sensitive Skin, 125 ml Hydrating Face Wash with Niacinamide, Vitamin B5" image="https://m.media-amazon.com/images/I/31K5tBuI3ZL._SX300_SY300_QL70_FMwebp_.jpg" price={26.45} rating={3}/>
                
            </div>
            <div className='home_row'>
            <Product id={3} title="InstaCuppa Portable Blender for Smoothie, Milk Shakes, Crushing Ice and Juice" image="https://m.media-amazon.com/images/I/51Rsjx5byPL._SL1500_.jpg" price={15.908} rating={4}/>
            <Product id={4} title="RYLAN Bathroom Cleaning Brush Bathroom Cleaning Accessories Tiles Cleaning Brush" image="https://m.media-amazon.com/images/I/41vWmN1rvmL.jpg" price={86.99} rating={3}/>
            <Product id={5} title="Apple iPhone 15 Pro Max (512 GB) - White Titanium" image="https://m.media-amazon.com/images/I/81c50PU+lpL._SL1500_.jpg" price={999.99} rating={2}/>
           
                
            </div>
            <div className='home_row'>
            <Product id={6} title="Samsung 80 cm (32 inches) HD Ready Smart LED TV UA32T4380AKXXL (Glossy Black)" image="https://m.media-amazon.com/images/I/71S8iUPW9bL._SL1500_.jpg" price={1500.99} rating={3}/>
                
            </div>
        </div>
    </div>
  )
}

export default Home