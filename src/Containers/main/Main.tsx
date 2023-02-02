import React, {useState, useEffect} from 'react'
//import Typewriter from 'typewriter-effect'
import './main.css'
import {NavBar, Themes, Social, DarkLight, AnalogClock} from '../../Components'
import { myColors } from '../../Components/social-media/Social'
import { backColors } from '../../Components/dark-light/DarkLight'



const Main = () => {
 const [ mainColor, setMainColor] = useState<myColors>("Red"); 
 const [mainBack, setMainBack] = useState<backColors>("Dark");
 
 const myCallBack = (passedData : myColors) => {setMainColor(passedData)};
 const backChanger = (backColor: backColors) => {setMainBack(backColor)};
 
  return (
    <div className='main'>
        <div className='main-left' data-back={mainBack}>
            <NavBar color={mainColor} />
            <Themes colorChange={myCallBack} />
            <DarkLight backChange={backChanger} />
            <AnalogClock color={mainColor} />
            <Social color={mainColor}/>
        </div>
        <div className='main-right' data-color={mainColor} data-back={mainBack}>
            <h1> Welcome to Pedram Babazadeh's Website</h1>
            <p>
                Hello world; <br/>
                My name is ("Pedrum");
            </p>
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