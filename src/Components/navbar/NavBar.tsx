import React from 'react'
import { Link } from 'react-router-dom';
import { Home } from '../../Containers';
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
                <li>
                   <Link to='/' style={{ display: "block", width:"100%" }}>
                    Home
                   </Link>
                
                </li>
                <li> <Link to='/About' style={{ display: "block", width:"100%" }}>
                    About Me
                   </Link> </li>
                <li> Resume </li>
                <li> Contact Me </li>
                <li> Play A Game</li>
                <li> Change Design</li>
            </ul>
  )
}

export default NavBar