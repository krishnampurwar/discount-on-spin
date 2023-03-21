import React from "react";
import TopTheme from '../utils/TopTheme.png'
import BottomTheme from '../utils/BottomTheme.png'
import well from '../utils/well.png'
import LoginForm from "../components/loginForm/LoginForm";
import background from '../utils/background.png'
import style from './loginpage.css';
const LoginPage = () => {
  
    return (
        <>
        <div className="background">
        <div className="homecontainer"  >
            
            <img alt="img" className="topimg" src={TopTheme} />
            <img alt="img" className="bottomimg" src={BottomTheme} />
            <img alt="img" className="wellimgg" src={well}/>
               <LoginForm/>
        </div>
        </div>
        </>   
        
    )
}

export default LoginPage