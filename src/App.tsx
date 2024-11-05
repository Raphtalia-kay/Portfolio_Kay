// import { KkImg } from "./assets/images";
// import { TextGenerateEffect } from "./components/ui/text-generate-effect";

import "./index.css";
import HeroSection from "./components/herosection";
import About from "./components/about";
import Education from "./components/journey";
import Skills from "./components/skills";


function App() {
  return (
    <section>
      <HeroSection />
      <About/>
      <Education/>
      <Skills/>
    </section>
  );
}

export default App;
