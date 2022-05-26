import Home from "./Pages/Home";
import Demo from "./Pages/Demo";
import Solutions from './Pages/Solutions'
import Events from "./Pages/Events";
import Media from "./Pages/Media";
import About from "./Pages/About"
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ParallaxProvider>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  )
}

export default App;
