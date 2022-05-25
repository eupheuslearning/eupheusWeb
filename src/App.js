import Home from "./Pages/Home";
import Demo from "./Pages/Demo";
import Solutions from './Pages/Solutions'
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ParallaxProvider>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<Demo/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
        </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  )
}

export default App;
