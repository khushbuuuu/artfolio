import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import title from "../assets/images/titleog.svg";
import gittt from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";

import { HashLink } from "react-router-hash-link";

export const NavBarog = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  const updActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand className="maint" href="#home">
          <img src={title} alt="title" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#artgallery"
              className={
                activeLink === "artgallery"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => updActiveLink("artgallery")}
            >
              Art Gallery
            </Nav.Link>
            <Nav.Link
              href="#aboutmex"
              className={
                activeLink === "aboutmex" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updActiveLink("aboutmex")}
            >
              About Me
            </Nav.Link>
          </Nav>
          <span className="socioo">
            <div className="socialLinks">
              <a href="">
                <img src={gittt} alt="github" />
              </a>
              <a href="">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
            <button className="vvd">
              <a
                href="#connect"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Let’s Connect
              </a>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
