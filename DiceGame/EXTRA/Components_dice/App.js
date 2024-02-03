import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import StartGame from './Components/StartGame'
import {useState} from 'react';
import GamePlay from './Components/GamePlay';
const Button = styled.button`
background-color: black;
color: white;
padding:10px;

`
function App() {
  const[isStarted,setStarted] = useState(false);
  const toggleGamePlay =()=>{
    setStarted((prev)=>!prev);
  };
  return (
    <>
    {/* <StartGame/> */}
     {isStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    </>
  );
}

export default App;
