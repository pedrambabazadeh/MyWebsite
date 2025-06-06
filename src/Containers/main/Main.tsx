import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react'
//import Typewriter from 'typewriter-effect'
import './main.css'
import {NavBar, Themes, Social, DarkLight, AnalogClock, PhotoBack, LanguageChanger } from '../../Components'
import {Home, About, Resume, Contact} from '../../Containers'
import { myColors } from '../../Components/social-media/Social'
import { backColors } from '../../Components/dark-light/DarkLight'
import { FaBars, FaTimes} from 'react-icons/fa'
import { LanguageProvider } from "../../Hooks/LanguageContext";




const Main = () => {
 const [ mainColor, setMainColor] = useState<myColors>("Red"); 
 const [mainBack, setMainBack] = useState<backColors>("Dark");
 const [menu, setMenu] = useState<boolean>(false);
 
 const colorChanger = (mainColor : myColors) => {setMainColor(mainColor)};
 const backChanger = (backColor: backColors) => {setMainBack(backColor)};

 const toggleMenu = () => {
  setMenu(currrentMenu =>{
    return !currrentMenu;
  })
 }

  return (
  <LanguageProvider>
   <BrowserRouter>
    <div className='main' data-back={mainBack} data-color={mainColor}>
              <PhotoBack color={mainColor} back={mainBack}/>
        <div className='main-left' data-back={mainBack} data-status={menu}>
             <div className='toggle toggle-menu' onClick={toggleMenu}>
               { menu? <FaTimes/> : <FaBars/>} 
              </div>
              <div className='left-container'>
                <NavBar color={mainColor} back={mainBack}/>
                <AnalogClock color={mainColor} back={mainBack}/>
                <Themes colorChange={colorChanger} back={mainBack}/>
                <DarkLight backChange={backChanger} back={mainBack}/>
                <LanguageChanger/>
                <Social color={mainColor} back={mainBack}/>
              </div>
        </div>
        <div className='main-right' data-color={mainColor}>
          <Routes>
            <Route index  element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/CV' element={<Resume />} />
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>

        </div>
    </div>
  </BrowserRouter>
  </LanguageProvider>
  )
}

export default Main