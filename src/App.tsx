import { useState, useEffect, useRef } from 'react';
import { ThemeContext } from './context';

import './App.css'

const ThemeSelection =() =>{
  return(
    <select>
      <option>placeholder 1</option>
    </select>
  );
};

function GetCurrentTime(){

}

//for the terminal gimmick 
function GetRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min); 
}

const App = () =>  {

  return (
    <>
    <ThemeSelection/>
    </>
  );
};

export default App;
