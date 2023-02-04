import React from 'react'
import { backColors } from '../dark-light/DarkLight'
import { myColors } from '../social-media/Social'
import './navbar.css'

interface NavProps {
  color : myColors;
  back: backColors
}
const NavBar = (props:NavProps) => {
  return (
    <ul className='menu' data-color={props.color} data-back={props.back}>
                <li> Home </li>
                <li> About Me </li>
                <li> Resume </li>
                <li> Contact Me </li>
                <li> Play A Game</li>
                <li> Change Design</li>
            </ul>
  )
}

export default NavBar