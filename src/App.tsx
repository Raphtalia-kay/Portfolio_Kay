// import { KkImg } from "./assets/images";
// import { TextGenerateEffect } from "./components/ui/text-generate-effect";

import "./index.css";
import HeroSection from "./components/herosection";
import About from "./components/about";
import Education from "./components/education";


function App() {
  return (
    <section>
      <HeroSection />
      <About/>
      <Education/>
    </section>
  );
}

export default App;
