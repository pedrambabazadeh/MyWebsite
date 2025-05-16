import React from 'react'
import { backColors } from '../dark-light/DarkLight'
import { myColors } from '../social-media/Social'
import './themes.css'

interface ThemesProps{
  colorChange(data: myColors):void; 
  back: backColors
}

const Themes = (props:ThemesProps) => {
  return (
    <div className='themes'>
    <ul className='themes-ul' data-back={props.back}>
        <li className='themes-li' title='Red' data-represent='red' onClick={()=>{props.colorChange('Red')}}></li>
        <li className='themes-li' title='Blue' data-represent='blue'  onClick={()=>{props.colorChange('Blue')}}></li>
        <li className='themes-li' title='Green' data-represent='green'  onClick={()=>{props.colorChange('Green')}}></li>
        <li className='themes-li' title='Pink' data-represent='pink'  onClick={()=>{props.colorChange('Pink')}}></li>
        <li className='themes-li' title='Yellow' data-represent='yellow'  onClick={()=>{props.colorChange('Yellow')}}></li>
        <li className='themes-li' title='Black and White' data-represent='bw'  onClick={()=>{props.colorChange('BW')}}></li>
    </ul>
</div>
  )
}

export default Themes