import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

function Quiz() {
  const isMobile = window.innerWidth <= 767;

  const { name } = useParams();
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://edumate.glitch.me/modules/${name}`
      );
      setQuestions(response.data.Q);
      console.log(response.data.Q);
    }
    fetchData();
  }, []);

  //timer
  const initialTime = 15 * 60; // 15 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  // Function to format seconds into 'mm:ss' format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes.toString().padStart(2, "0")} : ${secondsRemaining
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;

    if (timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  // completed test
  const [completed, setCompleted] = useState(false);
  const toggleComponent = () => {
    setCompleted(!completed); // Toggles between true and false
  };

  return (
    <div>
      {isMobile ? (
        <Container
          className="p-4 d-flex-column"
          style={{
            minHeight: "80vh",
            display: "flex",
            // justifyContent: 'center',
            // alignItems: 'center',
            backgroundColor: "#F5F5F5",
            flexDirection: "column",
          }}
        >
          <Container className="d-flex justify-content-between m-0 p-0">
            <span className="display-6">Fiber To Fiber</span>
            <span className="display-6 text-primary">
              {formatTime(timeRemaining)}
            </span>
          </Container>
          {/* <span className='mt-6' style={{marginTop: "30px"}}>Q1/Q17</span> */}

          {!completed ? (
            <>
              {Array.isArray(questions) &&
                questions.map((question, outerIndex) => (
                  <Container
                    className="p-4 d-flex-column gap-2 bg-white rounded mt-3"
                    key={outerIndex}
                  >
                    <h4>{question.q}?</h4>
                    {question.options.map((option, innerIndex) => {
                      // Function to generate a unique id using both indices
                      const generateId = () =>
                        `option_${outerIndex}_${innerIndex}`;

                      return (
                        <div key={innerIndex}>
                          <input
                            type="radio"
                            className="btn-check"
                            id={generateId()}
                            name={`question_${outerIndex}`} // Unique name for each question
                            autoComplete="off"
                          />
                          <label
                            className="btn btn-outline-secondary w-100 mt-4 p-2"
                            htmlFor={generateId()}
                          >
                            {option}
                          </label>
                        </div>
                      );
                    })}
                  </Container>
                ))}
              <div className="d-flex w-100 justify-content-center">
                <Button className="mt-4 w-50" onClick={toggleComponent}>
                  Submit
                </Button>
              </div>
            </>
          ) : (
            <div className="p-4">
              <h1>Great job on completing the test on time 🥳</h1>
              <h3 className="text-secondary mt-4">Good going topper</h3>
              <Button className="rounded p-2">See full test report</Button>
            </div>
          )}
        </Container>
      ) : (
        <div>
          <h1>Laptop</h1>
        </div>
      )}
    </div>
  );
}

export default Quiz;
