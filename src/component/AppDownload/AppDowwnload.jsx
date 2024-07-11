import React from "react"
import './AppDownload.css'
import { assets } from "../../assets/assets/assets";
const AppDowwnload = ()=>{
    return(
        <div className="appdownload" id="appdownload">
            <p>Fpr Better Experience Download <br /> Tomato App</p>
            <div className="appdownload-plateform">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}
export default AppDowwnload;