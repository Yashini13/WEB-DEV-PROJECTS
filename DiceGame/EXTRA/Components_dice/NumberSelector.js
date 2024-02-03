import React from 'react'
import styled from 'styled-components'
const NumberSelector=({SelectNum,setSelectNum})=> {
   const arrNum = [1,2,3,4,5,6]; 
  
  return (
   <>
    
      <NumSelector>
      <div className='flex'>
      {
        arrNum.map((value,i)=>(
            <Box isSelected={value===SelectNum} key={i}  onClick={() => setSelectNum(value)}>{value}</Box>
        ))
      }
       </div>
       <p>Select Number</p>
      </NumSelector>
     
   
   </>
  );
};
// we use anonamous function in Onclick so as to pass value in setSelectNum useSate 
export default NumberSelector;

const NumSelector = styled.div`
flex-direction: column;
.flex{
    display: flex;
    gap:24px
}
p{
    font-size: 24px;
    font-weight: 700px;
   
}
`

const Box = styled.div`
height:65px;
width: 65px;
border: 3px solid black;
border-style: groove;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=> (props.isSelected ? "black":"white")};
color: ${(props)=> (props.isSelected ? "white":"black")};
`;