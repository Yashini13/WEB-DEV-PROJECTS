import React, {useReducer} from 'react'
import styled from 'styled-components';
import reducer from './reducer';

const initialVal = 0;
const Use_Reducer = () => {
    
    const [count, dispatch] = useReducer(reducer, initialVal)

      return (
        <Wrapper>
        <div className="container">
           <button onClick={()=> dispatch({type:"DEC"})}>-</button>
           <h1>{count}</h1>
           <button onClick={()=>dispatch({type:"INC"})}>+</button>
        </div>  
        </Wrapper>
      )
    }
    
    export default Use_Reducer;

    const Wrapper = styled.section`
    .container{
        height: 100vh;
        display: flex;
        justify-content: center;
       align-items: center;
       gap: 4.8rem;
    }
    
    `