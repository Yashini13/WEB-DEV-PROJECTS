import React from 'react'
import styled from 'styled-components';
const StartGame=({toggle}) =>{
  return (
   <>
    <Container>
      <div>
        <img src="images/dices1.png" alt='img'/>  
      </div> 
      <div >
      <h1>Dice Game</h1>
      <Button onClick={toggle}>Play Now</Button>
    </div>  
    </Container>  
   </>
  );
};

const Container= styled.div`
margin:0 auto;
max-width: 1180px;
display: flex;
height: 100vh;
align-items: center;
h1{
  font-size: 96px;
  white-space: nowrap;
}
`
const Button = styled.button`
color:white;
padding: 10px 18px;
background-color: black;
border-radius:5px;
min-width: 220px;
border:none;
font-size: 20px;
&:hover{
  background-color: gray;
}
`
export default StartGame;


