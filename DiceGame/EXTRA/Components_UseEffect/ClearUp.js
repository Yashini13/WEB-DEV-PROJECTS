import React, { useState,useEffect } from "react";
import styled from 'styled-components'
import {BiPlusMedical} from "react-icons";
import {FaMinus} from "react-icons"

const ClearUp = () => {
    const [widthcount, setwidthcount] = useState(window.screen.width);
    useEffect (()=>{
        window.addEventListener('resize', currentScreenWidth);
        return () =>{
            window.addEventListener("resize" , currentScreenWidth)
        }
    });
    const currentScreenWidth = () => {
        setwidthcount(()=> window.innerWidth);
    }
    return (
        <>
        <Wrapper>
            <div className="container">
                <p1>The size of the screen is <span> {widthcount} </span></p1>
            </div>
        </Wrapper>
        </>
    );
};
export default ClearUp;
const Wrapper = styled.section`
justify-content: center;
align-items: center;
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: larger;
`
// const UseEffect= () => {
//     const [count, setCount] = useState(0);

//     const countUpdate=(val)=>{
//         if(val === "inc") return setCount(count + 1);
//         if(val === "dec") return setCount(count - 1);
//     }
//   return (
//     <Wrapper>
//     <div className="container">
//        <button onClick={()=> countUpdate("dec")}>-</button>
//        <h1>{count}</h1>
//        <button onClick={()=>countUpdate("inc")}>+</button>
//     </div>  
//     </Wrapper>
//   )
// }

// export default UseEffect;
// const Wrapper = styled.section`
// .container{
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//    align-items: center;
//    gap: 4.8rem;
// }

// `