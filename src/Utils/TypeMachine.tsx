import React, {useEffect, useState} from 'react'

export const TypeMachine = ({entry, speed} : {entry: string; speed: number;}) => {
  const  [currentText, setCurrentText] = useState<string>('');

  useEffect(() => {
    setCurrentText('');
    let index = 0;
   const typingInterval = setInterval(() => {
      if (index < entry.length) {
        const newChar = entry[index];
        setCurrentText(prev => prev + newChar);
        console.log(index, entry[index]);
        index+= 1;
      }
    }, speed);
    return () => {
      clearInterval(typingInterval);
    }

  }, [entry, speed]);



  return (
    <div>
      <p>{currentText}</p>
    </div>
  )
}