import React from 'react'
import styled from 'styled-components';
const Total=({score})=> {
  return (
    <>
     <Container>
     <h1>{score}</h1>
     <div><p>Total Score</p></div>
     </Container>
    </>
  )
}
export default Total;

const Container = styled.div`
max-width: 200px;
text-align:center;
h1{
  font-size:70px;
  line-height: 100px;
}
p{
  font-size: 30px;
  font-weight: 500px;
}
`