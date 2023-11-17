import { useState, useEffect, useRef, useContext } from 'react';
import { themeContext } from './context';
import { Link, Routes, Route } from "react-router-dom";

import './App.css'
import './themes.css'

const themeNames: string[] = [
  'Sherbet', //default
  'Winter Lights', //very light
  'Void', //very dark
  'Singularity', //Neon, greys
  'Mint' //pastel greens 
];

const ThemeSelection = () =>{
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


//for the terminal gimmick 
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min); 
};

interface terminalStringProps {
  randNum: number; 
  text: string; 
  linkTarget: string;
};


const TerminalString: React.FC<terminalStringProps> = ({ randNum, text, linkTarget}) =>{

  const defaultUsername: string = "username";
  const [currentTime, setCurrentTime] = useState<string>(defaultUsername);
  const [username, setUsername] = useState<string>(defaultUsername);
  const [previousTheme, setPreviousTheme] = useState('sherbet')
  const {theme, setTheme} = useContext(themeContext);

  useEffect(()=>{
    const timerInterval = setInterval(() => {
      setCurrentTime(getCurrentTime());

    }, 1000)
    return () => clearInterval(timerInterval);
  })

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>){

    setUsername(event.target.value);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
  }

  useEffect(()=>{
    document.body.classList.remove(previousTheme); //remove prev
    console.log(`theme removed:  ${previousTheme}`);
    document.body.classList.add(theme); //set new
    setPreviousTheme(theme); //prev for the next cycle is now the current one
    console.log(`theme set to: ${theme}`);

  }, [theme]);

  
  return (

    <main className={`${theme}`}>
         <form onSubmit={handleSubmit}>
      <h1 className={`${theme}`}> 
        <input type= "text"  defaultValue='Enter username...'  onChange={handleUsernameChange}/>
      </h1>
      </form>
  <li>
    <div className='flex' >
      -&gt; % user{randNum}@{username === '' ? defaultUsername : username}'s PC [{currentTime}] [/roslyn_donahue_portfolio]
    </div>
    <Link to={linkTarget} className={`${theme}`}>
      test
  
    </Link>
  </li>
  </main>
)

};

const App = () =>  {
  const [generatedNumber, setGeneratedNumber] = useState<number>(10);

  useEffect(()=>{
    setGeneratedNumber(getRandomNumber(10, 99)); 
  }, [])

  return (
    <main>
      <div>
      <ThemeSelection/>
      </div>
          <TerminalString randNum={generatedNumber} text='about' linkTarget='/about'/>

    </main>

    
  );
};

export default App;
