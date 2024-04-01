import React, { useState } from "react"
import logo from './assets/IMG.jpg'
import {Modal, Typography ,TextField, Box, LinearProgress} from '@mui/material';
import axios from "axios";

function App() {

  const [open , setOpen]= useState(false);
  const [prompt , setPrompt]= useState("");
  const [response , setResponse]= useState("");
  const [loading,setLoading] = useState(false);

  const handleOpen = ()=>{
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setResponse("");
    setLoading(true);
    const res = await axios.post("http://localhost:3000/",{prompt});
    setResponse(res);
    setLoading(false);
    console.log(res);
  }
  return (
    <>
      <div className="app">
        <img className="img" src={logo} alt=""/>
        <button className="btn" onClick={handleOpen}>ASK ME ANYTHING!</button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="chatgpt-modal"
        >
          <Box className="container">
            <Typography id="modal-modal-title" variant="h6" component="h2">
             Drop Your Questions!
            </Typography>
          
            <form style={{display:"flex", flexDirection:"column", padding:"10px"}} onSubmit={(e)=>handleSubmit(e)}>
              <TextField value={prompt} onChange={(e)=> setPrompt(e.target.value)} 
                label="Enter your text"
                variant="outlined" // You can use 'filled' or 'standard' instead of 'outlined'
                fullWidth // This makes the text field take up the full width of its container
              />
            <button type="submit" className="btn">Submit Your Query</button>  
            </form>
            {loading && <LinearProgress sx={{margin:"20px"}}/>}
            {response && <GPTResponse response={response} />}
           
          </Box>
         </Modal>
      </div>
    </>
  )
}

export default App
