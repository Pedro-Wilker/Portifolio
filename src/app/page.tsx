import NavbarComponent from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Banner />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}