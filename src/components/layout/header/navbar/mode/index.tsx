import React, { useState } from 'react'
import { MdOutlineLightMode, MdOutlineModeNight } from "react-icons/md";
interface ThemModeProps extends React.PropsWithChildren{}

export const ThemMode:React.FunctionComponent<ThemModeProps> =(props):JSX.Element=>{
    const [toggle,setToggle] = useState(true)//true:light mode
    
    const darkModeHandler = ()=>{
      if(localStorage.theme === "dark" ||  (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)){
          document.documentElement.className = "dark";
          setToggle(false);
        }else{
          document.documentElement.className = "";
        }
    }

    const toggleHandler = ()=>{
      setToggle(!toggle);
      toggle ? (localStorage.setItem("theme",'dark')): (localStorage.setItem("theme",'light'))
      darkModeHandler();
    }
    return(<>
      <div onClick={toggleHandler} >
        {!toggle ? (
          <MdOutlineLightMode/>
          ):(
            <MdOutlineModeNight/>
            )
        }
      </div>
    </>)
}