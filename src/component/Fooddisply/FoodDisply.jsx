import React, { useContext } from 'react'
import './FoodDisply.css'
import { Context } from '../../context/Context'
import FoodItem from '../foodItem/FoodItem';
const FoodDisply = ({category}) => {
    const {food_list} = useContext(Context);
  return (
    <div className='food-display' id='food-display'> 
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>{
                    if(category==="All"||category===item.category){
                        return<FoodItem key={index} name={item.name}
                        price={item.price} discription={item.discription} image={item.image} Id={item._id}/>
                    }
                })
            }
        </div>
    </div>
  )
}

export default FoodDisply
