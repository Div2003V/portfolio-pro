import NeuralNetwork from "./sections/NeuralNetwork";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CursorGlow from "./components/CursorGlow";


function App() {
  return (
    <>
      <CursorGlow />
      <Hero />
      <Achievements />
      <Experience />
      <Projects />
      <NeuralNetwork />
    </>
  );
}

export default App;