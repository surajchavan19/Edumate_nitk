import React from "react";
import Container from "react-bootstrap/esm/Container";
import first from "../assets/1.png";
import second from "../assets/2.png";
import third from "../assets/3.png";
import fourth from "../assets/4.png";
import fifth from "../assets/5.png";
import six from "../assets/6.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Leader() {
  const isMobile = window.innerWidth <= 767;
  return (
    <div>
      {isMobile ? (
        <Container style={{ padding: "5% 0% 5% 0%" }}>
          <h1 style={{ margin: " 2% 0% 5% 7%" }}>Leaderboards</h1>
          <Container>
            <div class="container">
              <div class="flex-container" style={{ padding: "0" }}>
                <div class="flex-item">
                  <Container style={{ padding: "0" }}>
                    <Row style={{ padding: "3%" }}>
                      <Col xs={2}>
                        <img
                          src={first}
                          alt=""
                          style={{ width: "30px", height: "auto" }}
                        />
                      </Col>
                      <Col xs={6}>Sachin Jangid</Col>
                      <Col xs={4}>30 mins</Col>
                    </Row>
                  </Container>
                </div>
                <div class="flex-item">
                  <Container style={{ padding: "0" }}>
                    <Row style={{ padding: "3%" }}>
                      <Col xs={2}>
                        <img
                          src={second}
                          alt=""
                          style={{ width: "30px", height: "auto" }}
                        />
                      </Col>
                      <Col xs={6}>Om Avhad</Col>
                      <Col xs={4}>40 mins</Col>
                    </Row>
                  </Container>
                </div>
                <div class="flex-item">
                  <Container style={{ padding: "0" }}>
                    <Row style={{ padding: "3%" }}>
                      <Col xs={2}>
                        <img
                          src={third}
                          alt=""
                          style={{ width: "30px", height: "auto" }}
                        />
                      </Col>
                      <Col xs={6}>Rachit Arora</Col>
                      <Col xs={4}>45 mins</Col>
                    </Row>
                  </Container>
                </div>
                <div class="flex-item">
                  <Container style={{ padding: "0" }}>
                    <Row style={{ padding: "3%" }}>
                      <Col xs={2}>
                        <img
                          src={fourth}
                          alt=""
                          style={{ width: "30px", height: "auto" }}
                        />
                      </Col>
                      <Col xs={6}>Jay Shah</Col>
                      <Col xs={4}>50 mins</Col>
                    </Row>
                  </Container>
                </div>
                <div class="flex-item">
                  <Container style={{ padding: "0" }}>
                    <Row style={{ padding: "3%" }}>
                      <Col xs={2}>
                        <img
                          src={fifth}
                          alt=""
                          style={{ width: "30px", height: "auto" }}
                        />
                      </Col>
                      <Col xs={6}>Manoj Tiwari</Col>
                      <Col xs={4}>1 hour</Col>
                    </Row>
                  </Container>
                </div>
                <div class="flex-item">
                  <Container style={{ padding: "0" }}>
                    <Row style={{ padding: "3%" }}>
                      <Col xs={2}>
                        <img
                          src={six}
                          alt=""
                          style={{ width: "30px", height: "auto" }}
                        />
                      </Col>
                      <Col xs={6}>Omkar Bhosale</Col>
                      <Col xs={4}> 1 hour</Col>
                    </Row>
                  </Container>
                </div>
              </div>
              {/* <div class="flex-container">
                <div class="flex-item">1</div>
                <div class="flex-item">2</div>
                <div class="flex-item">2</div>
                <div class="flex-item">2</div>
              </div> */}
            </div>
          </Container>
        </Container>
      ) : (
        <Container>
          <h1>Laptop</h1>
        </Container>
      )}
    </div>
  );
}

export default Leader;
