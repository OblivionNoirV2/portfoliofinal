import { useState, useEffect, useRef, useContext } from 'react';
import { themeContext } from './context';
import { Link, Routes, Route } from "react-router-dom";

import './App.css'
import './themes.css'

const themeNames: string[] = [
  'Sherbet', //default
  'Winter Lights', //very light
  'Goth', //very dark, reds
  'Singularity', //Neon, greys
  'Mint', //pastel greens 
];

const ThemeSelection = () =>{ //sets current them on change
  return(
    <select>
      <option>placeholder 1</option>
    </select>
  );
};

function getCurrentTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

};



interface terminalStringProps {
  randNum: number; 
  text: string; 
  linkTarget: string;
};




const App = () =>  {
  const [previousTheme, setPreviousTheme] = useState('sherbet')
  const {theme, setTheme} = useContext(themeContext);

  useEffect(()=>{
    document.body.classList.remove(previousTheme); //remove prev
    console.log(`theme removed:  ${previousTheme}`);
    document.body.classList.add(theme); //set new
    setPreviousTheme(theme); //prev for the next cycle is now the current one
    console.log(`theme set to: ${theme}`);

  }, [theme]);



  return (
    <main>
      <div>
      <ThemeSelection/>
      </div>
    </main>
  );
};

export default App;
