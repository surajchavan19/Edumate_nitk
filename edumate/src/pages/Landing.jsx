import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import landing1 from "../assets/landing1.png";
import mic1 from "../assets/mic1.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Landing() {
  const isMobile = window.innerWidth <= 767;
  return (
    <div>
      {isMobile ? (
        <Container fluid style={{ margin: "0", padding: "0" }}>
          <Container
            fluid
            style={{
              paddingTop: "3%",
              paddingBottom: "10%",
              background: "rgba(217,217,217,0.25)",
            }}
          >
            <Col sm={3} className="m-auto">
              <Image
                className="d-block mx-auto img-fluid"
                style={{ width: "80%", background: "rgba(217,217,217,0.09)" }}
                src={landing1}
                alt="mysvg"
              ></Image>
              <h1></h1>
            </Col>
            <Container
              style={{
                fontSize: "45px",
                fontWeight: "600",
                lineHeight: "1.15",
                textAlign: "center",
              }}
            >
              Learn anytime, <br />
              anywhere with <br />{" "}
              <span style={{ color: "blue" }}>Edumate</span>
            </Container>
            <Container
              style={{
                fontSize: "17px",
                textAlign: "center",
                padding: "4% 10% 4% 10%",
                color: "rgb(158, 157, 157)",
              }}
            >
              Edumate is here to help you reach your maximum potential through
              interactive learning
            </Container>
            <Container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <button
                style={{
                  marginRight: "3%",
                  borderRadius: "30px",
                  padding: "3% 4% 3% 4%",
                  width: "130px",
                  color: "white",
                  background: "rgb(77,62,255)",
                  border: "rgb(77,62,255)",
                  fontWeight: "bold",
                }}
              >
                Join Course
              </button>
              <button
                style={{
                  borderRadius: "30px",
                  width: "130px",
                  color: "rgb(77,62,255)",
                  border: "1px solid rgb(77,62,255)",
                  padding: "3% 4% 3% 4%",
                  fontWeight: "bold",
                }}
              >
                Login
              </button>
            </Container>
          </Container>
          <Container
            style={{
              padding: "10% 10% 10% 10%",
              textAlign: "left",
              background: "rgb(77,62,255)",
              color: "white",
            }}
          >
            <p style={{ fontSize: "40px", fontWeight: "700" }}> 75+</p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              {" "}
              quizzes per subject
            </p>
          </Container>
          <hr style={{ margin: "0", padding: "1%" }} />
          <Container
            style={{
              padding: "10% 10% 10% 10%",
              textAlign: "left",
              background: "rgb(77,62,255)",
              color: "white",
            }}
          >
            <p style={{ fontSize: "40px", fontWeight: "700" }}> 110+</p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              {" "}
              short speech tests to improve communication
            </p>
          </Container>
          <hr style={{ margin: "0", padding: "1%" }} />
          <Container
            style={{
              padding: "10% 10% 10% 10%",
              textAlign: "left",
              background: "rgb(77,62,255)",
              color: "white",
            }}
          >
            <p style={{ fontSize: "40px", fontWeight: "700" }}> 75+</p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              {" "}
              quizzes per subject
            </p>
          </Container>
          <hr style={{ margin: "0", padding: "1%" }} />
          <Container
            style={{
              padding: "10% 10% 10% 10%",
              textAlign: "left",
              background: "rgb(77,62,255)",
              color: "white",
            }}
          >
            <p style={{ fontSize: "40px", fontWeight: "700" }}> 110+</p>
            <p style={{ fontSize: "20px", fontWeight: "700" }}>
              {" "}
              short speech tests to improve communication
            </p>
          </Container>
          <Container
            style={{
              padding: "15% 10% 0% 10%",
              background: "rgba(217, 217, 217, 0.25)",
            }}
          >
            <h1>What do we offer?</h1>
            <br />
            <Container
              style={{
                padding: "10% 10% 10% 10%",
                textAlign: "left",
                background: "white",
                color: "black",
                borderRadius: "10px",
              }}
            >
              <Image
                className=" mx-auto img-fluid"
                style={{ width: "25%", background: "rgba(217,217,217,0.09)" }}
                src={mic1}
                alt="mysvg"
              ></Image>
              <br />
              <br />
              <h3>Speech Analysis</h3>
              <br />

              <p>
                Lorem Ipsum dolor si amet. lorem ipsum dolor si amet. lorem
                ipsum once again. lorem ipsum dobaara.{" "}
              </p>
            </Container>
            <br />

            <Container
              style={{
                padding: "10% 10% 10% 10%",
                textAlign: "left",
                background: "white",
                color: "black",
                borderRadius: "10px",
              }}
            >
              <Image
                className=" mx-auto img-fluid"
                style={{ width: "25%", background: "rgba(217,217,217,0.09)" }}
                src={mic1}
                alt="mysvg"
              ></Image>
              <br />
              <br />
              <h3>Speech Analysis</h3>
              <br />

              <p>
                Lorem Ipsum dolor si amet. lorem ipsum dolor si amet. lorem
                ipsum once again. lorem ipsum dobaara.{" "}
              </p>
            </Container>
            <br />
            <Container
              style={{
                padding: "10% 10% 10% 10%",
                textAlign: "left",
                background: "white",
                color: "black",
                borderRadius: "10px",
              }}
            >
              <Image
                className=" mx-auto img-fluid"
                style={{ width: "25%", background: "rgba(217,217,217,0.09)" }}
                src={mic1}
                alt="mysvg"
              ></Image>
              <br />
              <br />
              <h3>Speech Analysis</h3>
              <br />

              <p>
                Lorem Ipsum dolor si amet. lorem ipsum dolor si amet. lorem
                ipsum once again. lorem ipsum dobaara.
              </p>
            </Container>
            <Container
              style={{
                fontSize: "35px",
                fontWeight: "700",
                lineHeight: "1.15",
                textAlign: "center",
                padding: " 15vh 0vh 3vh 0vh",
              }}
            >
              Let us help in <br />
              your
              <span style={{ color: "blue" }}> job-hunting</span> journey
            </Container>
            <Container
              style={{
                fontSize: "17px",
                textAlign: "center",
                padding: "0% 2vw 5vh 2vw",
                color: "rgb(158, 157, 157)",
              }}
            >
              <p>
                Our job portal for 12th graduates can get you your first or next
                job in a jiffy !
              </p>
              <br />

              <button
                style={{
                  marginRight: "3%",
                  borderRadius: "30px",
                  width: "60%",
                  padding: "5% 1% 5% 1%",

                  color: "white",
                  background: "rgb(77,62,255)",
                  border: "rgb(77,62,255)",
                  fontWeight: "bold",
                }}
              >
                See job openings
              </button>
            </Container>
            <Container
              style={{
                fontSize: "35px",
                fontWeight: "700",
                lineHeight: "1.15",
                textAlign: "center",
                padding: " 10vh 0vh 3vh 0vh",
              }}
            >
              Volunteer as an <br />
              <span style={{ color: "blue" }}>Edumentor</span> and <br /> spread
              your knowledge journey
            </Container>
            <Container
              style={{
                fontSize: "17px",
                textAlign: "center",
                padding: "0% 2vw 0vh 2vw",
                color: "rgb(158, 157, 157)",
              }}
            >
              <p>
                Join us to transform and take the learning methodologies to new
                heights, together. Fill out the form below and our
                representative will get in touch with you !
              </p>
              <br />
            </Container>
          </Container>
          <Container
            style={{
              padding: "0% 3% 15% 3%",
              background: "rgba(217, 217, 217, 0.25)",
            }}
          >
            <Form style={{ padding: "0 3% 0 3%" }}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  style={{ height: "50px" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Qualification"
                  style={{ height: "50px" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Employment with school ( if any )"
                  style={{ height: "50px" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Years of experience"
                  style={{ height: "50px" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  style={{ height: "50px" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Whatsapp contact no."
                  style={{ height: "50px" }}
                />
              </Form.Group>
              <br />
              <Container fluid style={{ textAlign: "center" }}>
                <button
                  style={{
                    borderRadius: "30px",
                    width: "30%",
                    padding: "3% 1% 3% 1%",
                    type: "submit",
                    color: "white",
                    background: "rgb(77,62,255)",
                    border: "rgb(77,62,255)",
                    fontWeight: "bold",
                  }}
                >
                  Submit
                </button>
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

export default Landing;
