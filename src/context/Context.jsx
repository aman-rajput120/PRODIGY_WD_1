import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets/assets";
export const Context = createContext(null)

export const ContextProvider = (props)=>{

    const[cartItems,setCartItem] = useState({});
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            console.log(itemId);
            setCartItem((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeToCart = (itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let totalInfo = food_list.find((product)=>product._id===item);
                totalAmount += totalInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItem,
        addToCart,
        removeToCart,
        getTotalAmount
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;