import Home from "./Pages/Home";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div>
      
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
    </div>
  )
}

export default App;
