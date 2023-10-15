import React from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

function Instructions() {
  const isMobile = window.innerWidth <= 767;
  return (
    <div>
      {isMobile ? (
        <Container fluid style={{ margin: "0", padding: "0" }}>
          <Container
            fluid
            style={{
              paddingTop: "20%",
              paddingBottom: "10%",
              background: "rgba(217,217,217,0.25)",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Instructions</h1>
            <Container style={{ padding: "10% 10% 0% 10%" }}>
              <ul>
                <li>Please speak into your microphone clearly.</li>
                <br />
                <li>Make sure to have less background noise when speaking.</li>
                <br />
                <li>
                  Once you are done, press the ‘Done’ button located in the
                  bottom of the page.
                </li>
                <br />
                <li>
                  Once submitted, you will get your speech report within a few
                  minutes depending on your internet connection.
                </li>
              </ul>
            </Container>
            <Container className="d-flex justify-content-around align-items-center mt-5">
              <Button
                className="py-3"
                style={{
                  backgroundColor: "#4D3EFF",
                  borderRadius: "30px",
                  width: "130px",
                  marginBottom: "20%",
                }}
              >
                Begin
              </Button>
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

export default Instructions;
