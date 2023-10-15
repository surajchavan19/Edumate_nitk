import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo.png";

const Navbar1 = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary pt-3 pb-3"
        >
          <Container fluid>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image src={logo} style={{ width: "80px" }}></Image>
              <Navbar.Brand
                className="pe-3"
                href="home"
                style={{ fontWeight: "600", fontSize: "25px", marginTop: "5%" }}
              >
                Edumate
              </Navbar.Brand>
            </div>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Edumate
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="home">Home</Nav.Link>
                  <Nav.Link href="test">Videos</Nav.Link>
                  {/* <NavDropdown
                    title="Videos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Science</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Mathematics
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">English</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Social Studies
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link href="quizzes">Quizzes</Nav.Link>
                  <Nav.Link href="story">Story of the day</Nav.Link>
                  <Nav.Link href="progress">My progress</Nav.Link>
                  <Nav.Link href="loans">Loan Portal</Nav.Link>
                  <Nav.Link href="jobs">Job Portal</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navbar1;
