import React from "react";
import styled from "styled-components";

const RoleDice = ({currentDice, roleDice})=>{
    
    
    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`./images/dice_${currentDice}.png`} alt="img"/>;
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice;
const DiceContainer = styled.div`
flex-direction: column;
margin-top: 40px;
display: flex;
align-items: center;
.dice{
  cursor: pointer;
}
p{
    font-size: 24px;
}
`;