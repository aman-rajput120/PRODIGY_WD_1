import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/Exploremenu/Exploremenu'
import FoodDisply from '../../component/Fooddisply/FoodDisply'
import AppDowwnload from '../../component/AppDownload/AppDowwnload'
const Home = () => {
  const[category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisply category={category}/>
      <AppDowwnload/>
    </div>
  )
}

export default Home
