import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-content"

export default function Product(props) {
    const {id , productName , price , productImage} = props.data ;
    const { addToCard , cardItems} = useContext(ShopContext)

    const cardItemAmount = cardItems[id] //check the amount of the specific part by id
  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className='description'>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCard(id)}>
          Add To Cart {cardItemAmount > 0 && <>({cardItemAmount})</>}{/* if bigger that the 0 show the numbers of that */}
          </button>
    </div>
  )
}
