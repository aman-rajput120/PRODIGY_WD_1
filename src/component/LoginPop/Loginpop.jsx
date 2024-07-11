import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../assets/assets/assets';
const Loginpop = ({setShowLogin}) => {
    const[currState,setCurrState] = useState("Login");
  return (
    <div className='loginpop'>
      <form className='loginpop-container'>
        <div className="loginpop-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginpop-inputs">
            {currState==='Login'?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="passwword" placeholder='Password' required />
        </div>
        <button>{currState==='Sign Up'?"Create account":"Login"}</button>
        <div className='loginpop-condition'>
            <input type="checkbox" required />
            <p>By continuing, i agree to the term terms of use & privacy policy. </p>
        </div>
        {currState==="Login" 
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        : <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
    }
      </form>
    </div>
  )
}

export default Loginpop
