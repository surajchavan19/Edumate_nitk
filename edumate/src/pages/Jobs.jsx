import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Job() {
    const isMobile = window.innerWidth <= 767;
    // const [ jobs, setLoan ] = useState([]);

    // useEffect(() => { 
    //     async function fetchData(){
    //         console.log("hihihihi")
    //         const response = await axios.get(`https://edumate.glitch.me/jobs`);
    //         setLoan(response.data.data.Module)
    //         console.log(response);
    //     }
    //     fetchData();
    // }, [jobs]);

    const jobs = [{"body":"Naukri.comhttps://www.naukri.com \\xe2\\x80\\xba Jobs in India \\xe2\\x80\\xba Student jobs","domain":"naukri.com","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":1,"title":"34251 Student Job Vacancies In India","url":"https://www.naukri.com/student-jobs-in-india"},{"body":"LinkedIn Indiahttps://in.linkedin.com \\xe2\\x80\\xba jobs \\xe2\\x80\\xba part-time-students-jobs","domain":"linkedin.com","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":2,"title":"1000+ Part Time Students jobs in India (38 new)","url":"https://in.linkedin.com/jobs/part-time-students-jobs"},{"body":"LinkedIn Indiahttps://in.linkedin.com \\xe2\\x80\\xba jobs \\xe2\\x80\\xba student-jobs","domain":"linkedin.com","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":3,"title":"5000+ Student jobs in India (284 new)","url":"https://in.linkedin.com/jobs/student-jobs"},{"body":"Indeedhttps://in.indeed.com \\xe2\\x80\\xba q-remote-india-student-jobs","domain":"indeed.com","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":4,"title":"332 Remote India Student Jobs and Vacancies","url":"https://in.indeed.com/q-remote-india-student-jobs.html"},{"body":"Indeedhttps://in.indeed.com \\xe2\\x80\\xba q-india-student-jobs","domain":"indeed.com","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":5,"title":"3748 India Student Jobs and Vacancies","url":"https://in.indeed.com/q-india-student-jobs.html"},{"body":"SimplyHiredhttps://www.simplyhired.co.in \\xe2\\x80\\xba search \\xe2\\x80\\xba l=india","domain":"simplyhired.co.in","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":6,"title":"20 Best college student part time jobs in India (Hiring Now!)","url":"https://www.simplyhired.co.in/search?q=college+student+part+time&l=india"},{"body":"Glassdoorhttps://www.glassdoor.co.in \\xe2\\x80\\xba Job \\xe2\\x80\\xba india-summer-stu...","domain":"glassdoor.co.in","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":7,"title":"95 Summer student Jobs in India, September 2023","url":"https://www.glassdoor.co.in/Job/india-summer-student-jobs-SRCH_IL.0,5_IN115_KO6,20.htm"},{"body":"SimplyHiredhttps://www.simplyhired.co.in \\xe2\\x80\\xba search \\xe2\\x80\\xba l=india","domain":"simplyhired.co.in","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":8,"title":"work from home for students jobs near India, India","url":"https://www.simplyhired.co.in/search?q=work+from+home+for+students&l=india"},{"body":"Glassdoorhttps://www.glassdoor.com \\xe2\\x80\\xba Explore \\xe2\\x80\\xba top-student-co...","domain":"glassdoor.com","keyword":"Jobs for student in India","number_query":10,"page_query":1,"position":9,"title":"Top Companies in India Hiring for Student Jobs","url":"https://www.glassdoor.com/Explore/top-student-companies-india_IO.4,11_IL.22,27_IN115.htm"}]

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
                <h3>Jobs</h3>
                {Array.isArray(jobs) && jobs.map((Job) => (
                   <Container className="d-flex justify-content-end bg-white p-2 rounded-4 gap-4 mt-3">
                   <Container className="d-flex-column m-0 align-content-center w-100">
                     <span className="" style={{fontSize: "16px", fontWeight: "700"}}>{Job.title}</span>
                     <Container className="d-flex justify-content-between text-secondary p-0 w-100 mt-3 mb-2">
                       <span>Domain: {Job.domain}</span>
                       {/* <span>Time: 15 mins</span> */}
                     </Container>
                   </Container>
                   <Container className="w-50 d-flex justify-content-center align-items-center">
                       <div>
                            <a href={Job.url}>
                                <Button className="rounded-pill p-2" style={{width: "100px"}}>Apply</Button>
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

export default Job
