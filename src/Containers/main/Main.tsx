import React, {useState} from 'react'
//import Typewriter from 'typewriter-effect'
import './main.css'
import {NavBar, Themes, Social, DarkLight, AnalogClock} from '../../Components'
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
  setMenu(!menu)
 }
 
  return (
    <div className='main'>

        <div className='main-left' data-back={mainBack}>
             <div className='toggle' onClick={toggleMenu}>
                <FaCaretLeft/>
              </div>
            <NavBar color={mainColor} back={mainBack}/>
            <Themes colorChange={myCallBack} back={mainBack}/>
            <DarkLight backChange={backChanger} back={mainBack}/>
            <AnalogClock color={mainColor} back={mainBack}/>
            <Social color={mainColor} back={mainBack}/>
        </div>
        <div className='main-right' data-color={mainColor} data-back={mainBack}>
          <div className='right-container'>
            <h1> Welcome to Pedram Babazadeh's Website</h1>
            <p>
                Hello world; <br/>
                My name is ("Pedrum");
            </p>
        </div>    
        </div>
       {/*} <Typewriter
        onInit={(writer) => {
            writer.typeString("Hello world")
            .pauseFor(1500)
            .deleteAll()
            .typeString("my name is pedrum")
            .start();
        }} /> */}
    </div>
  )
}

export default Main