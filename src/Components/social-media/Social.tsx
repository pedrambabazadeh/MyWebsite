import React, {} from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { backColors } from '../dark-light/DarkLight';
import './social.css'
export type myColors = "Blue" | "Red" | "Green"| "Yellow" ;
interface socialProps {
  color : myColors;
  back: backColors
}

const Social = (props : socialProps) => {
  return (
    <div className='social'>
    <ul className='social-ul' /*</div>data-color={props.color} data-back={props.back}*/>
        <li className='social-li' title='GitHub' data-represent='GitHub'>
           <a href="http://github.com/pedrambabazadeh" ><FaGithub /> </a>
        </li>
        <li className='social-li' title='LinkedIn' data-represent='Linkedin'>
           <a href="http://linkedin.com/in/pedram-babazadeh"> <FaLinkedin/></a>
        </li>
        <li className='social-li' title='Facebook' data-represent='Facebook'>
           <a href="http://facebook.com/pedram.babazadeh1996"> <FaFacebook/></a>
        </li>
        <li className='social-li' title='Facebook' data-represent='Facebook'>
           <a href="http://instagram.com/pedrumbabazadeh"> <FaInstagram/></a>
        </li>
    </ul>
</div>
  )
}

export default Social