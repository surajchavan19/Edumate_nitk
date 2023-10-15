import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "../assets/logo.png";

function Login() {
  const isMobile = window.innerWidth <= 767;
  return (
    <div>
      {isMobile ? (
        <Container style={ {
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#F5F5F5"
        }}>
          <Container style={{
                padding: '0',
                borderRadius: '10px',
              }} >
                <div className="d-flex justify-content-center align-items-center">
                  <img
                      alt=""
                      src={logo}
                      width="70"
                      height="70"
                      className="d-inline-block"
                  /> 
                  <span className="mr-4" href="#home"
                      style={{ fontSize: "30px", marginTop: "1%", fontWeight: "bolder" }}
                  >
                      Edumate
                  </span>
              </div>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control  className="p-3" type="email" placeholder="Username" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className="p-3" type="password" placeholder="Password" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }} />
              </Form.Group>
              <Container className="d-flex justify-content-around align-items-center">
                <Button className="" variant="outline-primary" type="submit" style={{
                  borderRadius: "30px",
                  width: "130px",
                  color: "rgb(77,62,255)",
                  border: "1px solid rgb(77,62,255)",
                  padding: "3% 4% 3% 4%",
                  fontWeight: "bold",
                }}>
                  Login
                </Button>
                <Button className="" href="/signup" style={{
                  marginRight: "3%",
                  borderRadius: "30px",
                  padding: "3% 4% 3% 4%",
                  width: "130px",
                  color: "white",
                  background: "rgb(77,62,255)",
                  border: "rgb(77,62,255)",
                  fontWeight: "bold",
                }}>
                  Register
                </Button>
              </Container>
            </Form>
          </Container>
        </Container>
      ) : (
        <div>
          <h1>Laptop</h1>
        </div>
      )}
    </div>
  );
}

export default Login;
