import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FadeInSection from './components/FadeInSection';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <FadeInSection>
        <Banner />
      </FadeInSection>
      <FadeInSection delay={100}>
        <AboutMe />
      </FadeInSection>
      <FadeInSection delay={200}>
        <Experience />
      </FadeInSection>
      <FadeInSection delay={300}>
        <Skills />
      </FadeInSection>
      <FadeInSection delay={400}>
        <Projects />
      </FadeInSection>
    </div>
  );
};

export default App;