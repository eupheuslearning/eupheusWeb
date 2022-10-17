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

import ReferenceDigital from "./Pages/Digital/Reference";
import Language from "./Pages/Digital/Language";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminCreateNews from "./Pages/Admin/AdminCreateNews";

import { useSelector } from "react-redux";

import Assessment from "./Pages/Digital/Assessments";
import Steam from "./Pages/Digital/Steam";
import SpecialInitiatives from "./Pages/Digital/SpecialInitiatives";
import Properties from "./Pages/Digital/Properties";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermAndCondition from "./Pages/TermAndCondition";
import Payment from "./Pages/Payment";
import SchoolsDetails from "./Pages/SchoolsDetails";
import AdminDashBoard from "./Pages/Admin/AdminDashBoard";
import Oslite from "./Pages/Oslite";

function App() {
  const Admin = useSelector((state) => state.auth.admin);
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
            <Route path="/solution/oslite" element={<Oslite />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/news" element={<News />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="/term_and_condition" element={<TermAndCondition />} />
            <Route path="/toefl_payment" element={<Payment />} />
            {/* <Route path="/toefl_payment" element={<SchoolsDetails />} />  */}
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
            <Route path="/digital/reference" element={<ReferenceDigital />} />
            <Route path="/digital/language" element={<Language />} />
            <Route path="/digital/assessments" element={<Assessment />} />
            <Route path="/digital/steam" element={<Steam />} />
            <Route path="/digital/Properties" element={<Properties />} />
            <Route
              path="/digital/SpecialInitiatives"
              element={<SpecialInitiatives />}
            />
            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/create/news"
              element={Admin ? <AdminCreateNews /> : <AdminLogin />}
            />
            <Route
              path="/admin/dashboard"
              element={Admin ? <AdminDashBoard /> : <AdminLogin />}
            />
          </Routes>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
