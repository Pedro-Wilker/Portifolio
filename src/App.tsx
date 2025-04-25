import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
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
      <FadeInSection delay={200}>
        <Skills />
      </FadeInSection>
      <FadeInSection delay={400}>
        <Projects />
      </FadeInSection>
    </div>
  );
};

export default App;