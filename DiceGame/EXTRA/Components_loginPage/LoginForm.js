import React, { useState } from "react";
import styled from 'styled-components'

   const LoginForm = () =>{
      const [formData , setData] =useState({
         userName : "",
         password : ""
      })
      const handleinput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setData ((prev)=>
        {
          return {...prev,[name]: value}  
         // ... -> spread operator used to maintain the previous state
         // so tha when you change password the username does not change
        })
    };
   
    const[showpopup,setpopup] = useState("hide")
    const popup=()=>{
       setpopup("login-popup")
        setTimeout(()=> setpopup("hide"),3000)
    }
    return(
        <Container>
        <div className="form">
           <p>Login Page</p>
            {/* <div className="input"> */}
                <input type="username" name="userName" id="userName" placeholder="Username" value={formData.userName} onChange={handleinput}></input>
                <br/>
            <input type="password" id="password" name="password" placeholder="password" value={formData.password} onChange={handleinput}></input>
            {/* </div> */}
            <div className="button">
                <button className="bb" onClick={popup}>Login</button>
            </div>
            <div className="img-flex">
                <img className="img1" src="./images/META.png" alt="Meta"></img>
        
                <img className="img2" src="./images/GOOG.png" alt="Google"></img>
            </div>
            <div className={showpopup}>
                <h3>Login Failed</h3>
                <p>Recheck your Username or Password</p>
            </div>
        </div>
        </Container>
    )
}

export default LoginForm; 

const Container = styled.div`
 page{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .img-flex{
    
    display: flex;
   justify-content:center;
    
    
 }
 .img2{
    height: 30px;
    width: 25px;
    margin: 15px;
    display: flex;
 }
 .img1{
    height: 30px;
    width: 25px;
    margin: 15px;
    display: flex;
 }

 p{
    color: black;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: larger;
 }
 .form{
    background-color: wheat;
    height: 30em;
    width: 30em;
    border-radius: 1em;
    box-shadow: 0 0.188em 1.55em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:10px;
    margin: 65px auto;
 }
 input{
   margin: 2px;
   border-radius: 25px;
 }
 .bb{
    margin: 15px;
    width: 100px;
    border-radius: 1em;
    border: 2px;
    box-shadow: none;
    border-color: black;
    background-color: brown;
    color: white;
 }
 .bb:hover{ transform: scale(1.25);}
 .username{
    position: relative;
    bottom: -2em;
 }
 .hide{
    position: absolute;
    transform: scale(0);
 }
 .login-popup{
    /* position: absolute; */
    height: 30em;
    width: 30em;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius:0.25rem ;
    background-color: brown;
    color: white;
    bottom:0;
    transition: 1.5s;
 }
`