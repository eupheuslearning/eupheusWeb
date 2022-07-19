import Home from "./Pages/Home";
// import Demo from "./Pages/Demo";
import Solutions from "./Pages/Solutions";
import Events from "./Pages/Events";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Media from "./Pages/Media";
import IFSO from "./Pages/IFSO";
import Code2Win from "./Pages/Code2Win";
import Curriculum from "./Pages/Curriculum";
import Digital from "./Pages/Digital";
import Awards from "./Pages/Awards";
import PrePrimary from "./Pages/Curriculer/PrePrimary";
import Cbse from "./Pages/Curriculer/CBSE";
import Icse from "./Pages/Curriculer/ICSE";
import SkillDev from "./Pages/Curriculer/SkillDev";
import Reference from "./Pages/Curriculer/Reference";
import StateBoard from "./Pages/Curriculer/StateBoard";
import KinaestheticLearning from "./Pages/Digital/KinaestheticLearning";
import News from "./Pages/News";
import Coding from "./Pages/Digital/Coding";
import Reading from "./Pages/Digital/Reading";
import LifeSkill from "./Pages/Digital/LifeSkill";
import Entrepreneurship from "./Pages/Digital/Entrepreneurship";
import Assessment from "./Pages/Digital/Assessments";
import Steam from "./Pages/Digital/Steam";
import SpecialInitiatives from "./Pages/Digital/SpecialInitiatives";
import Properties from "./Pages/Digital/Properties";

function App() {
  return (
    <div>
      <ParallaxProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/demo" element={<Demo/>}/> */}
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/ifso" element={<IFSO />} />
            <Route path="/code2win" element={<Code2Win />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/digital" element={<Digital />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/news" element={<News />} />
            {/* curriculer */}
            <Route path="/curriculer/pre_primary" element={<PrePrimary />} />
            <Route path="/curriculer/cbse" element={<Cbse />} />
            <Route path="/curriculer/icse" element={<Icse />} />
            <Route path="/curriculer/skill_dev" element={<SkillDev />} />
            <Route path="/curriculer/reference" element={<Reference />} />
            <Route
              path="/curriculer/state_board_sol"
              element={<StateBoard />}
            />
            {/* digital */}
            <Route
              path="/digital/kinaesthetic_learning"
              element={<KinaestheticLearning />}
            />
            <Route path="/digital/coding" element={<Coding />} />
            <Route path="/digital/reading" element={<Reading />} />
            <Route path="/digital/life_skill" element={<LifeSkill />} />
            <Route
              path="/digital/entrepreneurship"
              element={<Entrepreneurship />}
            />
            <Route path="/digital/assessments" element={<Assessment />} />
            <Route path="/digital/steam" element={<Steam />} />
            <Route path="/digital/Properties" element={<Properties />} />
            <Route
              path="/digital/SpecialInitiatives"
              element={<SpecialInitiatives />}
            />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
