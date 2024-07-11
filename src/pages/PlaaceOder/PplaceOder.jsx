import React from 'react'
import './PlaceOder.css'
import {  useContext} from "react";
import { Context } from '../../context/Context';

const PplaceOder = () => {
  const{getTotalAmount} = useContext(Context);
  return (
    <form className="palce-oder">
      <div className="place-oder-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fileds">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address"/>
        <input type="text" placeholder="Street"/>
        <div className="multi-fileds">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fileds">
          <input type="text" placeholder="Pin code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-oder-right">
      <div className='cart-total'>
          <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
              </div>
            </div>

        <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PplaceOder
