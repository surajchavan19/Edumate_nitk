import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import landing1 from "../assets/landing1.png";
import mic1 from "../assets/mic1.png";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import science from "../assets/science.png";
import maths from "../assets/maths.png";
import ss from "../assets/ss.png";
import english from "../assets/english.png";
import quiz from "../assets/quiz.png";
import story from "../assets/story.png";
import speaking from "../assets/speaking.png";

function Home() {
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
          </Container>
          <Container
            style={{
              textAlign: "center",
              background: "rgba(217,217,217,0.25)",
              padding: "4% 10% 4% 10%",
            }}
          >
            <h1 style={{ fontWeight: "500" }}>Start Learning Now</h1>
            <br />
            <Container>
              <Row>
                <Col>
                  <Container
                    style={{
                      background: "#84DCC6",
                      padding: " 15%  4% 10% 4%",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      className="d-block mx-auto img-fluid"
                      style={{ width: "55%", marginBottom: "5%" }}
                      src={science}
                      alt="mysvg"
                    ></Image>
                    <h3>Science</h3>
                  </Container>
                </Col>
                <Col>
                  <Container
                    style={{
                      background: "#E2AFFF",
                      padding: " 15%  4% 10% 4%",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      className="d-block mx-auto img-fluid"
                      style={{ width: "55%", marginBottom: "5%" }}
                      src={maths}
                      alt="mysvg"
                    ></Image>
                    <h3>Maths</h3>
                  </Container>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Container
                    style={{
                      background: "#FAD2E1",
                      padding: " 15%  4% 10% 4%",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      className="d-block mx-auto img-fluid"
                      style={{ width: "55%", marginBottom: "5%" }}
                      src={english}
                      alt="mysvg"
                    ></Image>
                    <h3>English</h3>
                  </Container>
                </Col>
                <Col>
                  <Container
                    style={{
                      background: "#C1D3FE",
                      padding: " 15% 4% 10% 4%",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      className="d-block mx-auto img-fluid"
                      style={{ width: "55%", marginBottom: "5%" }}
                      src={ss}
                      alt="mysvg"
                    ></Image>
                    <h4>S.S</h4>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Container>
          <Container
            style={{
              textAlign: "center",
              background: "rgba(217,217,217,0.25)",
              padding: "20% 10% 20% 10%",
            }}
          >
            <h1 style={{ fontWeight: "500" }}>Start Practicing</h1>
            <br />
            <Container>
              <Row>
                <Col>
                  <Container
                    style={{
                      background: "#D8E2DC",
                      padding: " 15%  4% 10% 4%",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      className="d-block mx-auto img-fluid"
                      style={{ width: "55%", marginBottom: "5%" }}
                      src={quiz}
                      alt="mysvg"
                    ></Image>
                    <h3>Quizzes</h3>
                  </Container>
                </Col>
                <Col>
                  <Container
                    style={{
                      background: "#D8E2DC",
                      padding: " 15%  4% 10% 4%",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      className="d-block mx-auto img-fluid"
                      style={{ width: "55%", marginBottom: "5%" }}
                      src={speaking}
                      alt="mysvg"
                    ></Image>
                    <h3>Speaking</h3>
                  </Container>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Container
                    style={{
                      background: "#D8E2DC",
                      padding: " 15%  4% 10% 4%",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      className="d-block mx-auto img-fluid"
                      style={{ width: "55%", marginBottom: "5%" }}
                      src={story}
                      alt="mysvg"
                    ></Image>
                    <h4>Stories</h4>
                  </Container>
                </Col>
                <Col>
                  <Container
                    style={{
                      background: "#D8E2DC",
                      padding: " 15% 4% 10% 4%",
                      borderRadius: "30px",
                    }}
                  >
                    <Image
                      className="d-block mx-auto img-fluid"
                      style={{ width: "55%", marginBottom: "5%" }}
                      src={ss}
                      alt="mysvg"
                    ></Image>
                    <h4>S.S</h4>
                  </Container>
                </Col>
              </Row>
            </Container>
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

export default Home;
