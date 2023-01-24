import React from 'react'
import { myColors } from '../social-media/Social'
import './navbar.css'

interface NavProps {
  color : myColors
}
const NavBar = (props:NavProps) => {
  return (
    <ul className='menu' data-color={props.color}>
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