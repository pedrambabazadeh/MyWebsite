import React, { EffectCallback, useEffect, useState } from 'react'
import './play-game.css'

interface square {
  left: number,
  top: number
}

const PlayGame = () => {

  const [squarePositions, setSquarePositions] = useState<square[]>([]);
  const [mousePosition, setMousePosition] = useState<object>({x: 0 , y: 0});

  useEffect(() => {
    const container = document.querySelector('.rectangle') as HTMLElement | null;

    const containerWidth = container?.offsetWidth;
    const containerHeight = container?.offsetHeight;

    const newSquarePositions : square[] = Array.from({ length: 55 }, () => {
      const left = Math.random() * (containerWidth? containerWidth - 29  : 0); 
      const top = Math.random() * (containerHeight? containerHeight - 29 : 0); 
      return { left, top };
    });
    setSquarePositions(newSquarePositions);
  } , []);


    const handleMouseMove = (event : React.MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
      
    };


  return (
    <div onMouseMove={handleMouseMove}>
      <div className="rectangle">
        {squarePositions.map((square, index) =>{
          
          return (<div className="square-player" style={{top: square.top, left: square.left}}> </div>);
        })}
      </div>
    </div>
  )
}

export default PlayGame