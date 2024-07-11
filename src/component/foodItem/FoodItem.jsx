import React, { useContext, useEffect, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets/assets'
import { Context } from '../../context/Context';
const FoodItem = ({Id,name,discription,image,price}) => {
    const {cartItems,addToCart,removeToCart} = useContext(Context);
    return (
    <div className='food-item'>
      <div className="food-item-container">
        <img src={image} alt="" className="food-item-image" />
        { !cartItems[Id]
        ? <img className='add' onClick={()=>addToCart(Id)} src={assets.add_icon_white} alt="" />
            :<div className='food-item-counter'>
                  <img onClick={()=>removeToCart(Id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[Id]}</p>
                  <img onClick={()=>addToCart(Id)} src={assets.add_icon_green} alt="" />
            </div>  
        }
      </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-disc">
            {discription}
        </p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
