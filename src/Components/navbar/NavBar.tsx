import React from 'react'
import { Link } from 'react-router-dom';
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
                <li> 
                   <Link to='/About' style={{ display: "block", width:"100%" }}>
                    About Me
                   </Link> 
               </li> 
               <li> 
                   <Link to='/CV' style={{ display: "block", width:"100%" }}>
                    Resume
                   </Link>
              </li>
             {/* <li> 
                   <Link to='/Contact' style={{ display: "block", width:"100%" }}>
                    Contact me
                   </Link>
              </li> */}
            </ul>
  )
}

export default NavBar