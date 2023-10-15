import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

function QuizAttempted() {
    const isMobile = window.innerWidth <= 767;
    // const [ quizzes, setLoan ] = useState([]);

    // useEffect(() => { 
    //     async function fetchData(){
    //         console.log("hihihihi")
    //         const response = await axios.get(`https://edumate.glitch.me/quizzes`);
    //         setLoan(response.data.data.Module)
    //         console.log(response);
    //     }
    //     fetchData();
    // }, [quizzes]);

    const quizzes = [
        {
            "title": "Introduction to Physics",
            "url": "https://www.example.com/intro_to_physics.pdf"
        },
        {
            "title": "Calculus Basics",
            "url": "https://www.example.com/calculus_basics.pdf"
        },
        {
            "title": "Chemistry Fundamentals",
            "url": "https://www.example.com/chemistry_fundamentals.pdf"
        },
        {
            "title": "Biology Essentials",
            "url": "https://www.example.com/biology_essentials.pdf"
        },
        {
            "title": "Algebra for Beginners",
            "url": "https://www.example.com/algebra_beginners.pdf"
        },
        {
            "title": "Statistics Made Simple",
            "url": "https://www.example.com/statistics_simple.pdf"
        },
        {
            "title": "Introduction to Computer Science",
            "url": "https://www.example.com/intro_to_computer_science.pdf"
        },
        {
            "title": "Geometry Mastery",
            "url": "https://www.example.com/geometry_mastery.pdf"
        },
        {
            "title": "Astronomy Explained",
            "url": "https://www.example.com/astronomy_explained.pdf"
        },
        {
            "title": "Environmental Science Guide",
            "url": "https://www.example.com/environmental_science_guide.pdf"
        }
    ]
    

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
              <div className="">
                <h3>Quizzes taken</h3>
                {Array.isArray(quizzes) && quizzes.map((quiz) => (
                   <Container className="d-flex justify-content-end bg-white p-3 rounded-4 gap-4 mt-3">
                        <Container className="d-flex-column m-0 align-content-center" style={{width: "800px"}}>
                            <span className="" style={{fontSize: "18px", fontWeight: "700"}}>{quiz.title}</span>
                        </Container>
                        <Container className="w-50 d-flex justify-content-center align-items-center">
                            <div>
                                    <a href={quiz.url} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>
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
    )
}

export default QuizAttempted
