import React, { EffectCallback, useEffect, useState } from 'react'
import './play-game.css'

interface square {
  left: number,
  top: number
}

const PlayGame = () => {

  const [squarePositions, setSquarePositions] = useState<square[]>([]);

  useEffect(() => {
    const container = document.querySelector('.rectangle') as HTMLElement | null;

    const containerWidth = container?.offsetWidth;
    const containerHeight = container?.offsetHeight;

    const newSquarePositions : square[] = Array.from({ length: 8 }, () => {
      const left = Math.random() * (containerWidth? containerWidth - 25 : 0); 
      const top = Math.random() * (containerHeight? containerHeight - 25 : 0); 
      return { left, top };
    });

    setSquarePositions(newSquarePositions);
  } , []);

  return (
    <div>
      <div className="rectangle">
        {squarePositions.map((square, index) =>{
          
          return (<div className="square-player" style={{top: square.top, left: square.left}}> </div>);
        })}
      </div>
    </div>
  )
}

export default PlayGame