import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import translateImage from "../assets/translate.png";
import logo from "../assets/logo.png";
function Navigation() {
  const isMobile = window.innerWidth <= 767;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="70"
            height="70"
            className="d-inline-block"
          />
        </Navbar.Brand>
        <Navbar.Brand
          href="#home"
          style={{ marginTop: "1%", marginLeft: "-8%", fontWeight: "bolder" }}
        >
          Edumate
        </Navbar.Brand>
        {isMobile && (
          <Nav style={{ float: "right" }}>
            <Image
              src={translateImage}
              style={{
                background: "white",
                width: "45px",
                marginLeft: "100px",
                paddingLeft: "1% ",
              }}
            />
          </Nav>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
