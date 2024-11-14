// import { KkImg } from "./assets/images";
// import { TextGenerateEffect } from "./components/ui/text-generate-effect";

import "./index.css";
import HeroSection from "./components/herosection";
import About from "./components/about";
import Education from "./components/journey";
import Skills from "./components/skills";

import Projects from "./components/projects";
import ContactUs from "./components/contactus";


function App() {
  return (
    <section>
      <HeroSection />
      <About/>
      <Education/>
      <Skills/>
      {/* <Service/> */}
      <Projects/>
      <ContactUs/>
    </section>
  );
}

export default App;
