import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react'
//import Typewriter from 'typewriter-effect'
import './main.css'
import {NavBar, Themes, Social, DarkLight, AnalogClock} from '../../Components'
import {Home, About, Resume, Contact} from '../../Containers'
import { myColors } from '../../Components/social-media/Social'
import { backColors } from '../../Components/dark-light/DarkLight'
import { FaCaretLeft } from 'react-icons/fa'




const Main = () => {
 const [ mainColor, setMainColor] = useState<myColors>("Red"); 
 const [mainBack, setMainBack] = useState<backColors>("Dark");
 const [menu, setMenu] = useState<boolean>(true);
 
 const myCallBack = (passedData : myColors) => {setMainColor(passedData)};
 const backChanger = (backColor: backColors) => {setMainBack(backColor)};

 const toggleMenu = () => {
  setMenu(currrentMenu =>{
    return !currrentMenu;
  })
 }
 
  return (

   <BrowserRouter>
    <div className='main' data-back={mainBack} data-color={mainColor}>

        <div className='main-left' data-back={mainBack} data-status={menu}>
             <div className='toggle' onClick={toggleMenu}>
                <FaCaretLeft/>
              </div>
              <div className='left-container'>  
                <NavBar color={mainColor} back={mainBack}/>
                <Themes colorChange={myCallBack} back={mainBack}/>
                <DarkLight backChange={backChanger} back={mainBack}/>
                <AnalogClock color={mainColor} back={mainBack}/>
                <Social color={mainColor} back={mainBack}/>
              </div>
        </div> 
        <div className='main-right' data-color={mainColor}>
          <Routes>
            <Route path="/"  />
            <Route index element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/CV' element={<Resume />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>  
        </div>
    </div>
  </BrowserRouter> 
  )
}

export default Main