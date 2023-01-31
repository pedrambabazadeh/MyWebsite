import React, { useState } from 'react'
import { myColors } from '../social-media/Social'
import './analogClock.css'

interface AnalogClockProps {
  color : myColors
}

const AnalogClock = (props: AnalogClockProps) => {

  const [currentMinute, setCurrentMinute] = useState<number>();
  const [currentSecond, setCurrentSecond] = useState<number>();
  const [currentHour, setCurrentHour] = useState<number>();

  function timing():void{
  const myTime = new Date();
  const myHour = myTime.getHours();
  setCurrentHour (myHour * 30);
  const myMinutes = myTime.getMinutes();
  const mySeconds = myTime.getSeconds();
  const timeCalc = (anyTime:number )  => {
    return anyTime * 6
  }
setCurrentMinute(timeCalc(myMinutes));
setCurrentSecond(timeCalc(mySeconds));
}

setInterval(timing, 1000);



  return (
    <div className='clock-container' data-color={props.color}>
        <svg viewBox='-50 -50 100 110'> 
          <circle  r="50" fill="transparent" className='clock-circle' strokeWidth="3" pathLength="60" strokeDasharray=".1 .9" strokeDashoffset=".05">
          </circle>
          <circle r="50" fill="transparent" className='clock-circle' stroke={props.color} strokeWidth="4" pathLength="12" strokeDasharray=".1 .9" strokeDashoffset=".025">
          </circle>
          <circle r="1"  className='clock-circle'>
          </circle>
          <line x1="0" y1="2" x2="0" y2="-35" className='clock-pointer clock-minutes' style={{transform : `rotate(${currentMinute}deg)`}}></line>
          <line x1="0" y1="2" x2="0" y2="-25" className='clock-pointer clock-hours' style={{transform : `rotate(${currentHour}deg)`}}></line>
          <line x1="0" y1="8" x2="0" y2="-45" className='clock-pointer clock-seconds'  style={{transform : `rotate(${currentSecond}deg)`}}></line>
        </svg>
    </div>
  )
}

export default AnalogClock