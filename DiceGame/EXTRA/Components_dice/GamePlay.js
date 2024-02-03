
import Total from './Total'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
const GamePlay=()=> {
  const [score,setScore] = useState(0);
  const [SelectNum,setSelectNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
   
  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random()*(max-min)+min)
};

const roleDice = () => {
    if(!SelectNum) return;
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice ((prev)=> randomNumber);

    if(SelectNum===randomNumber)
    {
      setScore((prev)=>prev+randomNumber);
    }else{
      setScore((prev)=>prev-2);
    }
    setSelectNum(undefined);
}



  return (
   
    <Selector>
       <div className='top'>
        <Total score={score}/>
        <NumberSelector SelectNum={SelectNum} setSelectNum={setSelectNum}/>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        </div>
    </Selector>
   
  )
}

export default GamePlay;

const Selector = styled.div`
padding-top: 10px;
.top{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
`
