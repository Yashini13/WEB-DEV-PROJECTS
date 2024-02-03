import React,{useState,useEffect,useRef}from 'react'
import styled from 'styled-components'

const Use_ref = () => {
   const [userInput,setUserInput]=useState("");
   const count = useRef(0);

   useEffect (()=>{
    count.current = count.current+1;
   
   })
   const inputRef = useRef ();
    const changeBorder =()=>
    {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#82E0AA";
   }
    
     

  return (
    <>
    <Wraper>
     <div className='style'>
     <input type='text' ref= {inputRef} value={userInput} onChange={(e) => setUserInput(e.target.value)} ></input>
      <p>The number of comp renders are :{count.current}</p>
     <button onClick={changeBorder}>Submit</button>
     </div>
    </Wraper>
    </>
  )
}
const Wraper = styled.section`
.style{
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    margin-left:445px;
    margin-top: 300px;
}
` 
export default Use_ref;
