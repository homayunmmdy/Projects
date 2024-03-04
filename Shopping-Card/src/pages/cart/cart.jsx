import React , {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from "../../context/shop-content"
import  CartItem  from './cart-item'
import './cart.css'

import { useNavigate } from 'react-router-dom'

export default function Cart  () {
  const {cardItems , getToatalAmount} = useContext(ShopContext)
  const totalAmount= getToatalAmount()

  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div>
        <h1>Your Card Item</h1>
      </div>
      <div className='CartItem'>
      {PRODUCTS.map((product) => {
         if (cardItems[product.id] !== 0 ) {
          return <CartItem data={product}/>
        }
      })}
        
      </div>
{totalAmount > 0 ?
      <div className="checkout">
        <p>Subtotal : ${totalAmount}</p>
        <button onClick={() => navigate('/')}> Continue Shopping</button>
        <button>Check out</button>
      </div>
  : <h1>Your Card is empty</h1> }
    </div>
  )
}

