import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function QuizCatalog() {
  const isMobile = window.innerWidth <= 767;
  const [ subject, setSubject ] = useState(null);
  const [ modules, setModules ] = useState([]);

  const handleModulesChange = (event) => {
    const newValue = event.target.value;
    setSubject(newValue);
  };

  useEffect(() => { 
    async function fetchData(){
          const response = await axios.get(`https://edumate.glitch.me/quiz/${subject}`);
          setModules(response.data.data.Module)
          console.log(response.data.data.Module);
      }
      fetchData();
  }, [subject]);

  return (
    <div>
      {isMobile ? (
        <Container className="p-4" style={ {
          minHeight: '80vh',
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: "#F5F5F5",
          flexDirection: 'column',
        }}>
            <Form>
                <Form.Group className="mb-3" controlId="formState">
                  <Form.Label style={{
                    color: "#002",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    textAlign: "left !important",
                  }}>Quiz type</Form.Label>
                    <Form.Select aria-label="Default select example" className="p-3" as="select" placeholder="State" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)', width: "200px"}}>
                        <option value="2">Choose Type</option>
                        <option value="1">Choose Type</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formState">
                    <Form.Label style={{
                    color: "#002",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}>Subject</Form.Label>
                    <Form.Select className="p-3" as="select" placeholder="Science" style={{ borderRadius: '10px', border: '0.5px solid rgba(158, 157, 157, 0.20)', background: 'rgba(217, 217, 217, 0.30)',  width: "200px"}}
                    value={setModules}
                    onChange={handleModulesChange}>
                        <option>Choose Subject</option>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <div className="">
              <h3>All Quizes</h3>
              {Array.isArray(modules) && modules.map((module) => (
                 <Container className="d-flex-column bg-white p-2 rounded-2 gap-4 mt-3">
                  <Container className="d-flex justify-content-between mb-3 mt-2 align-content-center">
                    <span className="" style={{fontSize: "18px", fontWeight: "700"}}>{module.name}</span>
                    <span className="bg-info rounded-pill p-2">English</span>
                  </Container>
                  <Container className="d-flex justify-content-between mb-2">
                    <Container className="d-flex justify-content-between text-secondary p-0 w-75 m-0">
                      <span>Type: MCQ</span>
                      <span>Time: 15 mins</span>
                    </Container>
                    <div>
                      <a href={`/quiz/${module.name.replace(/\s/g, '')}`}>
                        <Button className="rounded-pill">Start</Button>
                      </a>
                    </div>
                  </Container>
                </Container>
              ))}
            </div>
        </Container>
      ) : (
        <div>
          <h1>Laptop</h1>
        </div>
      )}
    </div>
  );
}

export default QuizCatalog;
