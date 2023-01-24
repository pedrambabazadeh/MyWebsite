import React, {useState, useEffect} from 'react'
import Typewriter from 'typewriter-effect'
import './main.css'
import {NavBar, Themes, Social, DarkLight} from '../../Components'
import { myColors } from '../../Components/social-media/Social'



const Main = () => {
 const [ mainColor, setMainColor] = useState<myColors>("Red"); 
 
 const myCallBack = (passedData : myColors) => {setMainColor(passedData)};
 
 
  return (
    <div className='main'>
        <div className='main-left'>
            <NavBar color={mainColor} />
            <Themes colorChange={myCallBack} />
            <DarkLight />
            <Social color={mainColor}/>
        </div>
        <div className='main-right' data-color={mainColor}>
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