import React, { useState } from "react";
import { ReactMic } from "react-mic";
import { initializeApp } from "firebase/app";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/esm/Image";
import redmic from "../assets/redmic.png";
import bluemic from "../assets/bluemic.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import "../css/analyze.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const firebaseConfig = {
  apiKey: "AIzaSyAHu7GtBXoq1BbDuETQC74zqKMQMoDZcx0",
  authDomain: "edumate-5e68f.firebaseapp.com",
  projectId: "edumate-5e68f",
  storageBucket: "edumate-5e68f.appspot.com",
  messagingSenderId: "678660937900",
  appId: "1:678660937900:web:9b2cf4d25fadbaedd62709",
  measurementId: "G-397SWS5SD0",
};
initializeApp(firebaseConfig);

function Analyze() {
  const isMobile = window.innerWidth <= 767;
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [value12, setValue12] = useState(false);
  const [loudness, setLoudness] = useState("");
  const [confidence, setConfidence] = useState("");
  const [quality, setQuality] = useState("");

  const handleStartRecording = () => {
    setIsRecording(true);
  };
  const data = {
    // labels: ["Total", ""],
    datasets: [
      {
        label: "Loudness",
        data: [Math.abs(loudness), 70 - Math.abs(loudness)],
        backgroundColor: ["#4D3EFF", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["#4D3EFF", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const data1 = {
    // labels: ["Total", ""],
    datasets: [
      {
        label: "Pronunciation",
        data: [quality, 5 - quality],
        backgroundColor: ["#4D3EFF", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["#4D3EFF", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const data2 = {
    // labels: ["Total", ""],
    datasets: [
      {
        label: "Confidence",
        data: [confidence, 5 - confidence],
        backgroundColor: ["#4D3EFF", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["#4D3EFF", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const handleStopRecording = (audioData) => {
    setIsRecording(false);
    setAudioBlob(audioData.blob);
  };

  const getData = async () => {
    const post1 = await axios.get("https://edumate.glitch.me/analyzeProgress");
    console.log("heloooo");
    setLoudness(post1.data.loudness);
    setConfidence(post1.data.confidence);
    setQuality(post1.data.quality_score);
    console.log(post1.data);
    alert(post1);
  };

  const handleUpload = async () => {
    if (audioBlob) {
      const storage = getStorage();
      const storageRef = ref(storage, `audio/${Date.now()}.webm`);
      await uploadBytes(storageRef, audioBlob);
      console.log("---", storageRef);

      // Get the URL of the uploaded audio
      const audioURL = await getDownloadURL(storageRef);
      console.log("Audio URL:", audioURL);
      setValue12(true);
      //   alert(
      //     "Your data is uploaded. Please click on the the analyze button to analyze your data"
      //   );
      const post = await axios
        .post("https://edumate.glitch.me/analyzeUrl", {
          urll: audioURL,
        })
        .then(function (response) {
          alert("Hi");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      // You can now use the audioURL or save it to a database
    }
  };

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
            <Container>
              <h2
                style={{
                  paddingTop: "7%",
                  paddingLeft: "7%",
                  marginBottom: "10%",
                }}
              >
                Paragraph-6
              </h2>
              <Row>
                <Col>
                  <ReactMic
                    record={isRecording}
                    onStop={handleStopRecording}
                    mimeType="audio/webm"
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  {!isRecording ? (
                    <div>
                      <Image
                        src={bluemic}
                        onClick={handleStartRecording}
                        width={50}
                      ></Image>
                    </div>
                  ) : (
                    <div>
                      <Image
                        src={redmic}
                        onClick={handleStopRecording}
                        width={50}
                      ></Image>
                    </div>
                  )}
                </Col>
              </Row>
            </Container>
            <Container
              style={{
                padding: "7% 7% 7% 7%",
                background: "white",
                margin: "10% 5% 10% 5%",
                width: "90%",
              }}
            >
              <h2>
                Once upon a time in a cozy little town, there lived a curious
                cat named Whiskers. Whiskers had a magical collar that allowed
                him to talk to other animals. One sunny day, Whiskers met a
                friendly squirrel named Nutty. Nutty had lost her acorns, and
                she was very upset. With his collar's help, Whiskers organized a
                search party with their animal friends. They scurried up trees
                and dug in the ground, finding all of Nutty's acorns. Nutty was
                overjoyed, and they all celebrated with a picnic. From that day
                on, Whiskers and Nutty became the best of pals, always ready for
                new adventures.
              </h2>
            </Container>

            {!value12 ? (
              <Container style={{ textAlign: "center" }}>
                <Button
                  onClick={handleUpload}
                  // disabled={!audioBlob}
                  style={{
                    padding: "5% 10% 5% 10%",
                    color: "white",
                    background: "blue",
                    borderRadius: "30px",
                    fontWeight: "800",
                    fontSize: "18px",
                  }}
                >
                  Done!
                </Button>
              </Container>
            ) : (
              <Container style={{ textAlign: "center" }}>
                <Button
                  onClick={getData}
                  // disabled={!audioBlob}
                  style={{
                    padding: "5% 10% 5% 10%",
                    color: "white",
                    background: "blue",
                    borderRadius: "30px",
                    fontWeight: "800",
                    fontSize: "18px",
                  }}
                >
                  Analyze!
                </Button>
              </Container>
            )}
            {loudness && confidence && quality ? (
              <Container style={{ padding: "15% 0% 15% 0%" }}>
                <Container>
                  <Row>
                    <Col>
                      <div
                        style={{
                          width: "170px",
                          height: "170px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          textAlign: "center",
                        }}
                      >
                        <h2>Loudness</h2>
                        <Doughnut data={data} />
                      </div>
                    </Col>
                    <Col>
                      <div
                        style={{
                          width: "170px",
                          height: "170px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          textAlign: "center",
                        }}
                      >
                        <h2>Prononciation</h2>
                        <Doughnut data={data1} />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div
                        style={{
                          width: "180px",
                          height: "180px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          textAlign: "center",
                          marginTop: "20%",
                        }}
                      >
                        <h2>Confidence</h2>
                        <Doughnut data={data2} />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Container>
            ) : (
              <div></div>
            )}
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

export default Analyze;
