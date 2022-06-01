import Home from "./Pages/Home";
import Demo from "./Pages/Demo";
import Solutions from './Pages/Solutions'
import Events from "./Pages/Events";
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Media from "./Pages/Media";

function App() {
  return (
    <div>
      <ParallaxProvider>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path="/demo" element={<Demo/>}/> */}
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/media" element={<Media/>}/>
        </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  )
}

export default App;
