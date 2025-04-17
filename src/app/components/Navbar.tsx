import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";

const NavbarComponent: React.FC = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => setActiveLink(value);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <Image src="/assets/img/logo.png" alt="Logo" width={50} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pedro-wilker/">
                <Image src="/assets/img/nav-icon1.svg" alt="" width={40} height={40} />
              </a>
              <a href="https://github.com/Pedro-Wilker">
                <Image src="/assets/img/teste.png" alt="" width={40} height={40} />
              </a>
              <a href="https://www.instagram.com/pewilk3r/">
                <Image src="/assets/img/nav-icon3.svg" alt="" width={40} height={40} />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;