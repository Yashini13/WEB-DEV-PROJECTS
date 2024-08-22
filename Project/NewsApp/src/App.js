import "./App.css"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import { BrowserRouter, Route } from "react-router-dom"
import About from "./Components/About"
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Route path="/about" element={<About/>}/>
     </BrowserRouter>
     <Hero/>
    </div>
  )
}
 
export default  App;