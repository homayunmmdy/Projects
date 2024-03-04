import React , {useContext} from 'react'
import { ShopContext } from "../../context/shop-content"


export default function CartItem(props) {
    const {id , productName , price , productImage} = props.data ;
    const {cardItems , addToCard , removeFromCart , updateCartItemCount} = useContext(ShopContext)

  return (
    <div className='cartItem'>
        <img src={productImage} alt="" />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cardItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value) , id)}/>
                <button onClick={() => addToCard(id)}> + </button>
            </div>
        </div>

    </div>
  )
}
