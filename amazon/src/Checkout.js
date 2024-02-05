import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer';



function Checkout() {
    const [{basket},dispatch]=useStateValue();
    console.log(basket)
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <h2 className='checkout_title'>
                This is your Shopping Basket
            </h2>

            {basket.map(item=>(
                 <div className='checkout_product'>
                         <img src={item.image} alt=''></img>
                         <div className='checkout_productinfo'>
                             <p className='checkout_product_title'>{item.title}</p>
                             <p className='checkout_product_price'>
                                 <small>$</small>
                                 <strong>{item.price}</strong>
                             </p>
                             <div className='checkout_product_rating'>
                                 {Array(item.rating).fill()
                                 .map((_,i)=>(
                                 <p>⭐</p>
                                 ))}
                         
                             </div>
                             <button className='remove_basket'>
                                 Remove from Basket
                             </button>
         
                         </div>
                     </div>

            ))}

            
            
        </div>
        <div className='checkout_right'>
           <div className='subtotal'>
            <p> Subtotal ({basket?.length} items): <strong>$ {getBasketTotal(basket)}</strong></p>
            <small className='checkout_gift'>
                <input type='checkbox'/>This order contains a gift.
            </small>
            <button className='checkout_icon'>Proceed to Checkout</button>
           </div>

        </div>
    </div>
  )
}

export default Checkout