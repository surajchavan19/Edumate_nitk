import React from "react";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "../assets/logo.png";

function Register() {
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
              <Form.Group className="mb-3" controlId="formFullName">
                <Form.Control className="p-3" type="text" placeholder="Full Name" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }} />
              </Form.Group>

              <Container className="d-flex justify-content-between">
                <Form.Group className="mb-3" controlId="formState">
                  <Form.Control className="p-3" as="select" placeholder="State" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }}>
                    <option>Select State</option>
                    {/* Add your state options here */}
                  </Form.Control>
                </Form.Group>
          
                <Form.Group className="mb-3 w-50" controlId="formClass">
                  <Form.Control className="p-3" as="select" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }}>
                    <option>Choose Class</option>
                    {/* Add your class options here */}
                  </Form.Control>
                </Form.Group>
              </Container>
        
              <Form.Group className="mb-3" controlId="formBoard">
                <Form.Control className="p-3" as="select" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }}>
                  <option>School Board</option>
                  {/* Add your board options here */}
                </Form.Control>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formUserEmail">
                <Form.Control className="p-3" type="email" placeholder="Email" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }} />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control className="p-3" type="password" placeholder="Password" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }} />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Control className="p-3" type="password" placeholder="Confirm Password" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)' }} />
              </Form.Group>
        
              <Container className="d-flex justify-content-around align-items-center mt-5">
                <Button className="py-3"  style={{ backgroundColor: "#4D3EFF", borderRadius: "30px", width: "130px" }}>
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

export default Register;
