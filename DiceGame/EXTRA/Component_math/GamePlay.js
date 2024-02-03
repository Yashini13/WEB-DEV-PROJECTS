import React, { useState } from "react";
import styled from "styled-components";

const GamePlay = () => {
  const [num1, setnum1] = useState(generateRanNum());
  const [num2, setnum2] = useState(generateRanNum());
  const [operation, setoperation] = useState(generateRanOp());
  const [userIp, setuserIp] = useState("");
  const [isCorrect, setisCorrect] = useState(null);

  //generate function random number
  function generateRanNum() {
    return Math.floor(Math.random() * 10) + 1;
  }
  //generate function random op
  function generateRanOp() {
    const operation = ["+", "-", "*"];
    const randomOP = Math.floor(Math.random() * operation.length);
    return operation[randomOP];
  }
  //handle input change
  const handleInputChange = (e) => {
    setuserIp(e.target.value);
  };
  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const userAnswer = parseInt(userIp, 10);
    const correctAns = perform_Op(num1, num2, operation);

    if (!isNaN(userAnswer)) {
      setisCorrect(userAnswer === correctAns);
    } else {
      setisCorrect(null);
    }
  };
  //perform operation
  const perform_Op = (num1, num2, operation) => {
    switch (operation) {
      case "+":
        return num1 + num2;

      case "-":
        return num1 - num2;

      case "*":
        return num1 * num2;
      default:
    }
  };
  //reset for new function
  const handlenewGame = () => {
    setnum1(generateRanNum);
    setnum2(generateRanNum);
    setoperation(generateRanOp);
    setisCorrect(null);
    setuserIp("");
  };
  return (
    <>
      {/* create a form  */}
      <Container>
        <div className="form-div">
        <h1>Number Quiz Game</h1>
        <form>
          
          <div className="img-flex">
          <input  className = "img1" type="text" readOnly value={num1}></input>
          <span>{operation}</span>
          <input type="text" className="img2" readOnly value={num2}></input>
          </div>
          <span>=</span>
          <input
            type="text"
            value={userIp}
            onChange={handleInputChange}
            placeholder="Input Your Answer"
          />
      
        <button onClick={handleSubmit}>Submit Answer</button>
        <div className="ans-text"> 
        {isCorrect === true && <p>Congrats</p>}
        {isCorrect === false && <p>Oops</p>}
        </div>
        <button onClick={handlenewGame}>Play Again</button>
        </form>
        </div>
      </Container>
    </>
  );
};

export default GamePlay;

const Container = styled.div`

  .form-div{
  background-image: url('./public/images/math.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Ensure the background covers the entire viewport */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black; /* Set text color to contrast with the background */
  font-family: 'Arial', sans-serif; /* Adjust font family if needed */
}

  

h1{
   text-align:center;
   margin-top: 10px;
   font-family: Georgia, 'Times New Roman', Times, serif;
   font-weight: 400;
}
page{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 form{
    background-color: skyblue;
    height: 30em;
    width: 30em;
    border-radius: 1em;
    box-shadow: 0 0.188em 1.55em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    margin: 60px auto;
 }
 
 .img-flex{
   display: flex;
   justify-content:center;
   font-size:large;
 }
 .img2{
    border-radius:5px;
    height: 50px;
    width: 100px;
    display: flex;
    margin: 5px ;
    align-items: center;
    font-size:large;
    justify-items: center;
 }
 .img1{
   border-radius:5px;
    height: 50px;
    width: 100px;
    margin: 5px;
    display: flex;
 }
 span{
   margin-top: 20px;
 }
 input{
   border-radius:5px;
 }
 button{
   margin: 5px;
   background-color: darkblue;
   color: white;
   border-radius: 10px;
 }
 button:hover{ transform: scale(1.25);}
`
