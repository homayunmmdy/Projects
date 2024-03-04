import React, { createContext, useState } from 'react'
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null)

const getDefualtCard = () =>{ //Numers we used in the how many items you take
  let cart = {};
  for(let i = 1 ; i < PRODUCTS.length +1 ; i++){
    cart[i] = 0 //start from which number
  }
  return cart
}

export const ShopContextProvider = (props) => {
  const [cardItems , setCardItems] = useState(getDefualtCard())
  
  const getToatalAmount =  () => {
    let totalAmount = 0;
    for (const item in cardItems){
      if(cardItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cardItems[item] * itemInfo.price
      }
    }

    return totalAmount
  }

  const addToCard = (itemId) => {
    setCardItems((prev) => ({...prev , [itemId]: prev[itemId] + 1})); //This the item id  or key 1 : 2 value 
  }

  const removeFromCart = (itemId) => {
    setCardItems((prev) => ({...prev , [itemId]: prev[itemId] - 1})); //worked as same as top
  }

  const updateCartItemCount = (newAmount , itemId) =>{
    setCardItems((prev) => ({...prev , [itemId]: newAmount}))
  }
  const contextValue = { cardItems , addToCard , removeFromCart , updateCartItemCount ,getToatalAmount}


  return (
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>)
}
