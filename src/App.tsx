import { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from './context';
import { Link, Routes, Route } from "react-router-dom";

import './App.css'

const ThemeSelection = () =>{
  return(
    <select>
      <option>placeholder 1</option>
    </select>
  );
};

function GetCurrentTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

};


//for the terminal gimmick 
function GetRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min); 
};

interface TerminalStringProps {
  randNum: number; 
  text: string; 
  linkTarget: string;
};

const TerminalString: React.FC<TerminalStringProps> = ({ randNum, text, linkTarget}) =>{
  const [currentTime, setCurrentTime] = useState<string>('');
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(()=>{
    const timerInterval = setInterval(() => {
      setCurrentTime(GetCurrentTime());

    }, 1000)
    return () => clearInterval(timerInterval);
  })

  return (
    <li>
      <Link to={linkTarget} className={`${theme}`}>

      </Link>

    </li>
  )
}

const App = () =>  {

  return (
    <>
    <ThemeSelection/>
    </>
  );
};

export default App;
