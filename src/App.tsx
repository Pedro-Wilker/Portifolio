import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import Services from './components/Services'; // Atualizado
import { RecentProjects } from './components/RecentProjects';
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
        <Services /> {/* Atualizado */}
      </FadeInSection>
      <FadeInSection delay={400}>
        <RecentProjects />
      </FadeInSection>
    </div>
  );
};

export default App;